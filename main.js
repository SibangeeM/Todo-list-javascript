const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
// const btn = document.querySelector("#new-task-submit");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = input.value;
  if (!task) {
    alert("Fill out the task.");
    return;
  }
  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");
  //   task_content_el.innerText = task;

  task_el.appendChild(task_content_el);

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");

  task_content_el.appendChild(task_input_el);

  list_el.appendChild(task_el);

  const actions_el = document.createElement("div");
  actions_el.classList.add("actions");

  const edit_btn_el = document.createElement("button");
  edit_btn_el.classList.add("edit");
  edit_btn_el.innerText = "Edit";

  const delete_btn_el = document.createElement("button");
  delete_btn_el.classList.add("delete");
  delete_btn_el.innerText = "Delete";

  actions_el.appendChild(edit_btn_el);
  actions_el.appendChild(delete_btn_el);

  task_el.appendChild(actions_el);

  input.value = "";

  edit_btn_el.addEventListener("click", function (e) {
    if (edit_btn_el.innerText.toLocaleLowerCase() == "edit") {
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
      edit_btn_el.innerText = "Save";
    } else {
      task_input_el.setAttribute("readonly", "readonly");
      edit_btn_el.innerText = "Edit";
    }
  });
  delete_btn_el.addEventListener("click", function (e) {
    list_el.removeChild(task_el);
  });
});
