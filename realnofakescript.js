        const currentDate = new Date();
        let hour = currentDate.getHours();
        let minute = currentDate.getMinutes();
        if (hour == 23) {
            if(minute == 53){
            document.getElementById("doolf").innerHTML = "YOU'RE IN THE WRONG PLACE <br> IN THE RIGHT TIME";
            }
        }

            const bgMusic = document.getElementById("bgMusic");
            const gnaar = new Audio("audio/bark.mp3");
            const soundTrigger = document.querySelector(".soundTrigger");
            
            soundTrigger.addEventListener("mouseenter", () => {
                gnaar.volume = 0.2;
                gnaar.currentTime = 0;
                gnaar.play().catch(() => {});
            });
            
            document.addEventListener(
                "click",
                () => {
                    bgMusic.volume = 0.2;
                    bgMusic.play();
                },
                { once: true }
            );
            
            function start() {
                const splash = document.getElementById("splash");
                
                splash.addEventListener("transitionend", () => {
                    splash.remove();
                });
                
                splash.classList.add("hide");
            }
            
            document.addEventListener("dragstart", (e) => {
                e.preventDefault();
            });
            
            document.getElementById("cameraText").addEventListener("click", async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: true
                    });   
                    
                    stream.getTracks().forEach(track => track.stop());
            } catch (error) {
            }
        });