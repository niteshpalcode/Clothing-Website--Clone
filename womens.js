
  function indexfun(){
    console.log("abc")
    window.location.href="index.html"
}

let newarrivalsData=[
    
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/80/P00706359_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Floral silk minidress",
        price:1005
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/00/P00686588_d2.jpg",
        name:"LOEWE",
        name2:"Sculptural leather mules",
        price:825,
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2c/P00665728_b1.jpg",
        name:"THE ROW",
        name2:"Emy leather shoulder bag",
        price:1059
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f8/P00704500_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Ribbed-knit midi dress",
        price:715
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/71/P00700523_b1.jpg",
        name:"FRANKIE SHOP",
        name2:"Bourse nylon shoulder bag",
        price:135
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2c/P00665728_b1.jpg",
        name:"THE ROW",
        name2:"Emy leather shoulder bag",
        price:775
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/83/P00686589_d2.jpg",
        name:"LOEWE",
        name2:"Printed canvas mules",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9e/P00700526_b1.jpg",
        name:"FRANKIE SHOP",
        name2:"Lui cotton shorts",
        price:79
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/79/P00706358_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Floral silk maxi dress",
        price:1005
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fb/P00680995_d2.jpg",
        name:"LOEWE",
        name2:"Caged platform sandals",
        price:329
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3a/P00665706_b1.jpg",
        name:"THE ROW",
        name2:"Park Large nylon tote bag",
        price:725
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6b/P00703630_b1.jpg",
        name:"ETRO",
        name2:"Floral midi dress",
        price:1015
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a4/P00705584_b1.jpg",
        name:"ETRO",
        name2:"Floral silk crêpe de chine minidres",
        price:1425
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3b/P00699597_d2.jpg",
        name:"AQUAZZURA",
        name2:"Moondust embellished leather slides",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4d/P00680868_d2.jpg",
        name:"LOEWE",
        name2:"Caged platform sandals",
        price:325
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00696534_b1.jpg",
        name:"PETAR PETROV",
        name2:"Finley cashmere and silk",
        price:749
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00704501_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Ribbed-knit sweater",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/70/P00700919_b1.jpg",
        name:"ETRO",
        name2:"Paisley jacquard shopper",
        price:429
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/23/P00707419_d2.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Falabella faux leather mules",
        price:505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b4/P00704499_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Ribbed-knit midi skirt",
        price:635
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/60/P00696533_b1.jpg",
        name:"PETAR PETROV",
        name2:"Flavia cashmere and silk midi dress",
        price:755
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c6/P00665704_b1.jpg",
        name:"THE ROW",
        name2:"Park Large nylon tote bag",
        price:725
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a8/P00690133_d2.jpg",
        name:"MALONE SOULIERS",
        name2:"Perla metallic leather mules",
        price:379
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0b/P00704503_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Sequined minidress",
        price:925
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ef/P00697234_b1.jpg",
        name:"DOROTHEE SCHUMACHER",
        name2:"Emotional Essence jacket",
        price:325
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e4/P00701295_b1.jpg",
        name:"ETRO",
        name2:"Paisley printed shoulder bag",
        price:415
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0d/P00708193_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Logo belt",
        price:149
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2b/P00697239_b1.jpg",
        name:"DOROTHEE SCHUMACHER",
        name2:"Emotional Essence pants",
        price:249
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9c/P00647612_b1.jpg",
        name:"AMI PARIS",
        name2:"Ami de Cœur wool sweater",
        price:215
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f9/P00707439_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Falabella Small tote",
        price:779
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ca/P00701343_d2.jpg",
        name:"TORY BURCH",
        name2:"Capri embellished leather sandals",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"THE ROW",
        name2:"Hana silk twill balloon skirt",
        price:1749
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fa/P00705777_b1.jpg",
        name:"ETRO",
        name2:"Paisley ramie beach cover-up",
        price:535
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c3/P00688976_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Falabella faux leather mules",
        price:505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/61/P00700975_b1.jpg",
        name:"BALMAIN",
        name2:"Ribbed-knit minidress",
        price:665
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00675066_b1.jpg",
        name:"GUCCI",
        name2:"Bananya © printed cotton T-shirt",
        price:379
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/46/P00701384_b1.jpg",
        name:"ETRO",
        name2:"Printed cashmere and silk scarf",
        price:355
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5b/P00699690_d2.jpg",
        name:"AQUAZZURA",
        name2:"Moondust embellished leather slides",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/15/P00680596_b1.jpg",
        name:"BALMAIN",
        name2:"High-rise boyfriend jeans",
        price:749
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/27/P00698762_b1.jpg",
        name:"ETRO",
        name2:"Embroidered poncho",
        price:825
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/58/P00679980.jpg",
        name:"CELINE EYEWEAR",
        name2:"Acetate sunglasses",
        price:305
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/11/P00690136_d2.jpg",
        name:"MALONE SOULIERS",
        name2:"Sol metallic espadrille sandals",
        price:249
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e2/P00705637_b1.jpg",
        name:"ETRO",
        name2:"Patterned culottes",
        price:839
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/33/P00647634_b1.jpg",
        name:"AMI PARIS",
        name2:"Ami de Cœur wool sweater",
        price:215
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/62/P00665715_b1.jpg",
        name:"THE ROW",
        name2:"Sporty nylon backpack",
        price:1115
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/30/P00701402_b1.jpg",
        name:"ETRO",
        name2:"Paisley wool and silk scarf",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4a/P00709865_b1.jpg",
        name:"THOM BROWNE",
        name2:"Open-work wool sweater vest",
        price:919
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a6/P00697210_b1.jpg",
        name:"DOROTHEE SCHUMACHER",
        name2:"Essential Ease wool and silk T-shirt",
        price:249
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e8/P00701345_d2.jpg",
        name:"TORY BURCH",
        name2:"Minnie leather ballet flats",
        price:219
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/14/P00701342_d2.jpg",
        name:"TORY BURCH",
        name2:"Capri embellished leather sandals",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ad/P00706349_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Cheetah-print silk blouse",
        price:465
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/74/P00704508_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Virgin wool bomber jacket",
        price:669
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/54/P00665713_b1.jpg",
        name:"THE ROW",
        name2:"Sporty nylon backpack",
        price:"1115"
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/95/P00709817_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with tsavorites",
        price:1409
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/13/P00703751_b1.jpg",
        name:"ETRO",
        name2:"Paisley cotton-blend shirt",
        price:275
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f9/P00696441_b1.jpg",
        name:"BURBERRY",
        name2:"Jane virgin wool twill pants",
        price:695
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d4/P00701769_d2.jpg",
        name:"TORY BURCH",
        name2:"Metal Miller Soft leather sandals",
        price:245
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00701293_b1.jpg",
        name:"ETRO",
        name2:"Leather-trimmed basket tote",
        price:479
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ff/P00706352_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Cheetah-print silk maxi dress",
        price:1089
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00697255_b1.jpg",
        name:"DOROTHEE SCHUMACHER",
        name2:"Heritage Ease silk shirt",
        price:419
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ed/P00701386_b1.jpg",
        name:"ETRO",
        name2:"Paisley silk scarf",
        price:205
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6d/P00701314_b1.jpg",
        name:"ETRO",
        name2:"Pegaso jacquard shopper",
        price:419
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a4/P00701365_d2.jpg",
        name:"TORY BURCH",
        name2:"Miller Soft leather sandals",
        price:219
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:2505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/94/P00697684_b1.jpg",
        name:"OSCAR DE LA RENTA",
        name2:"Floral cotton-blend jumpsuit",
        price:2039
    },

]

