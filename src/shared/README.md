# Shared Layer

The **Shared Layer** contains reusable code that is not tied to specific business logic.

## 📋 Purpose

- Reusable UI components
- Utility functions and hooks
- Configuration and constants
- Static assets (images, fonts)

## 📁 Structure

```
shared/
├── ui/                 # UI components
│   ├── themed-text/
│   ├── themed-view/
│   ├── icon-symbol/
│   └── index.ts
├── lib/                # Utilities & hooks
│   ├── hooks/
│   │   ├── use-color-scheme.ts
│   │   └── index.ts
│   └── index.ts
├── config/             # Configuration
│   ├── theme.ts
│   └── index.ts
├── assets/             # Static assets
│   └── images/
└── index.ts            # Main public API
```

## ✅ Rules

1. **No business logic** - only generic, reusable code
2. **No imports from other layers** - this is the base layer
3. **Export via** `index.ts` files (public API pattern)

## 📝 Usage Examples

```typescript
// Importing UI components
import { ThemedText, ThemedView, IconSymbol } from "@/shared/ui";

// Importing hooks
import { useColorScheme, useThemeColor } from "@/shared/lib/hooks";

// Importing config
import { Colors, Fonts } from "@/shared/config";
```

## 🎨 UI Component Guidelines

Each component should have its own folder:

```
ui/
└── themed-text/
    ├── themed-text.tsx     # Component implementation
    ├── themed-text.styles.ts  # Styles (optional)
    └── index.ts            # Re-export component
```

## 📦 Public API Pattern

Always export through `index.ts` files:

```typescript
// shared/ui/index.ts
export { ThemedText } from "./themed-text";
export { ThemedView } from "./themed-view";
export { IconSymbol } from "./icon-symbol";
```

This allows consumers to import from a single entry point rather than deep paths.
