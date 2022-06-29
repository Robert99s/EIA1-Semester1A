window.addEventListener("load", function(): void {

    interface Aufgaben {
        de: string;
        esp: string;
        words: string[];
    }
    
    var aufgaben: Aufgaben[] = [
    {
        de: "Ich heiße Carlos",
        esp: "Me llamo Carlos",
        words: ["Me", "Llamo", "Carlos"]
    },
    {
        de: "Guten Morgen Pablo",
        esp: "Buenos Dias Pablo",
        words: ["Buenos", "Dias", "Pablo"]
    },
    {
        de: "Entschuldigung, das verstehe ich nicht",
        esp: "Perdón, no entiendo",
        words: ["Perdón", "No", "Entiendo"]
    },
    {
        de: "Ich spreche nicht viel Spanisch",
        esp: "No hablo mucho español",
        words: ["No", "Hablo", "Mucho", "Español"]
    },
    {
        de: "Wie spricht man das aus?",
        esp: "¿Cómo se pronuncia esto?",
        words: ["¿Cómo", "Se", "Pronuncia", "Esto?"]
    },
    {
        de: "Könnten Sie das bitte wiederholen?",
        esp: "¿Uste podría repetirlo, por favor?",
        words: ["¿Uste", "Podría", "Repetirlo", "Por", "Favor?"]
    },
    {
        de: "Woher kommst Du?",
        esp: "De dónde eres?",
        words: ["De", "Dónde", "Eres?"]
    },
    {
        de: " Wie geht es dir?",
        esp: "Cómo està usted?",
        words: ["Cómo", "Està", "usted?"]
    },
    {
        de: "Danke gut. Und selbst?",
        esp: "Bien gracias, y tu?",
        words: ["Bien", "Gracias", "Y", "Tu?"]
    },
    {
        de: "Ich komme aus Madrid",
        esp: "Soy de Madrid",
        words: ["Soy", "De", "Madrid"]
    },
    {
        de: "Die Karte bitte!",
        esp: "La carta, por favor!",
        words: ["La", "Carta,", "Por", "favor!"]
    },
    {
        de: "Die Rechnung bitte!",
        esp: "La cuenta, por favor!",
        words: ["La", "Cuenta", "Por", "Favor!"]
    },
    {
        de: "Ich schaue mich nur um",
        esp: "Sólo estoy mirando",
        words: ["Sólo", "Estoy", "Mirando"]
    },
    {
        de: "Was kostet das?",
        esp: "¿Cuánto cuesta esto?",
        words: ["¿Cuánto", "Cuesta", "Esto?"]
    },
    {
        de: "Wo befindet sich das Restaurant?",
        esp: "¿Dónde queda el restaurante?",
        words: ["¿Dónde", "Queda", "El", "Restaurante?"]
    }   
    ];
    
    let index: number = 0;
    let score: number = 0;

    function hard15(): void {
        var randomindex: number = Math.floor(Math.random() * 15);
        document.querySelector("#de").innerHTML = aufgaben[randomindex].de;
    }

    function easy (): void {
        console.log("1");
        index++;
    }

    function medium (): void {
        console.log("2");
        index++;
    }

    function hard (): void {
        console.log("3");
        index++;
    }

    function language (): void {
        if (document.querySelector("#language").getAttribute("class") == "spain") {
            document.querySelector("#language").setAttribute("class", "ukraine");
            document.querySelector("h2").innerHTML = String("DE > ESP");
            document.querySelector("#language").innerHTML = String ("Ukrainisch");
            document.querySelector("#translator").innerHTML = String ("elegir dificultad");
        }
        else {
            document.querySelector("#language").setAttribute("class", "spain");
            document.querySelector("h2").innerHTML = String("DE > UKR");
            document.querySelector("#language").innerHTML = String ("Spanisch");
            document.querySelector("#translator").innerHTML = String ("вибрати складність");
        }
    }
   
    function rules (): void {
        alert("Die Sätze durch klick auf die Wörter übersetzen. Richtig/Falsch gibt +1/-1 Punkt.");
        console.log("+1");
        
    }

    document.querySelector("#easy").addEventListener("click", function(): void { easy(); });
    document.querySelector("#medium").addEventListener("click", function(): void { medium(); });
    document.querySelector("#hard").addEventListener("click", function(): void { hard15(); });
    document.querySelector("#language").addEventListener("click", function(): void { language(); });
    document.querySelector("#rules").addEventListener("click", function(): void { rules(); });
});

