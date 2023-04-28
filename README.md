# SvelteKit Reproduction

The `$page` store is not updated when `use:enhance` is used. `data` and `$page.data` are not in sync.

## Steps to reproduce

1. Start with `pnpm i && pnpm dev`
2. Open `http://localhost:5173/`
3. Click the "Increase via use:enhance" button

You should see that the `data.state` value increases, but the `$page.data.state` value does not.

In the console, you can see that the `$page` store is updated, but reset to the initial value immediately after.

```
data.state: 0 / $page.data.state: 0
// click button
data.state: 1 / $page.data.state: 0
data.state: 1 / $page.data.state: 1
data.state: 1 / $page.data.state: 0
```
