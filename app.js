// TO DO App

let input = document.getElementById('input');
let addBtn =  document.getElementById('addList');
let clearBtn =  document.getElementById('clearTask');

   addBtn.addEventListener('click', addListItems);
   clearBtn.addEventListener('click', clearAll);
    // let j=0;
   function addListItems(){
        let _outPutText =input.value;
        if(_outPutText !=""){

            // let _outPutDiv = ;
            let _tbl = document.getElementById('table');

            let tr = document.createElement("tr");
            let td = document.createElement("td");
                   
            let trText = _tbl.appendChild(tr);
            let tdText = tr.appendChild(td);
            
            let h3 = document.createElement('h3');
            let removeBtn = document.createElement('button');
            
            let heading = tdText.appendChild(h3);
                tdText.appendChild(removeBtn);

            heading.style.textAlign = "left";
            heading.style.color = "green";
            heading.style.display = "inline-block";

            let text = document.createTextNode(_outPutText);
            let error = document.createTextNode("x");

            removeBtn.appendChild(error);
            removeBtn.setAttribute("value",error);
            removeBtn.addEventListener('click',removeItems);
            function removeItems(){
                tdText.remove();
            }
            removeBtn.style.textAlign = "right";
            removeBtn.style.display = "inline-block";
            removeBtn.style.marginLeft = "5rem";
            removeBtn.style.color = "red";
            heading.appendChild(text);
            input.value = "";
        }else{
            // let errorUl = document.getElementById('ul');
            let errorUl = document.getElementById('table');
            let errorHeading = document.createElement("h4");
            let errorText = document.createTextNode("Please enter some value.");
            errorHeading.appendChild(errorText);
            errorUl.append(errorHeading);
            errorUl.style.color = "maroon";
        }
   }

 
   function clearAll(){
     // let _List = document.getElementById('lists'); 
    // let _clearItems = _clearList.firstElementChild; 
    let _clearList = document.getElementById('table');
    console.log(_clearList.childNodes.remove());
    // console.log(_clearList.remove());
    /* for(let i=0; i<_clearList.childNodes.length;i++){
      //  _clearItems.remove(_clearItems.children[i]);
      console.log(_clearList.childNodes.length);
    } */
   }