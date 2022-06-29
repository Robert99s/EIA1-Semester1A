window.addEventListener("load", function(): void {

    interface Aufgaben {
        de: string;
        esp: string;
        words: string[];
    }
    
    var aufgaben: Aufgaben[] = [
    {
        de: "Ich heiße Carlos",
        esp: "Me Ilamo Carlos",
        words: ["Me", "Ilamo", "Carlos"]
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
    }
    ];
    
    let index: number = 0;
    let score: number = 0;

    

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
    document.querySelector("#hard").addEventListener("click", function(): void { hard(); });
    document.querySelector("#language").addEventListener("click", function(): void { language(); });
    document.querySelector("#rules").addEventListener("click", function(): void { rules(); });
});

