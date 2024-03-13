<script lang="ts">
	import { reveal } from "svelte-reveal";
	import { scale, fly, slide } from "svelte/transition";

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
    
    let index = 0;
    let display: CNProgram = programs[index];

    function next() {
        if(index < programs.length - 1) {
            console.log(index, programs.length)
            index++;
            display = programs[index];
        }
        else {
            index = 0;
            display = programs[index];
        }
    }

    function prev() {
        if(index > 0) {
            index--;
            display = programs[index];
        }
        else {
            index = programs.length - 1;
            display = programs[index];
        }
    }

</script>

<section>
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

<style lang="scss">
    section {
        margin: 4em 0 0;
        height: 60vh;
        width: 100vw;
        overflow-x: scroll;
        position: relative;
        display: grid;
        grid-auto-flow: column;
        scroll-snap-type: mandatory;
        scroll-snap-align: start;

        span {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            padding: 0 10%;

            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                min-width: 200px;
                width: 50vw;
                position: relative;
              
                span {
                    min-width: fit-content;
                    width: 80%;
                    height: fit-content;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 0;
                }

                &:last-of-type {
                    align-items: center;
                }

                img {
                    position: absolute;
                    max-height: 40vh;
                }

                p {
                    margin: 0.5em 0 2em;
                    font-size: 95%;
                    max-width: 80%;
                }
            }
        }
    }

    @media (width < 800px) {
        section {
            height: fit-content;
            span {
                flex-direction: column;
                div {
                    position: relative;
                    width: 100%;
                    min-height: 40vh;
                    justify-content: start;
                    
                    &:last-of-type {
                        order: -1;
                    }

                    span, p {
                        width: 100%;
                        max-width: 100%;
                    }

                    img {
                        position: absolute;
                        min-width: 100px;
                        height: 80%;
                    }
                }
            }
        }
    }
</style>