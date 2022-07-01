window.addEventListener("load", function () {
    // Array mit den 15 Übungen, beinhaltet die deutsche Version, und die spanische als auch die ukrainische Version in Form eines Arrays innerhalb des Interface Arrays
    var alleAufgaben = [
        {
            de: "Ich heiße Robert",
            ukr: ["Мене", "звати", "Роберт"],
            words: ["Me", "Llamo", "Roberto"]
        },
        {
            de: "Guten Morgen Pablo",
            ukr: ["Доброго", "ранку", "Пабло"],
            words: ["Buenos", "Dias", "Pablo"]
        },
        {
            de: "Entschuldigung, das verstehe ich nicht",
            ukr: ["Шкода,", "що", "я", "не", "розумію"],
            words: ["Perdón", "No", "Entiendo"]
        },
        {
            de: "Ich spreche nicht viel Spanisch",
            ukr: ["Я", "мало", "розмовляю", "іспанською"],
            words: ["No", "Hablo", "Mucho", "Español"]
        },
        {
            de: "Wie spricht man das aus?",
            ukr: ["як", "ви", "це", "вимовляєте?"],
            words: ["¿Cómo", "Se", "Pronuncia", "Esto?"]
        },
        {
            de: "Könnten Sie das bitte wiederholen?",
            ukr: ["Ви", "можете", "повторити,", "що?"],
            words: ["¿Uste", "Podría", "Repetirlo", "Por", "Favor?"]
        },
        {
            de: "Woher kommst Du?",
            ukr: ["Звідки", "ти", "родом?"],
            words: ["De", "Dónde", "Eres?"]
        },
        {
            de: "Wie geht es dir?",
            ukr: ["Як", "ти?"],
            words: ["Cómo", "Està", "Usted?"]
        },
        {
            de: "Danke gut. Und selbst?",
            ukr: ["Добре,", "дякую.", "І", "навіть?"],
            words: ["Bien", "Gracias", "Y", "Tu?"]
        },
        {
            de: "Ich komme aus Madrid",
            ukr: ["Я", "з", "Мадрида"],
            words: ["Soy", "De", "Madrid"]
        },
        {
            de: "Die Karte bitte!",
            ukr: ["Меню", "будь", "ласка!"],
            words: ["La", "Carta,", "Por", "Favor!"]
        },
        {
            de: "Die Rechnung bitte!",
            ukr: ["Законопроект,", "будь", "ласка!"],
            words: ["La", "Cuenta", "Por", "Favor!"]
        },
        {
            de: "Ich schaue mich nur um",
            ukr: ["Я", "просто", "озираюся"],
            words: ["Sólo", "Estoy", "Mirando"]
        },
        {
            de: "Was kostet das?",
            ukr: ["Що", "це", "коштує?"],
            words: ["¿Cuánto", "Cuesta", "Esto?"]
        },
        {
            de: "Wo befindet sich das Restaurant?",
            ukr: ["Де", "знаходиться", "ресторан?"],
            words: ["¿Dónde", "Queda", "El", "Restaurante?"]
        }
    ];
    // Variablen benennen
    let exercise = 0;
    let currentDifficulty = 0;
    let currentLanguage = "esp";
    let setOfTasks = [];
    let clickedWord = 0;
    let score = 0;
    let doneExercise = 0;
    // Je nach gewählter Schwierigkeit werden 5, 10 oder 15 Übungen zufällig ausgewählt und in das Array ExerciseSentences eingefügt
    function setDifficulty(_difficulty) {
        currentDifficulty = _difficulty;
        let exerciseSentences = [];
        for (let index = 0; index < _difficulty; index++) {
            // -1, da array von 0-14 anstatt 0-15
            let pointer = Math.round(Math.random() * alleAufgaben.length - 1);
            let newSentence = getSentence(pointer);
            exerciseSentences.push(newSentence);
        }
        return exerciseSentences;
    }
    // Verschiebt die ausgewählte Aufgabe in den temporären Aufgabenhalter, damit keine doppelte Selektion möglich ist und die Aufgabe gelöst werden muss
    function getSentence(_pointer) {
        let chosenExercise = alleAufgaben.splice(_pointer, 1);
        return chosenExercise[0];
    }
    // Mischt die Wörter, damit die zu wählenden Wörter durcheinander ausgespuckt werden
    function mixWords(_words) {
        let counter = _words.length;
        let mixedWords = [];
        let copyOfWords = _words.slice();
        for (let index = 0; index < counter; index++) {
            let pointer = Math.round(Math.random() * copyOfWords.length - 1);
            mixedWords.push(copyOfWords.splice(pointer, 1)[0]);
        }
        return mixedWords;
    }
    // Die Anzahl der Aufgaben werden je nach Schwierigkeit aus dem temporären Aufgabenhalter gezogen
    function newTask(_difficulty) {
        clearWords();
        setOfTasks = setDifficulty(_difficulty);
        nextTask();
    }
    // Die Aufgabe wird in deutsch angzeigt, damit der Nutzer weis welchen Satz er zu lösen hat
    function showGermanTranslation(_aufgabe) {
        document.getElementById("de").innerHTML = _aufgabe.de;
    }
    // Die wählbaren Wörter der aktiven Aufgabe werden anzuzeigen und das Menü verschwindet
    function showWords(_words, _aufgabe) {
        hideMenu();
        _words.forEach((word, i) => {
            showWord(word, _aufgabe);
        });
    }
    // Funktion um die Buttons die im Menü angezeigt werden verschwinden zu lassen
    function hideMenu() {
        let easyButton = document.getElementById("easy");
        let mediumButton = document.getElementById("medium");
        let hardButton = document.getElementById("hard");
        let languageButton = document.getElementById("language");
        let rulesButton = document.getElementById("rules");
        // Die Menübuttons werden ausgeblendet
        easyButton.style.display = "none";
        mediumButton.style.display = "none";
        hardButton.style.display = "none";
        languageButton.style.display = "none";
        rulesButton.style.display = "none";
    }
    // Die Button mit den Antwortmöglichkeiten werden erstellt und angezeigt
    function showWord(_word, _aufgabe) {
        let elem = document.createElement("button");
        elem.addEventListener("click", function () {
            let translator = document.getElementById("translator");
            let words = [];
            if (currentLanguage == "esp") {
                words = _aufgabe.words;
                // frägt ab ob spanisch gespielt wird
            }
            else if (currentLanguage == "ukr") {
                words = _aufgabe.ukr;
                // frägt ab ob ukrainisch gespielt wird
            }
            if (testWordIfCorrect(_word, clickedWord, words) == true) {
                // Setze das Wort in den Kasten ein und mache weiter
                if (clickedWord == 0) {
                    translator.innerHTML = "";
                    translator.innerHTML = _word + " ";
                    clickedWord++;
                    score++;
                    // Erste Antwortmöglichkeit ist richtig, Übersetzer wird geleert
                }
                else if (clickedWord == words.length - 1) {
                    translator.innerHTML += _word;
                    clickedWord = 0;
                    score++;
                    doneExercise++;
                    setTimeout(function () {
                        nextTask();
                    }, 1000);
                    // Letzte Antwort war richtig, Aufgabe wurde gelöst, nächste Aufgabe kommt nach 1 Sekunde       
                }
                else {
                    translator.innerHTML += _word + " ";
                    clickedWord++;
                    score++;
                    // Richtige Antworten die innerhalb des Satzanfangs und Ende stehen werden zur Übersetzung hinzugefügt
                }
            }
            else {
                // Nutzer hinweisen auf Fehler, Aufgabe abbrechen und neu starten
                clickedWord = 0;
                translator.innerHTML = "";
                score--;
                alert("Falsch - Minuspunkt! Lösen Sie den Satz erneut!");
                if (score < 0) {
                    score = 0;
                    // Score kann nicht negativ sein
                }
            }
            // um den live Score, sowie den Stand der aktuellen Übung und den Fortschritt der Übung als Blakendiagramm darzustellen
            document.querySelector("#score").innerHTML = String(score);
            document.querySelector("h2").innerHTML = String("Übung " + doneExercise + "/" + currentDifficulty);
            document.querySelector("#progressbar").setAttribute("style", "height: " + Number(doneExercise) / (currentDifficulty) * 100 + "%");
        });
        elem.innerHTML = _word;
        let wordContainer = document.getElementById("words");
        wordContainer.appendChild(elem);
    }
    // Funktion gibt dem Nutzer solange eine neue Aufgabe, bis alle gelöst wurden, anschließend wird ihm zum absolvieren gratuliert
    function nextTask() {
        exercise++;
        document.querySelector("#translator").innerHTML = String("");
        if (currentDifficulty == exercise - 1) {
            let translator = document.getElementById("translator");
            let de = document.getElementById("de");
            de.innerHTML = "Glückwunsch, Sie haben alles gelöst!";
            setTimeout(function () {
                refresh();
            }, 3000);
            // nach 3 Sekunden wird der Nutzer ins Menü zurückgebracht  
            if (currentLanguage == "esp") {
                translator.innerHTML = "¡Enhorabuena, lo has solucionado todo!";
                // Gratulation auf spanisch
            }
            else if (currentLanguage == "ukr") {
                translator.innerHTML = "Вітаю, ви все вирішили!";
                // Gratulation in ukrainisch
            }
            clearWords();
            return;
        }
        clearWords();
        // Die neue Aufgabe wird ausgeführt
        let words = [];
        if (currentLanguage == "esp") {
            words = mixWords(setOfTasks[exercise - 1].words);
        }
        else if (currentLanguage == "ukr") {
            words = mixWords(setOfTasks[exercise - 1].ukr);
        }
        showWords(words, setOfTasks[exercise - 1]);
        showGermanTranslation(setOfTasks[exercise - 1]);
    }
    // Funktion um die Seite neu zu laden, damit man zurück ins Menü kehrt
    function refresh() {
        location.reload();
    }
    // Funktion um zu prüfen ob die Eingabe des Nutzers korrekt ist
    function testWordIfCorrect(_word, _position, _correctWords) {
        console.log("Gewählte Wort: " + _word);
        console.log("Wort an Position " + _position + " ist: " + _correctWords[_position]);
        if (_word == _correctWords[_position]) {
            return true;
        }
        else {
            return false;
        }
    }
    // Funktion um die Buttons mit den Wörtern zu leeren
    function clearWords() {
        let words = document.getElementById("words");
        words.innerHTML = "";
    }
    // Funktion um die Sprache zu ändern
    function language() {
        if (document.querySelector("#language").getAttribute("class") == "spain") {
            currentLanguage = "esp";
            document.querySelector("#language").setAttribute("class", "ukraine");
            document.querySelector("h2").innerHTML = String("DE > ESP");
            document.querySelector("#language").innerHTML = String("Ukrainisch");
            document.querySelector("#translator").innerHTML = String("elegir dificultad");
        }
        else {
            currentLanguage = "ukr";
            document.querySelector("#language").setAttribute("class", "spain");
            document.querySelector("h2").innerHTML = String("DE > UKR");
            document.querySelector("#language").innerHTML = String("Spanisch");
            document.querySelector("#translator").innerHTML = String("вибрати складність");
        }
    }
    // Regeln sollen als Alert ausgegeben werden
    function rules() {
        alert("Die Sätze durch klick auf die Wörter übersetzen. Richtig/Falsch gibt +1/-1 Punkt. Bei falsch wird der aktuelle Satz außerdem zurückgesetzt. Leicht = 5 Runden, Mittel = 10 und Schwer = 15. Optional auch in ukrainisch spielbar.");
    }
    // Klick-Events bei Klick der Buttons wird der jeweilige Kurs gestartet, die Sprache geändert oder die Regeln angezeigt
    document.querySelector("#easy").addEventListener("click", function () { newTask(5); });
    document.querySelector("#medium").addEventListener("click", function () { newTask(10); });
    document.querySelector("#hard").addEventListener("click", function () { newTask(15); });
    document.querySelector("#language").addEventListener("click", function () { language(); });
    document.querySelector("#rules").addEventListener("click", function () { rules(); });
});
//# sourceMappingURL=script.js.map