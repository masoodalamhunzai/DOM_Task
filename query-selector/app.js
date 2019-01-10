
//WORKING WITH DOM

console.dir(document);

console.log(document.URL); // returns URL

console.log(document.title); // returns Title

document.title = "New title set by DOM"; // set new title;

console.log(document.doctype); // returns doc type

console.log(document.head);// returns head section
console.log(document.body); // returns body
 console.log(document.all); // Returns All elements in DOM

 //GET ELEMENT BY ID

  console.log(document.getElementById("demo")); //GETTING ELEMENT BY ID 

  var title = document.getElementById("demo");

  console.log(title);
   title.textContent = "DOCUMENT OBJECT MODEL" //  change the text
  title.innerHTML = "Document obj Model" // change the text

  //   CHANGE THE CSS PROPERTY 

    title.style.borderBottom = " ridge   2px green";
    title.style.color = "blue";
    title.style.textAlign = "center";
    title.style.fontSize = "3em";
    title.style.fontWeight = "bold";

    document.getElementById("demo").style.color = "Green";
    document.getElementById("demo").style.textAlign = "center";
    document.getElementById("demo").style.fontSize = "2em";
    document.getElementById("demo").style.borderBottom = "dotted";
    document.getElementById("demo").style.borderBottomColor = "blue";

       var items =  document.getElementsByClassName("demo");
           items[0].textContent = "This text is styled by index Property"
           items[0].style.backgroundColor = "white";
           items[0].style.color = "green";
       console.log(items);

    //QUERY SELECTOR

    var title = document.querySelector('.demo1');
    title.style.color = "green";
    title.style.textAlign = "center";
    title.style.fontSize = "3em";
    title.textContent = "Text Changed by Query Selector";