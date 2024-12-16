// getting element
const inputField = document.querySelector(".input-field textarea"),
todoLists =  document.querySelector(".todoList"),
pendingNum =  document.querySelector(".pending-num"),
clearButton =  document.querySelector(".clear-button");

// we will call this funtion while adding, deleting, and cheking-unchecking the task
function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    // if tasks length is 0 then pending num text content will be no, if not then pending num value will be tasks length
    pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

    let allList = document.querySelectorAll(".list");
    if(allList.length > 0) {
        todoLists.style.marginTop = "20px";
        return;
    }
    todoLists.style.marginTop = "0px";

}

// add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
let inputVal = inputField.value.trim(); // trim function removes spaces or front and back of the inputed value

    // if enter buttoon is clicked and inputed value length is frated than 0.
    if(e.key === "Enter" && inputVal.length > 0) {
        let liTag =  `<li class="list pending" onclick="handleStatus(this)">
                <input type="checkbox" name="" id="">
                <span class="task">${inputVal}</span>
                <i class="uil uil-trash-alt" onclick="hapus(this)"></i>
            </li>`;

            todoLists.insertAdjacentHTML("beforeend", liTag); // inserting li tag inside the todoList div
            inputField.value = "";
            allTasks();
    }
});

// checking and unchecking the chekbox while we click on the task
function handleStatus(e){
    const checkBox =  e.querySelector("input");
    checkBox.checked = checkBox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}   

//deleting task while we click on the delete icon
function hapus(e){
    e.parentElement.remove();
    allTasks();
}

// deleting all the tasks while we cliked button clear
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
})
