# AdMate Repo Harness Checklist v1

작성일: 2026-05-03  
문서 상태: 초안 v1  
작성 목적: AdMate 각 repo에 Codex harness와 skill을 적용하기 전 확인해야 할 체크리스트를 정의한다.

---

## 1. 공통 체크리스트

각 repo에 대해 다음을 확인한다.

```text
[ ] AGENTS.md 존재
[ ] README.md 존재
[ ] 이 repo의 AdMate 제품 역할 명시
[ ] 먼저 읽을 strategy/design 문서 명시
[ ] secret/API key/token 출력 금지 명시
[ ] 승인 전 수정 금지 또는 수정 전 보고 원칙 명시
[ ] commit/push 사용자 승인 전 금지 명시
[ ] build/test 명령 확인
[ ] rollback 보고 원칙 명시
[ ] .env 파일이 git 추적 대상이 아님
[ ] docs/design/openclaw-theme-reference.md 존재 또는 중앙 문서 참조
[ ] .ai/MEMORY.md 존재
[ ] .ai/PLAN.md 존재
[ ] .ai/RULES.md 존재
[ ] .ai/TASKS.md 존재 또는 필요 여부 검토
[ ] .agents/skills/<repo-skill>/SKILL.md 존재
```

---

## 2. repo별 필수 문서

## 2.1 openclaw-monitor

필수 참조:

```text
AGENTS.md
README.md
docs/strategy/05_AdMate_Product_Map_v1.md
docs/strategy/06_AdMate_Agent_Core_Operating_Model_v1.md
docs/strategy/08_AdMate_Unified_Data_Learning_Governance_v1.md
docs/strategy/14_AdMate_Repo_Codex_Integration_Guide_v1.md
docs/design/openclaw-theme-reference.md
```

필수 skill:

```text
openclaw-agent-core
```

특별 주의:

- service role key 출력 금지
- Slack token 출력 금지
- Hermes 학습 권한 변경 주의
- operator_actions / audit_logs 임의 변경 금지
- Command Center Auth/DB/API는 이 repo가 source of truth

## 2.2 admate-homepage

필수 참조:

```text
AGENTS.md
README.md
docs/strategy/05_AdMate_Product_Map_v1.md
docs/strategy/13_AdMate_Homepage_IA_Brand_Copy_v1.md
docs/strategy/15_AdMate_Command_Center_Executive_Dashboard_PRD_v1.md
docs/design/openclaw-theme-reference.md
```

필수 skill:

```text
admate-homepage-command-center
```

특별 주의:

- 기존 홈페이지는 이미 완료된 화면으로 간주
- Command Center는 별도 route로 관리
- 담당자 입력/Auth/DB는 만들지 않음
- openclaw-monitor API를 read-only로 표시

## 2.3 admate-capture-pro

필수 skill:

```text
admate-lens-capture
```

특별 주의:

- 캡처 결과물 UI 임의 변경 금지
- 광고 미리보기/픽셀 매칭 영역 변경 금지
- 관리자/입력/목록/작업 이력 UI만 테마 적용 대상

## 2.4 Jhongjin-admate-guide-codex

필수 skill:

```text
admate-compass-rag
```

특별 주의:

- RAG 로직 변경 시 정확도/근거 제공 검증
- embedding/vector storage 변경 전 보고
- crawler/parser 변경 시 문서 품질 점검

## 2.5 Foresight repo

필수 skill:

```text
admate-foresight-planning
```

특별 주의:

- 최근 최대 6개월 데이터 우선
- raw campaign-level 데이터 LLM 직접 전달 금지
- 마크업/Net/Gross/통화/필터 메타데이터 기록

---

## 3. 적용 단계

각 repo에 harness를 적용할 때는 다음 순서를 따른다.

```text
1. 현재 repo 구조 읽기
2. 기존 AGENTS.md/README 확인
3. .ai 폴더 추가
4. MEMORY/PLAN/RULES/TASKS 작성
5. 중앙 skills-catalog에서 해당 skill 복사
6. repo 실제 경로와 명령에 맞게 SKILL.md 수정
7. build/test 명령 확인
8. Codex 첫 프롬프트 업데이트
9. 변경 파일과 rollback 방법 보고
```

---

## 4. 완료 기준

repo harness 적용 완료 기준:

```text
1. 새 Agent가 AGENTS.md만 읽어도 다음에 읽을 문서를 알 수 있다.
2. .ai/MEMORY.md에 repo의 변하지 않는 제약이 있다.
3. .ai/PLAN.md에 현재 진행 중인 작업이 있다.
4. .ai/RULES.md에 금지/승인/검증 원칙이 있다.
5. 관련 skill이 .agents/skills에 있다.
6. build/test 또는 smoke 검증 방법이 명시되어 있다.
7. secret 출력 금지와 commit/push 승인 원칙이 명시되어 있다.
```

