var productData={
    name:"Men Navy Blue Solid Sweatshirt",
    brand:"United Colors of Benetton",
    price: 2599,
    description:"Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
     
    images:[
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ]
}

var container3=document.querySelector(".container3");

var output="";
for(let i=0;i<productData.images.length;i++){
  
   output+= `<img src=${ productData.images[i] } alt="error">`  
}
container3.innerHTML=output;


var mainImage=document.querySelector(".container1 img");

window.addEventListener("load",()=>{
    mainImage.setAttribute("src",productData.images[0]);
    newPI[0].classList.add("active1");
})


var previewImage =  document.querySelector(".container3").getElementsByTagName("img");
var newPI=Array.from(previewImage);
for(let j=0;j<newPI.length;j++){
    newPI[j].addEventListener("click",()=>{
        newPI[j].classList.add("active1"); 
        mainImage.setAttribute("src",productData.images[j]);

    for(let k=0;k<newPI.length;k++){
        if(newPI[k]!=newPI[j]){
            newPI[k].classList.remove("active1");
        }
    }
    })


}







// for(let j=0;j<productData.images.length;j++){
//     var previewImage=document.querySelector(".container3").querySelectorAll("img[j]");
//     previewImage.addEventListener("click",()=>{
//         previewImage.classList.add("active1");
// })
// }



