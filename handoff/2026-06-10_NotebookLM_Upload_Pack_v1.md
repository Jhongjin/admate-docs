# NotebookLM Upload Pack v1

Date: 2026-06-10 KST
Purpose: NotebookLM에 넣을 AdMate 문서 우선순위와 제외 대상을 정리한다.

---

## Recommended Upload Order

### 1. Core Context

1. `D:\Projects\AdMate\admate-docs\handoff\2026-06-10_NotebookLM_AdMate_Ecosystem_Commander_Context_v1.md`
   - Commander 수준의 전체 생태계 요약.
   - NotebookLM 첫 source로 넣는다.

2. `D:\Projects\AdMate\admate-docs\README.md`
   - 중앙 문서 저장소와 canonical path 설명.

3. `D:\Projects\AdMate\admate-docs\strategy\05_AdMate_Product_Map_v1.md`
   - Compass, Sentinel, Lens, Foresight, Agent Core의 제품 지도.

4. `D:\Projects\AdMate\admate-docs\strategy\06_AdMate_Agent_Core_Operating_Model_v1.md`
   - Openclaw, Hermes, Agent Core 운영 모델.

5. `D:\Projects\AdMate\admate-docs\strategy\08_AdMate_Unified_Data_Learning_Governance_v1.md`
   - Campaign Intelligence, audit, learning governance.

6. `D:\Projects\AdMate\admate-docs\strategy\09_AdMate_Future_Strategy_Loop_v1.md`
   - Weekly intelligence와 Venture Lab형 장기 확장.

### 2. Executive Report Context

7. `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\README.md`
   - 임원 보고 영상 제작 패킷의 현재 상태.

8. `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\executive_message_bank_v2.md`
   - 임원 보고용 핵심 메시지와 피해야 할 표현.

9. `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\final_5min_narration_script_v2.md`
   - 5분 영상 내레이션 초안.

10. `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\v5_human_editorial_reset_v1.md`
    - 최신 사용자 피드백과 v6 카피/디자인 재작업 기준.

### 3. Product README Context

11. `D:\Projects\AdMate\admate-agent-core\README.md`
12. `D:\Projects\AdMate\admate-compass\README.md`
13. `D:\Projects\AdMate\admate-lens\README.md`
14. `D:\Projects\AdMate\admate-foresight\README.md`
15. `D:\Projects\AdMate\admate-homepage\README.md`
16. `D:\Projects\AdMate\admate-creative-studio\README.md`
17. `D:\Projects\AdMate\admate-design-director\README.md`
18. `D:\Projects\AdMate\admate-commander\README.md`
19. `D:\Projects\AdMate\admate-sentinel-legacy\README.md`

## Optional Uploads

- `D:\Projects\AdMate\admate-design-director\docs\design-system\admate-design-system-v1.md`
- `D:\Projects\AdMate\admate-design-director\docs\design-system\admate-ui-review-checklist-v1.md`
- `D:\Projects\AdMate\admate-creative-studio\docs\security\video-production-safety-checklist-v1.md`
- `D:\Projects\AdMate\admate-creative-studio\docs\references\presenter-persona-guide-v1.md`
- `D:\Projects\AdMate\admate-creative-studio\AI Influencer\post5_admate_executive_report_video\draft_pack\v4_copy_design_review_synthesis_v1.md`

## Do Not Upload

- `.env`, `.env.local`, `.env.production`, `.env*.local`
- API key, token, service role key, SMTP password, n8n credential
- Supabase/Meta/Gmail/Slack/Vercel secret values
- actual advertiser/campaign/account/performance raw data
- unapproved internal dashboard screenshots
- unapproved real office, employee, signage, or company-location images
- `node_modules`, `.next`, build output, cache files

## First NotebookLM Questions

```text
이 문서들 기준으로 AdMate를 임원에게 설명할 때 핵심 메시지를 3문장으로 요약해줘.
```

```text
Compass, Sentinel, Lens, Foresight, Agent Core의 역할을 겹치지 않게 설명해줘.
```

```text
임원 보고 영상용으로 AI 문장처럼 들리는 표현과 자연스러운 대체 표현을 정리해줘.
```

```text
5분 영상 Scene 2를 10장 슬라이드로 구성할 때 각 슬라이드의 핵심 문장과 proof object를 제안해줘.
```
