# AdMate 실무자 대상 소개 문서 설계안 v1

## 1. 문서 메타

| 항목 | 내용 |
|---|---|
| 제목 | AdMate 실무자 대상 소개 문서 설계안 v1 |
| 버전 | v1 |
| 날짜 | 2026-06-14 KST |
| 상태 | Draft for Commander Review |
| 대상 | 초기 파일럿에 참여하는 특정 팀 및 소수 실무자 |
| 목적 | 임원 보고용 비전 문서가 아니라, 파일럿 실무자가 AdMate의 목적, 사용 맥락, 안전 원칙, 본인 역할을 빠르게 이해하도록 돕는 소개 문서의 설계안을 확정한다. |

## 2. 커맨더 승인 요약

### 승인 항목

| 항목 | 반영 방향 |
|---|---|
| 문서 대상 | 전체 임직원 공개용이 아니라 초기 파일럿 대상 특정 팀 및 소수 실무자를 전제로 작성한다. |
| 문서 목적 | 투자, 비전, 경쟁력 중심의 임원 보고 문서가 아니라 실무자 설득과 이해를 위한 업무 안내형 문서로 둔다. |
| 핵심 메시지 | AdMate는 사람을 대체하지 않는다. 반복 확인을 줄이고, 실무자의 올바른 판단을 기록해 다음 운영 기준으로 활용하게 돕는 도구로 설명한다. |
| Sentinel 기준 | 제품 설명은 현재 canonical인 `D:\Projects\AdMate\admate-agent-core`의 Sentinel surface 기준으로 설명한다. |
| Legacy 참고 범위 | `D:\Projects\AdMate\admate-sentinel-legacy`는 pre-launch validation의 원형 근거와 도메인 참고로만 사용한다. |
| 플랫폼 캡처 | 실제 캡처는 이번 v1에 삽입하지 않고 placeholder로 둔다. |
| 익명 피드백 보드 | 목적과 원칙만 짧게 소개하고, 사용법은 후속 사용 가이드로 넘긴다. |
| 민감 정보 보호 | 소개 문서 본문과 캡처 수집 큐에 민감 정보 보호 원칙을 반드시 포함한다. |

### 보완 항목

| 항목 | 보완 필요 |
|---|---|
| 화면 캡처 QA | 실제 캡처 수집 전 광고주명, 계정명, 캠페인명, 이메일, URL, 토큰, 원본 리포트 행이 노출되지 않는지 별도 QA가 필요하다. |
| 실무자 언어 | "Agent Core", "Hermes", "Openclaw"는 실무자가 이해할 수 있는 수준으로만 설명하고, 내부 엔진명 과잉 노출을 피한다. |
| 사용 시나리오 | 제품별 상세 사용법은 소개 문서에 넣지 않고, 파일럿 사용 가이드에서 단계별로 분리한다. |
| 학습 설명 | "내 판단이 기록된다"는 표현은 감시나 평가가 아니라 운영 기준 개선을 위한 승인된 피드백 기록이라는 점을 분명히 한다. |

### 보류 항목

| 항목 | 보류 사유 |
|---|---|
| 실제 플랫폼 캡처 삽입 | 캡처 수집, redaction, 모바일/데스크톱 QA 완료 전까지 보류한다. |
| 익명 피드백 보드 상세 사용법 | 소개 문서에서는 목적과 원칙만 안내하고, 별도 파일럿 사용 가이드에서 다룬다. |
| 캠페인 자동 변경 안내 | 현재 문서에서는 자동 변경을 약속하지 않는다. 승인, 적용, mutation 경계는 후속 운영 가이드에서 다룬다. |
| 임원 보고용 ROI/로드맵 | 이번 문서 범위가 아니므로 별도 executive brief 또는 Command Center 문서로 분리한다. |

## 3. 추천 제목 후보

