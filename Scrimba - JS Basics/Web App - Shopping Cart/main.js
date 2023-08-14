import {  initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-67ad6-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.querySelector("[input-field]")
const addBtn = document.querySelector("[add-Button]")
const shoppingList = document.querySelector('[shopping-list]')

addBtn.addEventListener('click', () => {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    clearImputELement(inputFieldEl)
    
})

onValue(shoppingListInDB, (snapshot) => {

    if(snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        
        clearListELement(shoppingList)
        for(let i in itemsArray) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            appendItem(currentItem)  
        }

    } else {
        shoppingList.innerHTML = "No items here... yet!"
    }
})

function clearImputELement(element, ) {
    element.value = ""
}

function clearListELement(element) {
    element.innerHTML = ""
}

function appendItem(item) {
    let itemID = item[0]
    let itemValue = item[1]

    let createLi = document.createElement('li')
    createLi.textContent = itemValue
    createLi.addEventListener('click', () => {
       let itemLocationInDB = ref(database, `shoppingList/${itemID}`)
       remove(itemLocationInDB)
    })
    shoppingList.append(createLi)
}