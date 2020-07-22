//=============================================
//Variables
//=============================================

const toDoTextParent = document.getElementById("toDoTextParent");
const toDoTextInput = toDoTextParent.children[0];
const toDoContainer = document.getElementById("listItems");
const textField = document.getElementById("textField");
const toggleButton = document.getElementById("toggleButton");

//==============================================
//Helper Functions
//=============================================

//function create span node
const buttonNode = () => {
  const node = document.createElement("button");
  const textSpanNode = document.createTextNode("x");
  node.appendChild(textSpanNode);
  return node;
}

//text field and enter functionality
const addItems = toDoTextInput.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
    const toDoInputValue = toDoTextInput.value;

    //create a div with class container for list item
    const node = document.createElement("DIV");
    node.setAttribute("class", "item");
  

    //create text node for the value
    const textNode = document.createTextNode(toDoInputValue);
    const buttonElement = buttonNode();

    //append the value within the div container
    toDoContainer.appendChild(node);
    node.appendChild(textNode);
    node.appendChild(buttonElement);
  
    toDoTextInput.value = "";

    //strikethrough functionality 
      node.addEventListener("click", () => {
      node.style.setProperty("text-decoration", "line-through");
    })

    //delete item
    buttonElement.addEventListener("click", () => {
     node.remove();
    })

  }
});


const toggleTextField = () =>{
  if(textField.style.display === "none") {
    textField.style.display = "block"
  } else {
    textField.style.display = "none";
  }
}

const changeButtonText = toggleButton.addEventListener("click", () => {
    if(toggleButton.value === "v") {
      toggleButton.value = "x";
    } else {
      toggleButton.value = "v"
    }
})