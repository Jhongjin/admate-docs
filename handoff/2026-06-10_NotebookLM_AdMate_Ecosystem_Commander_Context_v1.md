# NotebookLM AdMate Ecosystem Commander Context v1

Date: 2026-06-10 KST
Audience: NotebookLM, external LLM, executive-report copy/design agents
Purpose: 이 문서 하나만 읽어도 AdMate 생태계의 목적, 제품별 역할, 운영 원칙, 현재 임원 보고 영상 방향성을 이해할 수 있도록 정리한다.

---

## 1. 한 문장 정의

AdMate는 나스미디어 광고 운영 과정에서 반복 확인을 줄이고, 판단 근거와 증빙을 남기며, 승인된 운영 기준을 다음 업무에 다시 쓰게 만드는 AI Agent 기반 광고 운영 플랫폼이다.

더 짧게 말하면:

```text
AdMate는 광고 운영을 빠르게 만드는 도구가 아니라,
좋은 판단이 개인의 기억으로 사라지지 않게 남기는 운영 체계다.
```

---

## 2. AdMate가 풀려는 문제

광고 운영은 기획, 정책 확인, 세팅 검수, 운영 모니터링, 캡처, 보고, 성과 분석으로 이어진다. 이 과정은 매번 비슷한 확인을 반복하지만, 실제 판단의 맥락은 여러 곳에 흩어진다.

현재 업무에서 자주 생기는 문제는 다음과 같다.

| 문제 | 설명 |
|---|---|
| 반복 확인 증가 | 브리프, 정책, 세팅값, 랜딩 URL, 캡처, 보고 자료를 매번 다시 확인한다. |
| 판단 맥락 분산 | 왜 승인했는지, 어떤 기준으로 예외 처리했는지, 어떤 근거를 봤는지가 개인 메모나 메신저에 흩어진다. |
| 증빙 재활용 어려움 | 화면 캡처와 보고용 증빙은 남지만, 그 증빙이 어떤 판단과 연결됐는지 나중에 찾기 어렵다. |
| 운영 기준 축적 부족 | 좋은 운영 판단이 다음 캠페인 기준으로 자연스럽게 이어지지 않는다. |
| 제품 간 흐름 단절 | 정책 답변, 검수, 캡처, 예측, 학습이 각각 따로 움직이면 운영 루프가 만들어지지 않는다. |

AdMate는 이 문제를 “기능 몇 개를 붙이는 방식”이 아니라 캠페인 운영 흐름 전체를 하나의 기록 가능한 루프로 바꾸는 방식으로 접근한다.

---

## 3. 핵심 운영 원칙

AdMate를 이해할 때 가장 중요한 원칙은 다음 다섯 가지다.

1. 사람의 판단을 대체하지 않는다.
   AdMate는 검토할 후보, 근거, 리스크, 증빙을 정리한다. 최종 판단과 승인은 사람이 한다.

2. 위험한 작업은 승인 뒤에만 실행한다.
   production SQL, 실제 DB/Auth mutation, 배포, 캠페인 적용, 게시, 외부 유료 생성, 민감 데이터 처리 등은 명시 승인 경계가 필요하다.

3. 모든 중요한 action은 기록한다.
   운영자 action, Agent 실행, 알림, 검수, 캡처, 학습 후보, 권한 변경, 비용 이벤트는 추적 가능해야 한다.

4. 학습은 신뢰 신호만 반영한다.
   Hermes/Agent Core는 모든 이벤트를 무조건 기준으로 반영하지 않는다. 권한 있는 사용자, 검토된 피드백, 승인된 기준만 운영 기준으로 반영한다.

5. 외부 LLM과 공개 자료에는 최소 데이터만 전달한다.
   raw campaign-level 데이터, 광고주 민감 정보, API key, service role key, token, password, 실제 계정/성과/계약 정보는 외부 도구나 문서에 넣지 않는다.

---

## 4. 제품 생태계 지도

AdMate는 다섯 개 제품/영역과 공통 운영 코어로 이해하면 된다.

