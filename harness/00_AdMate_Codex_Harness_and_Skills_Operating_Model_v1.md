# AdMate Codex Harness & Skills Operating Model v1

작성일: 2026-05-03  
문서 상태: 초안 v1  
작성 목적: AdMate 여러 repo와 Codex/Agent 작업을 안정적으로 운영하기 위한 harness 구조, skills 운영 방식, 문서 source of truth, 검증 루프, 주간 정리 루틴을 정의한다.

---

## 1. Executive Summary

AdMate는 여러 제품 repo와 하나의 중앙 문서 repo로 운영되는 AI Agent 기반 광고 운영 자동화 생태계다.

따라서 Codex/Agent 작업은 단발성 프롬프트에만 의존하면 안 된다. 각 Agent가 어디를 읽고, 무엇을 수정할 수 있으며, 어떤 검증을 해야 하고, 어떤 문서를 기준으로 삼아야 하는지 repo 안에서 명확히 볼 수 있어야 한다.

AdMate Codex Harness의 목표는 다음이다.

```text
사람은 방향과 승인 기준을 정한다.
Agent는 문서를 읽고, 계획을 세우고, 수정하고, 검증한다.
repo는 Agent가 이해할 수 있는 지도와 규칙과 검증 루프를 제공한다.
```

---

## 2. 적용 범위

이 운영 모델은 다음 repo에 적용한다.

| repo | AdMate 역할 | harness 우선순위 |
|---|---|---|
| admate-docs | 중앙 전략/문서/source of truth | 최우선 |
| openclaw-monitor | Agent Core / Sentinel Live Monitoring / Hermes | 최우선 |
| admate-homepage | 홈페이지 / Command Center read-only dashboard | 높음 |
| admate-capture-pro | AdMate Lens | 높음 |
| Jhongjin-admate-guide-codex | AdMate Compass | 높음 |
| Foresight 향후 repo | AdMate Foresight | 생성 시 적용 |

---

## 3. 핵심 원칙

## 3.1 AGENTS.md는 백과사전이 아니라 지도다

`AGENTS.md`는 너무 길어지면 Agent가 중요한 제약을 놓치기 쉽다.

권장 역할:

- 프로젝트 정체성
- 먼저 읽을 문서 목록
- 수정 전 보고 원칙
- secret 금지
- build/test 보고 원칙
- deeper docs 링크

긴 전략, 제품 정의, 운영 기준은 `docs/`, `strategy/`, `harness/`에 둔다.

## 3.2 Source of truth는 repo 안에서 읽을 수 있어야 한다

Slack, 구두 합의, 임시 채팅에만 남은 결정은 Agent에게 존재하지 않는 정보와 같다.

중요 결정은 다음 중 하나로 남긴다.

- `strategy/`
- `harness/`
- `working-notes/`
- 각 repo의 `.ai/PLAN.md`
- 각 repo의 `docs/`

## 3.3 Progressive disclosure

Agent가 모든 문서를 처음부터 다 읽게 하지 않는다.

권장 순서:

```text
AGENTS.md
→ INDEX.md 또는 README.md
→ 관련 strategy 문서
→ 관련 harness/skill 문서
→ 코드/구현 파일
```

## 3.4 사람 승인 전 수정 금지 원칙 유지

AdMate는 민감한 캠페인/광고 운영 데이터를 다루기 때문에, 기본 작업 루프는 보수적으로 유지한다.

```text
문서 읽기
→ 구조 요약
→ 수정 후보 파일 보고
→ 위험 요소 보고
→ 작업 계획 보고
→ 사용자 승인
→ 수정
→ build/test
→ 변경 파일/rollback 보고
```

## 3.5 검증 가능한 작업 루프

문서 지시만으로는 부족하다. 각 repo는 가능한 범위에서 빠른 검증 명령을 가져야 한다.

권장 명령:

```text
npm run build
npm run lint
npm test
npm run harness:smoke
npm run harness:report
```

초기에는 repo별로 가능한 명령만 정의한다.

---

## 4. admate-docs의 역할

`admate-docs`는 코드 작업 repo가 아니라 AdMate 전체의 장기기억이자 총괄 지휘 문서 프로젝트다.

역할:

- 전체 비전 관리
- 제품 구조 관리
- repo별 작업 기준 관리
- 디자인 기준 관리
- Codex 프롬프트 관리
- harness 운영 모델 관리
- skills catalog 원본 관리
- Command Center PRD 관리

`admate-docs`에서 만든 문서는 각 repo로 복사되거나 절대경로로 참조될 수 있다. 단, 원본 기준은 `admate-docs`다.

