<template>
    <div>
        <div class="header-page">
            <header-block></header-block>
        </div>
        <div class="page-container">
            <div class="layout-page">
                <div class="left-side">
                    <side-bar
                    @selectCat="onSelectCategory"
                    ></side-bar>
                </div>
                <div class="right-side">
                    <shopping-display
                    :filterBy="filterBy"
                    :items="items"
                    @onAddRemoveToCart="onAddRemoveToCart"
                    ></shopping-display>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '@/components/side-bar.vue';
import ShoppingDisplay from '@/components/shopping-display.vue';
import HeaderBlock from '@/components/header-block.vue';
import {items} from '@/components/fruits.js';
import EventBus from './event-bus';

export default {
    data() {
        return {
            filterBy: 'All Categories',
            cartValue: 0,
            items: items
        }
    },
    methods: {
        onSelectCategory(type){
            // this.isActiveSelected = true;
            console.log('display-todo-layout:selected category', type);
            this.filterBy = type;
        },
        onAddRemoveToCart() {
            console.log('display-todo-layout: onAddRemoveToCart');
            this.cartValue = 0;
            this.items.forEach(item => {
                this.cartValue += item.cart;
            });
            console.log('total', this.cartValue);
            EventBus.$emit('cartValue', this.cartValue);
        }
    },
    computed: {
        // cartItemsCount() {
        //     this.cartValue = 0;
        //     this.items.forEach(item => {
        //         this.cartValue += item.cart;
        //     });
        //     return total;
        // }
    },
    components: {
        SideBar,
        ShoppingDisplay,
        HeaderBlock,
    },
}
</script>
<style>
.page-container {
    width: 100%;
    max-width: 900px;
    margin: auto;
    padding: 0 15px;
}
.layout-page {
    display: flex;
}
.left-side {
    min-width: 180px;
    width: 20%;
}
.right-side {
    width: 80%;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 30px;
    margin: 0 30px;
}

</style>