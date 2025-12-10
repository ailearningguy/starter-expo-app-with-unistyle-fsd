# App Layer

The **App Layer** is the top-level layer that initializes and configures the entire application.

## 📋 Purpose

- Application providers (theme, auth, state management)
- Global configuration and initialization
- App-wide styles and layouts

## 📁 Structure

```
app/
├── providers/          # Context providers
│   └── theme-provider.tsx
├── styles/             # Global styles (if needed)
└── index.ts            # Public API
```

## ✅ Rules

1. **NO business logic** - only app initialization
2. **Import from**: All lower layers
3. **Export via** `index.ts` (public API)

## 📝 Example

```typescript
// providers/theme-provider.tsx
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "@/shared/lib/hooks";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  return (
    <NavThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </NavThemeProvider>
  );
}
```

## ⚠️ Important

This `src/app/` layer is **different** from the root `app/` directory which contains Expo Router pages. The root `app/` directory is required by Expo Router for file-based routing.
