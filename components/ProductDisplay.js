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
      <img  v-bind:src="image">
      <!--  :class="{'out-of-stock-img': !inStock}"-->
      <!--shorthand for v-bind
          <img:scr="image">-->
    </div>
    <div class = "product-info">
    <a :href="URL">Vue Mastery</a>
    </div>
     
     <div class="product-info">
      <h2>{{ Sale }}</h2>
      <p v-if="quantity > 10">In Stock</p> 
      <p v-else-if="quantity <= 10 && quantity > 0">Almost sold out!</p>
      <p v-else>Out of Stock</p>
 <!--CAN ADD CODE BELOW INSIDE <BUTTON> TO DISABLE ADD TO CART BUTTON
             :disabled="!inStock"
             :class="{ disabledButton: !inStock}" -->
      <button
      class="button"
      v-on:click="addToCart">
      Add to Cart
     </button> 
    
     <button id = "removeButton"class="button"v-on:click="removeFromCart">Remove Item</button>

      <p>Shipping: {{ shipping }}</p>

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
            variants: [
                {id: 2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:50},
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
           this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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