```text
AdMate
├─ Compass   정책/가이드/브리프 기준 정리
├─ Sentinel  캠페인 검수와 운영 이상 감지
├─ Lens      캡처와 증빙 기록
├─ Foresight 다음 캠페인을 위한 예측과 분석 관점
├─ Agent Core 실행, 기억, 권한, 승인, 감사, 학습 후보 관리
└─ Creative Studio 외부 커뮤니케이션, 루아 콘텐츠, 임원 보고 영상 제작
```

각 제품은 독립 기능이 있지만, 최종 가치는 “서로 연결될 때” 나온다.

```text
브리프/정책 기준
→ 세팅/운영 리스크 확인
→ 화면과 증빙 기록
→ 다음 판단을 위한 분석
→ 승인된 기준과 이유를 Agent Core에 남김
→ 다음 운영에서 다시 사용
```

---

## 5. 제품별 상세 설명

### 5.1 AdMate Compass

Compass는 정책과 가이드의 방향을 잡는 서비스다.

주요 역할:

- 광고 플랫폼 정책과 운영 가이드를 기반으로 질문에 답한다.
- Meta, Google, Naver, Kakao, X 등 매체별 정책/가이드 문서를 검색하고 근거를 제공한다.
- 브리프나 소재, 랜딩, 업종 조건을 보고 먼저 확인해야 할 기준을 정리한다.
- 사용자가 정책 확인에 쓰는 시간을 줄이고, 답변 근거를 남긴다.

Compass가 담당하지 않는 일:

- 실제 캠페인 세팅값 검수
- 운영 중 성과 이상 감지
- 광고 화면 캡처 생성
- 다음 캠페인 성과 예측

대표 사용 상황:

```text
이 소재가 Meta 정책상 문제될 수 있는지 확인해줘.
랜딩 페이지 정책 기준에서 먼저 봐야 할 항목을 정리해줘.
Naver/Kakao 광고 심사에서 주의할 표현을 알려줘.
```

Agent Core와 연결될 때:

```text
Sentinel이 랜딩 URL 리스크를 감지
→ Agent Core가 Compass에 관련 정책 확인 요청
→ Compass가 근거와 확인 기준 제공
→ 운영자는 근거를 보고 승인/수정 판단
```

---

### 5.2 AdMate Sentinel

Sentinel은 캠페인 사고를 줄이기 위한 검수와 운영 감지 서비스다.

Sentinel은 두 영역으로 나뉜다.

```text
Pre-launch Validation
= 캠페인 시작 전 세팅값 검수

Live Monitoring
= 캠페인 시작 후 상태, 예산, 성과 이상 감지
```

주요 역할:

- 미디어믹스나 승인된 기준과 실제 플랫폼 세팅을 비교한다.
- 예산, 기간, 캠페인명, 랜딩 URL, UTM, 픽셀/전환 ID, 목표, 과금 이벤트 등을 확인한다.
- 캠페인 시작 전 `PASS`, `WARNING`, `FAIL` 등으로 문제를 분류한다.
- 운영 중 예산 소진, KPI 급변, 상태 이상, 누락, 중복 알림 등을 감지한다.
- Slack/Email 알림과 운영자 action 기록으로 이어진다.

Sentinel이 담당하지 않는 일:

- 정책 문서 근거 검색은 Compass가 담당한다.
- 캡처/증빙 이미지 생성은 Lens가 담당한다.
- 다음 캠페인 성과 예측은 Foresight가 담당한다.

대표 사용 상황:

```text
이 캠페인 세팅이 미디어믹스와 맞는지 확인해줘.
오늘 예산 소진 속도가 이상하지 않아?
CPC가 갑자기 높아졌는데 사람이 봐야 할 신호인지 알려줘.
```

중요한 표현:

```text
Sentinel은 AI가 임의로 캠페인을 바꾸는 도구가 아니다.
사람이 확인해야 할 리스크를 더 빨리 드러내는 검수/감지 장치다.
```

---

