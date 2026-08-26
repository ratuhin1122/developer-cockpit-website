# Developer Cockpit - Design System

## Design Philosophy

The official Developer Cockpit website adopts a **premium, dark-first developer aesthetic**. It communicates technical competence, performance, and efficiency—core tenets of the product itself. The visual language is inspired by top-tier developer tools like Linear, Vercel, and Raycast, prioritizing information density and clarity over flashy trends. 

**Core Characteristics:**
- **Technical & Minimal:** Content-driven with no unnecessary decoration.
- **High Information Density:** Dense but readable, avoiding the sparse, oversized layouts typical of generic SaaS templates.
- **Subtle Polish:** Interactions and animations feel snappy, purposeful, and hardware-accelerated.
- **Strict Avoidance Of:** Excessive glowing effects, intense gradients, stock photography, generic AI illustrations, heavy drop-shadows, and childish rounded corners.

---

## 1. Color Palette (Dark-First)

The color palette relies on deep greys and blacks for structure, utilizing high-contrast whites for typography, and reserving vibrant colors strictly for interactive states, syntax highlighting, and badges.

### Base / Backgrounds
- **App Background:** `#09090B` (Zinc-950) - Deep, near-black for the main canvas.
- **Surface Level 1 (Cards, Code Blocks):** `#18181B` (Zinc-900) - Slightly lighter for depth.
- **Surface Level 2 (Hover States, Inputs):** `#27272A` (Zinc-800).
- **Borders / Dividers:** `#3F3F46` (Zinc-700) or `rgba(255, 255, 255, 0.1)` - Ultra-subtle 1px borders.

### Typography Colors
- **Primary Text (Headings):** `#FAFAFA` (Zinc-50) - Pure, crisp white.
- **Secondary Text (Body, Descriptions):** `#A1A1AA` (Zinc-400) - Legible but recedes from headings.
- **Tertiary Text (Meta, Inline Code):** `#71717A` (Zinc-500).

### Accent & Semantic Colors
- **Brand Accent:** `#3B82F6` (Blue-500) - Used sparingly for primary buttons and active states.
- **Success (Verified/Pro):** `#10B981` (Emerald-500).
- **Warning/Pending:** `#F59E0B` (Amber-500).
- **Error/Destructive:** `#EF4444` (Red-500).

---

## 2. Typography

Excellent typography is the backbone of this design. It uses a clean sans-serif for UI and a crisp monospace for technical details.

### Font Families
- **Sans-serif (Headings, UI, Body):** `Inter`, `Geist`, `SF Pro Display`, or system default sans-serif. 
- **Monospace (Code, Badges, Technical Meta):** `JetBrains Mono`, `Fira Code`, or `Geist Mono`.

### Scale & Weight
- **Display / H1:** `48px` to `64px`, `Tracking: -0.02em`, `Weight: 600` (Semi-bold).
- **H2 (Section Titles):** `32px` to `40px`, `Tracking: -0.01em`, `Weight: 500` (Medium).
- **H3 (Card Titles):** `20px` to `24px`, `Weight: 500` (Medium).
- **Body Text:** `16px`, `Line-height: 1.6`, `Weight: 400` (Regular).
- **Small Text / Meta:** `14px`, `Line-height: 1.5`, `Weight: 400`.

---

## 3. UI Components

### Buttons
Buttons are geometric, have minimal border radius, and feature subtle transitions.
- **Primary:** Background `#FAFAFA`, Text `#09090B`. Hover: Dim to `#E4E4E7`. (Inverted high-contrast).
- **Secondary/Ghost:** Background `transparent`, Border `1px solid #3F3F46`, Text `#FAFAFA`. Hover: Background `#18181B`.
- **Border Radius:** `4px` to `6px` (tight, technical).
- **Padding:** `8px 16px` for standard, `12px 24px` for prominent CTAs.

### Cards & Feature Cards
- **Background:** `#18181B`.
- **Border:** `1px solid rgba(255, 255, 255, 0.08)`.
- **Border Radius:** `8px`.
- **Padding:** `24px`.
- **Hover State:** Border subtly transitions to `rgba(255, 255, 255, 0.2)`. No excessive lifting or heavy shadows.
- **Content:** Monochrome Lucide icon (16px/20px), crisp H3 title, and grey secondary body text.

### Code Blocks
- **Background:** `#000000` (Pure black for contrast against the `#09090B` background).
- **Border:** `1px solid #27272A`.
- **Border Radius:** `6px`.
- **Padding:** `16px`.
- **Syntax Highlighting:** Subtle, muted colors (e.g., Vercel or GitHub Dark theme). Avoid neon rainbow themes.
- **Header:** Include a subtle top bar showing the language or filename (e.g., `plugin.ts`) and a minimalist copy icon.

### Badges
Used for tags like "Pro", "Free", or version numbers.
- **Style:** Small padding (`2px 8px`), `12px` Monospace font, uppercase, tight tracking.
- **Colors:** Background `#27272A`, Text `#FAFAFA`, Border `1px solid #3F3F46`. 
- **Pro Badge:** Can use a very subtle gradient border or accent text color to denote premium features without being overly flashy.

### Screenshots & Media
- **Treatment:** Application screenshots must look sharp and native.
- **Container:** Border radius `8px`, subtle inner stroke `1px solid rgba(255, 255, 255, 0.1)` to define the edge against the dark background.
- **Shadow:** Deep, diffused shadow `0 24px 80px rgba(0, 0, 0, 0.8)` to provide depth without glow.

### Navigation
- **Header:** Fixed at the top. 
- **Style:** Translucent background (`rgba(9, 9, 11, 0.8)`) with background blur (`backdrop-filter: blur(12px)`).
- **Border:** `1px solid rgba(255, 255, 255, 0.05)` on the bottom edge.
- **Links:** Muted grey `#A1A1AA`, transitioning to pure white `#FAFAFA` on hover.

### Sections & Layout
- **Container Max-Width:** `1200px` to keep content readable and dense.
- **Section Spacing:** Generous vertical padding (`96px` to `160px` between major sections) to allow content to breathe.
- **Grids:** Use 2-column or 3-column CSS grids with a `24px` or `32px` gap for feature lists.

### Footer
- **Style:** Clean, grid-based, separating navigation links, legal, and GitHub/social icons.
- **Border:** Top border `1px solid #27272A`.
- **Colors:** Minimal contrast. Text is `#71717A` (Zinc-500) and `#A1A1AA`.

---

## 4. Responsive Breakpoints

- **Mobile (sm - <640px):** Single column layouts. H1 scales down to `36px`. Section padding reduces to `64px`.
- **Tablet (md - 768px):** Transition to 2-column grids for feature cards.
- **Desktop (lg - 1024px+):** Full 3-column grids, maximum container width, standard typography scales.

---

## 5. Animation Behavior

Animations must communicate speed and precision, never whimsy or delay.

- **Durations:** Fast (`150ms` to `200ms`).
- **Easing:** Ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) for snappy, responsive feels.
- **Interactions:** 
  - Buttons and links use simple color/opacity fades.
  - No bouncy scaling. If scale is used, limit it to `0.98` on click (active state).
- **On-Scroll (Reveal):** 
  - If sections reveal on scroll, use a very fast, subtle fade-in and a minimal upward translation (e.g., `translateY(10px)` to `0`).
  - Staggered reveals for grid items should be rapid (e.g., `50ms` delay between items).
