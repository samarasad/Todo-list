const list = document.getElementById("list");
const input = document.getElementById("inputTxt");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = value;
  span.className = "task-text";

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.className = "complete-btn";
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  list.appendChild(li);

  input.value = "";
});
