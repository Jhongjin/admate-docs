# AdMate Skills Catalog

작성일: 2026-05-03  
목적: AdMate 각 repo에 배포할 Codex skill 초안을 중앙에서 관리한다.

---

## 1. 사용 방식

이 폴더는 skill 원본 catalog다.

각 skill은 필요한 repo의 다음 위치로 복사해서 사용한다.

```text
<repo>/.agents/skills/<skill-name>/SKILL.md
```

복사 후 repo 실제 경로, build/test 명령, 금지 영역에 맞게 조정한다.

---

## 2. Skill 목록

| skill | 적용 repo | 목적 |
|---|---|---|
| admate-docs-director | admate-docs | 중앙 전략 문서, PRD, handoff, prompt 관리 |
| openclaw-agent-core | openclaw-monitor | Agent Core, Sentinel Live Monitoring, Hermes, audit log 작업 |
| admate-homepage-command-center | admate-homepage | Command Center read-only dashboard 작업 |
| admate-compass-rag | Jhongjin-admate-guide-codex | Compass 정책/가이드 RAG 작업 |
| admate-lens-capture | admate-capture-pro | Lens 캡처/증빙 자동화 작업 |
| admate-foresight-planning | Foresight repo | Foresight 성과 예측/플래닝 작업 |

---

## 3. 운영 원칙

- Skill은 한 가지 작업 범위에 집중한다.
- `description`에는 언제 사용해야 하는지 명확히 적는다.
- 너무 긴 전략 문서는 references로 분리한다.
- secret/API key/token 출력 금지 원칙은 모든 skill에 포함한다.
- repo에 배포한 뒤 실제 동작에 맞게 갱신한다.

