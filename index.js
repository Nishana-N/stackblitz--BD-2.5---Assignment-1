const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

const express = require('express');
const { resolve } = require('path');
let cors = require('cors');



const app = express();
const port = 3000;
app.use(cors());


let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

// endpoint 1
function filterByRating(rate1,rate2){
return rate2.rating - rate1.rating;
}
app.get("/products/sort/popularity", (req,res) => {
  let sortedProducts = products.slice()
  sortedProducts.sort(filterByRating)
  res.json({ products: sortedProducts })
})


//endpoint2
function sortByHighToLow(price1,price2 ){
  return  price2.price - price1.price
}
app.get("/products/sort/price-high-to-low", (req,res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortByHighToLow)
  res.json({products: sortedProducts})
});

//endpoint3
function sortByLowToHigh(price1,price2){
  return price1.price - price2.price
}
app.get("/products/sort/price-low-to-high",(req,res) => {
  let sortedProducts = products.slice()
  sortedProducts.sort(sortByLowToHigh)
  res.json({products: sortedProducts})
});

//endpoint4  not
function filterByRam(product,ram){
  return product.ram === ram
}
app.get("/products/filter/:ram",(req,res) => {
  let ram = req.params.ram;
  let filteredRam = products.filter(product => filterByRam(product,ram))
  res.json( {products: filteredRam })
});

//endpoint 5 not
function filterByRom(product,rom){
  return product.rom.toLowerCase() === rom.toLowerCase()
}
app.get("/products/filter/:rom", (req,res) => {
  let rom = req.params.rom
  let filteredRom  = products.filter(product => filterByRom(product,rom))
  res.json({products: filteredRom  })
})


//endpoint6 not
function filterByBrand(product,brand){
  return product.brand.toLowerCase() === brand.toLowerCase()
}
app.get("/products/filter/:brand",(req,res) => {
  let brand = req.params.brand;
  let filteredProduct = products.filter(product => filterByBrand(product,brand) )
  res.json(filterByBrand)
});

// //endpoint 7
function filterByOs(product,os){
  return product.os.toLowerCase() === os.toLowerCase()
}
app.get("/products/filter/os",(req,res) => {
  let os = req.query.os;
  let filteredOs = products.filter(product => filterByOs(product,os) )
  res.json(filteredOs)
});

//endpoint 8
function filterByPrice(product,minPrice){
  return product.price  < minPrice
}
app.get("/products/filter/price",(req,res) => {
  let minPrice = parseInt(req.params.minPrice);
  let filteredPrice = products.filter(product => filterByPrice(product,minPrice))
  res.json({products : filteredPrice})
});

//endpoint 9
app.get("/products",(req,res) => {
  res.json(products )
})
















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
