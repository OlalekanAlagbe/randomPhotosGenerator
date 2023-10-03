const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");


btnEl.addEventListener("click", ()=>{
      imagePerClick = 3;
      addNewImages()
})

function addNewImages(){
    for(let i = 0; i < imagePerClick; i++){
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImgEl)
    }
    
}