### 5.3 AdMate Lens

Lens는 광고 화면과 보고용 증빙을 자동 생성하고 기록하는 서비스다.

주요 역할:

- YouTube, Google Ads/GDN, Naver, Kakao 등 광고 지면의 캡처/증빙 이미지를 만든다.
- 서버리스 환경에서 Puppeteer, Chromium, Sharp 등을 활용해 고해상도 결과물을 생성한다.
- 실제 매체 화면과 비슷한 synthetic UI를 만들거나, 가능한 경우 실제 페이지 기반 캡처를 수행한다.
- 캡처 요청, 처리 상태, 결과 이미지, 실패 사유, 재생성 이력을 관리한다.
- 광고주 보고나 내부 검수에 필요한 화면 근거를 남긴다.

Lens가 담당하지 않는 일:

- 정책 판단
- 캠페인 검수/이상 감지
- 성과 예측

Lens의 품질 기준:

- 광고 미리보기/캡처 결과물은 실제 매체 화면과의 시각적 일치가 우선이다.
- AdMate 공통 디자인은 운영 콘솔, 입력 폼, 목록, 작업 이력, 설정 화면에만 적용한다.
- 캡처 결과물 자체를 공통 브랜드 스타일로 바꾸면 안 된다.

대표 사용 상황:

```text
YouTube 인피드 광고 캡처를 보고서용으로 생성해줘.
GDN 지면에 소재가 노출된 화면을 만들어줘.
Naver/Kakao 모바일 네이티브 지면 증빙 이미지를 남겨줘.
```

Agent Core와 연결될 때:

```text
캠페인 등록 또는 보고 이벤트 발생
→ Agent Core가 Lens에 캡처 요청
→ Lens가 결과 이미지 생성
→ 캡처 결과가 캠페인 기록과 연결
```

---

### 5.4 AdMate Foresight

Foresight는 다음 캠페인을 위한 예측과 분석 관점을 제공하는 서비스다.

주요 역할:

- 과거 광고 데이터와 업종/목표/예산/기간 조건을 기반으로 예상 성과를 계산한다.
- CPM, CPC, CPC Link, CPV, VTR, Reach 등 주요 지표를 예측한다.
- 업종별 시장 평균, 상위 효율선, 시즌성, 포화도, 타겟 품질을 비교한다.
- 예산별 도달 곡선과 성과 구간을 보여준다.
- 향후 A/B 비교, 전후 성과 유의성 분석, 세그먼트별 인사이트, AI 리포트 자동화로 확장할 수 있다.

Foresight가 담당하지 않는 일:

- 정책/가이드 답변
- 캠페인 세팅 검수
- 운영 중 이상 감지
- 광고 화면 캡처 생성

중요 원칙:

- 통계 계산은 가능한 한 deterministic code로 수행한다.
- LLM은 계산 자체가 아니라 결과 해석, 보고 문장, 인사이트 후보 phrasing에 사용한다.
- raw campaign-level 데이터는 외부 LLM에 직접 보내지 않는다.
- 현재 Gate 5 운영 기준은 `preflight-only`다. production schema apply는 별도 migration queue로 분리한다.

대표 사용 상황:

```text
뷰티 업종에서 Meta 캠페인 3천만 원 예산이면 예상 CPC 범위가 어느 정도야?
지난 6개월 유사 업종 기준 CTR은 어느 정도였어?
예산을 30% 늘리면 예상 도달과 단가가 어떻게 변할까?
```

---

### 5.5 AdMate Agent Core

Agent Core는 AdMate 생태계의 중심 운영 엔진이다.

Agent Core는 두 축으로 구성된다.

```text
Openclaw
= 실행, 자동화, 외부 시스템 연결, workflow, 알림, action 처리

Hermes
= 지식, 기억, 학습 후보, 판단 기준, 운영 피드백 관리
```

주요 역할:

