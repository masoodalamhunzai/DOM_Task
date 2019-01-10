// TO DO App

let container = document.getElementById('container');
    container.style.margin = "0 auto";
let _input = document.getElementById('input');
let _addBtn =  document.getElementById('addList');
let _clearBtn =  document.getElementById('clearTask');
let _errorlist = document.getElementById('lists');
   _addBtn.addEventListener('click', addListItems);
    //_clearBtn.addEventListener('click', clearAll);

    document.body.addEventListener('click',function (e){
        if(e.target.id == "clearTask"){
            let _trItems = e.target.previousElementSibling.firstElementChild.children;
            let i =0;
            while(i<_trItems.length){
            e.target.previousElementSibling.firstElementChild.children[i].remove();
            }
        }
    });

    // document.body.addEventListener('click',function(e){
    //     if(e.target.className == "delete"){
    //      e.target.parentElement.remove();
    //     }
    // });

   function addListItems(){
        let _outPutText =_input.value;
        if(_outPutText !=""){

            let _ul = document.getElementById('ul');

            let _li = document.createElement("li");
                _li.setAttribute('class','li') 
                _li.style.display = "flex";
                _li.style.paddingTop = "0.5rem";
                _li.style.justifyContent = "space-between";

            let _liText = _ul.appendChild(_li);

            let h3 = document.createElement('h3');
            let removeBtn = document.createElement('button');
               removeBtn.setAttribute('class','delete');
            //    removeBtn.style.width = "2.5rem";
               removeBtn.style.height = "1.9rem";
              
            let heading = _liText.appendChild(h3);
                _liText.appendChild(removeBtn);

            heading.style.textAlign = "left";
            heading.style.color = "green";
            heading.style.display = "inline-block";

            let text = document.createTextNode(_outPutText);
            let error = document.createTextNode("x");

            removeBtn.appendChild(error);
            removeBtn.setAttribute("value",error);
            removeBtn.addEventListener('click',removeItems);
            function removeItems(){
                  _liText.remove();
            }
            removeBtn.style.textAlign = "right";
            removeBtn.style.display = "inline-block";
            removeBtn.style.marginLeft = "5rem";
            removeBtn.style.color = "red";
            heading.appendChild(text);
            _input.value = "";
              if(_errorlist.children[1].id ="errorText"){
               _errorlist.children[1].remove();
              }
            }else{
            let _errorMsg = _errorlist.lastChild.length;  
            if(_errorMsg >0){
            let errorHeading = document.createElement("h4");
            errorHeading.setAttribute('id','errorText');
            let errorText = document.createTextNode("Please enter some value.");
            errorHeading.appendChild(errorText);
            _errorlist.append(errorHeading);
            _errorlist.style.color = "maroon"; 
         
            }else{
                console.log("error message already exist.");
            }
    }
    
   }

//    function clearAll(){  
//     let _clearList = document.getElementById('ul');
//        let i =0;
//            while(i<_clearList.children.length){
//             _clearList.children[i].remove();
//         }   
//    }