# Auth Access Policy and QA Checklist v1

## Purpose

This document defines the shared authentication, logout, access-state, and QA expectations for AdMate products.

The policy is intentionally product-repository neutral. Product repositories should consume the policy as implementation guidance and QA criteria, but this document does not prescribe SQL, code changes, secrets, or concrete environment values.

## Auth Ownership Principle

Core/Sentinel is the authentication baseline for AdMate.

Product repositories are product-specific session consumers. They should not become independent sources of identity truth. A product may maintain its own httpOnly product session for runtime UX and authorization checks, but that session is derived from the Core/Sentinel authentication baseline and must be treated as a product-local consumer state.

Policy summary:

- Core/Sentinel owns the primary authenticated user baseline.
- Products consume authenticated identity through a controlled one-time product handoff.
- Products maintain their own httpOnly sessions only after successful handoff.
- Product sessions should not expose internal credential, cookie, token, or handoff mechanics to end users.
- Product access decisions must distinguish authentication state from product entitlement and role state.

## Unified Login Policy

Unified login is composed of three parts:

1. Core authentication
2. Product-specific one-time handoff
3. Product-specific httpOnly session

Expected login flow:

- The user starts from Core/Sentinel or is redirected there when authentication is required.
- Core/Sentinel authenticates the user and establishes the primary authenticated baseline.
- When the user enters a product, Core/Sentinel initiates a product-specific one-time handoff.
- The product validates the handoff through the agreed internal contract.
- On success, the product creates its own httpOnly product session.
- After the product session is established, the product treats the user as locally signed in for that product.

Product expectations:

- Products should not ask users to sign in again when a valid Core/Sentinel authentication baseline and valid product handoff are available.
- Products should reject reused, stale, malformed, or otherwise invalid handoff attempts.
- Products should create sessions using httpOnly storage and should avoid exposing sensitive authentication details to browser-accessible state.
- Products should preserve safe navigation intent only when the target is allowed and local to the expected AdMate surface.

## Logout Policy

### User-Facing Logout

The normal user-facing UX is `AdMate 전체 로그아웃`.

When the user chooses logout from ordinary product UI, the experience should communicate that the user is signing out of AdMate as a whole, not only the current product.

Expected global logout behavior:

- The product starts the global logout path.
- The global logout path clears the Core/Sentinel authentication baseline.
- Product-local sessions are cleared as part of the logout chain.
- After completion, the user lands on a safe signed-out destination.
- The user sees a completed signed-out state without internal implementation terms.

### Product Local Logout Chain

Product logout endpoints must support the internal chain contract where `scope=local` clears only the product-local session.

`scope=local` is not the ordinary user-facing logout UX. It is an internal chain behavior used when the global logout coordinator needs each product to remove its own local session without restarting the full global logout flow.

Expected local logout behavior:

- When called with `scope=local`, the product deletes only the product-local session.
- The product must not clear or mutate the Core/Sentinel baseline directly in this local-only mode.
- The product should return or continue to the agreed chain destination.
- The local-only behavior should be idempotent: calling it when the product session is already absent should still complete cleanly.

## Session and Access State Matrix

| State | Meaning | Product behavior | User-facing copy principle |
| --- | --- | --- | --- |
| `missing_session` | No valid product-local session is present. | Redirect to Core/Sentinel login or start the approved sign-in path. Preserve only safe next destinations. | Ask the user to sign in. Do not mention cookies, sessions, handoff, or tokens. |
| `session_expired` | A previously valid product-local session is no longer active. | Clear local state and redirect to the approved sign-in path. | Explain that the user needs to sign in again. Avoid technical expiry details. |
| `invalid_session` | Product-local session state is malformed, untrusted, revoked, or otherwise unusable. | Clear local session state and restart the approved sign-in path. Log only non-sensitive diagnostics. | Present a generic sign-in recovery message. Do not expose validation details. |
| `access_denied` | The user is authenticated but lacks access to the requested product, page, or action. | Block the action and show the access-denied surface. Do not retry login loops. | Explain that the user does not have access. Point to the expected support/admin route if applicable. |
| `entitlement_disabled` | The product entitlement, subscription, grant, or organization-level enablement is disabled. | Keep the user authenticated, block product usage, and show an entitlement-disabled surface. | Explain that the product is not currently enabled for the account or workspace. |
| `role_pending` | The user has an account or grant but the role/approval state is not yet active. | Keep the user authenticated, block restricted product areas, and show a pending state. | Explain that access is pending approval or setup. |
| `logout_complete` | Global or local logout chain completed successfully for the requested scope. | Clear relevant local UI state and route to a safe signed-out or continuation destination. | Confirm sign-out completion in user language. Do not describe session deletion mechanics. |

## UI Copy Policy

