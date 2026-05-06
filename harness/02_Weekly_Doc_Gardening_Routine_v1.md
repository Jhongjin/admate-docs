# AdMate Weekly Doc Gardening Routine v1

작성일: 2026-05-03  
문서 상태: 초안 v1  
작성 목적: AdMate 문서와 repo별 harness가 오래되거나 중복되거나 실제 구현과 어긋나는 것을 막기 위한 주간 정리 루틴을 정의한다.

---

## 1. 목적

AdMate는 여러 repo와 여러 Agent가 동시에 움직이는 프로젝트다.

문서가 오래되면 Codex/Agent가 잘못된 기준으로 작업할 수 있다. 따라서 문서도 코드처럼 정기적으로 관리해야 한다.

Weekly Doc Gardening의 목적:

```text
중복 문서 정리
오래된 문서 표시
깨진 링크 확인
repo별 AGENTS/harness 최신화
실제 구현과 다른 설명 수정
새 의사결정 문서화
```

---

## 2. 주간 점검 항목

```text
[ ] INDEX.md가 실제 파일 목록과 맞는가
[ ] README.md의 필독 순서가 INDEX.md와 충돌하지 않는가
[ ] AGENTS.md가 너무 길어지지 않았는가
[ ] strategy 문서에 중복 handoff가 없는가
[ ] archive로 보낼 문서가 있는가
[ ] prompts가 최신 제품명과 repo명을 쓰는가
[ ] skills-catalog의 skill 설명이 현재 repo 역할과 맞는가
[ ] harness 문서가 실제 운영 방식과 맞는가
[ ] openclaw-theme-reference가 최신 UI 기준과 맞는가
[ ] Command Center PRD와 실제 구현이 충돌하지 않는가
```

---

## 3. 중복 문서 처리 원칙

중복 문서는 바로 삭제하지 않는다.

처리 순서:

```text
1. 중복 여부 확인
2. source of truth 결정
3. 중복본을 archive/duplicates로 이동
4. INDEX.md에서 제거 또는 archive 위치로 표시
5. 2주 이상 문제 없으면 삭제 여부 검토
```

---

## 4. 오래된 문서 처리 원칙

오래된 문서는 다음 중 하나로 처리한다.

```text
유지: 아직 기준 문서로 유효
갱신 필요: 내용은 유효하지만 최신화 필요
대체됨: 새 문서가 source of truth
archive: 참고용으로만 보관
삭제 후보: 더 이상 필요 없음
```

문서 상단에 필요 시 다음 표시를 추가한다.

```text
문서 상태: 유지 / 갱신 필요 / 대체됨 / archive / 삭제 후보
```

---

## 5. 주간 산출물

주간 정리 후 다음을 남긴다.

```text
working-notes/YYYY-MM-DD_doc_gardening_report.md
```

보고 항목:

- 이번 주 정리한 문서
- archive로 이동한 문서
- 새로 추가한 문서
- 갱신이 필요한 문서
- repo별 harness 적용 상태
- 다음 주 문서 작업

---

## 6. Command Center 연계

향후 Command Center에는 문서 운영 상태도 간단히 표시할 수 있다.

예:

```text
Docs Health: 정상
Harness Coverage: 2/5 repos
Skills Coverage: 2/5 repos
Stale Docs: 1
Broken Links: 0
```

---

## 7. 운영 원칙

```text
1. 문서는 Agent가 읽을 수 있어야 가치가 있다.
2. 중복 문서는 source of truth를 흐린다.
3. 오래된 지침은 잘못된 코드보다 더 위험할 수 있다.
4. 삭제보다 archive를 우선한다.
5. 중요한 대화와 결정은 repo 문서로 승격한다.
```

