# Features Layer

The **Features Layer** contains user-facing features that bring business value.

## 📋 Purpose

- User actions and interactions
- Feature-specific business logic
- Feature UI components
- Actions that change application state

## 📁 Structure

```
features/
├── auth/                   # Authentication feature
│   ├── ui/                 # Login form, signup form
│   ├── model/              # Auth state, validation
│   ├── api/                # Auth API calls
│   └── index.ts
├── theme-toggle/           # Theme switching feature
│   ├── ui/
│   ├── model/
│   └── index.ts
└── README.md
```

## ✅ Rules

1. **Only import from**: `entities`, `shared`
2. **Cannot import from**: Same layer slices, or higher layers
3. **Each feature** = one complete user action
4. **Export via** `index.ts` (public API)

## 📝 Example: Theme Toggle Feature

```typescript
// features/theme-toggle/ui/theme-toggle-button.tsx
import { Pressable } from "react-native";
import { IconSymbol } from "@/shared/ui";
import { useThemeToggle } from "../model/use-theme-toggle";

export function ThemeToggleButton() {
  const { isDark, toggle } = useThemeToggle();

  return (
    <Pressable onPress={toggle}>
      <IconSymbol name={isDark ? "sun.max.fill" : "moon.fill"} />
    </Pressable>
  );
}

// features/theme-toggle/index.ts
export { ThemeToggleButton } from "./ui/theme-toggle-button";
```

## 💡 Feature vs Entity

| Feature        | Entity       |
| -------------- | ------------ |
| User action    | Data concept |
| "Add to cart"  | "Product"    |
| "Login"        | "User"       |
| "Toggle theme" | "Settings"   |

## ⚠️ Current Status

This layer is currently empty. Add feature slices as you implement user-facing functionality.
