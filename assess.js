class Mkulima{
constructor(farms,products,grocery_vendor,orders) {
    this.farms = [];
    this.products = [];
    this.orders = [];
    this.grocery_vendor=[]
    
  }
  addFarm(farmId,name,farmer,phoneNumber,Address){
    var people={
      farmId:farmId,
      name:name,
      farmer:farmer,
      phoneNumber:phoneNumber,
      Address:Address
    }
    this.farms.push(people);
    return this.farms
  }
  removefarm(farmId){
    let newDetails=this.farms.find(newDetails=>newDetails.farmId==farmId)
    return delete this.farms[newDetails]
  }
  UpdateFarm(farmId,farmName,farmer,phoneNumber,Address){
  let largerFarm=this.farms.find(largerFarm=>largerFarm.farmId==farmId)
  largerFarm={
    farmId:farmId,
    farmName:farmName,
    farmer:farmer,
    phoneNumber:phoneNumber,
    Address:Address
  }
  return largerFarm
}
getfarm(farmId){
  let onefarm=this.farms.find(onefarm=>onefarm.farmId==farmId)
  return onefarm

}
addProduct(productId,name,price){
  var p={
    productId:productId,
    name:name,
    price:price
  }
  this.products.push(p)
  return this.products

}
removeproductId(){
  let remove=this.products.find(remove=>remove.productId)
  return delete this.products[remove]
}
updateProduct(productId,name,price){
  let update=this.products.find(update=>update.productId==productId)
    update ={
      productId:productId,
    name:name,
    price:price
  
  }
  return update
}
getproduct(productId){
  let newproduct1=this.products.find(newproduct=>newproduct.productId==productId)
  return newproduct1
}
printProduct(){
  for(let items of this.products){
    console.log(items.name+""+items.price)
  }
}
orderCost(productId,quantity){
  var cost=productId*quantity
  return cost
}
}

let farmer=new Mkulima([],[],[])
console.log(farmer.addFarm(32333,"KITUSUI","Susan",0887766,"P.O BOX 3434"))
console.log(farmer.addFarm(67777,"Dalamere","stella",77679,"P.o box 87666"))
console.log(farmer.removefarm(755657))
console.log(farmer.UpdateFarm(899998,"VOI","Faith",67777,"P.O BOX 67666"))
console.log(farmer.getfarm(32333))
console.log(farmer.addProduct(8776,"EGGS",577))
console.log(farmer.addProduct(466,"ONIONS",9980))
console.log(farmer.removeproductId(466))
console.log(farmer.updateProduct(768,"CABBAGES",655))
console.log(farmer.getproduct(768))
farmer.printProduct();
console.log(farmer.orderCost(8776,5))