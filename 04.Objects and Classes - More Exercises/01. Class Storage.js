class Storage{
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product){
     this.storage.push(product);
     this.totalCost+=product.quantity*product.price;
     this.capacity-=product.quantity;
    }
    getProducts(){
       return this.storage.map(product => JSON.stringify(product)).join('\n');
    }
}