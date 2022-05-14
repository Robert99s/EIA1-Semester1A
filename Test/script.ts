var Deutschland08 = 82.11
var Deutschland22 = 83.75


var Frankreich08 = 62.14
var Frankreich22 = 65.48


var Italien08 = 59.00
var Italien22 = 59.53


var Schweden08 = 9.26
var Schweden22 = 10.72

var EU22 = 750.83

console.log("Die Einwohnerzahl in Deutschland stieg von 2008 " + Deutschland08 + " auf " + Deutschland22 + " in 2022.");
console.log("Die Einwohnerzahl in Frankreich stieg von 2008 " + Frankreich08 + " auf " + Frankreich22 + " in 2022.");
console.log("Die Einwohnerzahl in Italien stieg von 2008 " + Italien08 + " auf " + Italien22 + " in 2022.");
console.log("Die Einwohnerzahl in Schweden stieg von 2008 " + Schweden08 + " auf " + Schweden22 + " in 2022.");

var Deutschland0822 = (Deutschland22-Deutschland08)/Deutschland08 * 100
console.log("Die Einwohnerzahl stieg um " + Deutschland0822.toFixed(2) + " % in Deutschland"); 

var Frankreich0822 = (Frankreich22-Frankreich08)/Frankreich08 * 100
console.log("Die Einwohnerzahl stieg um " + Frankreich0822.toFixed(2) + " % in Frankreich"); 

var Italien0822 = (Italien22-Italien08)/Italien08 * 100
console.log("Die Einwohnerzahl stieg um " + Italien0822.toFixed(2) + " % in Italien"); 

var Schweden0822 = (Schweden22-Schweden08)/Schweden08 * 100
console.log("Die Einwohnerzahl stieg um " + Schweden0822.toFixed(2) + " % in Schweden"); 

var DeutschlandEU = (Deutschland22/EU22) * 100
console.log("Realtiv zur EU hat Deutschland " + DeutschlandEU.toFixed(2) + " % Einwohner");

var FrankreichEU = (Frankreich22/EU22) * 100
console.log("Realtiv zur EU hat Frankreich " + FrankreichEU.toFixed(2) + " % Einwohner");

var ItalienEU = (Italien22/EU22) * 100
console.log("Realtiv zur EU hat Italien " + ItalienEU.toFixed(2) + " % Einwohner");

var SchwedenEU = (Schweden22/EU22) * 100
console.log("Realtiv zur EU hat Schweden " + SchwedenEU.toFixed(2) + " % Einwohner");