| 후보 | 제목 | 의도 |
|---|---|---|
| 1 | AdMate 파일럿 소개: 반복 확인은 줄이고, 판단은 남깁니다 | 핵심 메시지를 가장 직접적으로 전달한다. |
| 2 | AdMate 실무자 안내서: 캠페인 운영을 함께 확인하는 AI 파트너 | "도구"보다 "파트너"의 뉘앙스를 강조한다. |
| 3 | AdMate 파일럿 시작 가이드: 검수, 캡처, 예측, 학습의 연결 | 제품군 전체 흐름을 설명하기 좋다. |
| 4 | AdMate와 함께하는 운영 기준 만들기 | 파일럿 참여자가 기준 형성에 기여한다는 점을 강조한다. |
| 5 | AdMate 실무자 첫 안내: 반복 업무를 줄이는 안전한 AI 업무 흐름 | 보안과 실무 효용을 함께 드러낸다. |

**커맨더 추천 1개:** `AdMate 파일럿 소개: 반복 확인은 줄이고, 판단은 남깁니다`

추천 사유: 초기 파일럿 대상에게 가장 중요한 오해, 즉 "사람을 대체하는가"를 먼저 해소하고, AdMate가 반복 확인을 줄이며 실무 판단을 운영 기준으로 남긴다는 메시지를 한 번에 전달한다.

## 4. 핵심 메시지와 톤앤매너

### 핵심 메시지

```text
AdMate는 사람을 대체하지 않습니다.
반복 확인, 검수, 캡처, 정책 검색, 이상 감지의 부담을 줄이고,
실무자의 올바른 판단을 기록해 다음 운영 기준으로 활용하게 돕는 AI 업무 파트너입니다.
```

### 보조 메시지

- AdMate는 파일럿 실무자의 업무를 평가하기 위한 도구가 아니라, 반복 확인을 줄이고 놓치기 쉬운 항목을 먼저 보여주는 도구다.
- 실무자의 판단은 최종 기준이다. AdMate는 그 판단의 이유와 맥락을 안전하게 기록해 다음 운영 기준을 더 명확하게 만든다.
- 초기 파일럿은 완성품 시연이 아니라, 실제 업무에 맞는 기준을 함께 정리하는 과정이다.
- 민감 정보는 캡처, 문서, 로그, 피드백, LLM 요청 어디에도 그대로 노출하지 않는다.

### 톤앤매너

| 원칙 | 적용 방식 |
|---|---|
| 실무 중심 | "왜 써야 하는가"보다 "어떤 반복 확인이 줄어드는가"를 먼저 말한다. |
| 동료에게 설명하듯 | 과장된 AI 비전, 투자 용어, 조직 경쟁력 문구를 줄인다. |
| 안전한 파일럿 | 현재 가능한 것과 후속 가이드로 넘길 것을 구분한다. |
| 판단 존중 | "AI가 대신 판단"이 아니라 "AI가 확인하고, 사람이 판단하고, 그 판단이 기준이 됨"으로 설명한다. |
| 보안 우선 | 실제 데이터 예시는 원칙적으로 익명화, 집계, 샘플, redacted 캡처만 사용한다. |

### 피해야 할 표현

- "사람 없이 자동 운영"
- "AI가 실무자를 대체"
- "캠페인을 자동으로 수정"
- "모든 사용자 행동을 학습"
- "실무자 평가 데이터"
- "원본 엑셀과 원본 API 응답을 그대로 분석"

## 5. 최종 목차안

