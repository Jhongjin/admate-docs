# Creative Studio Agent Initial Setup Status

작성일: 2026-05-06

대상 폴더:

```text
D:\Projects\AdMate Creative Studio Agent
```

## 1. 현재 상태

Creative Studio Agent 초기 세팅 문서가 생성됐다.

생성/정리된 파일:

```text
AGENTS.md
README.md
docs/strategy/AdMate_Creative_Studio_Agent_PRD_v1.md
docs/references/ai-video-tools-review-v1.md
docs/references/presenter-persona-guide-v1.md
docs/references/ai-influencer-asset-inventory-v1.md
docs/storyboard/executive-5min-storyboard-v1.md
docs/storyboard/planner-90s-storyboard-v1.md
docs/security/video-production-safety-checklist-v1.md
```

현재 `.git`은 존재한다. 이번 단계에서 repo init/remote 설정은 새로 하지 않았다.

## 2. AI Influencer Asset

Asset 위치:

```text
D:\Projects\AdMate Creative Studio Agent\AI Influencer
```

요약:

- PNG 총 27개
- master face: 1개
- closeup/profile 후보 존재
- side/angle 후보 존재
- full body 후보 존재
- video scene 후보 10개

대표 후보:

```text
lua_brand_safe_profile_v1_ivory_shirt.png
lua_master_face_v1.png
lua_smile_v1_soft_window_blouse.png
lua_video_01_scene_04_soft_smile.png
```

보류 리스크:

- lipstick/beauty 컷은 제품 endorsement처럼 보일 수 있음
- mirror selfie 컷은 private/UGC 톤이 강함
- Hannam street fullbody는 실제 장소/상호처럼 보이는 배경 리스크가 있음
- Lua AI Lifestyle Muse logo card는 AdMate 브랜드와 불일치 가능

## 3. 운영 원칙

- 이미지는 read-only reference로 유지한다.
- 이미지 수정/삭제/이동 금지.
- 실제 인물 imitation 금지.
- AI presenter는 가상 인물/브랜드 캐릭터로만 사용한다.
- 회사 내부 화면, 캠페인명, 광고주명, 계정정보, 민감 데이터 노출 금지.
- 임원 보고 영상과 플래너 소개 영상은 톤을 분리한다.

## 4. 다음 후보 작업

1. AdMate 공식 4개 제품명으로 product pillar 명칭 교체
2. approved message library 작성
3. dummy campaign/mock UI 기준 수립
4. presenter voice/tone script guide v1 작성
5. Creative Studio repo remote/commit 정책 확정

## 5. Rollback

문서만 되돌릴 경우:

```powershell
Remove-Item -Recurse -Force docs
Remove-Item -Force AGENTS.md, README.md
```

`AI Influencer/` 폴더는 삭제하거나 수정하지 않는다.
