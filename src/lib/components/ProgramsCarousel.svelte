<script lang="ts">
	import { browser } from "$app/environment";

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
            focus: "/images/createFocus.png",
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
    
    let i = 0;

    function scrollNext() {
        if(i < programs.length - 1) {
            if(browser) {
                document.getElementById(`slide${i++}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
        else {
            if(browser) {
                document.getElementById(`slide${0}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
    }
    function scrollPrev() {
        if(i > 0) {
            if(browser) {
                document.getElementById(`slide${i--}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
        else {
            if(browser) {
                document.getElementById(`slide${programs.length - 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
    }
</script>

<section id="carousel">
    {#each programs as program, i}
        <span id="slide{i}">
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
    <button on:click={scrollPrev}>Prev</button>
    <button on:click={scrollNext}>Next</button>
</span>

<style lang="scss">
    section {
        height: 60vh;
        width: 100vw;
        overflow-x: scroll;
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
            gap: 3em;
            padding: 0 10%;
            scroll-snap-align: center;
            scroll-snap-stop: always;  


            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: 200px;
                width: 40vw;
                height: 50vh;
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
                    position: relative;
                    max-height: 40vh;
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
        gap: 0.2em;
        div {
            height: 1em;
            width: 1em;
            border: solid 2px black;
            border-radius: 10em;
        }
        button {
            min-width: fit-content;
            width: fit-content;
            border-radius: 3em;
            margin: 0 3em;
        }
    }

    @media (width < 1000px) {
        section {
            height: fit-content;
            span {
                flex-direction: column;
                height: fit-content;
                gap: 1em;
                
                div {
                    position: relative;
                    width: 100%;
                    min-height: fit-content;
                    height: fit-content;
                    justify-content: center;
                    
                    &:last-of-type {
                        justify-content: center;
                        order: -1;
                        min-height: 35vh;
                    }

                    span, p {
                        width: 100%;
                        max-width: 100%;
                    }

                    img {
                        position: absolute;
                        min-width: 100px;
                        height: 25vh;
                    }
                }
            }
        }
    }
</style>