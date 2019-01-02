
// WORKING WITH DOM

//console.dir(document);

//console.log(document.URL); // returns URL

//console.log(document.title); // returns Title

//document.title = "New title set by DOM"; // set new title;

//console.log(document.doctype); // returns doc type

//console.log(document.head);// returns head section
//console.log(document.body); // returns body
 //console.log(document.all); // Returns All elements in DOM


    //    var items =  document.getElementsByClassName("demo");
    //        items[0].textContent = "This text is styled by index Property"
    //        items[0].style.backgroundColor = "white";
    //        items[0].style.color = "green";
    //    console.log(items);

    // QUERY SELECTOR

    var title = document.querySelector('.demo1');
    title.style.color = "green";
    title.style.textAlign = "center";
    title.style.fontSize = "3em";
    title.textContent = "Text Changed by Query Selector";