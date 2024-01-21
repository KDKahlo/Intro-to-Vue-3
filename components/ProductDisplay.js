app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
       
    },
    template:
    /*html*/
    `<div class ="product-display">
    <div class="product-container">
      <h1>{{ title }}</h1>
    <div class="product-image">
      <img :class="{'out-of-stock-img': !inStock}" v-bind:src="image">
      <!--shorthand for v-bind
          <img:scr="image">-->
    </div>
    <div class = "product-info">
    <a :href="URL">Vue Mastery</a>
    </div>
    <div class="product-info">
      <h2>{{ Sale }}</h2>
      <p v-if="inventory > 10">In Stock</p> 
      <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
      <p v-else>Out of Stock</p>
      <p>Shipping: {{ shipping }}</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <div v-for="(variant, index) in variants"
           :key="variant.id"
           v-on:mouseover="updateVariant(index)"
           class="color-circle"
           :style="{backgroundColor: variant.color }"></div>
           </div>
      </div>
    </div>`,
data (){
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            URL: 'http://localhost:3000/api/socks',
            onSale: true,
            onSaleSign: 'On Sale',
            details: ['50% cotton','30% wool', '20% polyester'],  
            variants: [
                {id: 2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: [
                {id: 2236, size: 'S'},
                {id: 2237, size: 'M'},
                {id: 2238, size: 'L'},
                {id: 2239, size: 'XL'},
            ]      }
    },
    methods: {
        addToCart(){
            this.cart++
        },
        removeFromCart(){
            this.cart--
        },
        updateVariant(index){
                 this.selectedVariant = index;   
                 
    },
   
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
    Sale() {
        if (this.onSale === true) {
            return this.brand + ' ' + this.product + ' ' + this.onSaleSign;
        } 
    },
    image(){
        return this.variants[this.selectedVariant].image;
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
        if(this.premium === true){
            return 'Free';
    } else{
        return '2.99';
    };
}
 },
})