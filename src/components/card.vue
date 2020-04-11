<template>
    <div>
        <div class="p-3">
            <img :src="displayItem.url" width="200px" />
        </div>
        <div class="card-body">
            <div>{{displayItem.name}}</div>
            <button class="btn btn-success" @click="AddCart" v-if="!AddCartStatus">Add to Cart</button>
            <div class="add-remove-cart" v-else>
                
                <button class="btn btn-primary cta-action" @click="removeFromCart" :disabled="displayItem.cart <= 0">
                    -
                </button>

                <span v-if="displayItem.cart <= 0">Add to Cart</span>
                <span  v-if="displayItem.cart > 0"> {{displayItem.cart}} items in Cart</span>

                <button class="btn btn-primary cta-action" @click="addToCart"  :disabled="displayItem.cart >= (displayItem.maxCount || 10)">
                    +
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "displayItem"
    ],
    data() {
        return {
            AddCartStatus: false,
        }
    },
    methods: {
        AddCart(){
            console.log("add cart");
            this.AddCartStatus = true;
            this.addToCart();
        },
        addToCart(){
            console.log('add');
            this.displayItem.cart++;
            this.$emit('addRemoveToCart', this.displayItem);
        },
        removeFromCart(){
            console.log('remove from cart');
            this.displayItem.cart--;
            this.$emit('addRemoveToCart', this.displayItem);
            if(this.displayItem.cart <= 0) {
                this.AddCartStatus = false;
            }
        }
    }
}
</script>
<style>
.add-remove-cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>