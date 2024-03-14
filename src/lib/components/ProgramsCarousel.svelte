<script lang="ts">
	import { browser } from "$app/environment";
	import "$lib/scss/blobz.min.css"

    let backgrounds = ["", "", "", "", "", ""]

    interface CNProgram {
        name: string,
        description: string,
        ages: string,
        prereq: string, 
        topics: string,
        pl: string,
        focus: string,
        bg: string,
    }

    const programs: CNProgram[] = [
        {
            name: "CREATE",
            description: "An exciting learning adventure for tech-loving kids! Have a blast building awesome videogames and developing ninja coding skills on the path from white to black belt.",
            ages: "8 - 15",
            prereq: "Reading Ability in English",
            topics: "Basic to professional game development.",
            pl: "JavaScript, Lua, and C#",
            focus: "/images/createFocus.jpg",
            bg: backgrounds[0],
        },
        {
            name: "JUNIOR",
            description: "Build a foundation of coding and critical problem-solving skills through our fun and completely visual cirriculum - no reading required!",
            ages: "5 - 7",
            prereq: "None! We start from no prior computer use.",
            topics: "Basic sequencing, loops, typing, and block coding.",
            pl: "",
             focus: "/images/juniorFocus.png",
            bg: backgrounds[1],
        },
        {
            name: "CAMPS",
            description: "Our camps offer an immersive environment for kids to explore and develop new skills, gain confidence, and have fun with friends. From coding and game building, to STEM and robotics - it's an unforgettable experience!.",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, Stop Motion Animation, Become a Youtuber, Makey Makey, Python, and more!",
            pl: "",
            focus: "/images/campsFocus.png",
            bg: backgrounds[4],
        },
        {
            name: "BIRTHDAY PARTIES",
            description: "Celebrate your childs birthday at Code Ninjas!",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, Kahoot!",
            pl: "",
             focus: "/images/bdFocus.png",
            bg: backgrounds[5],
        },
        {
            name: "PARENTS NIGHT OUT",
            description: "You deserve a night out of town. Meanwhile, your kids want to play and have fun. That's why we offer Parent's Night Out - a win-win evening for families happening on a Friday each month from 6pm - 9pm. Drop off your kids at Code Ninjas, where they'll play games, eat pizza, and socialize!",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, 3D Printing, STEM Activities and more...",
            pl: "",
             focus: "/images/pnoFocus.png",
            bg: backgrounds[3],
        },
        {
            name: "ROBOTICS",
            description: "Our comprehensive cirriculum immerses students in hand-on robotics projects, teaching key concepts like coding, engineering, and problem-solving. With experienced instructors and engaging activities, sutdents develop critical skills and unleash their creativity. Join us at Code Ninjas and ignite your passion for robotics today!",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, Kahoot!",
            pl: "",
             focus: "/images/roboticsFocus.png",
            bg: backgrounds[4],
        },
    ]
    
    
    let slideIndex = 1;

    function scroll(n: number) {
        showSlides(slideIndex += n);
    }

    function showSlides(n: number) {
        if(browser) {
            let slides = document.getElementsByClassName("slides");
            if (n > slides.length) {
                slideIndex = 1;
            }    
            if (n < 1) {
                slideIndex = slides.length;
            }
            for(let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            } 
            slides[slideIndex - 1].style.display = "flex";  
        }
    }
</script>

<section id="carousel">
    {#each programs as program }
        <span class="slides">
            <div>
                <span>
                    <h4>{program.name}</h4>
                    <h4>AGES {program.ages}</h4>
                </span>
                <p>{program.description}</p>
                <h4>PREREQUISITES</h4>
                <p>{program.prereq}</p>
                <h4>TOPICS COVERED</h4>
                <p>{program.topics}</p>
                {#if program.pl}
                    <h4>PROGRAMMING LANGUAGES</h4>
                    <p>{program.pl}</p>
                {/if}
            </div>
            <div>
                <img src={program.focus} alt="">
            </div>
        </span>
    {/each}
</section>
<span>
    <button on:click={() => scroll(-1)}>Prev</button>
    <button on:click={() => scroll(1)}>Next</button>
</span>

<style lang="scss">
    section {
        height: 60vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
        display: grid;
        grid-auto-flow: column;
        scroll-snap-type: x mandatory;

        span {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2em;
            padding: 0 10%;
            scroll-snap-align: center;
            scroll-snap-stop: always; 

            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: 200px;
                width: 40vw;
                height: 100%;
                position: relative;
                border: none;
              
                span {
                    min-width: fit-content;
                    width: 80%;
                    height: fit-content;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 0;
                    scroll-snap-align: none;
                    scroll-snap-stop: normal;
                }

                &:last-of-type {
                    align-items: center;
                    order: -1;
                }

                img {
                    position: absolute;
                    height: 70%;
                    border-radius: 0.5em;
                }

                p {
                    margin: 0.25em 0 1em;
                    font-size: 95%;
                    max-width: 80%;
                }
            }
        }
    }
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10vw;
        button {
            min-width: fit-content;
            width: fit-content;
            border-radius: 3em;
            margin: 1em 0 3em;
        }
    }

    @media (width < 1000px) {
        section {
            height: fit-content;
            span {
                flex-direction: column;
                height: 40em;
                gap: 2em;
                padding: 0 2em;
                
                div {
                    position: relative;
                    width: 100%;
                    height: auto;
                    justify-content: center;
                    
                    &:last-of-type {
                        justify-content: center;
                        order: -1;
                        min-height: 15vh;
                    }

                    span, p {
                        width: 100%;
                        max-width: 100%;
                    }

                    img {
                        position: relative;
                        min-width: 100px;
                        height: 70%;
                    }
                }
            }
        }
    }
</style>