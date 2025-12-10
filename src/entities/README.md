# Entities Layer

The **Entities Layer** contains business entities that represent core domain concepts.

## 📋 Purpose

- Define business domain objects (user, product, order, etc.)
- Entity-specific UI components
- Entity data models and types
- Entity-related API calls

## 📁 Structure

```
entities/
├── user/               # User entity slice
│   ├── ui/             # User-related UI (Avatar, UserCard)
│   ├── model/          # User types, stores
│   ├── api/            # User API calls
│   └── index.ts        # Public API
├── product/            # Product entity slice
│   ├── ui/
│   ├── model/
│   └── index.ts
└── README.md
```

## ✅ Rules

1. **Only import from**: `shared`
2. **Cannot import from**: Same layer slices, or higher layers
3. **Each slice** represents one business entity
4. **Export via** `index.ts` (public API)

## 📝 Example: User Entity

```typescript
// entities/user/model/types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// entities/user/ui/user-avatar.tsx
import { Image } from "react-native";
import type { User } from "../model/types";

export function UserAvatar({ user }: { user: User }) {
  return <Image source={{ uri: user.avatar }} />;
}

// entities/user/index.ts
export { UserAvatar } from "./ui/user-avatar";
export type { User } from "./model/types";
```

## 💡 When to Create an Entity

Create an entity when you have a **core business concept** that:

- Has its own data structure
- Is used across multiple features
- Has entity-specific UI components

## ⚠️ Current Status

This layer is currently empty. Add entity slices as your app grows and you identify core business concepts.
