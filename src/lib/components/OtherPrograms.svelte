<script>

	import { browser } from "$app/environment";

</script>
<section>
    <div style="background: rgb(255,173,34);
    background: linear-gradient(180deg, rgba(255,173,34,1) 0%, rgba(180,17,113,1) 100%);
    ">
        <h3>BIRTHDAY PARTIES</h3>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}}}>Learn More</button>
    </div>
    <div style="background: rgb(33,56,133);
    background: linear-gradient(180deg, rgba(33,56,133,1) 0%, rgba(53,37,133,1) 100%);">
        <h3>PARENTS NIGHT OUT</h3>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}}}>Learn More</button>
    </div>
    <div style="background: rgb(27,48,87);
    background: linear-gradient(180deg, rgba(27,48,87,1) 10%, rgba(0,0,0,1) 100%);">
        <h3>AFTERSCHOOL ACTIVITIES</h3>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}}}>Learn More</button>
    </div>
    <div style="background: rgb(49,227,215);
    background: linear-gradient(180deg, rgba(49,227,215,1) 0%, rgba(24,112,159,1) 100%);">
        <h3>HOME SCHOOLING</h3>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}}}>Learn More</button>
    </div>
</section>

<style lang="scss">
    section {
        padding: 4em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2em;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 0%;
            min-width: 20em;
            min-height: 20em;
            padding: 2em;
            border-radius: 1em;
            gap: 1em;
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.24);

            h3, p {
                color: white;
                text-align: center;
            }

            button {
                margin: 1em 0;
                min-height: 0;
                height: 3em;
                min-width: fit-content;
                width: 12em;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #02ce9b;
                color: white;
                border-radius: 0.5em;
                box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.164);
            }
        }
    }
</style>