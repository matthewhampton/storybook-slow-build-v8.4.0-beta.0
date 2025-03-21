

/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/stories/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
  ],
  "framework": {
    "name": "@storybook/sveltekit",
    "options": {}
  },
  viteFinal: (config) => {
    config.optimizeDeps = { ...config.optimizeDeps, include: [...(config.optimizeDeps?.include || []), 'bits-ui'] };
    return config;
  }
};
export default config;