<script>

	import { browser } from "$app/environment";

</script>
<section>
    <img src="/images/campsbg.webp" alt="">
    <div>
        <img src="/images/campsFocus.webp" alt="">
    </div>
    <div>
        <p class="hidden">AGES 5 TO 14</p>
        <span>
            <h4>CODE NINJAS</h4>
            <h1>CAMPS</h1>
        </span>
        <p class="hidden">
            Transform your child's love for technology into an exciting learning adventure. Guided by our team of Code Senseis, Code Ninjas Camps empower kids to gain valuable tech skills and make new friends. It's an unforgettably fun learning experience!
        </p>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}}}>LEARN MORE</button>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 4em;
        padding: 8em;
        background: rgb(23, 161, 135);
        background: linear-gradient(138deg, rgb(22, 161, 136) 0%, rgb(0, 133, 167) 100%);
        width: 100%;
        position: relative;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            min-height: 100%;
            min-width: 100%;
            opacity: 0.7;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 0%;
            position: relative;

            p {
                min-width: 200px;
                width: 25em;
                max-width: 30vw;
                margin: 0.5em 0;
                color: #f6f7f8;

                &:first-of-type {
                    min-width: fit-content;
                    color: #63c3ce;
                }
            }

            span {
                h1 {
                    color: #92f4f5;
                    width: fit-content;
                }

                h4 {
                    font-weight: 600;
                    color: #f6f7f8;
                    width: fit-content;
                }

            }

            img {
                position: absolute;
                min-height: auto;
                min-width: auto;
                height: 100%;
                scale: 1.2;
                width: auto;
                top: auto;
                left: auto;
                align-self: end;
                border-radius: 1em;
                opacity: 1;
            }
        }

        button {
            margin: 2em 0;
        }
    }

    @media (width < 1200px) {
        section {
            flex-direction: column;
            padding: 4em 1em;
            gap: 1em;

            div {
                flex-direction: row;
                align-items: center;
                min-height: 200px;

                &:last-of-type {
                    flex-direction: column;
                }


                p {
                    text-align: center;
                    width: 50%;
                    max-width: 90vw;
                    margin: 0;

                    &:first-of-type {
                        background-color: #06637f;
                        padding: 0.75em 1.5em;
                        border-radius: 2em;
                        z-index: 1;
                        width: fit-content;
                    }
                }
            }

            span {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                background-color: #06637f;
                padding: 1em 3em;
                border-radius: 10em;
                translate: 0 -1em;
           }
        }
    }
</style>