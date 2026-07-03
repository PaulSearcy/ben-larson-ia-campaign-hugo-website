---
target: layouts/index.html
total_score: 24
p0_count: 0
p1_count: 0
timestamp: 2026-06-27T03-45-53Z
slug: layouts-index-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Mobile menu toggle lacks visual state; no loading indicators |
| 2 | Match System / Real World | 4 | Authentic Ben voice; plain, direct language throughout |
| 3 | User Control and Freedom | 3 | Clear navigation; straightforward site structure |
| 4 | Consistency and Standards | 3 | Internally consistent; standard web patterns |
| 5 | Error Prevention | 2 | Static site; no form validation visible in current templates |
| 6 | Recognition Rather Than Recall | 3 | Visible nav; proper icons with aria-labels now |
| 7 | Flexibility and Efficiency | 1 | No keyboard shortcuts; single path through content |
| 8 | Aesthetic and Minimalist Design | 3 | Improved hierarchy with featured issue; cleaner structure |
| 9 | Error Recovery | 2 | Basic 404 exists; limited error states overall |
| 10 | Help and Documentation | 1 | No FAQ; contact is the only support path |
| **Total** | | **24/40** | **Acceptable — improved from 23, but room remains** |

## Anti-Patterns Verdict

**LLM assessment:** Significant improvement. The previous navy+gold+red Democratic template palette is gone, replaced by a forest green + ochre combination that feels specific to Ben's "roots, growth, hope" framing. The typography moved from Montserrat/Open Sans (the default safe Google Fonts pair) to Libre Franklin + Source Sans 3 — still safe, but at least differentiated. The quote block's gold left border is gone (now uses decorative curly quotes instead). The issues section now leads with Housing First as a featured block, breaking the previous "four identical cards" pattern. Footer social links use proper SVG icons with aria-labels.

**Deterministic scan:** Zero findings. Previous scan found 3 issues (side-tab border on quote, border accent on cards, overused font). All addressed.

The site no longer screams "AI template" or "generic Democratic campaign." The color palette and improved hierarchy give it a distinct identity. The remaining work is polish and voice, not fundamental structure.

## Overall Impression

The design has evolved from generic template to something with actual character. The forest green + ochre palette works for Ben's working-class, grounded message — it feels Midwestern without being cliché. The featured issue block gives Housing First the prominence it deserves.

**Biggest opportunity:** Typography still plays it safe. Libre Franklin and Source Sans 3 are competent, but they don't carry the "working-class, direct, authentic" voice the PRODUCT.md calls for. A bolder, more characterful heading face could push this from "good campaign site" to "memorable."

## What's Working

1. **Differentiated color palette** — Forest green + ochre feels grounded and specific, not imported from DC consultant playbook
2. **Featured issue hierarchy** — Housing First gets the spotlight it deserves; supporting issues are visually subordinate
3. **Authentic voice** — Ben's biography and quote remain the strongest assets; the design now supports rather than undermines them

## Priority Issues

### [P2] Typography doesn't carry brand voice
Libre Franklin + Source Sans 3 are safe, not characterful. The PRODUCT.md specifies "working-class, direct, authentic" — the current fonts are competent but forgettable.

**Why it matters:** Typography is voice. A visitor's subconscious registers "professional but generic" before they read a word.

**Fix:** Find a heading face that embodies Ben's story — something with more presence. Consider fonts with industrial, working-class, or plainspoken character (not the editorial-serif reflex).

**Suggested command:** `/impeccable typeset`

### [P2] Issue cards still have border-top treatment
The `.issue-item` class uses `border-top: 2px solid var(--primary)` (line 488). While not the banned "side-stripe" pattern, top-border cards are still a common AI tell when repeated identically.

**Why it matters:** Three identical top-border treatments feel template-tier. The featured issue solved this problem for the hero card; the supporting cards didn't get the same attention.

**Fix:** Differentiate the three supporting issues visually or collapse to a different treatment entirely (e.g., inline list, accordion, or prose format).

**Suggested command:** `/impeccable layout`

### [P2] No motion or page transitions
The site has zero entrance animations or scroll-triggered reveals. For a brand surface, this reads as incomplete rather than restrained.

**Why it matters:** Motion is part of brand voice. A static page in 2026 feels unfinished for a campaign trying to inspire.

**Fix:** Add purposeful entrance motion for hero and featured issue. Use `prefers-reduced-motion` for accessibility.

**Suggested command:** `/impeccable animate`

### [P3] Hero lacks visual impact
The hero is solid green with text. No imagery, no texture, no movement. For a campaign about a real person, leading with a photo-less hero misses an emotional opportunity.

**Why it matters:** Persuadable voters are browsing to evaluate Ben. They should see him immediately — not after scrolling to the about section.

**Fix:** Consider adding Ben's portrait to the hero, or use a background image that connects to Iowa.

**Suggested command:** `/impeccable layout` or `/impeccable bolder`

### [P3] Missing favicon
The `baseof.html` has no favicon link. The site will show a generic browser icon.

**Why it matters:** Professional polish. Visitors notice missing favicons.

**Fix:** Add a simple favicon using the campaign's green.

**Suggested command:** `/impeccable polish`

## Persona Red Flags

**Jordan (First-Timer):** Hero doesn't immediately communicate what Ben stands for. The tagline "A space for everybody. A place for everybody." is evocative but vague — Jordan doesn't know what issue to expect. The featured issue block below is strong, but requires scrolling to discover.

**Casey (Mobile User):** No donate button visible in header (the header actions area exists but appears empty on mobile). Footer social links are adequate size now (2.75rem = 44px) — improved from previous critique.

**Skeptical Persuadable Voter (project-specific):** The site now looks like someone specific, not every candidate. The quote is prominent. The forest green feels intentional. Good progress. Remaining gap: Ben's face doesn't appear until the about section — a missed opportunity to build trust immediately.

## Minor Observations

- `aria-current="page"` correctly applied in nav — good accessibility foundation
- `loading="lazy"` on about image — performance best practice followed
- Footer copyright hardcoded to 2026 — fine for now, but will need updating
- No Open Graph / Twitter meta tags in `baseof.html` — social sharing will look generic

## Questions to Consider

- What if Ben's photo was in the hero, not buried in the about section?
- Does "A space for everybody. A place for everybody." clearly signal the Housing First focus, or should the tagline be more direct?
- Is the current sans-serif typography confident enough to carry a working-class candidate's voice?
