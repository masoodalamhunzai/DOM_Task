// Add event Listener

let add =  document.querySelector('#add');
let remove =  document.querySelector('#remove');
let bodyElement =  document.getElementsByTagName('body')[0];

add.addEventListener('click',createDiv);
remove.addEventListener('click',removeItems);
  
 function addBtnStyle(){
    add.style.color = "grey";
    add.style.width = "12rem";
    add.style.height = 'auto';
    add.style.padding = "1rem";
    add.style.textTransform = "uppercase";
    add.style.fontSize = "1.5rem";
    add.style.marginTop = "1rem";
    }
    function removeBtnStyle(){
    remove.style.color = "grey";
    remove.style.width = "12rem";
    remove.style.height = 'auto';
    remove.style.padding = "1rem";
    remove.style.textTransform = "uppercase";
    remove.style.fontSize = "1.5rem";
    remove.style.marginTop = "1rem";
    }
    
   
 let newDiv = document.createElement('div');
 let ul = document.createElement('ul');
 let i = 1;

 function createDiv(){
  // let newDiv = document.createElement('div');

   let li = document.createElement('li');
  
   newDiv.id = 'new_Div';
   newDiv.style.width = "30rem";
   newDiv.style.height= "auto";
   newDiv.style.backgroundColor = "#d2e9f9";
   newDiv.style.padding = "1.5rem";
   newDiv.style.textAlign = "center";
   newDiv.style.color = "#504a4a";
   newDiv.style.fontSize = "2rem";
   newDiv.style.textAlign = "center";
   newDiv.style.border = "1px solid black";
     let j = 0; 
     for(j;j<newDiv.childNodes.length;j++){
      if(newDiv.childNodes[j] == "h4"){
        newDiv.childNodes.remove(newDiv.childNodes[j]);
        console.log(newDiv.childNodes[j]);

      }else{
        console.log("else run");
        console.log(newDiv.childNodes[j]);
      }
      break;
    }
   if(newDiv.lastChild != "h4" || newDiv.lastChild == "h4"){
    newDiv.remove(newDiv.textContent);
   // newDiv.remove(newDiv.lastChild)
   // console.log(newDiv.remove(newDiv.childNodes[0]));
    let text =  document.createTextNode("This is new Text "+i);
    i++;
    newDiv.appendChild(ul);
    let newLi = ul.appendChild(li);
    newLi.style.padding = "0.8rem";
    newLi.appendChild(text);
    bodyElement.insertBefore(newDiv,add);
   }else{
    // newDiv.lastChild.remove();
    console.log("text exist");
   }
 }
    let count = 1;
 function removeItems(){
    let items = document.getElementsByTagName('li'); 
     if(items.length != 0){
      for(let i=0;i<items.length;i++){
        items[i].remove();      
         if(items[i]!=0){     
          let removeText =  `You remove ${count} item.`;
           count++;
          createText(removeText);
          break;
         }
         break;
      }
    }else{
      removeText = 'You remove all the List Items \n Click to Add button for adding List Items.';
     createText(removeText);
      console.log("test");
    }    
 }

 function createText(text){
  let div =  document.querySelector('#new_Div');
  removeText = document.createTextNode(text);
  let heading = document.createElement('h4');
  div.style.width = "40rem";
  div.style.color = "maroon";
  heading.appendChild(removeText);
  div.appendChild(heading);
  return text;
 }

 (function(){
  addBtnStyle();
  removeBtnStyle();
})();