| No | 섹션 | 목적 | 포함 내용 | 캡처 placeholder | 후속 가이드로 넘길 항목 |
|---|---|---|---|---|---|
| 1 | 첫 페이지 서문 | 문서 목적과 파일럿 톤을 즉시 전달 | 파일럿 대상, 대체가 아닌 보조, 판단 기록의 의미 | 없음 | 상세 온보딩 절차 |
| 2 | 왜 AdMate를 파일럿으로 써보는가 | 실무자가 체감하는 반복 업무 문제와 연결 | 정책 확인, 세팅 검수, 캡처, 예측, 이상 감지의 반복 포인트 | `[CAPTURE_PLACEHOLDER: workflow-overview]` | 팀별 업무 pain point 수집 |
| 3 | AdMate가 연결하는 업무 흐름 | 제품군을 하나의 캠페인 생애주기로 이해 | 기획, 정책 확인, 사전 검수, 운영 모니터링, 캡처, 성과 예측, 피드백 | `[CAPTURE_PLACEHOLDER: lifecycle-map]` | 상세 프로세스 다이어그램 |
| 4 | Compass: 정책 확인을 빠르게 | 정책 검색과 출처 확인의 역할 설명 | 질문, 답변, 출처, 근거 상태, 문서 관제 | `[CAPTURE_PLACEHOLDER: Compass answer and source panel]` | 질문 예시, 답변 신뢰도 확인법 |
| 5 | Sentinel: 세팅 사고를 막고 운영 이상을 감지 | Sentinel을 Core 기준으로 설명 | pre-launch 상태, launch gate, 운영 롤업, live monitoring, operator action | `[CAPTURE_PLACEHOLDER: Sentinel prelaunch workbench and status panel]` | 검수 실행법, 예외 승인, 알림 처리법 |
| 6 | Lens: 캡처와 증빙을 정리 | 캡처 자동화가 줄이는 반복 업무 설명 | 캡처 요청, 작업 목록, 실패/재요청, 결과 보호 | `[CAPTURE_PLACEHOLDER: Lens capture workbench]` | 캡처 상품별 요청 방식, 실패 재처리 |
| 7 | Foresight: 다음 캠페인의 예상 기준 보기 | 기획 단계에서 예상 성과를 보는 방식 설명 | 예산, 기간, 타겟 조건, 예측 결과, 근거, 범위 표시 | `[CAPTURE_PLACEHOLDER: Foresight simulator result]` | 입력 조건 세부 기준, 데이터 해석 |
| 8 | Agent Core: 판단이 다음 기준이 되는 구조 | 기록, 학습, 권한, 감사의 공통 레이어 이해 | Openclaw와 Hermes는 내부 엔진, operator_actions, audit_logs, learning authority | `[CAPTURE_PLACEHOLDER: Agent Core access and audit summary]` | 관리자용 권한 설정, 학습 후보 승인 |
| 9 | 파일럿 참여자의 역할과 권한 | 선택 사용자, 리뷰어, 관리자 구분 | 접근 요청, 최소 권한, reviewer 승인, admin 관리 | `[CAPTURE_PLACEHOLDER: access request or user role overview]` | 계정 생성, 권한 신청, 승인 절차 |
| 10 | 익명 피드백과 개선 원칙 | 부담 없이 의견을 남기는 채널 소개 | 익명성, 비난 금지, 민감 정보 금지, 개선 항목 분류 | `[CAPTURE_PLACEHOLDER: anonymous feedback board placeholder]` | 보드 사용법, 분류 태그, 응답 SLA |
| 11 | 안전과 보안 원칙 | 파일럿 참여 시 반드시 지켜야 할 금지선 제시 | 캡처 redaction, raw data 금지, credential 금지, LLM 전달 최소화 | 없음 | 보안 체크리스트, 캡처 QA 절차 |
| 12 | 다음 단계 | 파일럿 실행 전 남은 작업을 공유 | 캡처 수집, 화면 QA, 사용 가이드 분리, 최종 문서 제작 | 없음 | 일정, 담당자, 승인 체크리스트 |

## 6. 플랫폼별 캡처 placeholder 상세

> 원칙: 실제 캡처는 아직 삽입하지 않는다. 모든 캡처는 redacted 또는 synthetic 데이터로 수집하고, 광고주명, 계정명, 캠페인명, 이메일, 토큰, 원본 URL, 원본 API 응답, 원본 엑셀 행이 보이지 않아야 한다.

