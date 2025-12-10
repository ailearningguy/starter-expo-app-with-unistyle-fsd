# Feature-Sliced Design (FSD) Architecture

This project follows the **Feature-Sliced Design** architectural methodology for organizing frontend code.

## 📁 Layer Structure

```
src/
├── app/        # App Layer: providers, global config
├── pages/      # Pages Layer: page-specific components
├── widgets/    # Widgets Layer: composite UI blocks
├── features/   # Features Layer: user interactions
├── entities/   # Entities Layer: business entities
└── shared/     # Shared Layer: reusable code
```

## 🔑 Core Concepts

### Layers (Top → Bottom)

| Layer      | Purpose                           | Can Import From                            |
| ---------- | --------------------------------- | ------------------------------------------ |
| `app`      | Routing, providers, global styles | pages, widgets, features, entities, shared |
| `pages`    | Page-specific UI/logic            | widgets, features, entities, shared        |
| `widgets`  | Composite UI blocks               | features, entities, shared                 |
| `features` | User actions & interactions       | entities, shared                           |
| `entities` | Business domain objects           | shared                                     |
| `shared`   | Reusable utilities                | (none - base layer)                        |

### Key Rules

1. **Import Direction**: Only import from layers **below** (never above or same level)
2. **Slices**: Divide layers by business domain (e.g., `user`, `product`)
3. **Segments**: Divide slices by technical purpose:
   - `ui/` - Components, styles
   - `model/` - State, business logic
   - `api/` - Backend interactions
   - `lib/` - Utilities, hooks
   - `config/` - Configuration

## 📚 Learn More

- [Official FSD Documentation](https://feature-sliced.design/)
- [Getting Started Guide](https://feature-sliced.design/docs/get-started/overview)
