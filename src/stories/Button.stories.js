import Button from './ButtonPlain.svelte';
// import Button from './ButtonBitsUI.svelte';

import { fn } from '@storybook/test';

export default {
  name: 'Example/Button',
  component: Button,
  args: {
      onClick: fn(),
  }
};

export const Default = {
  args: { label: 'Click Me' },
};
