# Deterministic vs Non-Deterministic Work Rules v1

작성일: 2026-05-03  
문서 상태: 초안 v1  
작성 목적: AdMate의 Codex/Agent 작업에서 어떤 것은 script/test/check로 고정하고, 어떤 것은 Agent 판단과 skill/workflow로 맡길지 구분한다.

---

## 1. 핵심 원칙

AdMate Agent 작업에는 deterministic와 non-deterministic가 모두 필요하다.

```text
Deterministic
= 동일 입력이면 동일 결과가 나와야 하는 작업
= script, test, check, schema validation으로 고정한다.

Non-deterministic
= 판단, 해석, 기획, 리스크 평가, 디자인 감각이 필요한 작업
= Agent/LLM이 skill과 문서를 바탕으로 수행한다.
```

운영 원칙:

```text
If a check can be expressed as a deterministic rule, prefer a script/test/check over prompt-only review.
Use Agent judgment for ambiguous design, product, risk, and prioritization decisions.
```

---

## 2. Deterministic로 고정해야 하는 것

다음은 프롬프트가 아니라 script/test/check로 만든다.

- 필수 파일 존재 여부
- 문서 index 링크 유효성
- skill frontmatter 유효성
- enum/range/schema 검증
- secret 패턴 검사
- API guard 검사
- public API redaction 검사
- build/lint/typecheck
- DB migration 파일 존재와 rollback 쌍
- Command Center response contract
- progress 값 0~100 범위
- status 값 허용 enum 여부
- capture output dimension/DPR/metadata
- legacy surface mapping
- RAG 답변 source 필수 여부
- benchmark metadata 필수 여부

---

## 3. Non-deterministic로 남겨야 하는 것

다음은 Agent/LLM 판단이 필요하다.

- 제품 방향과 우선순위
- 임원 보고 메시지
- 미디어플래너용 설명 방식
- UI가 실제 사용자에게 직관적인지
- 캡처 결과물이 실제 매체 화면과 비교해 어느 부분이 어색한지
- 정책 답변의 맥락과 위험도 해석
- Foresight 예측 설명과 리스크 코멘트
- 보안 리스크의 업무 영향 설명
- rollback 전략 선택

---

## 4. repo별 적용 방향

## 4.1 admate-docs

Deterministic:

- `INDEX.md`에 등록된 파일 존재 여부
- `skills-catalog/*/SKILL.md` frontmatter 검증
- 각 repo harness coverage 확인

Scripts:

```text
scripts/check-doc-index.mjs
scripts/check-skill-catalog.mjs
scripts/check-repo-harness-coverage.mjs
```

## 4.2 admate-homepage

Deterministic:

- Command Center data contract
- project ids/status/progress range
- fallback/live source shape
- route smoke

Scripts:

```text
scripts/check-command-center-contract.mjs
scripts/smoke-command-center.mjs
```

## 4.3 admate-capture-pro

Deterministic:

- capture surface registry
- legacy surface mapping
- capture output metadata
- image dimension/DPR when output files are provided

Scripts:

```text
scripts/check-surface-registry.mjs
scripts/check-capture-output-metadata.mjs
scripts/check-capture-dimensions.mjs
```

Non-deterministic:

- 실제 매체 화면과 비교한 시각적 어색함 판단
- 새 surface의 증빙 화면 구성 판단

## 4.4 openclaw-monitor

Deterministic:

- Command Center public API contract
- public payload redaction
- command center schema/rollback pair
- API guard / secret check
- Hermes learning guard
- n8n workflow secret pattern

Scripts:

```text
scripts/check-command-center-contract.mjs
scripts/check-public-api-redaction.mjs
scripts/check-n8n-workflow-secrets.mjs
```

---

## 5. Skill 작성 규칙

각 skill에는 다음 문장을 포함한다.

```text
Use scripts/tests for deterministic checks. Use this skill for ambiguous judgment, planning, risk analysis, and implementation workflow.
```

Skill은 판단과 workflow를 제공하고, 반복 가능한 검증은 scripts가 담당한다.

---

## 6. 완료 기준

Harness 적용 완료 기준:

```text
1. Agent가 어떤 작업을 script로 검증해야 하는지 안다.
2. repo마다 최소 1개 이상의 deterministic check가 있다.
3. npm script 또는 명확한 실행 명령이 있다.
4. skill 문서가 scripts/tests를 우선하도록 안내한다.
5. 최종 보고에 deterministic check 결과와 non-deterministic 판단을 분리해 적는다.
```
