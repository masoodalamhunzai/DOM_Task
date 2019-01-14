let _input = document.getElementById('input');
document.querySelector('#form').addEventListener('submit',function(e){
    let _container ;

    _text = _input.value;
    // console.log(_text);
    if(localStorage.getItem('name')===null){
        _container = [];
    
    }else{
        _container = JSON.parse(localStorage.getItem("name"));
      //  _container = localStorage.setItem("name",JSON.stringify(_container));
    }
    _container.push(_text);
      let storedValue =   localStorage.setItem("name",JSON.stringify(_container));
      
      // let output = document.getElementById('output');
    //   for(let i=0; i<_container.)
      // output.innerText = storedValue+"<br>";
      _text = _input.value ="";
    e.preventDefault();

});
