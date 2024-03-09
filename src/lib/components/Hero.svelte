<script>
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let animate = false;

    onMount(() => {
        animate = true;
    })
</script>
<section>
    {#if animate}
    <video src="https://c3mpuncadl9iaete.public.blob.vercel-storage.com/West%20Coquitlam%20Center-0bTruXZiYdeo6soxgSsGFVoj3P3V2U.mp4" autoplay loop muted>
        <track kind="captions">
    </video>
    <div>
        <h1 transition:fly={{ y: 50, duration: 600}}>Kids Learn Code</h1>
        <p transition:fly={{ y: 50, duration: 800}} >Blocks, JavaScript, Lua, C# and More!</p>
    </div>
    <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}}} transition:fly={{ y: 50, duration: 1000}}>Learn More</button>
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
        overflow: hidden;
        
        video {
            opacity: 0.3;
            position: absolute;
            min-height: 70vh;
        }

        div, button {
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 0.5em;

            h1, p {
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