- Compass, Sentinel, Lens, Foresight를 하나의 업무 흐름으로 연결한다.
- n8n workflow, Slack/Email 알림, Supabase operational data, auth, audit logs, operator actions를 관리한다.
- 권한, 승인, 학습 범위, LLM/API 비용, 실패 이벤트를 기록한다.
- 운영자 action과 Agent 실행 이력을 남긴다.
- Hermes 학습 후보를 만들고, 승인된 기준만 다음 workflow에 반영한다.
- Command Center와 Homepage read-only dashboard에 필요한 진행 상태와 요약 정보를 제공한다.

Agent Core가 담당하지 않는 일:

- 각 제품의 전문 기능을 직접 대체하지 않는다.
- Compass의 정책 검색, Lens의 캡처 생성, Foresight의 예측 계산을 직접 흡수하지 않는다.
- Agent Core는 연결, 실행, 기록, 승인, 학습 후보 관리를 맡는다.

권장 표현:

```text
Agent Core는 실행, 기억, 권한, 승인, 감사 로그, 학습 후보를 하나의 운영 흐름으로 묶는 중심 엔진입니다.
```

피해야 할 표현:

```text
Agent Core는 AGI입니다.
AI가 알아서 판단하고 실행합니다.
```

---

### 5.6 AdMate Homepage / Command Center

Homepage는 AdMate의 정체성과 제품군을 설명하는 공개/대표 frontend다.

Command Center는 임원 또는 관리자에게 AdMate 제품군 진행 현황을 read-only로 보여주는 대시보드다.

주요 역할:

- `/`: AdMate 정체성, 제품군, Agent Core, 캠페인 운영 사이클, 기대 효과를 보여준다.
- `/command-center`: Compass, Sentinel, Lens, Foresight 등의 주간 진행 상태를 read-only로 보여준다.
- 실제 auth, DB, update history, audit log, 프로젝트 owner input은 Agent Core가 담당한다.
- Homepage는 display-only 또는 fallback/mock display 역할을 가진다.

운영 메모:

- Homepage production `COMMAND_CENTER_READ_KEY`와 Agent Core production `COMMAND_CENTER_READ_KEY`는 같은 값으로 맞춰야 한다.
- 이 값은 채팅에 붙이면 안 되고 Vercel env 또는 로컬 secret injection으로 관리한다.

---

### 5.7 AdMate Creative Studio / Lua

Creative Studio는 AdMate의 외부 커뮤니케이션, 영상/이미지 제작, presenter-led narrative, 임원 보고 영상 패키지를 관리하는 영역이다.

현재 핵심 컨셉:

- 루아는 일상, 뷰티, 음식, 오피스 루틴 중심의 AI virtual creator다.
- AdMate는 루아가 관심 있게 소개하는 브랜드/서비스 활동 중 하나다.
- Instagram 계정: `lua.creator.ai`
- YouTube 채널: `@luacreatorai`
- 루아는 실제 인물이나 임직원이 아니며, 프로필과 주요 고지에서 AI virtual creator임을 표시한다.
- 단, 모든 게시물마다 AI임을 과하게 반복할 필요는 없다. 숨기지 않되, 콘텐츠 흐름을 해치지 않는 수준으로 고지한다.

Creative Studio의 현재 임무:

- 루아 계정 운영용 콘텐츠 기획
- AdMate 소개/티저 이미지와 릴스/쇼츠 제작
- 임원 보고용 5분 영상 방향성, 스크립트, 장면 구성, deck visual 제작
- 생성형 이미지/영상 사용 시 보안, 법무, 브랜드, 초상권, 내부자료 노출 기준 관리

비범위:

- 실제 인물 imitation
- 임직원 likeness 사용
- 유명인/공인 모사
- 실제 광고주/캠페인/계정/성과 데이터 노출
- 내부 dashboard 원본 노출
- 자동 게시/자동 업로드

---

### 5.8 Design Director

Design Director는 AdMate 전체 제품군의 디자인 기준을 관리하는 문서/검토 영역이다.

핵심 방향:

