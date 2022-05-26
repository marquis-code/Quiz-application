export default {
    state : {
      products : [
          {name : 'Spagetti and turkey', stock : 50, status : 'Expensive'}
      ]
    },
    getters : {
        productCount : (state) => {
            return state.products.length
        }
    },
    mutations : {
        addProduct  : (state, product) => {
            state.products.push(product)
        },
        removeProduct : (state, product) => {
            state.products.splice(product, 1)
        }
    },
    actions : {
        removeSelectedProduct : (context, product) => {
            context.commit('removeProduct', product)
        }
    }
}