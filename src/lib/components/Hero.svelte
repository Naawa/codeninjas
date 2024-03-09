<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let animate = false;

    onMount(() => {
        animate = true;
    })
</script>
<section>
    {#if animate}
    <video src="https://c3mpuncadl9iaete.public.blob.vercel-storage.com/CNWC%20Final%20Shortened%20for%20Web-zwsXBjaCLgizAv38MpRqyOzuOFRgwr.mp4" autoplay loop muted>
        <track kind="captions">
    </video>
    <div>
        <h2 transition:fly={{ y: 400, duration: 600}}>Kids Learn Code</h2>
        <p transition:fly={{ y: 400, duration: 800}} >Blocks, JavaScript, Lua, C# and More!</p>
    </div>
    <button transition:fly={{ y: 400, duration: 1000}}>Learn More</button>
    {/if}
</section>

<style lang="scss">
    section {
        width: 100%;
        height: 70dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        position: relative;
        flex-direction: column;
        gap: 2em;
        
        video {
            height: 100%;
            opacity: 0.3;
            position: absolute;
        }

        div, button {
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 1em;
            translate: 0 5em;

            h2, p {
                color: white;
                text-align: center;
            }
        }

        button {
            min-width: fit-content;
            padding: 0.5em 2em;
            color: white;
            background-color: hsl(165, 67%, 58%);

            &:hover {
                background-color: hsl(165, 49%, 39%);
            }
        }
    }
</style>