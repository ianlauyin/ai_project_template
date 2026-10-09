# Spec update

A code change updates the spec that covers it, in the same change. A stale spec is a bug.

`code-impl.md` — update it whenever the change touches anything it describes: modules, sagas, state, flow
diagrams, file tables, implementation constraints. A renamed, moved, or deleted file counts.

`business-logic.md` — update it when user-visible behaviour, a domain rule, or the wire contract changed.
If the code now breaks a rule there and the task did not ask to change that rule, stop and ask — the code
may be the thing that is wrong.

If no spec covers the changed flow, say so in the report. Do not create one unless asked (`skills/write-spec.md`).

In the report, list the spec files updated, or say why none needed it.

Skip only for changes no spec could describe: formatting, lint fixes, comments, dependency bumps.
