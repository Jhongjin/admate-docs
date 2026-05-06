# RULES.md Template

작성일: YYYY-MM-DD  
repo: <repo-name>

---

## 1. Work Rules

- 먼저 문서를 읽고 repo 구조를 요약한다.
- 아직 파일을 수정하지 않는다.
- 수정 후보 파일, 위험 요소, 작업 계획을 먼저 보고한다.
- 사용자 승인 후 수정한다.
- build/test 결과를 보고한다.
- 변경 파일 목록과 rollback 방법을 보고한다.

---

## 2. Security Rules

- secret, API key, token, credential 값을 출력하지 않는다.
- `.env`, `.env.local`, `.env.production`을 커밋하지 않는다.
- service role key를 브라우저나 클라이언트에 노출하지 않는다.
- raw campaign-level 데이터는 LLM에 직접 전달하지 않는다.

---

## 3. Git Rules

- main에 직접 push하지 않는다.
- commit/push/PR은 사용자 승인 후 진행한다.
- 사용자 변경사항을 임의로 revert하지 않는다.

---

## 4. Repo-specific Rules

- <repo별 제약>