```text
AdMate Operational Intelligence Console
= 광고 운영자가 매일 쓰는 신뢰형 업무 콘솔
+ 검증된 근거, 상태, 승인, audit 중심 정보 구조
+ 제품별 muted accent
+ 과장되지 않은 AI Agent 플랫폼 감각
```

디자인 원칙:

- 화려한 AI SaaS 랜딩 페이지보다 실무형 운영 콘솔에 가깝다.
- 배경, 표면, border, typography, density, 상태 표현 방식은 하나의 시스템처럼 이어져야 한다.
- 제품별 화면은 다를 수 있지만 같은 조직의 운영 플랫폼처럼 보여야 한다.
- Lens 캡처 결과물처럼 매체 fidelity가 중요한 산출물에는 공통 디자인을 억지로 적용하지 않는다.

---

### 5.9 Commander

Commander는 AdMate 전체 큐를 관리하는 운영 컨트롤 타워다.

Commander의 역할:

- 여러 repo와 제품 큐를 관리한다.
- 서브 에이전트에게 read-only audit, implementation, verification, copy review, design review 등을 지시한다.
- 결과를 검토하고 승인 여부를 판단한다.
- 사람이 필요한 gate에 도달하기 전까지 큐를 계속 진행한다.
- 생산/배포/DB/Auth/유료 외부 호출/게시 등 위험 경계는 승인 상태를 확인한다.

Commander가 직접 처리해도 되는 일:

- 상태 점검
- 문서화
- 로컬 검증
- 결과 리뷰
- 명시 승인된 범위의 구현/수정

Commander가 멈춰야 하는 일:

- production SQL 실행
- real DB/Auth mutation
- password/session handling
- paid external calls
- deploy trigger
- campaign apply/persist/promote/publish
- 실제 브랜드/법무/보안 승인이 필요한 외부 게시

---

## 6. 캠페인 운영 생애주기에서의 AdMate 배치

| 단계 | 사용 제품 | 남기는 것 |
|---|---|---|
| 기획 | Foresight | 예상 성과, 벤치마크 기준, 가설 |
| 브리프/정책 확인 | Compass | 확인해야 할 정책/가이드, 근거 |
| 세팅 검수 | Sentinel | 미디어믹스 대비 세팅 차이, 리스크 |
| 집행 시작 | Sentinel + Agent Core | 모니터링 시작, 권한, 기준 |
| 운영 중 | Sentinel + Agent Core | 알림, 대응, 보류/종료 action |
| 캡처/보고 | Lens | 증빙 이미지, 캡처 이력, 실패 사유 |
| 분석 | Foresight | 실제 성과와 예측 차이, 다음 가설 |
| 학습 | Hermes / Agent Core | 승인된 기준, 예외, 재사용 후보 |
| 다음 운영 | 전체 제품 | 더 빠른 확인, 더 일관된 판단 |

핵심은 각 단계의 산출물이 다음 단계로 전달되고, 마지막에는 다음 운영 기준으로 되돌아가야 한다는 점이다.

---

## 7. 데이터와 학습 거버넌스

AdMate의 장기 경쟁력은 “제품 기능”보다 “연결된 운영 데이터와 승인된 학습 구조”에서 나온다.

공통 데이터 객체:

- organization
- user
- advertiser
- brand
- campaign
- platform_account
- media_mix
- setup_snapshot
- validation_result
- monitoring_event
- alert_event
- alert_delivery
- policy_query
- capture_asset
- planner_prediction
- actual_performance
- operator_action
- hermes_feedback
- learning_decision
- llm_usage_event
- audit_log

중심 객체는 Campaign Intelligence Object다.

하나의 캠페인에 대해 다음을 연결할 수 있어야 한다.

```text
campaign_id
platform
advertiser/brand
objective/industry
budget/period
media_mix
setup_snapshot
validation_result
policy_context
capture_assets
monitoring_events
alert_events
operator_actions
planner_predictions
actual_performance
learning_feedback
cost_events
```

이 구조가 있으면 다음 질문에 답할 수 있다.

