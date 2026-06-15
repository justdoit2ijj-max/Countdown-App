import { state } from "./state";
import gsap from "gsap";

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let interval = setInterval(() => {
    state.sec--;

    gsap.fromTo(
        "#sec-first-panel",
        { rotateX: 0 },
        {
            rotateX: -180,
            duration: 0.7,
            ease: "power2.in",
            onComplete: () => {
                gsap.set("#sec-first-panel", { rotateX: 0 });
            }
        }
    );

    if (state.sec < 0) {
        state.sec = 59;
        state.min--;
        gsap.fromTo(
            "#min-first-panel",
            { rotateX: 0 },
            {
                rotateX: -180,
                duration: 0.7,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set("#min-first-panel", { rotateX: 0 });
                }
            }
        );
        if (state.min < 0) {
            state.min = 59;
            state.hours--;
            gsap.fromTo(
                "#hour-first-panel",
                { rotateX: 0 },
                {
                    rotateX: -180,
                    duration: 0.7,
                    ease: "power2.in",
                    onComplete: () => {
                        gsap.set("#hour-first-panel", { rotateX: 0 });
                    }
                }
            );
            if (state.hours < 0) {
                state.hours = 23;
                state.days--;
                gsap.fromTo(
                    "#day-first-panel",
                    { rotateX: 0 },
                    {
                        rotateX: -180,
                        duration: 0.7,
                        ease: "power2.in",
                        onComplete: () => {
                            gsap.set("#day-first-panel", { rotateX: 0 });
                        }
                    }
                );
                if (state.days < 0) {
                    clearInterval(interval);
                    return;
                }

                day.textContent = state.days;
            }

            hour.textContent = state.hours;
        }

        min.textContent = state.min;
    }

    sec.textContent = state.sec;

}, 1000);