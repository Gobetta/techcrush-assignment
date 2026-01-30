class vehicle {
 constructor (make, Brand, year, color,  ){
  this.make = make;
  this.Brand = Brand;
  this.year = year;
  this.color = color;
  this.driver=["John Deo, Peter Parker"];
 }
 enroll(driver){
   this.driver.push(driver);
  }
  getDetails(){
   return `${this.make}, Brand: ${this.Brand}, year: ${this.year}, color: ${this.color},location: ${this.location}, driver: ${this.driver.join (", ")}`;
  }
}

class car extends vehicle{
 constructor(make, Brand, year, color, maxDrivers, location){
  super(make, Brand, year, color);
  this.maxDrivers = maxDrivers;
  this.location = location
 }
  // getLocation(){
  // console.log(`Car details is ${this.make} ${this.Brand} ${this.year} ${this.color} `);
  // }

 getEnroll(driver){
   if(this.driver.length >= this.maxDrivers){
    return "can not apply: drivers limit reached."
   }
  this.driver.push(driver);
  return "applicaton successfull"
  }
}

const myCar = new car( "Toyota", "Venza", 2019, "blue" , 2, "F.R. N");

