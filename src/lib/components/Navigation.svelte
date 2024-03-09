<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let showMenu: boolean = false;
    function toggleMenu() {
        showMenu = !showMenu;
        document.querySelector("button")?.classList.toggle("inactive");
    }

    let animate = false;

    onMount(() => {
        animate = true;
    })
</script>

<nav>
    {#if animate}
        <button on:click={toggleMenu} class="inactive" transition:fly={{ x: -100, duration: 1000 }}>
            <span></span>
            <span></span>
        </button>
        <a href="/"><img src="/images/logo.png" alt="Logo" transition:fly={{ y: -100, duration: 1000 }}></a>
        <a href="/"><img src="/images/locationIcon.svg" alt="Location Icon" transition:fly={{ x: 100, duration: 1000 }}></a>
    {/if}
</nav>

{#if showMenu}
    <div transition:fly={{ y: 200, duration: 400 }}>
        <a href="/">Programs</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
    </div>
{/if}

<style lang="scss">
    a {
        font-weight: 900;
        img {
            height: 1.75em;
        }
    }
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 4em;

        button {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.15em;
            flex-direction: column;
            min-width: 2em;
            padding: 0;
            height: 2em;
            width: 2em;

            span {
                width: 2em;
                border: solid 0.15em #0067be;
                border-radius: 10em;
                background-color: #0067be;

                position: absolute;
                &:first-of-type {
                    width: 1.5em;
                    rotate: 45deg;
                }
                &:last-of-type {
                    width: 1.5em;
                    rotate: -45deg;
                }
            }

            &:hover {
                span {
                    width: 1.5em;

                    &:first-of-type {
                        width: 1.5em;
                    }
                }
            }
        }
    }

    .inactive {
        span {
            position: relative;

            &:first-of-type {
                width: 1.25em;
                rotate: 0deg;
            }
            &:last-of-type {
                rotate: 0deg;
                width: 2em;
            }
        }

        &:hover {
            span {
                width: 1.25em;
                &:first-of-type {
                    width: 2em;
                }
            }
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 3em;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 4em;
        padding: 4em;
        height: calc(100dvh - 4em);
        width: 100%;
        background-color: white;
        z-index: 2;
    }
</style>