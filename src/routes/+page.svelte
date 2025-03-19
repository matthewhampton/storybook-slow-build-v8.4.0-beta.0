
<script>
    import ButtonPlain from "../stories/ButtonPlain.svelte"
    import ButtonBitsUI from "../stories/ButtonBitsUI.svelte"
</script>

<ButtonPlain label="Click Me" onClick={()=>alert("Hello")}/>

<ButtonBitsUI label="Click Me" onClick={()=>alert("Hello")}/>