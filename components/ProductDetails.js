app.component('product-display', {
    props: {
       
        details: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `   
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      `,
data (){
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
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
        updateVariant(index){
                 this.selectedVariant = index;   
                 
    },
   
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
    image(){
        return this.variants[this.selectedVariant].image;
    },
 },
})