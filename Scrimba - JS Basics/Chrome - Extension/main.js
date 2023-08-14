const inputEl = document.querySelector('[data-input]')
const saveBtn = document.querySelector('[save-btn]')
const leadList = document.querySelector('[data-list]')
const deleteBtn = document.querySelector('[delete-btn]')
const tabBtn = document.querySelector('[tab-btn]')
let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

deleteBtn.addEventListener('dblclick', () => {
    myLeads = []
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})

saveBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})

function render(array) { 
    let listItems = ''
    for (let i in array) {
        listItems += `
        <li>
            <a href="${array[i]}" target="_blank">${array[i]}</a>
        </li>`
        // let createLi = document.createElement('li')
        // createLi.textContent = myLeads[i]
        // leadList.append(createLi)
    }
    leadList.innerHTML = listItems
}
