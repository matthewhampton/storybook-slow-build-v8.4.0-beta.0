<script>
  /**
   * @typedef {Object} Props
   * @property {string} label Button contents
   * @property {() => void} [onClick] The onclick event handler
   */

  /** @type {Props} */
  const { label, onClick } = $props();
</script>

<button
  type="button"
  onclick={onClick}
>
  {label}
</button>
