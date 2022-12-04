import  {readFileSync} from "node:fs"

const elves = readFileSync("day01.txt", { encoding: "utf-8" }) //Read txt content
.replace(/\r/g, "") // Remove all \r characters to avoid issues on Windows
.trim() // Remove starting and ending whitespaces
.split("\n\n") // Split on double Newline

function part1() {
    const calories = elves.map(elf => {
        const calories = elf.split("\n").map(Number)
        return calories
    })

    let totalCaloriesArray = []
    calories.forEach(element => {
        const sum = element.reduce((total, num) => {
            return total + num
    },0)
        totalCaloriesArray.push(sum)
    });
    console.log(findHighestNumber(totalCaloriesArray))
}

function findHighestNumber(arrayOfNumbers){
    return arrayOfNumbers.reduce((prevLargNumber, currentLargNumber) => {
        return currentLargNumber > prevLargNumber ? currentLargNumber : prevLargNumber
    })
}

function part2(){
    const calories = elves.map(elf => {
        const calories = elf.split("\n").map(Number)
        return calories
    })

    let totalCaloriesArray = []
    calories.forEach(calorie => {
        const sum = calorie.reduce((total, num) => {
            return total + num
    },0)
        totalCaloriesArray.push(sum)
    });

    const highestToLowestCalories = totalCaloriesArray.sort((a, b) => b-a)
    const topThreeHigestCalories = highestToLowestCalories.slice(0, 3)
    const sumOfTopThreeHigestCalories = topThreeHigestCalories.reduce((total, num) => {
        return total + num
    }, 0)
    console.log(sumOfTopThreeHigestCalories)
}

part1()
part2()