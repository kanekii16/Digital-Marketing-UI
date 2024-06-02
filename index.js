

const slider_conatainer = document.getElementsByClassName("slider-section")[0];




const content_btn = document.getElementsByClassName("content-button");
const content_box = document.getElementsByClassName("contents")

for(let i = 0 ; i < content_btn.length ; i++){

    
    content_box[i].addEventListener("click",(e)=>{
        e.stopPropagation();
    })
    content_btn[i].addEventListener("focus",changeImage);
  
}

function changeImage(e){
   const btn = e.target;

   const img = document.getElementsByClassName("img-container")[0];

   n = btn["name"];

   img["src"] = `./images/our project/${n}.jpg`

   console.log(img);


}

const contact_us = document.getElementsByClassName("contact")[0];

