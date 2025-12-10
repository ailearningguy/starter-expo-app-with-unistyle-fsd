# Widgets Layer

The **Widgets Layer** contains large, self-contained UI blocks that combine features and entities.

## 📋 Purpose

- Complex, composite UI sections
- Combine multiple features and entities
- Self-contained functionality blocks
- Reusable across multiple pages

## 📁 Structure

```
widgets/
├── header/                 # App header widget
│   ├── ui/
│   └── index.ts
├── user-profile-card/      # User profile card widget
│   ├── ui/
│   └── index.ts
├── navigation-drawer/      # Navigation drawer widget
│   ├── ui/
│   └── index.ts
└── README.md
```

## ✅ Rules

1. **Only import from**: `features`, `entities`, `shared`
2. **Cannot import from**: Same layer slices, or higher layers
3. **Each widget** = self-contained UI block
4. **Export via** `index.ts` (public API)

## 📝 Example: Header Widget

```typescript
// widgets/header/ui/header.tsx
import { View } from "react-native";
import { ThemedText } from "@/shared/ui";
import { ThemeToggleButton } from "@/features/theme-toggle";
import { UserAvatar } from "@/entities/user";

export function Header({ user, title }: HeaderProps) {
  return (
    <View>
      <ThemedText type="title">{title}</ThemedText>
      <UserAvatar user={user} />
      <ThemeToggleButton />
    </View>
  );
}

// widgets/header/index.ts
export { Header } from "./ui/header";
```

## 💡 Widget vs Feature

| Widget         | Feature        |
| -------------- | -------------- |
| UI composition | User action    |
| "Header"       | "Toggle theme" |
| "Sidebar"      | "Add to cart"  |
| "ProductCard"  | "Like product" |

Widgets **combine** features; features **perform** actions.

## ⚠️ Current Status

This layer is currently empty. Add widget slices as you build complex, reusable UI sections.