| 플랫폼 | 화면 제목 | 보여줄 장면 | 실무자가 봐야 할 요소 | 인터랙션 포인트 | 문장 초안 |
|---|---|---|---|---|---|
| Compass | Compass 답변 및 출처 패널 | 사용자가 광고 정책 질문을 입력하고, 답변과 출처 카드가 함께 보이는 장면 | 답변만 보지 않고 출처, 근거 상태, 문서 신뢰도를 함께 확인한다는 점 | 질문 입력, 관련 출처 열람, source panel 확인 | "정책을 찾는 시간을 줄이되, 답변의 근거를 함께 확인할 수 있게 합니다." |
| Sentinel | Sentinel Pre-launch Workbench | 미디어믹스 입력, Meta 설정 대조, 운영 롤업, evidence packet, 최신 상태 패널이 보이는 장면 | 통과, 확인 필요, 보류, launch gate, 운영 진단, 안전 배지 | 입력 미리보기 실행, 상태 확인, 근거 요약 복사, operator rollup 확인 | "캠페인 시작 전 반복 검수를 구조화해, 놓치기 쉬운 차이를 먼저 보여줍니다." |
| Lens | Lens 캡처 워크벤치 | 캡처 요청 생성, 작업 목록, 실패/재요청 상태, 품질 기준이 보이는 장면 | 소재 정보, 지면, 캡처 타입, 작업 기록, 실패 사유 | 캡처 요청 생성, 목록 갱신, 결과 확인, 재요청 판단 | "광고 캡처와 증빙 준비를 작업 목록으로 관리해 반복 캡처 부담을 줄입니다." |
| Foresight | Foresight 성과 예측 시뮬레이터 | 예산, 기간, 타겟 조건 입력 후 예상 성과와 근거, 범위가 함께 표시되는 장면 | 확정값이 아니라 예측 범위와 근거 상태를 함께 봐야 한다는 점 | 조건 선택, 예측 실행, KPI 카드와 근거 확인, 예산 구간 비교 | "기획 단계에서 예상 성과를 단일 숫자가 아니라 근거와 범위로 확인합니다." |
| Agent Core | Agent Core 권한, 기록, 학습 개요 | 접근 요청, 사용자 권한, audit/operator 기록, learning authority 개념을 요약한 화면 | 최소 권한, 승인된 reviewer, 기록과 감사, 학습 권한 분리 | 접근 요청 확인, 권한 상태 확인, 감사 기록 조회 | "실무 판단은 무조건 학습되는 것이 아니라 권한과 검토 절차를 거쳐 운영 기준 후보가 됩니다." |

### 세부 placeholder 표기 규칙

```text
[CAPTURE_PLACEHOLDER: Compass / answer-source-panel / redacted]
[CAPTURE_PLACEHOLDER: Sentinel / prelaunch-workbench / redacted]
[CAPTURE_PLACEHOLDER: Lens / capture-workbench / redacted]
[CAPTURE_PLACEHOLDER: Foresight / simulator-result / redacted]
[CAPTURE_PLACEHOLDER: Agent Core / access-audit-learning / redacted]
```

## 7. 선택 사용자, 리뷰어, 관리자 권한 개요