User-facing screen copy must not expose internal authentication terms.

Do not show these implementation terms in ordinary user-facing copy:

- token
- cookie
- session
- handoff
- internal chain
- scope

Preferred user-facing language:

- "로그인이 필요합니다."
- "다시 로그인해 주세요."
- "이 화면에 접근할 수 없습니다."
- "AdMate에서 로그아웃되었습니다."
- "접근 권한 설정이 완료될 때까지 기다려 주세요."

Internal terms may appear in engineering documentation, QA notes, logs, and developer-only diagnostics when necessary, but they should not appear in product screens intended for end users.

## QA Checklist

### Login

- Verify unauthenticated users are routed to the approved Core/Sentinel sign-in path.
- Verify successful Core/Sentinel authentication can continue into the requested product.
- Verify product UI does not ask for duplicate sign-in after a valid handoff and product session are established.
- Verify failed login recovery uses user-safe copy and avoids internal terms.

### Product Handoff

- Verify the product accepts a valid one-time handoff and creates a product-local httpOnly session.
- Verify the same handoff cannot be reused.
- Verify stale, malformed, missing, or invalid handoff attempts fail safely.
- Verify no sensitive handoff details are visible in page copy or browser-accessible UI state.

### Product Switch

- Verify switching from one product to another uses the Core/Sentinel baseline and product-specific handoff.
- Verify each product establishes and consumes only its own product-local session.
- Verify switching products does not leak access, role, or entitlement state from one product to another.
- Verify users without entitlement to the destination product see the correct access or entitlement state.

### Global Logout

- Verify ordinary user-facing logout is presented as `AdMate 전체 로그아웃`.
- Verify global logout clears the Core/Sentinel baseline and relevant product-local sessions.
- Verify users cannot continue using a product after global logout by refreshing or navigating back.
- Verify logout completion lands on a safe signed-out destination.

### Local Logout Chain

- Verify product logout with `scope=local` clears only the product-local session.
- Verify `scope=local` does not directly clear the Core/Sentinel baseline.
- Verify repeated local logout calls complete cleanly when the local session is already absent.
- Verify the local logout chain continues to the agreed next destination without exposing internal copy.

### No-Session

- Verify direct product entry without a product-local session enters the `missing_session` path.
- Verify safe next handling preserves only allowed destinations.
- Verify unsafe, external, or malformed next destinations are ignored or replaced with the default safe destination.
- Verify screen copy asks the user to sign in without mentioning sessions or cookies.

### Access Denied

- Verify authenticated users without page or action permission receive `access_denied`.
- Verify access-denied states do not trigger login loops.
- Verify restricted data is not rendered before or behind the access-denied surface.
- Verify user-facing copy is clear and non-technical.

### Revoked Grant

- Verify revoked product grants, disabled entitlements, or removed organization access prevent product usage.
- Verify active product views recover to `access_denied` or `entitlement_disabled` after revocation is detected.
- Verify refresh and deep-link entry both enforce the revoked state.
- Verify no sensitive product data remains visible after access is revoked.

### Safe Next

- Verify post-login and post-logout continuation targets are local, allowed, and expected.
- Verify external URLs are not accepted as next destinations.
- Verify encoded, nested, protocol-relative, or malformed destinations cannot bypass safe-next rules.
- Verify fallback routing is deterministic when next is absent or rejected.

### Sensitive Data Non-Exposure

- Verify user-facing pages do not display tokens, cookies, handoff identifiers, internal scope values, or raw session diagnostics.
- Verify error messages avoid internal validation reasons that could help an attacker.
- Verify logs, analytics, and QA screenshots do not include secrets or raw credential material.
- Verify browser-accessible state does not contain sensitive authentication artifacts.

### Responsive Checks

- Verify login-required, access-denied, entitlement-disabled, role-pending, and logout-complete screens render correctly on mobile, tablet, and desktop widths.
- Verify buttons, links, and support/admin actions remain visible and usable at small widths.
- Verify copy wraps cleanly without overlapping controls.
- Verify responsive layouts preserve the same policy behavior across breakpoints.

## Acceptance Criteria

- Core/Sentinel is documented as the authentication baseline.
- Product repositories are documented as product-specific session consumers.
- Unified login is documented as Core authentication plus product-specific one-time handoff plus product-specific httpOnly session.
- User-facing logout is documented as `AdMate 전체 로그아웃`.
- Product `scope=local` logout is documented as an internal local-session-only chain contract.
- The required session and access states are represented in the matrix.
- QA coverage includes login, product handoff, product switch, global logout, local logout chain, no-session, access denied, revoked grant, safe next, sensitive data non-exposure, and responsive checks.
- User-facing copy avoids internal terms such as token, cookie, session, and handoff.
