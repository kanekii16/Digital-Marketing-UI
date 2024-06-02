
const body = document.getElementsByClassName("Whole-section")[0];

const submit_btn = document.getElementsByClassName("submit-btn")[0];

const toggle_btn = document.getElementsByClassName("show")[0];

submit_btn.addEventListener("click",hidebox);

toggle_btn.addEventListener("click",showbox);



function showbox(e){

    const form_box = document.getElementsByClassName("form-box")[0];
    console.log("events clicked")
    console.log(form_box)
    form_box.classList.add("show-box")

    

    body.classList.add("body-transparency")
    

}

function hidebox(e){
    const form_box = document.getElementsByClassName("form-box")[0];
    form_box.classList.add("hide")

    body.classList.remove("body-transparency")

}


const inputs = document.getElementsByClassName("input");

for(let i = 0 ; i < inputs.length ; i++){
    inputs[i].addEventListener("focus",showLabel);
}

function showLabel(e){
    const input_element = e.target;

    const name = input_element["name"];

    const label = document.getElementsByClassName(`${name}`)[0];

    label.classList.add("show");

    
    
}


