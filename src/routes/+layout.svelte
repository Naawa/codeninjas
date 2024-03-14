<script lang="ts">
	import { browser } from "$app/environment";
    import Navigation from "$lib/components/Navigation.svelte";
	import Parallax from "$lib/components/Parallax.svelte";
    import "$lib/scss/styles.scss"
	import { onMount } from "svelte";

    if(browser) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show');
                    entry.target.classList.remove('hidden');
                }
                else {
                    entry.target.classList.add('hidden');
                    entry.target.classList.remove('show');
                }
            })
        })
        let elements = document.querySelectorAll('*');
        elements.forEach((el) => observer.observe(el));
    }

</script>

<Parallax></Parallax>
<Navigation></Navigation>
<slot />