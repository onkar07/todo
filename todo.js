var todoList = []; // declaring todo list

function Addtodo(){
    var item = document.getElementById("item").value;
    todoList.push(item); //adding item to the todod list
    document.getElementById("item").value = "" //clear the input box

    // showing item after adding to the list
    ul = document.createElement('ul');
    document.getElementById('show').appendChild(ul); //adding ul tag inside the h3 
    let li = document.createElement('li'); //creating li tag
    ul.appendChild(li);
    li.innerHTML += item;
}
