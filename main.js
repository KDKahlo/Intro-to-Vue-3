const app = Vue.createApp ({
    data (){
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            URL: 'http://localhost:3000/api/socks',
            inventory: 9,
            onSale: true,
            details: ['50% cotton','30% wool', '20% polyester'],  
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ],
            sizes: [
                {id: 2236, size: 'S'},
                {id: 2237, size: 'M'},
                {id: 2238, size: 'L'},
                {id: 2239, size: 'XL'},
            ]      }
    }
})
