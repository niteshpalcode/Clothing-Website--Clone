let newarrivalsDataLife=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/73/P00678596_d2.jpg",
        name:"MISSONI",
        name2:"Kew Large cotton-blend cushion",
        price:335
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00678224_d2.jpg",
        name:"VENINI",
        name2:"Monofiore Large rounded bottle",
        price: 405
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0c/P00679241_d2.jpg",
        name:"GINORI 1735",
        name2:"Diavoletto vase",
        price:675
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9b/P00679317_d2.jpg",
        name:"CAPPELLIN",
        name2:"Kew Large cotton-blend cushion",
        price:335
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1e/P00678579_d2.jpg",
        name:"NASONMORETTI",
        name2:"Morandi bottle",
        price:145
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4d/P00679114_d2.jpg",
        name:"GINORI 1735",
        name2:"Labirinto mug",
        price: 49
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/67/P00678822_d2.jpg",
        name:"LES-OTTOMANS",
        name2:"Paisley silk cushion",
        price:95
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/43/P00679328_d2.jpg",
        name:"ASSOULINE",
        name2:"Provence Glory book",
        price:85
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/38/P00678426_d2.jpg",
        name:"REFLECTIONS COPENHAGEN",
        name2:"Long Island flacon",
        price:259
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f3/P00678416_d2.jpg",
        name:"ROSENTHAL",
        name2:"Seven vase",
        price:135
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/dc/P00678063_d2.jpg",
        name:"ZANAT",
        name2:"Unity stool",
        price:1125
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8f/P00678652_d2.jpg",
        name:"MENU",
        name2:"JWDA table lamp",
        price:159
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/03/P00703772_d2.jpg",
        name:"DOLCE&GABBANA CASA",
        name2:"Set of 2 porcelain soup plates",
        price:235
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2a/P00678547_d2.jpg",
        name:"NUDE",
        name2:"Magnolia vase",
        price: 112
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/14/P00678075.jpg",
        name:"ZANAT",
        name2:"Nera stoo",
        price:559
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/03/P00703772_d2.jpg",
        name:"DOLCE&GABBANA CASA",
        name2:"Set of 2 porcelain soup plates",
        price:235
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2a/P00678547_d2.jpg",
        name:"NUDE",
        name2:"Magnolia vase",
        price:112
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/14/P00678075.jpg",
        name:"ZANAT",
        name2:"Nera stoo",
        price:559
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/21/P00678757_d2.jpg",
        name:"L'OBJET",
        name2:"Mojave Unicorn candle",
        price:259
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/24/P00678177_d2.jpg",
        name:"VITRA",
        name2:"Magnolia vase",
        price:112
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d8/P00678286_d2.jpg",
        name:"TOM DIXON",
        name2:"Bash vessel",
        price:849
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/10/P00678116_d2.jpg",
        name:"WÄSTBERG",
        name2:"w153 Île clip lamp",
        price:195
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/17/P00678583_d2.jpg",
        name:"MISSONI",
        name2:"Kew Small pouf",
        price:412
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2f/P00678540_d2.jpg",
        name:"101 COPENHAGEN",
        name2:"Cobra Double Medium vase",
        price:139
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1e/P00508091_d2.jpg",
        name:"MONCLER",
        name2:"Exclusive to Mytheresa – Reversible dog vest",
        price:205
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f7/P00626000_d2.jpg",
        name:"MONCLER GENIUS",
        name2:"x Poldo reversible printed dog vest",
        price:419
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/af/P00529103_d2.jpg",
        name:"MONCLER GENIUS",
        name2:"x Poldo leather-trimmed dog leash",
        price:215
    },

]

displaydata(newarrivalsDataLife)

function sortfun(){
    let sorted=document.querySelector("#sortby").value;
    console.log(sorted)

    if(sorted==="LowToHigh"){
        newarrivalsDataLife.sort(function(a,b){
            if(a.price>b.price) return 1
            if(a.price<b.price) return -1
            return 0
        });
        displaydata(newarrivalsDataLife)
    }
    if (sorted=="HighToLow"){
        newarrivalsDataLife.sort(function(a,b){
            if(a.price<b.price) return 1
            if(a.price>b.price) return -1
            return 0
        });
        displaydata(newarrivalsDataLife)      
    }

}
function displaydata(newarrivalsDataLife){
    document.querySelector("#container").innerHTML=""
newarrivalsDataLife.forEach(function(elem){
    let box=document.createElement("div");
    box.id="carddiv"

    let imgdiv=document.createElement("div")
    let pic=document.createElement("img")
    pic.className="picSize"
    pic.setAttribute("src",elem.imgurl);
    imgdiv.append(pic)
    // box.append(pic)

    let dataName=document.createElement("h5")
    dataName.innerText=elem.name
    dataName.id="firstname"
    // box.append(pic,dataName)

    let dataname2=document.createElement("p")
    dataname2.innerText=elem.name2
    dataname2.id="secondname"
    // box.append(dataName,dataname2)

    let price=document.createElement("p")
    price.innerText="€"+ elem.price
    price.id="pricetag"
    // box.append(dataname2,price)

    let cart=document.createElement("button")
      cart.innerText="Add to Cart"
      cart.id="cartbutton"
    //   box.append(price,cart)
    cart.addEventListener("click",function(){
        addedcartfun(elem)
    })


      box.append(imgdiv,dataName,dataname2,price,cart)
      document.querySelector("#container").append(box)

})
}

let addedcart=JSON.parse(localStorage.getItem("addedcart"))||[]
function addedcartfun(elem){
    addedcart.push(elem)
    localStorage.setItem("addedcart",JSON.stringify(addedcart))
}
function indexfun(){
    console.log("abc")
    window.location.href="index.html"
}