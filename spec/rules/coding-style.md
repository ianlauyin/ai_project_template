# Coding style

## Duplication / Readability

- Prioritize readability over strict DRY. Simple logic repeated across only is fine as-is — do not wrap it in a shared helper,
  generic type, or new abstraction just to remove that duplication.

## Backend (Rust + Axum)

- prefer functional programming over object oriented programming

## Frontend (SolidJS + Typescript)

### Components

- Put constants before the component, for example `const MIN_TRANSFER_AMOUNT = 0.01;`.
- File shape either way: `Xxx.tsx` when the component has no styles of its own, `Xxx/index.tsx` +
  `index.css` when it does, with images in an `asset/` folder beside it.

### Styling

- Component styles live beside the component as `index.css`.
- One root selector per `index.css`.
- Check nested selectors with `pnpm lint:css`.

### Class Names

- Every component names its **outermost tag** with a `g-` prefix.
- Modifier classes that land on that same outermost tag keep the prefix.
- Overriding another component's internals must be qualified with that component's `g-` class.
