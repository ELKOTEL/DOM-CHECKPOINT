var btnplus=document.querySelectorAll('.btnplus')
var btnminus=document.querySelectorAll('.btnminus')
var card=document.querySelectorAll('.card')
var total=document.querySelector('.total')
var love=document.querySelectorAll('.love')
var trash=document.querySelectorAll('.trash')
var itemprice=document.querySelectorAll('.itemprice')



Array.from(itemprice).forEach((el) => {
  console.log(total.innerText,el.innerText);
  total.innerHTML= +total.innerText+ (+el.innerText)

})
btnplus.forEach((el) =>
  el.addEventListener("click", () => {
el.nextElementSibling.innerHTML++
  total.innerHTML=parseInt(total.innerHTML)+parseInt(el.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
  })
);
btnminus.forEach((el) =>
  el.addEventListener("click", () => {
if (el.previousElementSibling.innerHTML>0) {el.previousElementSibling.innerHTML--;
  total.innerHTML=parseInt(total.innerHTML)-parseInt(el.nextElementSibling.innerHTML)}
  
  })
);
love.forEach((el) =>
el.addEventListener('click',()=>{
    console.log(el)
  el.classList.toggle('love')  
})
  
);

love.forEach((el) =>
  el.addEventListener("click", () => {
    console.log(el);
el.classList.toggle('like');
  })
);
trash.forEach((el) =>
el.addEventListener('click',()=>{
    console.log(el)
  el.classList.toggle('trash')  
})
  
);
trash.forEach((el) =>
el.addEventListener('click',()=>{
    console.log(el)
  el.parentElement.remove();
  total.innerHTML=parseInt( total.innerHTML)-parseInt(el.previousElementSibling.lastElementChild.innerHTML)
// console.log(el.previousElementSibling.firstElementChild.innerHTML)
console.log(el.previousElementSibling.lastElementChild.innerHTML)

})
  
);
