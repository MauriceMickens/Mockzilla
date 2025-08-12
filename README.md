# Mockzilla

## Validation Objectives & Success Metrics

### Primary Goal
Prove demand for Mockzilla before writing product code by converting cold traffic into email sign-ups for the "5-question starter pack."

### Success Bars (must hit within 72 hours of ad launch)

**Landing-page CVR ≥ 15%**
- CVR = Leads / Landing Clicks

**Volume/Economics: ≥ 30 leads in 72h or CAC (email) ≤ $5**
- CAC = Ad Spend / Leads

**Lead-magnet engagement ≥ 40%**
- Doc Open Rate = Unique Doc Views / Leads

### Guardrails (nice-to-have, diagnose if failing)
- CTR ≥ 1.0% on best creative
- Bounce ≤ 65%, LCP ≤ 2.5s (Lighthouse)

### Instrumentation (single source of truth)

**Traffic & spend:** Meta Ads Manager (campaign: Mockzilla_Validation_01)

**Clicks:** Meta "Link Clicks" with UTMs `?utm_source=meta&utm_campaign=launch1&utm_content={hook}`

**Leads:** MailerLite group EarlyAccess (counts) + Zapier → Google Sheet log (email, timestamp, variant, utm_campaign)

**Lead-magnet opens:** Google Drive "Viewer count" on the starter-pack Doc (or MailerLite link-clicks as backup)

**Pixel events:** Meta Pixel PageView (all) + Lead on /thanks

### Decision Gate (at T+72h from ad start)

**🟢 GREEN (Build MVP now):** Meets all bars above

**🟡 YELLOW (Iterate once):** CVR 10–14% or Leads 15–29 or CAC $5–8 or Doc opens 25–39% → adjust headline/offer/creative and rerun 48h

**🔴 RED (Stop/Pivot):** CVR <10% with ≥200 clicks or Leads <15 after $150 spend

### Ownership & Cadence

**Owner:** Maurice

**Daily (AM/PM):** Log Spend, Clicks, Leads, CVR, CAC, Doc Opens in the validation Sheet

**T+72h:** Post snapshot + go/no-go decision to the Kanban "Done" column
