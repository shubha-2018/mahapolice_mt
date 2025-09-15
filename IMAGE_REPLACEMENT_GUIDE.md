# Image Replacement Guide

## How to Add Images to Your Website

Simply replace the placeholder URLs with your actual image URLs in the following files:

### 1. MP Symbol (Header - Top Left)
**File:** `src/components/Header.tsx`
**Line:** 42
**Replace:** `YOUR_MP_SYMBOL_IMAGE_URL_HERE`
**With:** Your Maharashtra Police symbol image URL

### 2. Leadership Images (6 Leaders)
**File:** `src/components/Leadership.tsx`
**Line:** 131
**Replace:** `YOUR_LEADER_IMAGE_URL_HERE`
**With:** Each leader's photo URL (repeat for all 6 leaders)

### 3. Hero Slider Images (4 Slides)
**File:** `src/components/HeroSlider.tsx`
**Line:** 89
**Replace:** `YOUR_SLIDE_IMAGE_URL_HERE`
**With:** Background image URL for each slide

## Example Usage:

Instead of:
```jsx
src="YOUR_MP_SYMBOL_IMAGE_URL_HERE"
```

Use:
```jsx
src="https://example.com/mp-symbol.png"
```

## Notes:
- Images will automatically show when valid URLs are provided
- Placeholders remain visible until images load successfully
- No localStorage - language toggle works only during session
- All 6 leadership cards display by default
- All buttons are visible without hover