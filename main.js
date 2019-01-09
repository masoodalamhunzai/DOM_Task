// working with DOM 

document.body.style.backgroundColor = "#f6f6f6";
let section = document.getElementById('main');
   section.style.width = "1000px";
   section.style.height = "auto";
   section.style.backgroundColor = "#352f2f";
   section.style.margin = "0 auto";
   section.style.padding = "1.5rem";
   section.style.borderRadius = "0.5rem";
 

let heading = document.getElementById('heading');
   heading.style.width = "60%";
   heading.style.height = "auto";
   heading.style.backgroundColor = "#fff";
   heading.style.margin = "0 auto";
   heading.style.padding = "0.2rem";
   heading.style.borderRadius = "10px";
   heading.style.boxShadow = "2px 4px 8px 2px grey";

   heading.firstElementChild.textContent = "Welcome to JavaScript :: DOM ";
   heading.firstElementChild.style.color = "green";
   heading.firstElementChild.style.fontSize = "1.9rem";
   heading.firstElementChild.style.textAlign = "center";

let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vel eum repudiandae reprehenderit magni eveniet eos tempore omnis eaque aliquid . eum repudiandae reprehenderit magni eveniet eos tempore omnis eaque aliquid . eum repudiandae reprehenderit magni eveniet eos tempore omnis eaque aliquid  ";

let para1 = document.querySelector('#para1');
    para1.style.width = "20rem";
    para1.style.height = "15rem";
    para1.style.margin = "4rem 0 0 0";
    para1.style.borderRadius = "5px";
    para1.style.backgroundColor = "white";
    para1.style.display = "inline-block";
    para1.style.boxSizing = "boder-box";

    let _para1Heading =para1.children[0];
    let _para1Para =para1.children[1];
    _para1Heading.textContent = "heading 1:";
    _para1Heading.style.fontSize = "1.5rem";
    _para1Heading.style.textTransform = "uppercase";
    _para1Heading.style.color = "green";
    _para1Heading.style.padding = "0.5rem";
    _para1Heading.style.textAlign = "left";
    _para1Heading.style.textDecoration = "underline";
    _para1Heading.style.margin = 0;

    _para1Para.textContent = text;
    _para1Para.style.padding = "0.5rem";
    _para1Para.style.margin = 0;
    _para1Para.style.lineHeight = "1.2rem";
    _para1Para.style.color = "#4f4c4c";

let para2 = document.querySelector('#para2');
    para2.style.width = "20rem";
    para2.style.height = "15rem";
    para2.style.margin = "4rem 1rem 0 1rem";
    para2.style.borderRadius = "5px";
    para2.style.backgroundColor = "white";
    para2.style.display = "inline-block";

    let _para2Heading =para2.children[0];
    let _para2Para =para2.children[1];

    _para2Heading.textContent = "heading 2:";
    _para2Heading.style.fontSize = "1.5rem";
    _para2Heading.style.textTransform = "uppercase";
    _para2Heading.style.color = "green";
    _para2Heading.style.padding = "0.5rem";
    _para2Heading.style.textAlign = "left";
    _para2Heading.style.textDecoration = "underline";
    _para2Heading.style.margin = 0;

    _para2Para.textContent = text;
    _para2Para.style.padding = "0.5rem";
    _para2Para.style.margin = 0;
    _para2Para.style.lineHeight = "1.2rem";
    _para2Para.style.color = "#4f4c4c";

let para3 = document.querySelector('#para3');
    para3.style.width = "20rem";
    para3.style.height = "15rem";
    para3.style.margin = "4rem 0 0 0";
    para3.style.borderRadius = "5px";
    para3.style.backgroundColor = "white";
    para3.style.display = "inline-block";

    let _para3Heading =para3.children[0];
    let _para3Para =para3.children[1];
    
    _para3Heading.textContent = "heading 3:";
    _para3Heading.style.fontSize = "1.5rem";
    _para3Heading.style.textTransform = "uppercase";
    _para3Heading.style.color = "green";
    _para3Heading.style.padding = "0.5rem";
    _para3Heading.style.textAlign = "left";
    _para3Heading.style.textDecoration = "underline";
    _para3Heading.style.margin = 0;

    _para3Para.textContent = text;
    _para3Para.style.padding = "0.5rem";
    _para3Para.style.margin = 0;
    _para3Para.style.lineHeight = "1.2rem";
    _para3Para.style.color = "#4f4c4c";

let para4 = document.querySelector('#para4');
    para4.style.width = "62.5rem";
    para4.style.height = "auto";
    para4.style.margin = "4rem 0 0 0";
    para4.style.borderRadius = "5px";
    para4.style.backgroundColor = "white";
    para4.style.display = "inline-block";

let _para4Heading = para4.children[0];
let _para4Img = para4.children[1];
   _para4Heading.textContent = "beautiful view";
   _para4Heading.style.fontSize = "1.9rem";
   _para4Heading.style.textTransform = "uppercase";
   _para4Heading.style.color = "green";
   _para4Heading.style.padding = "0.5rem";
   _para4Heading.style.textAlign = "center";
   _para4Heading.style.margin = 0;
   _para4Heading.style.backgroundColor = "rgb(198, 203, 207)";

   if(_para4Img.hasAttribute('src') == false){
   _para4Img.setAttribute("width","1000px");
   _para4Img.setAttribute("height","500px");
   _para4Img.setAttribute("src","img.jpg");
   _para4Img.style.borderRadius = "0 0 0.3rem 0.3rem";
   }else{
      _para4Img.removeAttribute('src');
      console.log("Already exist attributes");
   }

let footer = document.querySelector('#footer');
    footer.style.width = "62.5rem";
    footer.style.height = "8rem";
    footer.style.margin = "4rem 0 0 0";
    footer.style.borderRadius = "5px";
    footer.style.backgroundColor = "white";
    footer.style.display = "inline-block";

    let _footerHeading =footer.children[0];
    let _footerPara =footer.children[1];
    
    _footerHeading.textContent = "HOME | GALLERY | ABOUT US | CONTACT US ";
    _footerHeading.style.fontSize = "1.5rem";
    _footerHeading.style.textTransform = "uppercase";
    _footerHeading.style.color = "green";
    _footerHeading.style.padding = "0.5rem";
    _footerHeading.style.textAlign = "center";
    _footerHeading.style.textDecoration = "underline";
    _footerHeading.style.margin = 0;
    _footerHeading.style.paddingTop = "2rem";

    _footerPara.textContent = "© 2019 All Rights are reserved.";
    _footerPara.style.padding = "0.5rem";
    _footerPara.style.margin = 0;
    _footerPara.style.lineHeight = "1.2rem";
    _footerPara.style.textAlign = "center";
    _footerPara.style.color = "#4f4c4c";

   //console.dir(_para4Img);
    
