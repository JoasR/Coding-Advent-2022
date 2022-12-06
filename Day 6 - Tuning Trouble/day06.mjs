import {readFileSync} from "node:fs"

const line = readFileSync("day06.txt", {encoding: "utf-8"})
.replace(/\r/g, "")
.trim()

function part1(){
    console.log(checkPositionOfNonDups(4))
}

function part2(){
    console.log(checkPositionOfNonDups(14))
}

function checkPositionOfNonDups(minLength){
    let nonDupPos
    for(let i = 0; i < line.length; i++){
        const subString = line.substring(i, i + minLength)
        //A set removes all duplicates, so if the set has the same length as
        //the substring, then that means that there are no duplicates in the substring
        //And we will have found the position
        const subStringSet = new Set(subString)
        if(subStringSet.size === subString.length){
            nonDupPos = i + minLength
            break
        }
    }
    return nonDupPos
}

part1()
part2()