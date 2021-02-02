<template>
  <div class="header-block">
    <div class="header-content">
      <div class="hd-left-side">
        <div class="logo">Natural Farms</div>
        <div class="cart-value">
          <img src="../images/shopping-cart.svg" />
          <span class="cart-number">{{ cartValue }}</span>
        </div>
      </div>
      <div class="hd-right-side">
        <div v-if="!userLogined">
          <router-link to="/login" class="login">Login</router-link> |
          <router-link to="/register" class="login">Sign Up</router-link>
        </div>
        <div v-else>
          <router-link to="/profile">Profile</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "./event-bus";

export default {
  props: {},
  data() {
    return {
      cartValue: 0,
      userLogined: false
    };
  },
  mounted() {
    EventBus.$on("cartValue", payLoad => {
      console.log("$on", payLoad);
      this.cartValue = payLoad;
    });
  }
};
</script>
<style>
.header-block {
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  padding: 15px;
  margin: auto;
}

.hd-left-side {
  display: flex;
  align-items: center;
}

.logo {
  color: #ff5300;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2.5;
  margin-right: 30px;
}
.cart-value {
  display: flex;
  position: relative;
}
.cart-value img {
  width: 18px;
}
.cart-number {
  color: #fff;
  font-size: 10px;
  background-color: #ff5300;
  padding: 4px;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  line-height: 1.2;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.login {
  color: #ff5300;
}
</style>
