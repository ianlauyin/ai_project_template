# Spec

Key design decisions, behaviour, and requirements. Implementation details stay in the code — a spec links to the source instead of restating it.

One folder per spec. The spec tree mirrors the package paths.

- Place a spec by where the user sees the behaviour, not where the code lives.
- A flow on both apps gets one spec per app, under the same `NN_kebab-name/` in each. Each describes only its own app and links to its counterpart.
- `spec/shared/` holds rules with no UI of their own.

Two files per spec

| file                | holds                                                                                   | read it when                         |
| ------------------- | --------------------------------------------------------------------------------------- | ------------------------------------ |
| `business-logic.md` | what the feature does and the rules it must obey — user-visible behaviour, the contract | deciding whether a change is allowed |
| `code-impl.md`      | how the current code does it — Prototype, Layout, Persist, Do not                       | making the change                    |

- `business-logic.md` survives a rewrite of the feature; `code-impl.md` does not.
- When they disagree, the code is right and `code-impl.md` is stale — fix it in the same change.
- A term used by more than one package is defined once, in `spec/shared/00_context.md`. A term used by one package stays in that package's `00_context.md`. Other specs link to that home.

## Procedures

- Add or write a spec: `spec/writing-specs.md`.
- Dev and production database: `spec/db.md`.
- Prod deployment: `spec/deployment.md`.

## Specs

Each package folder has a `00_context.md`: the package's Vocab, then its specs.

Before the first edit in a package, read its `00_context.md` — one for every package the change touches.

| package                        | scope                               |
| ------------------------------ | ----------------------------------- |
| `spec/shared/00_context.md`    | terms used by more than one package |
