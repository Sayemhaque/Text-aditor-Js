//text from text area
const text = document.getElementById("text");
//text bold btn
const textBoldBtn = document.getElementById("text-bold");
//text italic btn
const textItalicBtn = document.getElementById("text-italic");
//text underline btn
const textUnderLineBtn = document.getElementById("text-underline");
//text align 
const alignLeft = document.getElementById("align-left");
const alignCenter = document.getElementById("align-center");
const alignRight = document.getElementById("align-right");
const alignJustify = document.getElementById("align-justify")

//color-input
const colorInput = document.getElementById("color-input");

colorInput.addEventListener("focusout" , function(e){
   console.log(e.target.value)
   text.classList.add(`text-[${e.target.value}]`)
})

alignLeft.addEventListener("click" , function() {
    text.classList.remove("text-right")
    text.classList.remove("justify")
    text.classList.remove("text-center")
    text.classList.add("text-left")
})
alignCenter.addEventListener("click" , function() {
    text.classList.remove("text-right")
    text.classList.remove("justify")
    text.classList.remove("text-left")
    text.classList.add("text-center")
})
alignRight.addEventListener("click" , function() {
    text.classList.remove("text-left")
    text.classList.remove("justify")
    text.classList.remove("text-center")
    text.classList.add("text-right")
})
alignJustify.addEventListener("click" , function() {
    text.classList.remove("text-right")
    text.classList.remove("text-left")
    text.classList.remove("text-center")
    text.classList.add("justify")
})

document.getElementById("font-size").addEventListener("click", function(e){
    const fontSizeValue = e.target.value;
    text.classList.toggle(`text-[${fontSizeValue}px]`) 
    console.log(fontSizeValue)
})



textBoldBtn.addEventListener("click" , function () {
   text.classList.toggle("font-bold")
   textBoldBtn.classList.toggle("bg-violet-300")
   textItalicBtn.classList.remove("bg-violet-300")
   textUnderLineBtn.classList.remove("bg-violet-300");
})


textItalicBtn.addEventListener("click" , function() {
    textItalicBtn.classList.toggle("bg-violet-300")
    text.classList.toggle("italic")
    textBoldBtn.classList.remove("bg-violet-300");
    textUnderLineBtn.classList.remove("bg-violet-300");
})


textUnderLineBtn.addEventListener("click" , function(){
    textUnderLineBtn.classList.add("bg-violet-300");
    text.classList.toggle("underline")
    textBoldBtn.classList.remove("bg-violet-300")
    textItalicBtn.classList.remove("bg-violet-300");   
})