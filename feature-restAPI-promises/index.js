// REST API usind Promises
class searchGitRepo {

    constructor(){
        this.http = new XMLHttpRequest();
    }
    getData(url){
        return new Promise((resolve,reject) => {    
        this.http.open("GET",url,true);
        this.http.onload = () =>{
            if(this.http.status === 200){             
                resolve(this.http.responseText);
            }else{
                reject(console.log("something went wrong"));
            }
        }       
         this.http.send();   
    });
  }
}

  document.body.addEventListener('click',function(e){
      if(e.target.value == "submit"){
      let userInput = document.getElementById('name').value;  
      if(userInput !=""){
        e.preventDefault();
        const obj = new searchGitRepo();
        obj.getData(`https://api.github.com/users/${userInput}/repos`).then(response => {
        let ul = document.querySelector('ul');
 
        ul.style.listStyleType = "none";
        let responseResult = JSON.parse(response);
        let records = responseResult;
        for (const key in records) {
            let li = document.createElement('li');
            let  text = document.createTextNode(`${key}).  ${records[key].url}  ---::-----::--- ${records[key].name}`);
            li.appendChild(text);
            ul.appendChild(li);
       }
       
      }).catch(error => 
            console.log(error +"error in repo")
            ); 
   
    }else{
        console.log("Please enter username");
        e.preventDefault();
    }
  }
  });