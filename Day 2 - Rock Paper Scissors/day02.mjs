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

const result = {
    draw: 3,
    win: 6,
    loss: 0
}

const movesScore = {
    rock: 1, 
    paper: 2, 
    scissors: 3 
}

const opponentMoves = {
    rock: 'A',
    paper: 'B',
    scissors: 'C',
}

const ourMoves = {
    rock: 'X',
    paper: 'Y',
    scissors: 'Z'
}

const ourResult = {
    loss: 'X',
    draw: 'Y',
    win: 'Z'

}

function gamePointsPart1(game) {
    //console.log("game: " + game)
    let points = 0
    const opponentMove = game.slice(0,1)
    const playerMove = game.slice(2,3)
    //console.log("opponent: " + opponent + " player: " + player)

    switch(opponentMove)
    {
        case opponentMoves.rock: // 'A'
            switch(playerMove)
            {
                case ourMoves.rock:
                    points = result.draw + movesScore.rock; // 4
                    break;
                case ourMoves.paper:
                    points = result.win + movesScore.paper; // 8
                    break;
                case ourMoves.scissors:
                    points = result.loss + movesScore.scissors; // 3
                    break;
            }
        break;
        case opponentMoves.paper: // 'B'
            switch(playerMove)
            {
                case ourMoves.rock:
                    points = result.loss + movesScore.rock; // 1
                    break;
                case ourMoves.paper:
                    points = result.draw + movesScore.paper; // 5
                    break;
                case ourMoves.scissors:
                    points = result.win + movesScore.scissors; // 9
                    break;
            }
        break;
        case opponentMoves.scissors: // 'C'
            switch(playerMove)
            {
                case ourMoves.rock:
                    points = result.win + movesScore.rock; // 7
                    break;
                case ourMoves.paper:
                    points = result.loss + movesScore.paper; // 2
                    break;
                case ourMoves.scissors:
                    points = result.draw + movesScore.scissors; // 6
                    break;
            }
        break;
    }
    return points
}

function gamePointsPart2(game){
    //console.log("game: " + game)
    let points = 0
    const opponentMove = game.slice(0,1)
    const playerResult = game.slice(2,3)
    //console.log("opponent: " + opponent + " player: " + player)

    switch(opponentMove)
    {
        case opponentMoves.rock: // 'A'
            switch(playerResult)
            {
                case ourResult.loss: // 'X'
                    points = result.loss + movesScore.scissors//3
                    break;
                case ourResult.draw: // 'Y'
                    points = result.draw + movesScore.rock// 4
                    break;
                case ourResult.win: // 'Z'
                    points = result.win + movesScore.paper// 8
                    break;
            }
        break;
        case opponentMoves.paper: // 'B'
            switch(playerResult)
            {
                case ourResult.loss: // 'X'
                    points = result.loss + movesScore.rock// 1
                    break;
                case ourResult.draw: //'Y'
                    points = result.draw + movesScore.paper// 5
                    break;
                case ourResult.win: // 'Z'
                    points = result.win + movesScore.scissors// 9
                    break;
            }
        break;
        case opponentMoves.scissors: // 'C'
            switch(playerResult)
            {
                case ourResult.loss: // 'X'
                    points = result.loss + movesScore.paper// 2
                    break;
                case ourResult.draw: // 'Y'
                    points = result.draw + movesScore.scissors // 6
                    break;
                case ourResult.win: // 'Z'
                    points = result.win + movesScore.rock // 7
                    break;
            }
        break;
    }
    return points
}

part1()
part2()