| 구분 | 파일럿에서의 의미 | 할 수 있는 일 | 할 수 없는 일 | 설명 문안 |
|---|---|---|---|---|
| 선택 사용자 | 초기 파일럿에 초대된 실무자 | 배정된 제품 화면 사용, 질문/검수/캡처/예측 흐름 확인, 피드백 제출 | 전체 데이터 조회, 권한 변경, Hermes 학습 승인, 민감 데이터 업로드 | "파일럿 사용자는 실제 업무 흐름을 기준으로 AdMate가 도움이 되는 지점과 불편한 지점을 알려주는 역할입니다." |
| 리뷰어 | 특정 영역의 판단을 검토하도록 승인된 사용자 | 피드백과 학습 후보 검토, 기준 반영 여부 의견, 일부 결과 품질 확인 | 단독 전역 기준 변경, 권한 부여, 승인 없는 학습 반영 | "리뷰어는 좋은 판단이 운영 기준으로 쌓이기 전에 한 번 더 확인하는 역할입니다." |
| 관리자 | 파일럿 운영과 권한, 보안을 관리하는 사람 | 접근 승인/반려, 권한 부여, reviewer 지정, audit/operator 기록 확인, 예외 승인 | 민감 정보를 문서나 캡처에 노출, 비밀번호/토큰 공유, 승인 없는 자동 변경 | "관리자는 파일럿이 안전하게 운영되도록 권한과 기록, 예외 처리를 관리합니다." |

권한 설명 원칙:

- 신규 사용자는 기본적으로 최소 권한에서 시작한다.
- 사용자가 직접 자신의 역할을 확정하지 않는다.
- Hermes 학습 영향 권한은 별도 승인된 사용자에게만 부여한다.
- 권한 변경, 승인, 반려, 학습 반영은 audit/operator 기록 대상이다.
- Core/Sentinel이 AdMate 인증의 기준이며, 제품별 화면은 통제된 handoff와 제품별 세션을 소비한다.

## 8. 익명 피드백 보드 소개 문안

### 본문 삽입용 짧은 문안

```text
파일럿 중 불편한 점, 잘못 이해될 수 있는 문구, 실제 업무와 맞지 않는 흐름은 익명 피드백 보드에 남길 수 있습니다.
이 보드는 사람을 평가하기 위한 공간이 아니라, AdMate가 실무 흐름에 맞게 개선되어야 할 지점을 모으는 공간입니다.
민감 정보, 광고주명, 계정명, 캠페인명, 원본 URL, 내부 캡처는 올리지 말고 상황을 요약해서 남겨 주세요.
```

### 원칙

| 원칙 | 설명 |
|---|---|
| 익명성 | 이름을 밝히지 않아도 문제와 개선점을 남길 수 있어야 한다. |
| 비난 금지 | 특정 개인이나 팀의 실수를 지적하는 공간이 아니라 제품 개선을 위한 공간이다. |
| 민감 정보 금지 | 광고주명, 캠페인명, 계정 식별자, 원본 데이터, 캡처 이미지는 올리지 않는다. |
| 개선 중심 | "어디서 막혔는지", "어떤 표현이 불안했는지", "어떤 확인이 줄면 좋은지"를 중심으로 남긴다. |
| 후속 분리 | 보드 사용법, 태그, 처리 상태, 응답 기준은 후속 파일럿 사용 가이드에서 다룬다. |

## 9. 안전 및 보안 금지 원칙

### 문서와 캡처 제작 금지

- 실제 광고주명, 브랜드명, 캠페인명, 계정명, 담당자 이메일, 전화번호가 보이는 캡처를 넣지 않는다.
- 원본 미디어믹스 엑셀 행, 원본 리포트 행, 원본 API 응답, 원본 URL 전체를 넣지 않는다.
- 토큰, API key, service role key, cookie, session, handoff code, credential, env 값은 어떤 형태로도 넣지 않는다.
- production 콘솔, DB, provider 화면의 원본 민감 데이터를 그대로 캡처하지 않는다.
- redaction이 끝나지 않은 캡처를 임시로라도 소개 문서에 넣지 않는다.

### 사용 설명에서 금지

- AdMate가 실무자를 평가하거나 대체한다고 설명하지 않는다.
- 모든 피드백이 자동으로 Hermes 학습에 반영된다고 설명하지 않는다.
- 사용자의 승인 없이 캠페인이 자동 수정된다고 설명하지 않는다.
- 익명 피드백을 인사 평가, 개인 평가, 책임 추궁 목적으로 사용한다고 암시하지 않는다.
- "AI가 알아서 판단한다"는 표현을 쓰지 않는다. 최종 판단과 예외 승인은 사람의 역할로 둔다.

