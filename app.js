//Flip card
let flip = false;
const card = document.getElementById("card1");

function flipCard() {
    const audio = document.getElementById("audio");
  if (flip === false) {
    card.classList.add("flip");
    flip = true;
    audio.play();
  } else {
    card.classList.remove("flip");
    flip = false;
    setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;  
    }, 1500);
  }
}
card.addEventListener("click", flipCard);

//Greeting generator
let greetings =  [
    "Vánoce plné štědrosti, pohody, lásky, klidu, v novém roce hodně štěstí, zdraví, osobních a pracovních úspěchů",
    "Příjemné prožití svátků vánočních, mnoho štěstí, pevné zdraví a spoustu úspěchů v novém roce",
    "Spokojené, láskou a porozuměním naplněné vánoční svátky, v novém roce všechno dobré, hodně štěstí, zdraví a úspěchů",
    "Už nadešel nádherný vánoční čas a kouzlo Vánoc je všude kolem nás.Tak oslavte tento svátek spolu, bok po boku u štědrovečerního stolu! Krásné Vánoce",
    "Tím nejkrásnějším dárkem k Vánocům, není, co se zlatem třpytí. Je to úsměv, láska, pohlazení. Nad takový dar žádný není! Krásné Vánoce",
    "Lžičku hrdosti, hrníček radosti, kotlík úspěchů, jezírko peněz, moře štěstí, oceán zdraví a celý vesmír lásky do nového roku 2021",
    "Vánoce krásné a čisté jako sníh, domácí pohoda, radost a smích,silvestrovskou náladu po celý rok, štěstí ať Vás provází každičký krok. Veselé Vánoce",
    "Hvězdný pozdrav sněžných vloček, mnoho dárků pod stromeček, hodně štěstí, kupu lásky a příští rok žádné vrásky",
    "Novoroční předsevzetí ať se Vám vyplní, srdce ať se radostí zaplní, do nového roku ať vstoupíte s radostí, se zdravím, štěstím a bez starosti",
    "Novoroční předsevzetí ať se Vám vyplní, celé srdce ať se radostí zaplní, do nového roku ať vstoupíte s radostí, se zdravím, štěstím a bez starostí"
  ]

document.addEventListener('DOMContentLoaded', generateAGreeting = () => {
    let index = Math.floor(Math.random() * Math.floor(greetings.length));
    let generatedGreeting = greetings[index];
    document.querySelector(".inside-text").innerHTML = generatedGreeting;
  });

  
//Falling snow effect
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
