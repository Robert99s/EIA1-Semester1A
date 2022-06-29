window.addEventListener("load", function(): void {

    interface Aufgaben {
        de: string;
        esp: string;
        words: string[];
    }
    
    var alleAufgaben: Aufgaben[] = [
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
    
    let exercise: number = 0;
    let score: number = 0;

    function hard15(): void {
        var randomindex: number = Math.floor(Math.random() * 15);
        document.querySelector("#de").innerHTML = alleAufgaben[randomindex].de;
    }

    //Je nach gewählter Schwierigkeit werden 5, 10 oder 15 Übungen ausgewählt und in das Array ExerciseSentences eingefügt
    function setDifficulty(_difficulty: number): void {
        let exerciseSentences: Aufgaben[] = [];
        for (let index = 0; index < _difficulty; index++) {
             let pointer: number = Math.round(Math.random() * alleAufgaben.length);
             let newSentence: Aufgaben = getSentence(pointer);
             exerciseSentences.push(newSentence);
        }
    }

    //Verschiebt die ausgewählte Aufgabe in den temporären Aufgabenhalter, damit keine doppelte Selektion möglich ist und die Aufgabe gelöst werden muss
    function getSentence (_pointer: number): Aufgaben {
        let chosenExercise: Aufgaben[] = alleAufgaben.splice(_pointer, 1);
        return chosenExercise[0];
    }

    function mixWords (_words: string[]): string[] {
        let counter: number = _words.length;
        let mixedWords: string[] = [];
        for (let index = 0; index < counter; index++) {
            let pointer: number = Math.round(Math.random() * _words.length);
            mixedWords.push(_words.splice(pointer, 1)[0]);
        }
        return mixedWords;
    }
    
    function showExercise (_task: Aufgaben): void {
        document.querySelector("#easy").innerHTML = mixWords(_task.words)[0];
    }

    function easy (): void {
        setDifficulty(5);
    }

    function medium (): void {
        setDifficulty(10);
    }

    function hard (): void {
        setDifficulty(15);
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

