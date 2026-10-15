# Coding style

## Duplication and readability

- Readability is more important than strict DRY.
- If simple logic occurs in only a small number of locations, keep it as it is.
- Do not move duplicated logic into a shared helper, a generic type, or a new abstraction only to remove the duplication.

## Backend (Rust + Axum)

Use functional programming. Do not use object-oriented programming.

## Frontend (SolidJS + Typescript)

### Components

- Put constants before the component. For example: `const MIN_TRANSFER_AMOUNT = 0.01;`.
- If the component has no styles, use the file `Xxx.tsx`.
- If the component has styles, use the files `Xxx/index.tsx` and `index.css`.
- Put images for the component in an `asset/` folder next to the component.

### Styling

- Put the component styles in an `index.css` file next to the component.
- Each `index.css` file has only one root selector.
- To examine nested selectors, run `pnpm lint:css`.

### Class Names

- Each component gives its **outermost tag** a class name with the `g-` prefix.
- Modifier classes on that outermost tag also use the `g-` prefix.
- If you override the internal parts of a different component, put the `g-` class of that component in the selector.
