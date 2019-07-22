<template>
  <div>
    <h2>carts</h2>
    <div v-if="cartProducts.length">
      <ul>
        <li v-for="goods in cartProducts" :key="goods.id">
          <span>{{goods.title}}</span>&nbsp;&nbsp;&nbsp;
          <span>{{goods.price}}</span>&nbsp;&nbsp;&nbsp;x
          <span>{{goods.quantity}}</span>
          <button
            :disabled="goods.quantity >= goods.inventory ? true : false"
            @click="$store.commit('addToCart',{id:goods.id})"
          >+</button>
          <button @click="$store.commit('delToCart',{id:goods.id})">-</button>
        </li>
      </ul>
      <div>总价: ￥{{total}}</div>
    </div>
    <div v-else>买点吧</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "shoppingcart",
  computed: {
    cartProducts() {
      return this.$store.getters.cartProductInfo;
    },
    total() {
      return this.$store.getters.total.toFixed(2);
    }
  }
};
</script>

<style>
</style>
