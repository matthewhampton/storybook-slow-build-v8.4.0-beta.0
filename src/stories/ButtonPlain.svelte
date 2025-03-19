<script>

    export let label
    export let onClick
</script>

<button
  type="button"
  on:click={onClick}
>
  {label} [plain]
</button>