### 데이터 및 LLM 전달 금지

- raw campaign-level 데이터는 LLM에 직접 전달하지 않는다.
- 외부 LLM/API에는 필요한 경우에만 익명화, 집계, 요약된 데이터만 전달한다.
- smoke test, fixture, sample 데이터는 실제 운영 학습 집계와 분리한다.
- 권한 없는 사용자의 action은 학습 신호로 자동 사용하지 않는다.
- 보안 오류, 인증 오류, provider 오류는 내부 세부 원인을 사용자 화면에 노출하지 않는다.

## 10. 문서 첫 페이지 서문 초안

```markdown
# AdMate 파일럿 소개
## 반복 확인은 줄이고, 판단은 남깁니다

이 문서는 초기 파일럿에 참여하는 실무자를 위한 AdMate 소개 문서입니다.
AdMate는 사람을 대체하는 도구가 아닙니다.
캠페인 운영에서 반복적으로 발생하는 정책 확인, 세팅 검수, 캡처 준비, 성과 예측, 이상 감지의 부담을 줄이고,
실무자가 내린 올바른 판단을 다음 운영 기준으로 남길 수 있게 돕는 AI 업무 파트너입니다.

파일럿의 목적은 완성된 시스템을 일방적으로 배포하는 것이 아니라,
실제 업무 흐름 안에서 어떤 확인이 줄어들 수 있는지,
어떤 문구와 화면이 더 안전해야 하는지,
어떤 판단이 다음 운영 기준으로 기록될 가치가 있는지를 함께 확인하는 것입니다.

이 문서의 화면 이미지는 추후 redacted 또는 synthetic 캡처로만 삽입합니다.
광고주명, 계정명, 캠페인명, 담당자 정보, 토큰, 원본 URL, 원본 리포트 행 등 민감 정보는 문서와 피드백에 포함하지 않습니다.
```

## 11. 다음 작업 큐

| 큐 | 작업 | 산출물 | 승인 기준 |
|---|---|---|---|
| 캡처 수집 | Compass, Sentinel, Lens, Foresight, Agent Core별 redacted 또는 synthetic 캡처 후보 수집 | 캡처 후보 폴더와 placeholder 매핑표 | 민감 정보가 보이지 않고, 소개 문서 문장과 맞는 화면이어야 함 |
| 화면 QA | 데스크톱/모바일 화면에서 텍스트 겹침, 민감 정보, 내부 용어 과잉 노출 확인 | 화면 QA 체크리스트 | 광고주, 계정, 토큰, 원본 데이터 노출 0건 |
| 사용 가이드 분리 | 소개 문서에서 제외한 상세 절차를 제품별 파일럿 사용 가이드로 분리 | Compass/Sentinel/Lens/Foresight/Agent Core 사용 가이드 초안 | 소개 문서는 설득과 이해, 가이드는 단계별 사용법으로 역할이 분리되어야 함 |
| 최종 문서 제작 | 제목 확정, 목차 확정, 문장 다듬기, placeholder 교체, PDF/Slides 여부 결정 | `AdMate 파일럿 소개` 최종 문서 | 커맨더 승인 후 배포 범위와 파일 형식 확정 |

## 12. 근거 문장 및 출처 메모

### 에이전트 결과 요약 반영

