'use strict'

const mainBlock = document.querySelector('.main__block')
const modalWindowEl = document.querySelector('.overlay')
let gamer = 1
let message = ''
let numberMoves = 0

mainBlock.addEventListener('click', (e) => {
    if (e.target.innerHTML === '') {
        e.target.innerHTML = gamer % 2 ? 'X' : 'O'
        ++gamer
        ++numberMoves
    }
    checkProvider()
})

const  checkProvider = () => {
    const boxes = document.querySelectorAll('.block')
    const arrCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    arrCombination.forEach((el, i) => {
        if(
            boxes[arrCombination[i][0]].innerHTML === 'X'
            && boxes[arrCombination[i][1]].innerHTML === 'X'
            && boxes[arrCombination[i][2]].innerHTML === 'X')
        {
            message = 'Перемогли Хрестики'
            modalWindow(message)
        }
        if (boxes[arrCombination[i][0]].innerHTML === 'O'
            && boxes[arrCombination[i][1]].innerHTML === 'O'
            && boxes[arrCombination[i][2]].innerHTML === 'O')
        {
            message = 'Перемогли НОЛИКИ'
            modalWindow(message)
        }
        if (numberMoves === 9) {
            message = 'нічия'
            modalWindow(message)
        }
    })

}

const modalWindow = (message) => {
    modalWindowEl.style.display = 'flex'
    const titleMessage = modalWindowEl.querySelector('h1')
    const newGameBtn = modalWindowEl.querySelector('button');

    titleMessage.textContent = `${message}!`

    newGameBtn.addEventListener('click', () => {
        closeModal()
    })
}

const closeModal = () => {
    modalWindowEl.style.display = 'none'
    location.reload()
}