```text
이 캠페인은 시작 전 세팅에 문제가 없었는가?
운영 중 어떤 이상 신호가 있었는가?
누가 어떤 알림에 어떻게 대응했는가?
정책/가이드 이슈는 무엇이었는가?
캡처 증빙은 남았는가?
예측 성과와 실제 성과는 얼마나 달랐는가?
다음 유사 캠페인에 어떤 기준을 적용해야 하는가?
```

---

## 8. 권한과 승인 모델

AdMate는 사용자 권한과 Hermes 학습 권한을 분리해야 한다.

기본 시스템 권한:

| 역할 | 의미 |
|---|---|
| super_admin | 시스템 전체 관리자. 권한/학습/보안 관리 가능. |
| admin | 관리 범위 내 사용자/캠페인/설정 관리. |
| reviewer | 추천 검토 및 제한적 학습 피드백 가능. |
| user | 일반 사용자. 기본적으로 학습 반영 제외. |

대표 approval boundary:

| 작업 | 승인 필요성 |
|---|---|
| 정책 질문 | 일반적으로 낮음. 접근 권한 필요. |
| read-only smoke | 승인 후 실행 가능. |
| DB/Auth mutation | 별도 명시 승인 필요. |
| production SQL/schema apply | 별도 migration queue 필요. |
| n8n import/save/activation/execution | target-specific runbook과 승인 필요. |
| campaign apply/persist/promote/publish | 별도 승인 필요. |
| 외부 유료 이미지/영상 생성 | 비용/브랜드/보안 승인 필요. |
| 실제 회사 로고/사옥/임직원/내부 공간 사용 | 브랜드/법무/보안 승인 필요. |

---

## 9. 현재까지의 운영/검증 컨텍스트

이 문서는 2026-06-10 기준의 Commander 대화와 로컬 문서를 바탕으로 한다.

진행된 주요 gate:

- Homepage와 Agent Core production `COMMAND_CENTER_READ_KEY`를 같은 값으로 맞추는 흐름을 확인했다.
- n8n workflow API/environment 확인이 진행되었고, 사용자가 workflow 실행을 수행했다.
- Lens는 authenticated capture/upload smoke 흐름을 사용자가 승인했고, `https://www.yna.co.kr/` 테스트를 기준으로 capture/upload/cleanup gate를 진행했다.
- Foresight Gate 5는 `preflight-only`로 유지하고, production schema apply는 별도 migration queue로 분리하기로 했다.
- Creative Studio는 `draft-copy-only` 범위에서 Instagram/YouTube 루아 계정 콘텐츠와 AdMate 소개 게시물을 제작/게시했다.
- 루아 Instagram 첫 게시물, 오피스 루틴, AdMate 관심사/티저성 게시물, 릴스/쇼츠용 영상 등이 진행되었다.

남아 있거나 계속 관리해야 할 gate:

- 실제 production schema apply
- 실제 브랜드/법무/보안 승인 후 사옥/로고/내부 공간 사용
- 최종 임원 보고 영상/자료 승인
- 외부 유료 생성 플랫폼 선택과 결제
- 공개 게시 전 최종 copy/design/security review

---

## 10. 임원 보고용 영상 방향성

현재 만들려는 임원 보고용 영상은 최대 약 5분이다.

구성은 두 부분으로 나눈다.

### Scene 1. 인플루언서 톤

루아가 회사/오피스 분위기의 장소에 도착해 오늘 왜 AdMate 이야기를 하러 왔는지 짧게 설명한다.

원하는 흐름:

1. 루아가 사옥 또는 generic office-inspired location 앞에 도착한다.
2. 짧은 브리프를 한다.
3. 사무실로 이동한다.
4. 의자에 앉아 간단히 말한다.
5. 보고하러 회의실로 이동한다.

주의:

- 실제 Nasmedia 사옥, 로고, 내부 공간, 임직원, signage를 쓰려면 별도 승인 필요.
- 승인 전에는 generic office-inspired visual을 사용한다.
- 루아는 AI virtual creator이며 실제 직원처럼 오해되지 않게 고지한다.

