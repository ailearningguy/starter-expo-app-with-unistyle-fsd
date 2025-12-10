# Pages Layer

The **Pages Layer** contains page-specific components and logic for each screen.

## 📋 Purpose

- Page-specific UI compositions
- Page-level state and logic
- Screen layouts and sections

## 📁 Structure

```
pages/
├── home/                   # Home page slice
│   ├── ui/                 # Page-specific components
│   │   └── home-content.tsx
│   └── index.ts
├── explore/                # Explore page slice
│   ├── ui/
│   │   └── explore-content.tsx
│   └── index.ts
└── README.md
```

## ✅ Rules

1. **Only import from**: `widgets`, `features`, `entities`, `shared`
2. **Cannot import from**: Same layer slices
3. **Each slice** = one page/screen
4. **Export via** `index.ts` (public API)

## 📝 Integration with Expo Router

Expo Router's `app/` directory handles **routing**. This `pages/` layer handles **page content**.

```
project/
├── app/                    # Expo Router (routing)
│   └── (tabs)/
│       ├── index.tsx       # Uses HomeContent from pages layer
│       └── explore.tsx     # Uses ExploreContent from pages layer
│
└── src/pages/              # FSD Pages layer (content)
    ├── home/
    │   └── ui/home-content.tsx
    └── explore/
        └── ui/explore-content.tsx
```

## 📝 Example

```typescript
// src/pages/home/ui/home-content.tsx
import { ScrollView } from "react-native";
import { ThemedText, ParallaxScrollView } from "@/shared/ui";

export function HomeContent() {
  return (
    <ParallaxScrollView>
      <ThemedText type="title">Welcome!</ThemedText>
      {/* Page content */}
    </ParallaxScrollView>
  );
}

// src/pages/home/index.ts
export { HomeContent } from "./ui/home-content";

// app/(tabs)/index.tsx (Expo Router)
import { HomeContent } from "@/pages/home";

export default function HomeScreen() {
  return <HomeContent />;
}
```

## 💡 Tips

- Keep Expo Router files thin - just import from `pages` layer
- Put all page-specific logic in the `pages` layer
- Share components via `widgets` or `shared` layers