displaydata(newarrivalsData)

function sortfun(){
    let sorted=document.querySelector("#sortby").value;
    console.log(sorted)

    if(sorted==="LowToHigh"){
        newarrivalsData.sort(function(a,b){
            if(a.price>b.price) return 1
            if(a.price<b.price) return -1
            return 0
        });
        displaydata(newarrivalsData)
    }
    if (sorted=="HighToLow"){
        newarrivalsData.sort(function(a,b){
            if(a.price<b.price) return 1
            if(a.price>b.price) return -1
            return 0
        });
        displaydata(newarrivalsData)      
    }

}

let newarrival=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/80/P00706359_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Floral silk minidress",
        price:1005
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f8/P00704500_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Ribbed-knit midi dress",
        price:715
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9e/P00700526_b1.jpg",
        name:"FRANKIE SHOP",
        name2:"Lui cotton shorts",
        price:79
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/79/P00706358_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Floral silk maxi dress",
        price:1005
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3a/P00665706_b1.jpg",
        name:"THE ROW",
        name2:"Park Large nylon tote bag",
        price:725
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6b/P00703630_b1.jpg",
        name:"ETRO",
        name2:"Floral midi dress",
        price:1015
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a4/P00705584_b1.jpg",
        name:"ETRO",
        name2:"Floral silk crêpe de chine minidres",
        price:1425
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3b/P00699597_d2.jpg",
        name:"AQUAZZURA",
        name2:"Moondust embellished leather slides",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4d/P00680868_d2.jpg",
        name:"LOEWE",
        name2:"Caged platform sandals",
        price:325
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00696534_b1.jpg",
        name:"PETAR PETROV",
        name2:"Finley cashmere and silk",
        price:749
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00704501_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Ribbed-knit sweater",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/70/P00700919_b1.jpg",
        name:"ETRO",
        name2:"Paisley jacquard shopper",
        price:429
    },
]
let designers=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a8/P00690133_d2.jpg",
        name:"MALONE SOULIERS",
        name2:"Perla metallic leather mules",
        price:379
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0b/P00704503_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Sequined minidress",
        price:925
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ef/P00697234_b1.jpg",
        name:"DOROTHEE SCHUMACHER",
        name2:"Emotional Essence jacket",
        price:325
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e4/P00701295_b1.jpg",
        name:"ETRO",
        name2:"Paisley printed shoulder bag",
        price:415
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0d/P00708193_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Logo belt",
        price:149
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2b/P00697239_b1.jpg",
        name:"DOROTHEE SCHUMACHER",
        name2:"Emotional Essence pants",
        price:249
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9c/P00647612_b1.jpg",
        name:"AMI PARIS",
        name2:"Ami de Cœur wool sweater",
        price:215
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f9/P00707439_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Falabella Small tote",
        price:779
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ca/P00701343_d2.jpg",
        name:"TORY BURCH",
        name2:"Capri embellished leather sandals",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"THE ROW",
        name2:"Hana silk twill balloon skirt",
        price:1749
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fa/P00705777_b1.jpg",
        name:"ETRO",
        name2:"Paisley ramie beach cover-up",
        price:535
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c3/P00688976_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Falabella faux leather mules",
        price:505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/61/P00700975_b1.jpg",
        name:"BALMAIN",
        name2:"Ribbed-knit minidress",
        price:665
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00675066_b1.jpg",
        name:"GUCCI",
        name2:"Bananya © printed cotton T-shirt",
        price:379
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/46/P00701384_b1.jpg",
        name:"ETRO",
        name2:"Printed cashmere and silk scarf",
        price:355
    },
]
let clothings=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/80/P00706359_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Floral silk minidress",
        price:1005
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f8/P00704500_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Ribbed-knit midi dress",
        price:715
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6b/P00703630_b1.jpg",
        name:"ETRO",
        name2:"Floral midi dress",
        price:1015
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2b/P00697239_b1.jpg",
        name:"DOROTHEE SCHUMACHER",
        name2:"Emotional Essence pants",
        price:249
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9c/P00647612_b1.jpg",
        name:"AMI PARIS",
        name2:"Ami de Cœur wool sweater",
        price:215
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00696534_b1.jpg",
        name:"PETAR PETROV",
        name2:"Finley cashmere and silk",
        price:749
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00704501_b1.jpg",
        name:"STELLA MCCARTNEY",
        name2:"Ribbed-knit sweater",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a4/P00705584_b1.jpg",
        name:"ETRO",
        name2:"Floral silk crêpe de chine minidres",
        price:1425
    },
]
let shoess=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fb/P00680995_d2.jpg",
        name:"LOEWE",
        name2:"Caged platform sandals",
        price:329
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ca/P00701343_d2.jpg",
        name:"TORY BURCH",
        name2:"Capri embellished leather sandals",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/11/P00690136_d2.jpg",
        name:"MALONE SOULIERS",
        name2:"Sol metallic espadrille sandals",
        price:249
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fb/P00680995_d2.jpg",
        name:"LOEWE",
        name2:"Caged platform sandals",
        price:329
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ca/P00701343_d2.jpg",
        name:"TORY BURCH",
        name2:"Capri embellished leather sandals",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/11/P00690136_d2.jpg",
        name:"MALONE SOULIERS",
        name2:"Sol metallic espadrille sandals",
        price:279
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fb/P00680995_d2.jpg",
        name:"LOEWE",
        name2:"Caged platform sandals",
        price:399
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ca/P00701343_d2.jpg",
        name:"TORY BURCH",
        name2:"Capri embellished leather sandals",
        price:109
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/11/P00690136_d2.jpg",
        name:"MALONE SOULIERS",
        name2:"Sol metallic espadrille sandals",
        price:249
    },
]
let accesss=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/30/P00701402_b1.jpg",
        name:"ETRO",
        name2:"Paisley wool and silk scarf",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00701293_b1.jpg",
        name:"ETRO",
        name2:"Leather-trimmed basket tote",
        price:479
    }, 
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ed/P00701386_b1.jpg",
        name:"ETRO",
        name2:"Paisley silk scarf",
        price:205
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/30/P00701402_b1.jpg",
        name:"ETRO",
        name2:"Paisley wool and silk scarf",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00701293_b1.jpg",
        name:"ETRO",
        name2:"Leather-trimmed basket tote",
        price:479
    }, 
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ed/P00701386_b1.jpg",
        name:"ETRO",
        name2:"Paisley silk scarf",
        price:205
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/30/P00701402_b1.jpg",
        name:"ETRO",
        name2:"Paisley wool and silk scarf",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00701293_b1.jpg",
        name:"ETRO",
        name2:"Leather-trimmed basket tote",
        price:479
    }, 
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ed/P00701386_b1.jpg",
        name:"ETRO",
        name2:"Paisley silk scarf",
        price:205
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/30/P00701402_b1.jpg",
        name:"ETRO",
        name2:"Paisley wool and silk scarf",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00701293_b1.jpg",
        name:"ETRO",
        name2:"Leather-trimmed basket tote",
        price:479
    }, 
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ed/P00701386_b1.jpg",
        name:"ETRO",
        name2:"Paisley silk scarf",
        price:205
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/30/P00701402_b1.jpg",
        name:"ETRO",
        name2:"Paisley wool and silk scarf",
        price:289
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00701293_b1.jpg",
        name:"ETRO",
        name2:"Leather-trimmed basket tote",
        price:479
    }, 
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ed/P00701386_b1.jpg",
        name:"ETRO",
        name2:"Paisley silk scarf",
        price:205
    },
]
let jwel=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:2505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:1455
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/27/P00698762_b1.jpg",
        name:"ETRO",
        name2:"Embroidered poncho",
        price:825
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:2505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:1455
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:2505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:1455
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:2505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:1455
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:2505
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg",
        name:"ILEANA MAKRI",
        name2:"18kt gold earrings with amethysts",
        price:1455
    },
]
let vacatio=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/61/P00700975_b1.jpg",
        name:"BALMAIN",
        name2:"Ribbed-knit minidress",
        price:665
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00675066_b1.jpg",
        name:"GUCCI",
        name2:"Bananya © printed cotton T-shirt",
        price:379
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/46/P00701384_b1.jpg",
        name:"ETRO",
        name2:"Printed cashmere and silk scarf",
        price:355
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5b/P00699690_d2.jpg",
        name:"AQUAZZURA",
        name2:"Moondust embellished leather slides",
        price:585
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/61/P00700975_b1.jpg",
        name:"BALMAIN",
        name2:"Ribbed-knit minidress",
        price:665
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00675066_b1.jpg",
        name:"GUCCI",
        name2:"Bananya © printed cotton T-shirt",
        price:379
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/46/P00701384_b1.jpg",
        name:"ETRO",
        name2:"Printed cashmere and silk scarf",
        price:355
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5b/P00699690_d2.jpg",
        name:"AQUAZZURA",
        name2:"Moondust embellished leather slides",
        price:585
    },
]
let bagss=[
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/62/P00665715_b1.jpg",
        name:"THE ROW",
        name2:"Sporty nylon backpack",
        price:1115
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/62/P00665715_b1.jpg",
        name:"THE ROW",
        name2:"Sporty nylon backpack",
        price:1115
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/62/P00665715_b1.jpg",
        name:"THE ROW",
        name2:"Sporty nylon backpack",
        price:1115
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
    {
        imgurl:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00698420_b1.jpg",
        name:"BALMAIN",
        name2:"Logo canvas shoulder bag",
        price:685
    },
]


