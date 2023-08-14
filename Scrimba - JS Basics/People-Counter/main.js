const incrementBtn = document.querySelector('#increment-btn')
const numberDisplay = document.querySelector('#number-display')
const saveBtn = document.querySelector('#save-btn')
const saveDisplay = document.querySelector('#entries-display')

let count = 0

incrementBtn.addEventListener('click', increment)
saveBtn.addEventListener('click', save)

function increment() {
    count++
    numberDisplay.textContent = count
}

function save() {
    saveDisplay.textContent += `${count} - `
    count = 0
    numberDisplay.textContent = count
}

