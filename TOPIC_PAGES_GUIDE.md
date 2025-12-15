# Topic Pages Conversion Guide

## Overview

I've created 3 template topic pages you can use as patterns to replicate the remaining pages:

1. **do-you-need-insulin-pump-insurance** - Education/requirements page
2. **best-insulin-pump-insurance-uk** - Comparison/review page
3. **medtronic-insulin-pump-insurance** - Device-specific page

## Page Mapping: Original → New

Convert these yoga pages to insulin pump pages following the templates:

### Education/Requirements Pages (6 pages)

| Original Page | New Page | Template | Content Focus |
|---|---|---|---|
| `/do-you-need-yoga-teacher-insurance` | `/do-you-need-insulin-pump-insurance` | Template 1 | Why you need insurance, NHS vs private, financial protection |
| `/yoga-teacher-training-insurance` | `/tandem-tslim-insurance` | Template 3 | Device-specific guide for Tandem t:slim X2 users |
| `/trainee-yoga-teacher-insurance` | `/children-diabetes-insurance` | Custom | Insurance for kids/teens with T1D |
| `/yoga-alliance-insurance-uk` | `/dexcom-cgm-insurance` | Template 3 | Device-specific guide for Dexcom users |
| `/balens-yoga-teacher-insurance` | `/freestyle-libre-insurance` | Template 3 | Device-specific guide for FreeStyle Libre users |
| `/fitness-instructor-insurance-uk` | `/diabetes-device-insurance-uk` | Template 1 | Broader diabetes technology insurance guide |

### Comparison/Review Pages (4 pages)

| Original Page | New Page | Template | Content Focus |
|---|---|---|---|
| `/best-yoga-teacher-insurance-uk` | `/best-insulin-pump-insurance-uk` | Template 2 | Compare best providers, coverage levels |
| `/compare-yoga-teacher-insurance-uk` | `/compare-insulin-pump-insurance-uk` | Template 2 | Feature-by-feature provider comparison |
| `/how-much-yoga-teacher-insurance-cost` | `/how-much-does-insulin-pump-insurance-cost` | Custom | Pricing breakdown and factors affecting cost |
| `/yoga-teacher-liability-insurance` | `/insulin-pump-cover` | Custom | Main coverage types explained |

### Niche/Specialized Pages (4 pages)

| Original Page | New Page | Template | Content Focus |
|---|---|---|---|
| `/hot-yoga-insurance` | `/medtronic-insulin-pump-insurance` | Template 3 | Medtronic 780G/670G/640G specific coverage |
| `/aerial-yoga-insurance` | `/omnipod-insurance` | Template 3 | Omnipod Dash/5 specific coverage |
| `/group-fitness-instructor-insurance` | `/travel-insulin-pump-insurance` | Custom | Travel-specific insurance coverage |
| `/pilates-instructor-insurance` | `/cgm-insurance-cover` | Custom | CGM-specific coverage guide |

## Template Patterns

### Template 1: Education/Requirements Guide
**Use for:** Do-you-need-insurance type pages

**Structure:**
1. H1 Title (question format)
2. Intro paragraph
3. Featured image (diabetes technology related)
4. Quick Answer box (cyan background)
5. 2-3 main content sections (H2)
6. Key considerations in card format
7. Who-specifically-needs-insurance section
8. CTA to get quote

**Example:**
```tsx
// Hero section with question-based title
// Blue/cyan "Quick Answer" box with direct answer
// Multiple H2 sections explaining why/who needs insurance
// Card boxes for key considerations
// Link to calculator at bottom
```

### Template 2: Comparison/Review Guide
**Use for:** Best providers, cost comparison pages

**Structure:**
1. H1 Title (review/comparison format)
2. Intro paragraph
3. Featured image
4. Key Considerations box
5. What makes great insurance (features list)
6. Coverage comparison (table format)
7. How to choose provider (step-by-step)
8. Cost vs peace of mind section
9. CTA to get quote
10. Related articles section

**Example:**
```tsx
// Focus on provider features/comparison
// Include data tables for pricing tiers
// Feature breakdowns by coverage level
// Step-by-step decision making guide
// Comparison table for different options
```

### Template 3: Device-Specific Guide
**Use for:** Medtronic, Omnipod, Tandem, Dexcom, FreeStyle Libre pages

**Structure:**
1. H1 Title (device brand in title)
2. Intro paragraph specific to device
3. Featured image
4. Quick Overview box (devices covered + price range)
5. Devices Covered section (each model explained)
6. Why [Brand] insurance matters (specific benefits)
7. What's Covered (table or two-column layout)
8. Insurance Costs (table with price ranges)
9. FAQs (device-specific questions)
10. CTA to get quote