document.querySelector("#pageBotCont1").addEventListener("click",newarrivals)
function newarrivals(){
    console.log("newarrivals")
    displaydata(newarrival)
}
document.querySelector("#pageBotCont2").addEventListener("click",designer)
function designer(){
    displaydata(designers)
}
document.querySelector("#pageBotCont3").addEventListener("click",clothing)
function clothing(){
    displaydata(clothings)
}
document.querySelector("#pageBotCont4").addEventListener("click",shoes)
function shoes(){
    displaydata(shoess)
}
document.querySelector("#pageBotCont5").addEventListener("click",access)
function access(){
    displaydata(accesss)
}
document.querySelector("#pageBotCont6").addEventListener("click",jewellry)
function jewellry(){
    displaydata(jwel)
}
document.querySelector("#pageBotCont7").addEventListener("click",vacation)
function vacation(){
    displaydata(vacatio)
}
document.querySelector("#pageBotCont8").addEventListener("click",bags)
function bags(){
    displaydata(bagss)
}


function displaydata(newarrivalsData){
    
    document.querySelector("#container").innerHTML=""
    newarrivalsData.forEach(function(elem){

    let box=document.createElement("div");
    box.id="carddiv"

    let imgdiv=document.createElement("div")
    let pic=document.createElement("img")
    pic.className="picSize"
    pic.setAttribute("src",elem.imgurl);
    imgdiv.append(pic)

    let dataName=document.createElement("h5")
    dataName.innerText=elem.name
    dataName.id="firstname"

    let dataname2=document.createElement("p")
    dataname2.innerText=elem.name2
    dataname2.id="secondname"

    let price=document.createElement("p")
    price.innerText="€"+ elem.price
    price.id="pricetag"


    let cart=document.createElement("button")
      cart.innerText="Add to Cart"
    cart.id="cartbutton"
      
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
