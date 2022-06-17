let productsCont=document.getElementById("cartcontainer");
let addedcart=JSON.parse(localStorage.getItem("addedcart"))||[]
let cartLS=JSON.parse(localStorage.getItem("addedcart")) || [];

let totalPrice=0;
function displayProducts(addedcart){
    productsCont.innerHTML="";
    totalPrice=0;
    addedcart.forEach(function(element){
        totalPrice+= +element.price;

        let product= document.createElement("div");
        product.id="cartsection"
        
        let imgdiv=document.createElement("div")
        let imgdivapp=document.createElement("img");
        imgdivapp.id="cartimg"
        imgdivapp.src=element.imgurl;
        imgdiv.append(imgdivapp)

        let detailsdiv=document.createElement("div")
        let name=document.createElement("h1");
        name.innerText=element.name;
        let name1=document.createElement("p");
        name1.innerText=element.name2;
        


        let DeleteCart=document.createElement("button");
        DeleteCart.innerText="Delete";
        DeleteCart.id="deletecartbut"
        DeleteCart.addEventListener("click",function(){
          Delete(element.name);
        });
        detailsdiv.append(name,name1,DeleteCart)
        let pricediv=document.createElement("div")
        let pricec=document.createElement("h1")
        pricec.innerText="€ "+Number(element.price)
        pricediv.append(pricec)
        pricec.id="pricetag"


       product.append(imgdiv,detailsdiv,pricediv);
        productsCont.append(product)

    })
    console.log(totalPrice);
    let checkout=document.createElement("div")
    let finalprice=document.createElement("h2")
    finalprice.innerText="Sub Total : €"+" " +totalPrice
    let tax=document.createElement("h3")
    tax.innerText="Tax & Services : 12% "
    
    let Fianl=document.createElement("h1")
    totalPrice=Math.floor(totalPrice*1.12)
    Fianl.innerText="Total :€"+" "+totalPrice

    let checkoutbutton=document.createElement("button")
    checkoutbutton.innerText="Place Your Order"
    checkoutbutton.id="checkoutbutton"
    // checkoutbutton.style.backgroundColor="teal"
    checkoutbutton.style.color="white"
    checkout.addEventListener("click",checkoutFun)

    checkout.append(finalprice,tax,Fianl,checkoutbutton)
    document.querySelector("#finalh1").append(checkout)
}
displayProducts(cartLS);
function Delete(id){

 let deleted=cartLS.filter(function(el){
   return el.name !=id;
 })
 cartLS=deleted;
 location.reload();
 localStorage.setItem("cart-page",JSON.stringify(cartLS));
 localStorage.setItem("addedcart",JSON.stringify(deleted));

 displayProducts(cartLS);
}
function checkoutFun(){
    alert("Pay the amount and Your order will be deliver soon!!")
    window.location.href="index.html"
}

function indexfun(){
  console.log("abc")
  window.location.href="index.html"
}