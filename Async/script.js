        'use strict';
        let timer=10;
        let time = document.getElementById('display');
        time.style.margin= "auto";
        time.style.textAlign = "center";
        setTimeout(() => {
            time.className = "num-box";
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "num-box";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "num-box";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "num-box";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "num-box";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "num-box";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "num-box";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "num-box";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.className = "num-box";
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.className = "num-box";
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.className = "title-box";
                                                    time.innerHTML = "Happy Independence Day!"
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000); 
