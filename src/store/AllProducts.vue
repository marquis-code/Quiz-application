<template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      <p>{{ product }}</p>
    </div>
    <button @click="handleRemoveProduct(product.name)">remove product</button>
    <p>There are only {{productCount}} products in stock</p>
     <form @submit.prevent="handleNewProductSubmit">
         <label>Add new product<label>
        <input type="text" placeholder="add new product" v-model="productName" />
        <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";  /* The mapState has access to the state of our store */
name: "AllProducts";
export default {
    data(){
      return {
          productName : ''
      }
    },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(['productCount'])
  },

  methods : {
      ...mapMutations(['addProduct', 'removeProduct']),
      ...mapActions(['removeSelectedProduct']),

      handleNewProductSubmit(){
         this.addProduct(this.productName);
         this.productName = ''
      },
      handleRemoveProduct : (product) => {
         this.removeSelectedProduct(product)
      }
  }
};
</script>
