# Git Convention

- Pull with rebase: `git pull --rebase`. Integrate by rebasing, never with a merge commit.
- Never force push — no `--force`, no `--force-with-lease`. Once pushed, commits are final; do not squash,
  amend, or rebase them.

## Git Commits

- One line, `scope: subject`. A body is rare — add one only when the subject genuinely cannot carry the change.
