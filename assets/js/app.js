let imgs = document.querySelectorAll(".img");


imgs.forEach((img)=>{
  img.addEventListener("click", function(e){
    removeExpand()
    e.target.classList.add("expand");
  })

})

function removeExpand(){
imgs.forEach((img)=>{
      img.classList.remove("expand");
  })
}