# AdMate 조직/권한 Seed 요약

기준일: 2026-05-22

## 생성 파일

- SQL: `C:\Users\Administrator\projects\admate-docs\docs\generated\2026-05-22_admate_org_access_seed_apply.local.sql`

## 카운트

- 조직 rows: 86
- 직원 rows: 399
- 멤버십 rows: 406
- primary memberships: 382
- concurrent memberships: 7
- status bucket memberships: 17
- policy rules: 7
- access grants: 0
- approval channels: 1

## 조직 category

- ad_planner: 39
- audit: 1
- management: 10
- media_admin: 1
- non_ad: 3
- platform: 22
- support: 8
- unknown: 2

## 직원 status

- active: 382
- on_leave: 17

## 제외/확인

- 이메일이 없거나 실제 주소가 아닌 행: 1
- 파싱 실패 행: 0
- 내선번호 확인 필요/null 처리: 21

실제 주소가 아닌 행은 production seed에서 제외했습니다. 내선번호가 확인 필요인 실습생/직원은 extension을 null로 넣습니다.
