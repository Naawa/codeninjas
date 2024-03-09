<script lang="ts">
    import Navigation from "$lib/components/Navigation.svelte";
	import Parallax from "$lib/components/Parallax.svelte";
import "$lib/scss/styles.scss"
</script>

<Parallax></Parallax>
<Navigation></Navigation>
<slot />