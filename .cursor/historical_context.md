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
