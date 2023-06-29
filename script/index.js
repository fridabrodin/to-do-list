const submitButton = document.querySelector("#submit-button");
const formContainer = document.querySelector("#form-container");
const form = document.querySelector("#task-adder");


formContainer.addEventListener("submit", addTask);


function addTask (event) {

    event.preventDefault();

    const itemList = document.querySelector("#to-do-list__items");
    let userTask = document.querySelector("#user-task").value;
    const confirmationMessage = document.querySelector("#user-task-confirmation");
    const emptyText = document.querySelector("#to-do-list__items-empty");

    let newTaskContainer = document.createElement("div");
    let newTaskLabel = document.createElement("label");
    let newTaskName = document.createElement("span");
    let newTaskInput = document.createElement("input");
    let newTaskCheckbox = document.createElement("span");

    newTaskContainer.classList.add("to-do-list__item-container");
    newTaskLabel.classList.add("to-do-list__item");
    newTaskName.classList.add("to-do-list__item-name");
    newTaskName.innerHTML = userTask;
    newTaskInput.type = "checkbox";
    newTaskCheckbox.classList.add("to-do-list__checkbox");
    confirmationMessage.classList.add("VISIBLE");


    // Add new task to the list
    emptyText.classList.add("HIDDEN");
    itemList.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newTaskLabel);
    newTaskLabel.appendChild(newTaskName);
    newTaskLabel.appendChild(newTaskInput);
    newTaskLabel.appendChild(newTaskCheckbox);
    form.reset();

    setTimeout(() => {
        confirmationMessage.classList.remove("VISIBLE");
      }, "1000");
      


}

