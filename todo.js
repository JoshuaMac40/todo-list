

const addform = document.querySelector('.add');
//(1) prevent the form from reloading
addform.addEventListener ('submit', e=>{
  e.preventDefault();

  //(2) getting the value what user gives & prevent spaces in input using trim method 
  // (but im calling this down)!
const todo = addform.addinput.value.trim(); 

// (5)Selectting a class of ul in here 
const list = document.querySelector('.todos');
//(4) storing the file in this variable to called
const generateTemplate = temp =>{
// (3)creating a object literal
  const html =` <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${temp}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;
// (6) appending the object inside DOM
list.innerHTML+= html;


};
// (7) calling the file in here &checking the funtion has a character length,else false

if(todo.length){
  generateTemplate(todo);
}  

});


