var list = document.getElementById('task-list');
var btnInput = document.getElementById('submit-btn');
var ElementCount = list.children.length;
btnInput.addEventListener('click', addlist);

var inputBox = document.getElementById('todo-task');

inputBox.addEventListener('keyup', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 13)
    {
        addlist();
    }
})

function addlist(){
    var inputValue = document.getElementById('todo-task').value;
    if(inputValue !== null && inputValue !==undefined && inputValue !=='')
    {
        var newElement = document.createElement('li');
        var trashIcon = document.createElement('i');
        trashIcon.className = 'fas fa-trash';
        trashIcon.addEventListener('click', function(){
            list.removeChild(newElement);
        });

        newElement.appendChild(document.createTextNode(inputValue));
        newElement.appendChild(trashIcon);
        list.appendChild(newElement);
        document.getElementById('todo-task').value = '';
    }
    else{
        alert('Please Add valid input value');
    }
}

function createNewNode(){
    var inputValue = document.getElementById('todo-task').value;
    if(inputValue !== null && inputValue !==undefined && inputValue !=='')
    {
        var newElement = document.createElement('li');
        var trashIcon = document.createElement('i');
        trashIcon.className = 'fas fa-trash';
        trashIcon.addEventListener('click', function(){
            list.removeChild(newElement);
        });
        newElement.appendChild(document.createTextNode(inputValue));
        newElement.appendChild(trashIcon);
        return newElement;
    }
    else{
        alert('Please Add valid input value');
    }
}

var btnUpdate = document.getElementById('btn-update');

btnUpdate.addEventListener('click', function(){
    if(list.children.length > 0)
    {
        var firstElement = list.firstElementChild;
        var updatedNode = createNewNode();
        if(updatedNode != false)
        {
            list.replaceChild(updatedNode, firstElement);
            document.getElementById('todo-task').value = '';
        }
    }
    else{
        alert('List is empty');
    }   
});

var btnRemove = document.getElementById('btn-remove');

btnRemove.addEventListener('click', function(){
    if(list.children.length > 0)
    {
        var firstElement = list.firstElementChild;
        list.removeChild(firstElement);
    }
    else{
        alert('List is empty');
    }
});

