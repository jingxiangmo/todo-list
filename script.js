
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// add a p item
function addItem(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling'); // add paragraph styling
    
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

}
// add item on click
addToDoButton.addEventListener('click', function(){
    addItem();
});

// add item on enter
inputField.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        addItem();
    }
});






