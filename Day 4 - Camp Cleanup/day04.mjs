import {readFileSync} from "node:fs"

const assignments = readFileSync("day04.txt", {encoding: "utf-8"}) //Reac txt content
.replace(/\r/g, "") // Removes all \r characters to avoid issues on windows
.trim() //remove starting and ending whitespaces
.split("\n") //Split on Newline

// console.log(assignments)

function range(start, end){
    const length = end - start + 1
    return Array.from({length}, (unused, i) => start + i)
}
// console.log(range(3,6))

function part1(){
    let allHours = assignments.map(assignment => {
        return assignment.split(",")
    })
    // console.log(allHours)
    let count = 0
    
    allHours.forEach(element => {
        const firstStart = +element[0].split("-")[0]
        const firstEnd = +element[0].split("-")[1]
        const secondStart = +element[1].split("-")[0]
        const secondEnd = +element[1].split("-")[1]
        // console.log("firstStart: " + firstStart)
        // console.log("firstEnd: " + firstEnd)
        // console.log("secondStart: " + secondStart)
        // console.log("secondEnd: " + secondEnd)
        if (secondStart >= firstStart && secondStart <= firstEnd && secondEnd <= firstEnd && secondEnd >= firstStart ||
            firstStart >= secondStart && firstStart <= secondEnd && firstEnd <= secondEnd && firstEnd >= secondStart){
                count++
            }
    });
    console.log(count)
}

function part2(){
    let allHours = assignments.map(assignment => {
        return assignment.split(",")
    })
    // console.log(allHours)
    let count = 0
    allHours.forEach(element => {
        const firstStart = +element[0].split("-")[0]
        const firstEnd = +element[0].split("-")[1]
        const secondStart = +element[1].split("-")[0]
        const secondEnd = +element[1].split("-")[1]
        // console.log("firstStart: " + firstStart)
        // console.log("firstEnd: " + firstEnd)
        // console.log("secondStart: " + secondStart)
        // console.log("secondEnd: " + secondEnd)
        if (firstStart <= secondEnd && secondStart <= firstEnd){
                count++
            }
    });
    console.log(count)
}

part1()
part2()