### Scene 2. 보고용 톤

루아는 더 이상 화면에 등장하지 않고, voice-over와 자막, report visual, premium deck frame으로 진행한다.

다룰 내용:

- AdMate가 무엇인지
- 왜 지금 필요한지
- Compass, Sentinel, Lens, Foresight, Agent Core의 역할
- 각 서비스가 서로 왜 연결되어야 하는지
- Agent Core가 단순 AI 호출 모음이 아니라 운영 지식과 승인 기준을 관리하는 코어라는 점
- 주 단위 최신 기술 동향 파악과 개선 후보 선별
- 나스미디어 도메인 지식 축적
- 장기적으로 Venture Lab형 신사업 후보 발굴로 확장 가능

피해야 할 표현:

- `AGI`
- `완전 자동화`
- `AI가 대신 결정`
- `성과 보장`
- `무승인 자동 반영`
- 루아가 실제 임직원처럼 보이는 표현

권장 표현:

```text
AdMate는 먼저 정리하고, 사람은 판단합니다.
반복 확인을 줄입니다.
왜 승인했는지 남깁니다.
다음 운영에서 다시 씁니다.
승인된 기준만 workflow에 반영합니다.
작게 시작하고, 기준을 남긴 뒤 확장합니다.
```

---

## 11. 임원 보고 자료의 카피/디자인 기준

사용자 피드백 기준:

- 기존 v5는 디자인은 조금 나아졌지만, 문장이 아직 AI 문장처럼 느껴진다.
- 임원 보고용 영상에 쓰기에는 슬라이드별 콘텐츠 구조와 카피가 아직 충분하지 않다.
- 상자, 라벨, 단순 연결선 중심의 구조는 줄여야 한다.
- “AI Agent”, “지속 학습”, “Venture Lab” 같은 말을 설명하느라 방어적으로 보이면 안 된다.
- 루아가 AI인지는 프로필/초반 고지로 충분하다. 핵심 보고 슬라이드에 반복할 필요는 없다.

Copy 기준:

- 회의에서 사람이 실제로 말할 수 있는 문장이어야 한다.
- 짧고 분명해야 한다.
- `~하는 구조입니다`, `~할 수 있습니다` 반복을 피한다.
- “기능 설명”보다 “무엇을 결정해야 하는지”가 드러나야 한다.
- AI가 사람을 대체하지 않는다는 메시지는 필요하지만, 과하게 반복하면 방어적으로 보인다.

Design 기준:

- 일반 SaaS deck처럼 보이면 안 된다.
- report film frame처럼 보여야 한다.
- 한 장에 하나의 중심 시각물을 둔다.
- proof object가 필요하다. 예: decision trace ledger, approval board, measurement scorecard, operating memory layer, evidence packet.
- 불필요한 카드, pill chip, 장식 connector를 줄인다.
- deep graphite, warm paper, muted brass, teal, rust 등 절제된 팔레트를 사용한다.
- 텍스트는 적고, 슬라이드가 영상의 프레임처럼 읽혀야 한다.

---

## 12. NotebookLM에 함께 넣으면 좋은 문서

### 1순위: 반드시 넣기

1. 이 문서
   `D:\Projects\AdMate\admate-docs\handoff\2026-06-10_NotebookLM_AdMate_Ecosystem_Commander_Context_v1.md`

2. 중앙 문서 README
   `D:\Projects\AdMate\admate-docs\README.md`

3. 제품 지도
   `D:\Projects\AdMate\admate-docs\strategy\05_AdMate_Product_Map_v1.md`

4. Agent Core 운영 모델
   `D:\Projects\AdMate\admate-docs\strategy\06_AdMate_Agent_Core_Operating_Model_v1.md`

5. 데이터/학습 거버넌스
   `D:\Projects\AdMate\admate-docs\strategy\08_AdMate_Unified_Data_Learning_Governance_v1.md`

