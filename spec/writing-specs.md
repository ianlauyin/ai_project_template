# Writing specs

Where a spec goes and its two files: `spec/00_structure.md`.

## Adding one

- `NN_kebab-name/`, `NN` continuing that package folder's sequence.
- Write `business-logic.md` first. If a fact only holds until someone refactors, it belongs in `code-impl.md`.
- Add a row to that folder's `00_context.md` under `## Specs`. Create the section with the package's first spec.

## Writing

- Simple, precise wording. Short sentences, one point each. Cut words that add nothing.
- Use a list when naming several items or making several points. Keep prose for a single point.
- Use a table when every item has the same few fields.
- Write in English. Traditional Chinese is for user-facing strings quoted verbatim.

## Referencing spec/shared/

A rule in `spec/shared/` holds for every app. Name that path rather than restating it.
Before writing a rule, check `spec/shared/` for it.
When a spec names another markdown file, write the full path from the repo root, such as `spec/shared/00_context.md`.
Never write a bare filename.
Do not add a `[label](path)` link.
