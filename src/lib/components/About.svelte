<script lang="ts">

</script>

<section>
    <p>OUR MISSION</p>
    <div class="subheading">
        <h2>WE MAKE</h2>
        <h2>CODING FUN</h2>
    </div>
    <p>We believe that Code Ninjas is unlike anything your child has experienced before. Every day thousands of our Ninjas enter our Dojos to learn to code on our proprietary learning platform – and in the process UNLEASH THEIR INNER NINJA! Your child will join like-minded students and together they will tackle fun and engaging problems - and have a great time!</p>
    <span>
        <a href="https://www.youtube.com/watch?v=cg-lusa7yFM" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/MSNBC.svg" alt="MSNBC">
            </div>
        </a>
        <a href="https://www.parents.com/kids/camp/spring-break-camps-for-kids/" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/Parents-1.svg" alt="Parents-1">
            </div>
        </a>
        <a href="https://abc7ny.com/code-ninjas-syosset-coding-for-children/5287198/" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/abc-1.svg" alt="abc-1">
            </div>
        </a>
        <a href="https://lifehacker.com/how-a-coding-boot-camp-works-1828026066" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/lifehacker-1.svg" alt="lifehacker-1">
            </div>
        </a>
        <a href="https://www.entrepreneur.com/franchises/how-these-franchisees-became-franchisors/328186#3" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/enterpreneur.svg" alt="enterpreneur">
            </div>
        </a>
    </span>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 1em;
        width: 100%;
        min-height: 70vh;
        padding: 4em;

        p {
            text-wrap: balance;
            max-width: 80dvw;
            margin: 3em 0;
            &:first-of-type {
                color: #2c638fb6;
                letter-spacing: 0.1em;
                margin: 1em;
            }   
        }

        iframe {
            aspect-ratio: 16/9;
            height: 100%;
            width: clamp(200px, 100%, 1200px);
            padding: 2em;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;

            .subheading {
                display: block;
                height: fit-content;
            }

            h2 {
                &:last-of-type {
                    color: #187abf;
                }
            }

            p {
                &:first-of-type {
                    color: #506690;
                    letter-spacing: normal;
                }
            }
        }

        span {
            display: flex;
            width: 90%;
            //border: solid 1px red;
            justify-content: center;
            gap: 8dvw;
            align-items: center;
            padding: 1em 0;
            flex-wrap: wrap;
            margin: 2em 0 0;

            img {
                height: 2em;
            }
        }
    }

    .lazyloaded {
        width: clamp(200px, 60dvh, 70dvw);
    }
</style>