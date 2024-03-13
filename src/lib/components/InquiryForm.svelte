<script lang="ts">
	import { page } from "$app/stores";
	import { dojos } from "$lib/utils/dojos";
	import { reveal } from "svelte-reveal";
	import SuperDebug, { superForm } from "sveltekit-superforms";


    export let data: any;
	const { form, errors, constraints, message, enhance } = superForm(data.form);

    $form.utmSource = $page.url.searchParams.get("utm_source");
    $form.utmMedium = $page.url.searchParams.get("utm_medium");
    $form.utmCampaign = $page.url.searchParams.get("utm_campaign");
</script>

<section id="contact">
    <p use:reveal={{ transition: "fly", duration: 200, reset: true }} >REQUEST INFO</p>
    <div>
        <h3 use:reveal={{ transition: "fly", duration: 200, reset: true }} >EMPOWER</h3>
        <h3 use:reveal={{ transition: "fly", duration: 200, reset: true }} >THEIR FUTURE</h3>
    </div>
    {#if $message}
        <h4>
            {$message}
        </h4>
    {:else}
        <form method="POST" use:enhance>
            <select bind:value={$form.dojo} name="dojo" use:reveal={{ transition: "fly", duration: 200, reset: true }} >
                <option>Select A Location</option>
                {#each dojos as dojo}
                    <option>{dojo}</option>
                {/each}
            </select>
            <span>
                <input use:reveal={{ transition: "fly", duration: 200, reset: true }} 
                type="text" 
                name="parentFirstName" placeholder="Parent First Name" bind:value={$form.parentFirstName}  {...$constraints.parentFirstName}
                aria-invalid={$errors.parentFirstName ? 'true' : undefined}>

                <input use:reveal={{ transition: "fly", duration: 200, reset: true }} 
                type="text" 
                name="parentLastName" 
                placeholder="Parent Last Name" 
                bind:value={$form.parentLastName}  {...$constraints.parentLastName}
                aria-invalid={$errors.parentLastName ? 'true' : undefined}>
            </span>
            {#if $errors.parentFirstName}<span class="invalid">{$errors.name}</span>{/if}
            {#if $errors.parentLastName}<span class="invalid">{$errors.name}</span>{/if}
            <input use:reveal={{ transition: "fly", duration: 200, reset: true }} 
            type="text" 
            name="contactNumber" 
            placeholder="(000)-000-0000" bind:value={$form.contactNumber}  {...$constraints.contactNumber}
            aria-invalid={$errors.contactNumber ? 'true' : undefined} maxlength="10">

            <input use:reveal={{ transition: "fly", duration: 200, reset: true }} 
            type="email" 
            name="email" 
            placeholder="your-email@example.com" bind:value={$form.email}  {...$constraints.email}
            aria-invalid={$errors.email? 'true' : undefined}>

            <span>
                <input use:reveal={{ transition: "fly", duration: 200, reset: true }} 
                type="text"
                name="childFirstName" 
                placeholder="Child First Name" bind:value={$form.childFirstName}  {...$constraints.childFirstName}
                aria-invalid={$errors.childFirstName ? 'true' : undefined}>

                <input use:reveal={{ transition: "fly", duration: 200, reset: true }} 
                type="text" 
                name="childLastName" 
                placeholder="Child Last Name" bind:value={$form.childLastName}  {...$constraints.childLastName}
                aria-invalid={$errors.childLastName ? 'true' : undefined}>

            </span>
            {#if $errors.childFirstName}<span class="invalid">{$errors.name}</span>{/if}
            {#if $errors.childLastName}<span class="invalid">{$errors.name}</span>{/if}
            <br>
            <input use:reveal={{ transition: "fly", duration: 200, reset: true }} type="text" style="display: none;" name="utmSource" bind:value={$form.utmSource}>
            <input use:reveal={{ transition: "fly", duration: 200, reset: true }} type="text" style="display: none;" name="utmMedium" bind:value={$form.utmMedium}>
            <input use:reveal={{ transition: "fly", duration: 200, reset: true }} type="text" style="display: none;" name="utmCampaign" bind:value={$form.utmCampaign}>
            <button use:reveal={{ transition: "fly", duration: 200, reset: true }}>SUBMIT</button>
        </form>
    {/if} 
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 2em;
        width: 100%;
        height: 100vh;

        p {
            color: #2c638fb6;
            letter-spacing: 0.1em;
        }

        div {
            h3 {
                &:last-of-type {
                    color: #187abf;
                }
            }
        }

        h4 {
            padding: 2em;
            background-color: white;
            border-radius: 2em;
        }

        form {
            padding: 4em 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            gap: 1em;
            min-width: fit-content;
            width: 35vw;
            max-width: 90dvw;
            background-color: white;
            box-shadow: 0 8px 24px #0067be40;
            border-radius: 0.5em;
            z-index: 1;

            span {
                width: 100%;
                display: flex;
                gap: 1em;
            }

            button {
                background-color: #4cdac2;
                color: white;
                box-shadow: 0 0 16px #3ab19d70;

                &:hover {
                    background-color: #40bda8;
                }
            }
        }
    }
</style>