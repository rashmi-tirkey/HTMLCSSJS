const addTodoList = document.querySelector('#btn');


addTodoList.addEventListener('click', () => {
    let inputValue = document.querySelector("#myInput");
    inputValue = inputValue.value;
    let addTodo = document.querySelector("#addItem");
    let para = document.createElement('p');
    para.innerText = inputValue;
    addTodo.append(para);
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    addTodo.append(removeBtn);

    // remove the todo list
    removeBtn.addEventListener('click', () => {
        para.remove();
        removeBtn.remove();
    });

    // clear the input field after add the todo list
    document.querySelector("#myInput").value = '';
});
