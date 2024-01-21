const app = Vue.createApp ({
    data (){
        return {
            cart: [],
            premium: true,
            }
    },
    methods: {
        updateCart(id){
            
                 this.cart.push(id)  
        },
        removeById () {
            const index = this.cart.indexOf(id);
            if (index > -1)
            this.cart.splice(this.cart.indexOf(id), 1)
        }
       
    },
    computed: {
        
 },
})
