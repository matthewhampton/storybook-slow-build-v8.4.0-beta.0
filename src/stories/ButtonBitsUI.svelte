<script>

  import { Button } from "bits-ui";

  export let label
  export let onClick
</script>

<Button.Root
  on:click={onClick}
>
  {label} [bits-ui]
</Button.Root>
