// const shopItems ={
//  name : "Industrial machine",
//  brand : "Two-lion",
//  price : 38000,
//  color : "red",
//  type: "sewing-machine",
//  seller: {
//   shopName :"machine store",
//   lacation: "Abuja",
//   made: "china",
//   complexion: "dark-skinned",
//  }
// }


//Remove atleast one property you dont need.

// const { seller, ...restOfShopItems } = shopItems;
// const { complexion, ...newSeller } = seller;
// const shopItemsWithoutComplexion = { ...restOfShopItems, seller: 
//  newSeller };

//distructuring

// const shopItems  = {
//  name : "industrial machine",
//  brand : "Two-lion",
//  price : 38000,
//  color : "red",
//   type: "sewing-machine",
//  seller: {
//   shopName :"machine store",
//   lacation: "Abuja",
//   made: "china",
//   complexion: "dark-skinned",
// } 
// };

// const { name, brand, price, color, type, seller} = shopItems;

//Adding a computed property.

class shopItems {
 constructor (name, brand, price, color, type, seller) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.type = type;
  this.seller = seller;
 };


get priceAfterDiscount(){
 return this.price * 0.15;
}

get isExpensive(){
 return this.price > 3000;
}
};

const goods = new product("industrial machine",  "Two-lion", 3000, "red", "sewing-machine",{
shopName: "machine store",
location: "abuja",
made: "china",
complexion: "dark-skinned"
 });
