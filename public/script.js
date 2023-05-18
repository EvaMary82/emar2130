const addTitleButton = document.getElementById('add-title-form');
const formContainer = document.getElementById('form-container')

addTitleButton.addEventListener('click', function (){
  formContainer.classList.toggle('active');
});

// Orginal code from the week 3 tutorial
/*const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

var taskList = [];

function addTask(name, type, rate, time, client) {
  let task = {
    name,
    type,
    id: Date.now(),
    date: new Date().toISOString(),
    rate,
    time,
    client,
    billable: false
  }
  taskList.push(task);
  displayTask(task);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask(
    form.elements.taskName.value,
    form.elements.taskType.value,
    form.elements.taskRate.value,
    form.elements.taskTime.value,
    form.elements.taskClient.value,
  )
})

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = 
    `<p><strong>${task.name}</strong><br>${task.type}</p>
     <span><em>${task.time} hours</em><br>$${task.rate}/hr</span>
    `;

  tasklist.appendChild(item);

  form.reset();

  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("🗑️");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event) {

    taskList.forEach(function(taskArrayElement, taskArrayIndex) {
      if (taskArrayElement.id == item.getAttribute('data-id')) {
        taskList.splice(taskArrayIndex, 1)
      }
    })

    console.log(taskList)
    item.remove();
  })

  // SECTION 1 CODE BELOW

  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  const firstItem = item.firstElementChild;
  firstItem.appendChild(inputElement);
  inputElement.addEventListener('change', function(event){
    const isChecked = event.target.checked;
    taskList.forEach(function(task) {
     if (task.id == item.getAttribute('data-id')){
       if (isChecked){
     inputElement.style.backgroundColor = (220, 255, 220);
         task.billable = true;
      } else{
       inputElement.style.backgroundColor = "#FFFFFF" 
         task.billable = false;
      }
     }
    });
  });
  // Leave the bracket below to close the displayTask function

}
      



// SECTION 2 CODE BELOW
const button = document.getElementById("generateInvoice");
  const table = document.getElementById("invoiceTable");
  const clientParagraph = document.getElementById("client");
  const totalParagraph = document.getElementById("total")
  button.addEventListener("click", function(){
    var total = 0 ;
    taskList.forEach(function(task){
      if (task.billable = true){
        clientParagraph.textContent = task.client;
        const price = task.rate * task.time;
        total += price;
        totalParagraph.innerHTML = "Total: $"+ total;
      }
    })
  })*/
