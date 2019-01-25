// feature asyncs-await

class asyncAwait {
    constructor(){
      
    }
    async getData(url){
        const res = await fetch(url);
        return await res.json(); 
    }
}
document.body.addEventListener('click',function(e){
    if(e.target.value == 'submit'){
      const userInput = document.querySelector('.name').value; 
      e.preventDefault();
      const objAsyncAwait = new asyncAwait();
      objAsyncAwait.getData(`https://api.github.com/users/${userInput}/repos`).then(result=>
        result.map(res=> [res.url,res.name])).then(record => {
           for(items in record) {
            let ul = document.querySelector('.ul');
            let li = document.createElement('li');
            li.style.display = "flex";
            li.style.listStyleType = "none";
            let text = document.createTextNode(`${items}) ${record[items]} ---::--- ${record[items][1]}`);
            li.appendChild(text)
            ul.appendChild(li);
            //  console.log(record[items] ,record[items][1]);
           };           
        });
    };
});