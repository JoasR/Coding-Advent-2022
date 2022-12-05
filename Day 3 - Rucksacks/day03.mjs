import {readFileSync} from "node:fs"

const rugsacks = readFileSync("day03.txt", {encoding: "utf-8"}) //Reac txt content
.replace(/\r/g, "") // Removes all \r characters to avoid issues on windows
.trim() //remove starting and ending whitespaces
.split("\n") //Split on Newline

// console.log(rugsacks)

const lowerCaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCaseAlphabet = lowerCaseAlphabet.map(char => char.toUpperCase())
const fullAlphabet = lowerCaseAlphabet.concat(upperCaseAlphabet) // Array with all Letters in uppercase and lowercase so value can be assigned to each letter
// console.log(fullAlphabet);


function part1(){
    const compartment1 = rugsacks.map(rugsack => {
        return rugsack.slice(0, rugsack.length / 2)
    })
    // console.log("compartment 1: " + compartment1)

    const compartment2 = rugsacks.map(rugsack => {
        return rugsack.slice(rugsack.length / 2)
    })
    // console.log("compartment 2: " + compartment2)

    let sameCharacterArray = []
    for(let i = 0; i < compartment1.length; i++){
        sameCharacterArray.push(findMatchingCharacter(compartment1[i], compartment2[i]))
    }    
    
    const totalValue = getTotalValue(sameCharacterArray)
    
    console.log(totalValue)
}

function findMatchingCharacter(compartment1, compartment2){
    let compartment1Chars = []
    let compartment2Chars = []
    let sameCharacter
    
    compartment1Chars = compartment1.split("")
    compartment2Chars = compartment2.split("")
    
    // console.log(compartment1Chars);
    // console.log(compartment2Chars);
    compartment1Chars.forEach(character => {
        if(compartment2Chars.includes(character)){
            sameCharacter = character
        }
    });
    return sameCharacter
}

function getTotalValue(array){
    let totalValue = 0
    array.forEach(char => {
        totalValue += fullAlphabet.indexOf(char) + 1
    });
    return totalValue
}

function part2(){
    let groupOfThreeElves = []
    
    for(let i = 0; i < rugsacks.length; i+=3){
        groupOfThreeElves.push(rugsacks.slice(i, i + 3))
    }
    
    let {firstElveLetters, secondElveLetters, thirdElveLetters} = []
    
    let arrayOfSameLetters = []

    for(let i = 0; i < groupOfThreeElves.length; i++){
        firstElveLetters = groupOfThreeElves[i][0].split("")
        secondElveLetters = groupOfThreeElves[i][1].split("")
        thirdElveLetters = groupOfThreeElves[i][2].split("")
        let sameCharactersBetweenTwoElves = []
        firstElveLetters.forEach(letter => {
            if(secondElveLetters.includes(letter)){
                sameCharactersBetweenTwoElves.push(letter)
            }
        });
        let sameCharacterBetweenAllElves
        sameCharactersBetweenTwoElves.forEach(letter => {
            if(thirdElveLetters.includes(letter)){
                sameCharacterBetweenAllElves = letter
            }
        })
        arrayOfSameLetters.push(sameCharacterBetweenAllElves)
    }
    // console.log(arrayOfSameLetters)
    console.log(getTotalValue(arrayOfSameLetters))
}

part1()
part2()