<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let animate = false;

    onMount(() => {
        animate = true;
    })
</script>
<section>
    <iframe src="https://www.youtube.com/embed/uzZstlbtTD4?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&enablejsapi=1&playlist=uzZstlbtTD4" frameborder="0" title="West Coquitlam Center">
    </iframe>
    {#if animate}
    <img transition:fly={{ y: 50, duration: 600}} src="/images/logo.png" alt="Logo.">
    <span>
        <div>
            <h1 transition:fly={{ y: 50, duration: 600}}>Kids Learn Code</h1>
            <p transition:fly={{ y: 50, duration: 800}} >Code Blocks, JavaScript, Lua, C# and More!</p>
        </div>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}}} transition:fly={{ y: 50, duration: 1000}}>Learn More</button>
    </span>
    {/if}
</section>

<style lang="scss">
    section {
        width: 100%;
        height: 70dvh;
        display: flex;
        align-items: center;
        background-color: black;
        position: relative;
        flex-direction: column;
        gap: 2em;
        overflow: hidden;
        
        iframe {
            opacity: 0.7;
            position: absolute;
            aspect-ratio: 16/9;
            min-height: 100vh;
            min-width: 100vw;
            pointer-events: none;
        }

        img {
            min-width: 350px;
            width: 50vw;
            z-index: 1;
            margin: 4em;
        }

        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3em;

            div {
                display: flex;
                flex-direction: column;
                gap: 0.5em;
                z-index: 1;

                h1, p {
                    color: white;
                    text-align: center;
                }
            }

            button {
                z-index: 1;
            }
        }
    }
</style>