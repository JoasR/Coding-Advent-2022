import {readFileSync} from "node:fs"

const lines = readFileSync("day05.txt", {encoding: "utf-8"}) //Reac txt content
.replace(/\r/g, "") // Removes all \r characters to avoid issues on windows
.trimEnd() //remove ending whitespaces

const [rawStacks, rawMoves] = lines.split("\n\n")
// console.log(rawStacks);
// console.log(rawMoves);

// First split the stacks on a newLine
// Map over each character in each line
// Filter so only the first character of every 4 characters shows
// why every 4 characters? Because "[D] " repeats itself
// the character we need from those 4 is the D
// so we take the character on position 1 which is the D
const parsedStacks = rawStacks
.split("\n")
.map(line =>
     [...line]
        .filter((value, index) => index %4 === 1))

// console.log(parsedStacks)

const stacks = {}

// pop() removes the last element of an array, which is the indexes in this case(the last row below the stacks)
// we store this in the const indexes
const indexes = parsedStacks.pop()

// console.log(indexes)
// console.log(parsedStacks)

for (const line of parsedStacks) {
    for (let i = 0; i < line.length; i++) {
        if(line[i] != " "){
            // console.log(line[i])
            // Add line[i] to the stack indexes[i]
            if(!stacks[indexes[i]]){
                stacks[indexes[i]] = []
            }
            // console.log(line[i])
            // console.log(indexes[i])
            //unshift adds something to the start of the array
            stacks[indexes[i]].unshift(line[i])
        }  
    }
}

console.log(stacks)
// console.log(rawMoves);

const rawMovesArray = rawMoves.split("\n")
// console.log(rawMovesArray)

//https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
//create array of arrays, where each array in the array represents a line of moves
const onlyNumbersRegex = /\d+/g
const parsedMoves = []
for (const moveLine of rawMovesArray) {
    let m;
    const moveArray = []
    while((m = onlyNumbersRegex.exec(moveLine)) != null){
        moveArray.push(m[0]); 
    }
    parsedMoves.push(moveArray)
}

// console.log(stacks);
// console.log(parsedMoves);

function part1(){
    const copyOfStacks = JSON.parse(JSON.stringify(stacks))
    for (const moveSet of parsedMoves) {
        // console.log(moveSet)
        for (let i = 0; i < moveSet[0]; i++) {
            const crateToMove = copyOfStacks[moveSet[1]].pop()
            copyOfStacks[moveSet[2]].push(crateToMove)
        }
    }
    // console.log(copyOfStacks)
    let resultString = ""
    //https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
    //loop through javascript object and add the last crate of each array to the resultString
    for (const key of Object.keys(copyOfStacks)) {
        resultString += copyOfStacks[key].slice(-1)
    }
    // console.log(rawStacks)
    // console.log(parsedStacks);
    // console.log(copyOfStacks);
    console.log(arrayToString(copyOfStacks))
}

function part2(){
    const copyOfStacks = JSON.parse(JSON.stringify(stacks))
    for (const moveSet of parsedMoves) {
        // console.log(moveSet)
        const cratesToMove = copyOfStacks[moveSet[1]].splice(-moveSet[0])
        for (const crate of cratesToMove) {
            copyOfStacks[moveSet[2]].push(crate)
        }
    }
    // console.log(copyOfStacks);
    console.log(arrayToString(copyOfStacks))
}

function arrayToString(stacks){
    let resultString = ""
    for (const key of Object.keys(stacks)) {
        resultString += stacks[key].slice(-1)
    }
    return resultString
}

part1()
part2()