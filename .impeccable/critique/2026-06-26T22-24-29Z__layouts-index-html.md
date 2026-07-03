---
target: layouts/index.html
total_score: 23
p0_count: 0
p1_count: 2
timestamp: 2026-06-26T22-24-29Z
slug: layouts-index-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No visual feedback on nav active states; mobile menu toggle lacks state indication |
| 2 | Match System / Real World | 4 | Plain language throughout; Ben's authentic voice comes through |
| 3 | User Control and Freedom | 3 | Clear navigation; easy to move around |
| 4 | Consistency and Standards | 3 | Internally consistent; follows web conventions |
| 5 | Error Prevention | 2 | Newsletter form (in static version) lacks inline validation |
| 6 | Recognition Rather Than Recall | 3 | Nav visible; footer icons ("@" and "f") are cryptic abbreviations |
| 7 | Flexibility and Efficiency | 1 | No keyboard shortcuts; single rigid path |
| 8 | Aesthetic and Minimalist Design | 2 | Side-stripe borders, identical cards, template-tier palette add visual noise |
| 9 | Error Recovery | 2 | Limited visible error states; 404 exists but is basic |
| 10 | Help and Documentation | 1 | No FAQ, no contextual help; contact is the only support path |
| **Total** | | **23/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** The navy + gold + red palette is the exact Democratic campaign template default. Montserrat + Open Sans is the "safe Google Fonts pair." Issue cards are identical format (gold top border + heading + paragraph × 4). Quote block's gold left border is a textbook side-stripe accent. Layout is competent but generic.

**Deterministic scan found 3 issues:**
- `static/css/style.css:308` - Side-tab accent border on quote block
- `static/css/style.css:353` - Border accent on rounded element (issue cards)
- `static/css/style.css:2` - Overused font (Montserrat)

## Overall Impression

The content is the best thing here — Ben's biography and platform positions are specific, human, and credible. The design undermines the content by wrapping it in the visual language of every other campaign.

## What's Working

1. Ben's voice in the copy — authentic campaign storytelling
2. Clean information architecture — easy to navigate, loads fast
3. Accessible foundation — semantic HTML, proper heading hierarchy

## Priority Issues

### [P1] Template-tier color palette
Navy + gold + red is the default Democratic campaign palette. Doesn't distinguish Ben.
**Fix:** Pick a color direction that reflects Ben's actual personality.
**Command:** `/impeccable colorize`

### [P1] Side-stripe border patterns
Quote block has gold left border; issue cards have gold top borders. Explicitly banned AI tells.
**Fix:** Remove borders, use alternative treatments.
**Command:** `/impeccable polish`

### [P2] Generic typography
Montserrat and Open Sans are the default safe choice.
**Fix:** Find a type pairing that embodies "working-class, direct, authentic."
**Command:** `/impeccable typeset`

### [P2] Identical card grid
Four issue cards with identical structure give equal weight to all issues.
**Fix:** Break the grid. Lead with Housing First as featured.
**Command:** `/impeccable layout`

### [P3] Weak footer social icons
"@" and "f" abbreviations are cryptic.
**Fix:** Use proper SVG icons.
**Command:** `/impeccable clarify`

## Persona Red Flags

**Jordan (First-Timer):** Hero headline tells nothing about what Ben stands for. No obvious "single most important thing" signal.

**Casey (Mobile User):** No donate button in mobile header. Footer social links are tiny touch targets.

**Skeptical Persuadable Voter:** Nothing distinguishes Ben visually. Site looks like every other campaign. Quote is strong but buried.

## Minor Observations

- No `loading="lazy"` on about section image
- No favicon configured
- Footer copyright is hardcoded 2026
