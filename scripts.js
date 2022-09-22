// Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną
// parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins,
// kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction),
// ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides
// (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"),
// tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas
// kaitalioti).

function alertName(name) {
    alert(name)
}

function consoleName(name) {
    console.log(name)
}

function coreFunction(text, callback) {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    callback(capitalizedText)
}

coreFunction('saNDra', consoleName)

// Uzduotis 1
// Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach,
// atspausdink kiekvieną elementą (automobilio reikšmę).

// const cars = ["BMW", "VW", "Audi"]
// cars.forEach((value) => console.log(value))


// Uzduotis 2
// Pakoreguok pirmą pratimą, kad atspaudintum index: value
//(pvz: "0: BMW", "1: VW" ir t.t.).

const cars = ["BMW", "VW", "Audi"]
cars.forEach((item, index) => console.log(item, index))

// UZduotis 3
// Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok
// (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą,
// padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai
// surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

const friends = ["jeREmy", "joHN", "AAron"]
const newNames = friends.map((value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
console.log(newNames)

// Uzduotis 4
// Sukurk Array su savo draugų amžiais (nuo 1 iki 99).
//Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const friendsAge = [25, 35, 16, 50, 62, 5, 18, 10]
// const result = friendsAge.filter(checckAdult)
// function checckAdult(friendsAge) {
//     return friendsAge >= 18
// }
// console.log(result)

//arba
console.log(friendsAge.filter((x) => x >= 18))

// UZduotis 5
// Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas").
// Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const cities = ["Vilnius", "Klaipeda", "Panevezys", "Utena", "Kaunas"]
console.log(cities.find((value) => value.charAt(0) === "K"))

// Uzduotis 6
// Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent
// vienas miestas prasideda iš mažosios.

const cities1 = ["Vilnius", "Klaipeda", "Panevezys", "Utena", "kaunas"]
console.log(cities1.some((value) => value.charAt(0) === value.charAt(0).toLowerCase()))

// Uzduotis 7
// Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda
// ir mažosios, bet ar visi iš didžiosios.
const cities2 = ["Vilnius", "Klaipeda", "Panevezys", "Utena", "Kaunas"]
console.log(cities2.every((value) => value.charAt(0) === value.charAt(0).toUpperCase()))