**Example:**
```tsx
// Device-specific models and costs
// Brand-specific features and concerns
// Device-specific FAQ section
// Device-specific imagery or context
// Technical details about each model
```

## Color Scheme Reference

- **Primary accent:** `cyan-400` or `cyan-500`
- **Secondary accent:** `teal-500` or `teal-600`
- **Backgrounds:** `slate-800/50` or `slate-800/30`
- **Borders:** `border-cyan-500/30` for highlighted boxes
- **Links:** `text-cyan-400 hover:text-cyan-300`
- **Success/positive:** `text-green-400`
- **Warning/negative:** `text-red-400`

## Content Conversion Examples

### Yoga → Insulin Pump Terminology

| Yoga Term | Insulin Pump Equivalent |
|---|---|
| Yoga teacher | Insulin pump user |
| Students | Diabetes patients/people with T1D |
| Injury claim | Device damage claim |
| Professional indemnity | Comprehensive device cover |
| Public liability | Theft & loss protection |
| Studio | Daily life/home |
| Teaching style | Device type |
| Experience level | Device usage duration |
| Yoga Alliance | Breakthrough T1D / Diabetes UK |
| £15-38/month | £6.95-10/month |
| Teaching requirement | Medical necessity |

### Metadata Template

```tsx
export const metadata: Metadata = {
  title: "[Device/Topic] Insulin Pump Insurance UK 2025 | [Benefit/Feature]",
  description: "Insulin pump insurance for [device/topic] in the UK. [Key benefit]. Get comprehensive cover for [device type] from £6.95/month.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/[page-slug]",
  },
}
```

## SEO Keywords to Include

**Always naturally include in content:**
- insulin pump insurance
- diabetes device insurance
- [Device brand] insurance (Medtronic, Omnipod, Tandem, etc.)
- CGM insurance (for CGM pages)
- pump cover UK
- UK diabetes device cover
- insulin pump protection

## Quick Replication Checklist

For each page you create:

- [ ] Update metadata (title, description, canonical URL)
- [ ] Change all references from yoga → insulin pump/diabetes
- [ ] Update pricing from £15-38 → £6.95-10
- [ ] Change colors: blue-500 → cyan-500
- [ ] Update featured image to diabetes technology related
- [ ] Replace all yoga-specific scenarios with pump-specific scenarios
- [ ] Update company/provider names (Yoga Alliance → Diabetes UK, etc.)
- [ ] Change FAQ questions to device/insulin pump specific
- [ ] Update internal links to point to new insulin pump pages
- [ ] Add syringe emoji or diabetes icons where appropriate
- [ ] Test all links point to correct pages
- [ ] Verify cyan color scheme throughout

## Directory Structure

Create these directories for the new pages:

```
app/
├── do-you-need-insulin-pump-insurance/
│   └── page.tsx
├── insulin-pump-cover/
│   └── page.tsx
├── medtronic-insulin-pump-insurance/
│   └── page.tsx
├── omnipod-insurance/
│   └── page.tsx
├── tandem-tslim-insurance/
│   └── page.tsx
├── dexcom-cgm-insurance/
│   └── page.tsx
├── freestyle-libre-insurance/
│   └── page.tsx
├── cgm-insurance-cover/
│   └── page.tsx
├── diabetes-device-insurance-uk/
│   └── page.tsx
├── compare-insulin-pump-insurance-uk/
│   └── page.tsx
├── best-insulin-pump-insurance-uk/
│   └── page.tsx (✅ Created)
├── how-much-does-insulin-pump-insurance-cost/
│   └── page.tsx
├── children-diabetes-insurance/
│   └── page.tsx
├── travel-insulin-pump-insurance/
│   └── page.tsx
└── nhs-vs-private-pump-insurance/
    └── page.tsx
```

## Articles - Similar Pattern

Articles follow a similar pattern but with more depth. They're in `/app/articles/[slug]/page.tsx`

Key sections for articles:
1. Metadata with article-specific keywords
2. Header with featured image
3. Byline/date (optional)
4. Table of Contents
5. Multiple H2 sections (800+ words)
6. Internal links
7. Related articles section
8. CTA

## Next Steps

1. **Duplicate Template 1** for education pages (do-you-need, cost-guide, etc.)
2. **Duplicate Template 2** for comparison pages (best, compare, etc.)
3. **Duplicate Template 3** for device pages (medtronic, omnipod, dexcom, etc.)
4. **Create custom versions** as needed for unique content
5. **Update internal links** across all pages to reference new pages

## Estimated Timeline

- 4 pages/day at ~15-20 minutes per page conversion
- ~3-4 days for all 14-16 topic pages
- Keep templates consistent for best results

---

**Questions?** Refer back to the 3 completed templates for exact code structure and patterns.
