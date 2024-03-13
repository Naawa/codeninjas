<script lang="ts">
	import { browser } from "$app/environment";
    import Navigation from "$lib/components/Navigation.svelte";
	import Parallax from "$lib/components/Parallax.svelte";
    import "$lib/scss/styles.scss"

    const observer = new IntersectionObserver((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    })

    let elements: any;

    if(browser) {
        console.log(elements)
        elements = document.querySelectorAll(".hidden");
        elements.forEach((el) => observer.observe(el));
    }

</script>

<Parallax></Parallax>
<Navigation></Navigation>
<slot />

<style lang="scss">
    .show {
        opacity: 1;
        scale: 1;
        rotate: 0deg;
    }
</style>