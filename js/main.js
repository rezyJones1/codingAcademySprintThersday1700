'use strict'
const MINE = '🌟'
var gMine
var gBoard
var gElPressedCell = null




function onInit() {
    gBoard = createBoard(4);
    creatMines();
    renderBoard(gBoard, '.board-container');
    // console.log(gBoard);
}

function creatMines() {
    const mine = { location_i: 1, location_j: 1 }
    const mine2 = { location_i: 3, location_j: 0 }

    gBoard[mine.location_i][mine.location_j] = { isShown: false, isMine: true, isMarked: false }
    gBoard[mine2.location_i][mine2.location_j] = { isShown: false, isMine: true, isMarked: false }
}

// function buildBoard() {
//     const size = 4
//     const board = []

//     for (var i = 0; i < size; i++) {
//         board.push([])
//         var cell = {

//             // minesAround: countAroundCell(gBoard, i, j),
//             isShown: false,
//             isMine: false,
//             isMarked: false
//         }
//         for (var j = 0; j < size; j++) {
//             board[i][j] = cell
//             // if (i === 0 || i === size - 1 ||
//             //     j === 0 || j === size - 1 ||
//             //     (j === 3 && i > 4 && i < size - 2)) {
//             //     board[i][j] = WALL
//             // }
//         }
//     }
//     console.log(board);
//     return board
// }


function createCell() {

    const cell = {

        // minesAround: countAroundCell(gBoard, i, j),
        isShown: false,
        isMine: false,
        isMarked: false


    }
    return cell
}








// function renderBoard(params) {

// }


function countAroundCell(mat, rowIdx, colIdx) {
    var count = 0
    for (let i = rowIdx - 1; i < rowIdx + 1; i++) {
        if (i < 0 || i >= mat.length) { continue }
        for (let i = colIdx - 1; i < colIdx + 1; i++) {
            if (j < 0 || j >= mat[0].length) { continue }
            if (i === rowIdx && j === colIdx) {
                continue

            }
            var currCell = mat[i][j];
            if (currCell !== '') { count++ }

        }
        // const row = mat[i];

    }
    return count
}
function renderBoard() {
    var strHTML = ''
    var className = 'board-block'
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += `<tr class="Board-row" >\n`
        for (var j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]
            const title = `block: ${i + 1}, ${j + 1}`
            if (cell.isMine) {
                strHTML += `\t<td class="cell ${className}" title="${title}" onclick="cellClicked(this, ${i}, ${j})" >${MINE}</td>\n`
            } else {
                strHTML += `\t<td class="cell ${className}" title="${title}" onclick="cellClicked(this, ${i}, ${j})" ></td>\n`
            }
        }
        strHTML += `</tr>\n`
    }
    const elBlocks = document.querySelector('.Board-blocks')
    elBlocks.innerHTML = strHTML
}

function createBoard(num) {
    const Board = []
    const cell = { isShown: false, isMine: false, isMarked: false }
    for (var i = 0; i < num; i++) {
        Board[i] = []
        for (var j = 0; j < num; j++) {
            Board[i][j] = cell;
        }
    }
    return Board
}

function cellClicked(elCell, i, j) {
    const cell = gBoard[i][j]
    // ignore none Cells and booked
    if (cell.isMine) {
        var gameOver = alert('game over!')

        return gameOver
    }
    console.log('Cell clicked: ', elCell, i, j)

    // Support selecting a Cell
    elCell.classList.add('pressed')
    if (gElPressedCell) {
        gElPressedCell.classList.remove('Pressed')
    }

    // Only a single Cell should bse Pressed
    gElPressedCell = (gElPressedCell === elCell) ? null : elCell

    // // When Cell is Pressed a popup is shown
    // if (gElPressedCell) showCellDetails({ i: i, j: j })
    // else hideCellDetails()
}
