# Historical Context

## Recent Changes

### 2024-12-19 - OurImpact.tsx Text Alignment Update

**File Updated:** `src/components/OurImpact.tsx`
**Lines Modified:** 159, 165

**Changes Made:**
- Changed text alignment from center to right side
- Updated container class from `text-center` to `text-right` (line 159)
- Updated paragraph class from `mx-auto` to `ml-auto` to align text to right (line 165)

**Purpose:** Move the impact section text (heading and description) to the right side as requested by user.

**Technical Details:**
- Used Tailwind CSS classes: `text-right` for right alignment
- Used `ml-auto` instead of `mx-auto` to push content to the right
- Maintained responsive design and language switching functionality


### 2025-10-02 - Contact page opens at top on first scroll

**File Updated:** `src/pages/Contact.tsx`
**Lines Modified:** 1, 5-9

**Changes Made:**
- Added `useEffect` to force window scroll to top when Contact mounts.
- Updated React import to include `useEffect`.

**Purpose:** Ensure Contact page shows from the first section (top) when navigated to.

**Technical Details:**
- `useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }, []);`
- Kept global `ScrollToTop` for route changes; this is an extra guard for direct loads.

### 2025-10-06 - Enabled government logo carousel in footer

**File Updated:** `src/components/Footer.tsx`
**Lines Modified:** 70-91 (uncommented and enabled carousel block)

**Changes Made:**
- Activated the existing government logos carousel using `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`.
- Shows six official portal logos with links; responsive item widths.

**Purpose:** Display government icon carousel on all pages via the shared footer.

### 2025-10-06 - Move government carousel out of footer and render globally

**Files Updated:**
- `src/components/Footer.tsx`
- `src/App.tsx`

**Lines Modified:**
- `src/components/Footer.tsx`: removed carousel block at 69-91; cleaned related imports at 4-10
- `src/App.tsx`: added `GovermentLinks` import and wrapper provider; inserted before `Footer` around lines 82-85

**Changes Made:**
- Removed the government logos carousel from `Footer` so the footer contains only footer content.
- Inserted `GovermentLinks` just before `Footer` inside `App`, wrapped with `LanguageContext1` provider to match its hook API.

**Purpose:** Ensure the government carousel appears on all pages immediately above the footer, not inside it.

### 2025-10-06 - Fix 404 for LanguageContext1 and government links

**Files Updated:**
- `src/components/GovermentLinks.tsx` (created)
- `src/App.tsx`

**Lines Modified:**
- `src/App.tsx`: removed missing `LanguageContext1` provider usage and import; render `GovermentLinks` directly before `Footer` (~80-84)
- `src/components/GovermentLinks.tsx`: new component using `useLanguage` and `ui/carousel`

**Changes Made:**
- Replaced dependency on non-existent `LanguageContext1.tsx` with existing `useLanguage` hook.
- Implemented a simple bilingual carousel component and kept position above `Footer`.

**Purpose:** Resolve 404 (Not Found) caused by missing `LanguageContext1.tsx` and keep government links displayed globally.

### 2025-10-06 - Continuous auto-scroll for government carousel

**Files Updated:**
- `src/components/GovermentLinks.tsx`

**Lines Modified:**
- Enabled `loop`, `dragFree`, `align: start`, and added a requestAnimationFrame loop to advance slides continuously.

**Changes Made:**
- Carousel now auto-scrolls continuously with wrap-around, appearing as a marquee above the `Footer` on all pages.

**Purpose:** Meet requirement for continuous auto-scrolling government logo carousel.

### 2025-10-06 - Global back button across pages

**Files Added/Updated:**
- `src/components/BackButton.tsx`
- `src/App.tsx`

**Changes Made:**
- Added `BackButton` that navigates back with fallback to `/` if no history.
- Rendered `BackButton` globally below `Header`, hidden on the home route.

**Purpose:** Provide a consistent back navigation on all pages.
