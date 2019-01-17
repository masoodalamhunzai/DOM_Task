// FEATURE-CAR-WORLD

class carworld{
 
    constructor(name,make,price,model,year,description){

        this.name = name;
        this.make = make;
        this.price = price;
        this.model = model;
        this.year = year;
        this.description= description;
    }

     createTable(car) {

         let  tbl = document.querySelector('.table').children;
         tbl[0].style.border = "1px solid grey";
         tbl[0].style.textAlign = "center";
         tbl[0].style.margin = "0  auto";
             
         setItems(car);
         getItems();
      
         function setItems(car){
            let ls;
            if(localStorage.getItem('items')==null){
                ls = [];
            }else{
                ls = JSON.parse(localStorage.getItem('items'));
            }        
            ls.push(car);
            localStorage.setItem('items',JSON.stringify(ls));
         }

         function getItems(){
             const records =JSON.parse(localStorage.getItem('items'));              
             if(records !=null){
                 let tr = document.createElement('tr');
                for (let i = 0;records.length >i; i++) {
                    tr.innerHTML =  `
                    <td> ${i}</td>
                    <td>${records[i].name}</td>
                    <td>${records[i].make}</td>
                    <td>${records[i].price}</td>
                    <td>${records[i].model}</td>
                    <td>${records[i].year}</td>
                    <td>${records[i].description}</td>
                    <td><button class="remove" style="color:red;" value= "${i}">X</td>  
                    `;                
                }
                tbl[0].appendChild(tr);                
            }else{
                localStorage.setItem('items',JSON.stringify([]));
            }
        }

              
        document.body.addEventListener('click',function(e){
            if(e.target.className == "remove"){
                removeItems(car);
            }
          });

     function removeItems(car){
        let removeBtn= document.querySelector('.remove');   
        removeBtn.parentElement.parentElement.remove();
        const items  =JSON.parse(localStorage.getItem('items')); 
        let removeIndex = +(removeBtn.value);
        let index = items.indexOf(removeIndex);      
        for (var i = 0; i < items.length; i++) {
            if(items[i] == removeIndex){
                console.log(removeBtn.parentElement.parentElement);
                 removed.push(items.splice(index,1));
              break;
             }
         }
          localStorage.setItem("items",JSON.stringify([car]));
        }
    }

    clearFields(){
        document.getElementById("name").value = "";
        document.getElementById("make").value = "";
        document.getElementById("model").value = "";
        document.getElementById("price").value = "";
        document.getElementById("year").value = "";
        document.getElementById("description").value = "";
    }
   
}

    let form = document.getElementById('car-world');
    form.addEventListener('click',function(e){
    let name, make,price,model,year,description;

    name = document.getElementById('name').value;
    make = document.getElementById('make').value;
    price = document.getElementById('price').value;
    model = document.getElementById('model').value;
    year = document.getElementById('year').value;
    description = document.getElementById('description').value;

    e.preventDefault();
    if(e.target.className == "button"){
        if( (name!="")&& (make!="")&&(price!="")&&(model!="")&&(year!="")&&(description !="")){
        const car = new carworld(name,make,price,model,year,description);
        car.createTable(car);
        car.clearFields(name,make,price,model,year,description);
        car.clearFields();
        }else{
            console.log("Please enter some value");
        }
    }
});
