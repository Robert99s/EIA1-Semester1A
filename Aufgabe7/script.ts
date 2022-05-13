window.addEventListener("load", function() {

var Deutschland08:number = 82.11
var Deutschland22:number = 83.75


var Frankreich08:number = 62.14
var Frankreich22:number = 65.48


var Italien08:number = 59.00
var Italien22:number = 59.53


var Schweden08:number = 9.26
var Schweden22:number = 10.72

var EU22:number = 750.83

var Deutschland0822 = (Deutschland22-Deutschland08)/Deutschland08 * 100
var Frankreich0822 = (Frankreich22-Frankreich08)/Frankreich08 * 100
var Italien0822 = (Italien22-Italien08)/Italien08 * 100
var Schweden0822 = (Schweden22-Schweden08)/Schweden08 * 100

var DeutschlandEU = (Deutschland22/EU22) * 100
var FrankreichEU = (Frankreich22/EU22) * 100
var ItalienEU = (Italien22/EU22) * 100
var SchwedenEU = (Schweden22/EU22) * 100

var DeutschlandPlus = Deutschland22-Deutschland08
var FrankreichPlus = Frankreich22-Frankreich08
var ItalienPlus = Italien22-Italien08
var SchwedenPlus = Schweden22-Schweden08

function germany () {

    document.querySelector("#Einwohnerzahl").innerHTML = String(Deutschland22) + "Mio";
    document.querySelector("#ZurEU").innerHTML = String(DeutschlandEU.toFixed(2)) + "%";
    document.querySelector("#Wachstumsrate").innerHTML = String(Deutschland0822.toFixed(2)) + "%";
    document.querySelector("#Wachstumszahl").innerHTML = String(DeutschlandPlus.toFixed(2) + "Mio");
    document.querySelector("span").innerHTML = "Deutschland";
    document.querySelector(".chart").setAttribute('style', 'height: '+String(DeutschlandEU)+'%')

}

    document.querySelector(".germany").addEventListener('click', germany);

    function france () {

        document.querySelector("#Einwohnerzahl").innerHTML = String(Frankreich22) + "Mio";
        document.querySelector("#ZurEU").innerHTML = String(FrankreichEU.toFixed(2)) + "%";
        document.querySelector("#Wachstumsrate").innerHTML = String(Frankreich0822.toFixed(2)) + "%";
        document.querySelector("#Wachstumszahl").innerHTML = String(FrankreichPlus.toFixed(2) + "Mio");
        document.querySelector("span").innerHTML = "Frankreich";
        document.querySelector(".chart").setAttribute('style', 'height: '+String(FrankreichEU)+'%')
    }
    
        document.querySelector(".france").addEventListener('click', france);

        function italy () {

            document.querySelector("#Einwohnerzahl").innerHTML = String(Italien22) + "Mio";
            document.querySelector("#ZurEU").innerHTML = String(ItalienEU.toFixed(2)) + "%";
            document.querySelector("#Wachstumsrate").innerHTML = String(Italien0822.toFixed(2)) + "%";
            document.querySelector("#Wachstumszahl").innerHTML = String(ItalienPlus.toFixed(2) + "Mio");
            document.querySelector("span").innerHTML = "Italien";
            document.querySelector(".chart").setAttribute('style', 'height: '+String(ItalienEU)+'%')
        }
        
            document.querySelector(".italy").addEventListener('click', italy);

            function sweden () {

                document.querySelector("#Einwohnerzahl").innerHTML = String(Schweden22) + "Mio";
                document.querySelector("#ZurEU").innerHTML = String(SchwedenEU.toFixed(2)) + "%";
                document.querySelector("#Wachstumsrate").innerHTML = String(Schweden0822.toFixed(2)) + "%";
                document.querySelector("#Wachstumszahl").innerHTML = String(SchwedenPlus.toFixed(2) + "Mio");
                document.querySelector("span").innerHTML = "Schweden";
                document.querySelector(".chart").setAttribute('style', 'height: '+String(SchwedenEU)+'%')
            }
            
                document.querySelector(".sweden").addEventListener('click', sweden);
})