import {readFileSync} from "node:fs"

const games = readFileSync("day02.txt", {encoding: "utf-8"}) //Read txt content
.replace(/\r/g, "") //Removes all \r characters to avoid issues on windows
.trim() //Remove starting and ending whitespaces
.split("\n") // Split on Newline

//console.log(games)

function part1(){
    let totalScore = 0

    games.forEach(game => {
        totalScore += gamePointsPart1(game)
    });
    
    console.log("The totalscore for part 1 is: " + totalScore)
}

function part2(){
    let totalScore = 0
    games.forEach(game => {
        totalScore += gamePointsPart2(game)
    })

    console.log("The totalscore for part 2 is: " + totalScore)
}


function gamePointsPart1(game) {
    //console.log("game: " + game)
    let points = 0
    const opponent = game.slice(0,1)
    const player = game.slice(2,3)
    //console.log("opponent: " + opponent + " player: " + player)

    switch(opponent)
    {
        case 'A':
            switch(player)
            {
                case 'X':
                    points = 4;
                    break;
                case 'Y':
                    points = 8;
                    break;
                case 'Z':
                    points = 3;
                    break;
            }
        break;
        case 'B':
            switch(player)
            {
                case 'X':
                    points = 1;
                    break;
                case 'Y':
                    points = 5;
                    break;
                case 'Z':
                    points = 9;
                    break;
            }
        break;
        case 'C':
            switch(player)
            {
                case 'X':
                    points = 7;
                    break;
                case 'Y':
                    points = 2;
                    break;
                case 'Z':
                    points = 6;
                    break;
            }
        break;
    }
    return points
}

function gamePointsPart2(game){
    //console.log("game: " + game)
    let points = 0
    const opponent = game.slice(0,1)
    const player = game.slice(2,3)
    //console.log("opponent: " + opponent + " player: " + player)

    switch(opponent)
    {
        case 'A':
            switch(player)
            {
                case 'X':
                    points = 3;
                    break;
                case 'Y':
                    points = 4;
                    break;
                case 'Z':
                    points = 8;
                    break;
            }
        break;
        case 'B':
            switch(player)
            {
                case 'X':
                    points = 1;
                    break;
                case 'Y':
                    points = 5;
                    break;
                case 'Z':
                    points = 9;
                    break;
            }
        break;
        case 'C':
            switch(player)
            {
                case 'X':
                    points = 2;
                    break;
                case 'Y':
                    points = 6;
                    break;
                case 'Z':
                    points = 7;
                    break;
            }
        break;
    }
    return points
}

part1()
part2()