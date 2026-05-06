# MEMORY.md Template

작성일: YYYY-MM-DD  
repo: <repo-name>  
AdMate 역할: <Compass/Sentinel/Lens/Foresight/Agent Core/Homepage/Docs>

---

## 1. Project Identity

이 repo는 AdMate 생태계에서 다음 역할을 담당한다.

```text
<한 줄 정의>
```

---

## 2. Source of Truth

먼저 읽을 문서:

```text
AGENTS.md
README.md
<필요한 strategy 문서>
<필요한 design 문서>
```

중앙 원본:

```text
C:\Users\Administrator\projects\admate-docs
```

---

## 3. Non-negotiable Facts

- secret, API key, token, credential 값은 출력하지 않는다.
- `.env.local`은 커밋하지 않는다.
- main에 직접 push하지 않는다.
- commit/push/PR은 사용자 승인 후 진행한다.
- 작업 전 수정 후보 파일, 위험 요소, 계획을 먼저 보고한다.

---

## 4. Build/Test

확인 명령:

```text
<npm run build 등>
```

---

## 5. Special Constraints

- <repo별 절대 제약>

