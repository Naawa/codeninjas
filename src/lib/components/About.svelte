<section>
    <p class="animateOnView">OUR MISSION</p>
    <div class="subheading">
        <h3 class="animateOnView">WE MAKE</h3>
        <h3 class="animateOnView">CODING FUN</h3>
    </div>
    <p class="animateOnView">We believe that Code Ninjas is unlike anything your child has experienced before. Every day thousands of our Ninjas enter our Dojos to learn to code on our proprietary learning platform – and in the process UNLEASH THEIR INNER NINJA! Your child will join like-minded students and together they will tackle fun and engaging problems - and have a great time!</p>
    <span class="animateOnView">
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
        gap: 2em;
        width: 100%;
        min-height: 60vh;
        padding: 4em 0;


        p {
            text-wrap: balance;
            max-width: 80dvw;

            &:first-of-type {
                color: #2c638fb6;
                letter-spacing: 0.1em;
            }   
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

            h3 {
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
    .animateOnView {
        opacity: 1;
        scale: 1;
        view-timeline-name: --item-timeline;
        animation: slide-fade-in both;
        animation-timeline: --item-timeline;
        animation-range: contain 10% contain 35%;
    }

    @keyframes slide-fade-in {
        from {
            opacity: 0;
            scale: 0;
            transform: translateY(5vh);
        }
    }
</style>