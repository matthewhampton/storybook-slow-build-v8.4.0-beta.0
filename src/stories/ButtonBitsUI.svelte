<script>

  import { Button } from "bits-ui";

  /**
   * @typedef {Object} Props
   * @property {string} label Button contents
   * @property {() => void} [onClick] The onclick event handler
   */

  /** @type {Props} */
  const { label, onClick } = $props();
</script>

<Button.Root
  onclick={onClick}
>
  {label} [bits-ui]
</Button.Root>
