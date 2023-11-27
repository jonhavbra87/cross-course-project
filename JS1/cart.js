export const cart = {  
    items: [],
    addToCart: function (product) {
        console.log(product);
        this.items.push(product);
    },
    clearCart: function () {
        //
    },
    printItems: function () {
        console.log(this.items);  
    },
};

