// 'use strict'
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function countAroundCell(mat, rowIdx, colIdx) {
//     var count = 0
//     for (let i = rowIdx - 1; i < rowIdx + 1; i++) {
//         if (i < 0 || i >= mat.length) { continue }
//         for (let i = colIdx - 1; i < colIdx + 1; i++) {
//             if (j < 0 || j >= mat[0].length) { continue }
//             if (i === rowIdx && j === colIdx) {
//                 continue

//             }
//             var currCell = mat[i][j];
//             if (currCell !== '') { count++ }

//         }
//         // const row = mat[i];

//     }
//     return count
// }


// function createBoard(size) {
//     var size
//     const board = []
//     for (var i = 0; i < size; i++) {
//         board[i] = []
//         for (var j = 0; j < size; j++) {
//             board[i][j] = ''
//         }
//     }
//     return board
// }
// function sumMatRow(mat, rowIdx) {
//     var element = 0
//     var mat = mat
//     for (var i = 0; i < mat[rowIdx].length; i++) {
//         element += mat[rowIdx][i];

//     } return element
// }
// function sumMatCol(mat, colIdx) {

//     // const colIdx = ''

//     var res = 0
//     var sum = 0
//     for (var i = 0; i < mat.length; i++) {
//         // for (var j = 0; j <= mat[i].length;) {
//         var num = mat[i][colIdx]
//         res += num
//         // }
//     } return res
// }
// //take a array and randomize the order then return a new randomized
// function drawNum() {
//     var randIdx = getRandomInt(0, gNums.length)
//     var num = gNums[randIdx]
//     gNums2.splice(randIdx, 1)
//     return num
// }





// // //////////////////////tic tak toe////////////////////////
// // var gBoard
// // var gIsUserMove


// // 2
// function init() {
//     gBoard = createBoard()
//     console.table(gBoard)
//     gIsUserMove = false
//     playGame()
// }

// // 7
// function playGame() {
//     var isGameOn = true
//     var movesCount = 0
//     const cellsCount = gBoard.length * gBoard[0].length

//     // 8
//     while (isGameOn) {

//         const pos = playMove()
//         movesCount++

//         if (movesCount >= 5) {
//             const symbol = gIsUserMove ? 'X' : 'O'
//             const isVictory = checkVictory(pos, symbol)
//             if (isVictory) {
//                 const msg = gIsUserMove ? 'You Won! 🏆' : 'You lost ... :('
//                 console.log(msg)
//                 isGameOn = false
//             } else if (movesCount === cellsCount) {
//                 console.log('It\'s a tie')
//                 isGameOn = false
//             }

//         }

//         console.table(gBoard)
//         gIsUserMove = !gIsUserMove
//         // if (gIsUserMove) gIsUserMove = false
//         // else gIsUserMove = true

//     }

// }

// // 5
// function playMove() {
//     var pos
//     if (gIsUserMove) {
//         pos = playUserMove()
//     } else {
//         pos = playComputerMove()
//     }
//     return pos
// }

// // 3
// function playUserMove() {

//     var isValidMove = false
//     var pos
//     while (!isValidMove) {
//         const strPos = prompt('Enter your move (i, j)')
//         pos = getPos(strPos)

//         if (pos.i < 0 || pos.i >= gBoard.length ||
//             pos.j < 0 || pos.j >= gBoard.length) {
//             console.log('Invalid move!')
//             continue
//         }

//         if (gBoard[pos.i][pos.j]) {
//             console.log('Cell occupied!')
//             continue
//         }

//         isValidMove = true
//     }

//     gBoard[pos.i][pos.j] = 'X'
//     return pos
// }


// function getPos(strPos) {
//     const parts = strPos.split(',')
//     const pos = {
//         i: +parts[0],
//         j: +parts[1]
//     }
//     return pos
// }


// // 4
// function playComputerMove() {
//     const pos = findEmptyPos()
//     gBoard[pos.i][pos.j] = 'O'
//     return pos
// }


// function findEmptyPos() {

//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[0].length; j++) {
//             const cell = gBoard[i][j]
//             if (!cell) {
//                 return { i, j }
//             }
//         }
//     }
// }


// // 6
// function checkVictory(pos, symbol) {
//     var count = countInRow(gBoard, pos.i, symbol)
//     if (count === gBoard.length) return true

//     count = countInCol(gBoard, pos.j, symbol)
//     if (count === gBoard.length) return true


//     // Check Main diagonal
//     if (pos.i === pos.j) {
//         count = countInMainDiagonal(gBoard, symbol)
//         if (count === gBoard.length) return true
//     }

//     // Check secondary diagonal
//     if (pos.i + pos.j === gBoard.length - 1) {
//         count = countInSecondaryDiagonal(gBoard, symbol)
//         if (count === gBoard.length) return true
//     }

//     return false
// }


// function countInRow(mat, rowIdx, symbol) {
//     var count = 0
//     for (var i = 0; i < mat[0].length; i++) {
//         const cell = mat[rowIdx][i]
//         if (cell === symbol) count++
//     }

//     return count
// }

// function countInCol(mat, colIdx, symbol) {
//     var count = 0
//     for (var i = 0; i < mat[0].length; i++) {
//         const cell = mat[i][colIdx]
//         if (cell === symbol) count++
//     }

//     return count
// }

// function countInMainDiagonal(mat, symbol) {
//     var count = 0
//     for (var i = 0; i < mat.length; i++) {
//         const cell = mat[i][i]
//         if (cell === symbol) count++
//     }

//     return count
// }

// function countInSecondaryDiagonal(mat, symbol) {
//     var count = 0
//     for (var i = 0; i < mat.length; i++) {
//         const cell = mat[i][mat.length - 1 - i]
//         if (cell === symbol) count++
//     }

//     return count
// }


// // 1
// function createBoard() {
//     var size = 3
//     const board = []
//     for (var i = 0; i < size; i++) {
//         board[i] = []
//         for (var j = 0; j < size; j++) {
//             board[i][j] = ''
//         }
//     }
//     return board
// }

// function sumSecondDiagonal(mat) {
//     let sum = 0
//     for (let i = 0; i < mat.length; i++) {
//         const num = mat[i][mat.length - 1 - i]
//         sum += num
//     }
//     return sum
// }function sumMainDiagonal(mat) {
//     let sum = 0
//     for (let i = 0; i < mat.length; i++) {
//         const num = mat[i][i]
//     }
//     return sum
// }

// // function renderBoard(mat, selector) {

// //     var strHTML = '<table border="0"><tbody>'
// //     for (var i = 0; i < mat.length; i++) {

// //         strHTML += '<tr>'
// //         for (var j = 0; j < mat[0].length; j++) {

// //             const cell = mat[i][j]
// //             const className = `cell cell-${i}-${j}`

// //             strHTML += `<td class="${className}">${cell}</td>`
// //         }
// //         strHTML += '</tr>'
// //     }
// //     strHTML += '</tbody></table>'

// //     const elContainer = document.querySelector(selector)
// //     elContainer.innerHTML = strHTML
// // }
