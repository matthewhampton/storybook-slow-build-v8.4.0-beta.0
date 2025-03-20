## Slow Storybook Build

Checkout main to see the slow version - this takes ~ 2 min even though there is just one tiny test with a single
button using bits-ui:

```
PS C:\Users\Matt\git\new-sveltekit-storybook> npm i
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported

> storybook-slow-build-v8.4.0-beta.0@0.0.1 prepare
> svelte-kit sync || echo ''


added 8 packages, removed 2 packages, changed 9 packages, and audited 255 packages in 9s

65 packages are looking for funding
  run `npm fund` for details

6 vulnerabilities (2 low, 4 moderate)

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\Matt\git\new-sveltekit-storybook> npm run build-storybook

> storybook-slow-build-v8.4.0-beta.0@0.0.1 build-storybook
> storybook build

@storybook/core v8.4.0-beta.0

info => Cleaning outputDir: storybook-static
info => Loading presets
info => Building manager..
info => Manager built (106 ms)
info => Building preview..
WARN No story files found for the specified pattern: src\**\*.mdx
vite v5.4.8 building for production...
transforming (14) src\stories\Button.stories.js17:36:55 [vite-plugin-svelte] C:/Users/Matt/git/new-sveltekit-storybook/node_modules/@storybook/svelte/dist/components/PreviewRender.svelte:9:13 PreviewRender has unused export property 'storyContext'. If it is for external reference only, please consider using `export const storyContext`
 7:   export let storyFn;
 8:   export let showError;
 9:   export let storyContext;
                 ^
10:
11:   let {
node_modules/@storybook/svelte/dist/chunk-2VFJ3RAK.mjs (10:1820): "unmount" is not exported by "node_modules/svelte/src/runtime/index.js", imported by "node_modules/@storybook/svelte/dist/chunk-2VFJ3RAK.mjs".
node_modules/@storybook/svelte/dist/chunk-2VFJ3RAK.mjs (10:2285): "mount" is not exported by "node_modules/svelte/src/runtime/index.js", imported by "node_modules/@storybook/svelte/dist/chunk-2VFJ3RAK.mjs".
✓ 1763 modules transformed.
storybook-static/iframe.html                         16.34 kB │ gzip:   4.42 kB
storybook-static/assets/preview-CIRcjyVj.js           0.11 kB │ gzip:   0.11 kB
storybook-static/assets/iframe-DOQdlXKz.js            3.06 kB │ gzip:   1.47 kB
storybook-static/assets/preview-B73nlEQ9.js           4.15 kB │ gzip:   2.05 kB
storybook-static/assets/lifecycle-Do_f19cv.js         6.41 kB │ gzip:   2.54 kB
storybook-static/assets/index-BvmOqU8E.js             6.73 kB │ gzip:   3.22 kB
storybook-static/assets/entry-preview-Cfn5eGmQ.js   504.67 kB │ gzip: 132.39 kB
storybook-static/assets/Button.stories-8qJd9KBb.js  825.80 kB │ gzip: 157.27 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 2m 2s
info => Preview built (2.07 min)
info => Output directory: C:\Users\Matt\git\new-sveltekit-storybook\storybook-static
PS C:\Users\Matt\git\new-sveltekit-storybook> 

```

