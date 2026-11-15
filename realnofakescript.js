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
            
            document.getElementById("camera").addEventListener("click", async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: true
                    });   
                    
                    stream.getTracks().forEach(track => track.stop());
            } catch (error) {
            }
        });
            function LQWHUYHQWLRQ() {
                let ME = Math.floor(Math.random()*34);
                if (ME == 33){
                    document.getElementById("BOXER").src = "images/DE5544D.png";
                    document.getElementById("NUM").innerHTML = "<a href='https://doolf.net/lock'>333333333333333333333333333</a>";
                }
            } 
            
            function check() {
            if (document.getElementById('1').innerText == "2" && document.getElementById('2').innerText == "0" && document.getElementById('3').innerText == "0" && document.getElementById('4').innerText == "9" && document.getElementById('5').innerText == "0" && document.getElementById('6').innerText == "1" && document.getElementById('7').innerText == "2" && document.getElementById('8').innerText == "6") 
                {
                document.getElementById('DIV').className = "HIDDEN";
                document.getElementById('DIV2').className = "HIDDEN";
                document.getElementsByTagName('img')[0].src = "images/doyou.png";
                }
            else {
                document.getElementById('1').innerText = "0";
                document.getElementById('2').innerText = "0";
                document.getElementById('3').innerText = "0";
                document.getElementById('4').innerText = "0";
                document.getElementById('5').innerText = "0";
                document.getElementById('6').innerText = "0";
                document.getElementById('7').innerText = "0";
                document.getElementById('8').innerText = "0";
            }
        }
            function add1(n) {
                let num = (document.getElementById(n).innerText);
                num++;
                if (num > 9){
                    num = 0;
                }
                document.getElementById(n).innerText = num;
            }