6. 미래 전략 루프
   `D:\Projects\AdMate\admate-docs\strategy\09_AdMate_Future_Strategy_Loop_v1.md`

7. 임원 보고 영상 패킷 README
   `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\README.md`

8. 임원 보고 메시지 뱅크
   `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\executive_message_bank_v2.md`

9. 최신 5분 내레이션 초안
   `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\final_5min_narration_script_v2.md`

10. 최신 사용자 피드백 반영 규칙
    `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\v5_human_editorial_reset_v1.md`

### 2순위: 제품별 이해를 넓히고 싶을 때

- `D:\Projects\AdMate\admate-agent-core\README.md`
- `D:\Projects\AdMate\admate-compass\README.md`
- `D:\Projects\AdMate\admate-lens\README.md`
- `D:\Projects\AdMate\admate-foresight\README.md`
- `D:\Projects\AdMate\admate-homepage\README.md`
- `D:\Projects\AdMate\admate-creative-studio\README.md`
- `D:\Projects\AdMate\admate-design-director\README.md`
- `D:\Projects\AdMate\admate-commander\README.md`
- `D:\Projects\AdMate\admate-sentinel-legacy\README.md`

### 3순위: 디자인/영상 제작 맥락까지 넣고 싶을 때

- `D:\Projects\AdMate\admate-design-director\docs\design-system\admate-design-system-v1.md`
- `D:\Projects\AdMate\admate-design-director\docs\design-system\admate-ui-review-checklist-v1.md`
- `D:\Projects\AdMate\admate-creative-studio\docs\production\caption-disclosure-guide-v1.md`
- `D:\Projects\AdMate\admate-creative-studio\docs\security\video-production-safety-checklist-v1.md`
- `D:\Projects\AdMate\admate-creative-studio\docs\references\presenter-persona-guide-v1.md`
- `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\v4_copy_design_review_synthesis_v1.md`

### 넣지 말아야 할 것

- `.env`, `.env.local`, `.env.production`, `.env*.local`
- API key, service role key, token, password, SMTP password, n8n credential
- Supabase/Meta/Gmail/Slack/Vercel secret 값
- 실제 광고주/캠페인/계정/성과 raw data
- 내부 dashboard 원본 화면
- 승인되지 않은 실제 사옥/임직원/내부 공간 이미지
- `node_modules`, `.next`, build output, cache file

---

## 13. NotebookLM에 물어볼 만한 질문 예시

문서를 넣은 뒤 NotebookLM에는 다음 질문을 던지면 좋다.

```text
AdMate의 핵심 가치를 임원 보고용으로 세 문장으로 요약해줘.
```

```text
Compass, Sentinel, Lens, Foresight, Agent Core의 역할을 서로 겹치지 않게 설명해줘.
```

```text
AdMate를 완전 자동화가 아니라 통제 가능한 운영 체계로 설명하는 카피를 제안해줘.
```

```text
임원 보고 영상에서 과장처럼 들릴 수 있는 표현과 대체 표현을 정리해줘.
```

```text
5분 영상의 Scene 2를 슬라이드 10장 기준으로 재구성해줘. 각 슬라이드는 말할 문장 1개와 보일 증빙 객체 1개만 포함해줘.
```

```text
현재 문서 기준으로 AdMate의 보안/승인/감사 원칙을 요약해줘.
```

---

## 14. 최종 이해 프레임

NotebookLM이나 새 에이전트가 반드시 기억해야 할 결론은 다음이다.

```text
AdMate는 AI가 광고 운영을 대신 결정하는 플랫폼이 아니다.

AdMate는 반복 확인을 줄이고,
운영자가 본 근거와 승인 이유를 남기며,
그 기준을 다음 운영에서 다시 쓰게 만드는
AI Agent 기반 운영 체계다.

Compass는 기준을 찾고,
Sentinel은 위험을 드러내고,
Lens는 증빙을 남기고,
Foresight는 다음 판단의 관점을 제안하고,
Agent Core는 이 모든 흐름을 실행, 기록, 승인, 학습 후보로 연결한다.
```