| 근거 | 반영 내용 | 출처 |
|---|---|---|
| AdMate 제품군은 Compass, Sentinel, Lens, Foresight, Agent Core로 구성된다. | 제품 흐름과 목차 구성의 기준으로 반영 | `D:\Projects\AdMate\admate-docs\AGENTS.md` |
| 실무자 대상 메시지는 "대체"가 아니라 반복 확인을 줄이고 전략과 판단에 집중하게 만드는 AI 업무 파트너다. | 핵심 메시지와 제목 후보에 반영 | `D:\Projects\AdMate\admate-docs\AGENTS.md`, `D:\Projects\AdMate\admate-docs\strategy\01_AdMate_Unified_Agent_Architecture_v1_1.md`, `D:\Projects\AdMate\admate-docs\strategy\02_AdMate_Agent_Core_Naming_and_Structure_v1.md` |
| Core/Sentinel production auth smoke, Sentinel Meta prelaunch live read, readback checks가 수행되었고 raw secrets, tokens, cookies, sessions, credential values, raw provider payloads, raw production rows 출력은 피했다. | 현재 Core/Sentinel 기준 설명과 보안 원칙에 반영 | `D:\Projects\AdMate\admate-docs\docs\tasks\2026-06-07_cross_product_live_validation_result_v1.md` |
| Core/Sentinel은 AdMate 인증 기준이며 제품들은 통제된 handoff를 소비한다. | 권한 개요와 사용자 설명 원칙에 반영 | `D:\Projects\AdMate\admate-docs\docs\qa\auth-access-policy-and-qa-checklist_v1.md` |
| 신규 사용자는 최소 권한에서 시작하고, Hermes 학습 권한은 별도 승인된 사용자에게만 부여한다. | 선택 사용자, 리뷰어, 관리자 권한 개요에 반영 | `D:\Projects\AdMate\admate-docs\strategy\17_AdMate_User_Access_Roles_and_Approval_Model_v1.md` |
| 현재 Sentinel 설명은 legacy repo가 아니라 Core-native Sentinel surface 기준이어야 한다. | Sentinel 설명과 캡처 placeholder를 `admate-agent-core` 화면 기준으로 작성 | `D:\Projects\AdMate\admate-agent-core\src\app\sentinel\prelaunch\page.tsx`, `D:\Projects\AdMate\admate-agent-core\src\components\sentinel\SentinelPrelaunchPreviewPanel.tsx`, `D:\Projects\AdMate\admate-agent-core\src\components\sentinel\SentinelPrelaunchStatusPanel.tsx` |
| Sentinel Legacy는 production owner가 아니며 Core-native Sentinel의 read-only reference material로만 사용한다. | Legacy를 원형 근거로만 제한 | `D:\Projects\AdMate\admate-sentinel-legacy\docs\tasks\2026-05-17_sentinel_legacy_actual_implementation_audit_v3.md` |
| Pre-launch validation의 원형은 media-mix Excel과 실제 Meta/Google 설정을 비교하고, 결과를 PASS/WARNING/FAIL 또는 severity로 분류하는 launch gate다. | Sentinel pre-launch 설명의 도메인 배경으로만 반영 | `D:\Projects\AdMate\admate-sentinel-legacy\README.md`, `D:\Projects\AdMate\admate-sentinel-legacy\docs\PRD-prelaunch-validation.md` |
| Compass는 정책/가이드 RAG, Lens는 캡처/증빙 자동화, Foresight는 성과 예측/미디어 플래닝이다. | 플랫폼별 캡처 placeholder와 섹션 목적에 반영 | `D:\Projects\AdMate\admate-docs\AGENTS.md`, `D:\Projects\AdMate\admate-compass`, `D:\Projects\AdMate\admate-lens`, `D:\Projects\AdMate\admate-foresight` |

### 문서 제작 시 유지할 판단

- 이 문서는 소개 설계안이다. 실제 사용법, 클릭 순서, 운영 SOP는 후속 가이드로 분리한다.
- 화면 캡처가 들어가기 전까지 이 문서는 commander review용 blueprint로 유지한다.
- 캡처는 실제 데이터가 아니라 redacted 또는 synthetic 데이터로만 제작한다.
- Sentinel 설명의 기술 기준은 `D:\Projects\AdMate\admate-agent-core`이며, `D:\Projects\AdMate\admate-sentinel-legacy`는 원형과 도메인 근거로만 참조한다.