---

## 5. 각 repo에 둘 harness 구조

각 제품 repo에는 다음 최소 구조를 권장한다.

```text
AGENTS.md
.ai/
├─ MEMORY.md
├─ PLAN.md
├─ RULES.md
└─ TASKS.md
.agents/
└─ skills/
   └─ repo-specific-skill/
      └─ SKILL.md
```

### MEMORY.md

자주 바뀌지 않는 사실을 기록한다.

예:

- 이 repo의 AdMate 제품 역할
- 수정하면 안 되는 영역
- 핵심 기술 스택
- build/test 명령
- source of truth 문서

### PLAN.md

현재 작업 방향과 진행 중인 계획을 기록한다.

예:

- 이번 주 목표
- 수정 후보 파일
- 열린 의사결정
- 다음 작업 순서

### RULES.md

항상 지켜야 할 작업 규칙을 기록한다.

예:

- secret 출력 금지
- DB schema 변경 전 보고
- 캡처 결과물 UI 변경 금지
- 승인 전 commit/push 금지

### TASKS.md

작업 큐와 완료 상태를 기록한다.

예:

- 진행 중
- 다음 작업
- 보류
- 완료

---

## 6. Skills 운영 모델

Skill은 특정 작업을 안정적으로 반복하기 위한 재사용 workflow다.

AdMate에서는 다음 두 레벨로 운영한다.

## 6.1 중앙 skill catalog

위치:

```text
admate-docs/skills-catalog/
```

역할:

- 각 플랫폼 skill 원본 초안 보관
- skill 설명과 적용 범위 관리
- repo별 배포 전 검토

## 6.2 repo-local skills

위치:

```text
각 repo/.agents/skills/
```

역할:

- Codex가 실제 작업 중 자동/명시적으로 사용할 skill
- repo 구조, 명령, 제약 조건에 맞춘 지침 제공

중앙 catalog에서 각 repo로 복사한 뒤 repo별 경로와 명령에 맞게 조정한다.

---

## 7. AdMate 기본 skill 목록

| skill | 목적 |
|---|---|
| admate-docs-director | 중앙 전략 문서, PRD, handoff, prompt 작성 |
| openclaw-agent-core | Agent Core, Hermes, Sentinel Live Monitoring, 권한, audit log 작업 |
| admate-homepage-command-center | `/command-center` 임원 대시보드 read-only UI 작업 |
| admate-compass-rag | Compass 정책/가이드 RAG, 크롤링, 검색, 근거 답변 작업 |
| admate-lens-capture | Lens 캡처/증빙 자동화, 관리자 UI 작업 |
| admate-foresight-planning | Foresight Meta PoC, 벤치마크, 예측 지표 설계 |

---

## 8. repo별 적용 우선순위

### Phase 1. admate-docs

- harness 문서 생성
- templates 생성
- skills-catalog 생성
- INDEX 갱신

### Phase 2. openclaw-monitor

- `.ai/` 문서 추가
- `openclaw-agent-core` skill 추가
- Command Center Auth/DB/API 작업 기준 추가

### Phase 3. admate-homepage

- `.ai/` 문서 추가
- `admate-homepage-command-center` skill 추가
- 기존 홈페이지 변경 금지와 `/command-center` 관리 규칙 고정

### Phase 4. Compass / Lens / Foresight

- 제품별 skill 추가
- 제품별 금지 영역과 검증 명령 정의

---

## 9. Command Center와 연결

Command Center는 향후 Agent 작업 현황까지 보여줄 수 있어야 한다.

초기에는 사람이 주간 진행률을 입력한다.

향후 확장:

- 각 repo의 `.ai/PLAN.md`에서 현재 작업 목표 요약
- 각 repo의 build/test 상태 수집
- 열린 PR/작업 이슈 요약
- harness smoke 결과 요약
- Hermes가 주간 리스크 요약

단, 자동 수집은 권한/보안 검토 후 단계적으로 적용한다.

---

## 10. 운영 원칙 요약

```text
1. admate-docs는 source of truth다.
2. AGENTS.md는 짧은 지도 역할을 한다.
3. 긴 지식은 구조화된 문서에 둔다.
4. 각 repo는 .ai harness 문서를 가진다.
5. 반복 작업은 skill로 만든다.
6. 작업 전에는 계획을 보고한다.
7. 승인 전에는 수정/commit/push하지 않는다.
8. build/test와 rollback을 보고한다.
9. 오래된 문서는 주간 doc-gardening으로 정리한다.
10. secret, token, credential은 절대 출력하지 않는다.
```

