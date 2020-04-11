<template>
    <div>
        <h3>{{filterBy}}</h3>
        <div 
            class="card"
            v-for="(item, index) in itemsFiltered"
            :key="index">
            <card :displayItem="item" @addRemoveToCart="addRemoveToCart"></card>
        </div>
    </div>
</template>
<script>
import Card from '@/components/card.vue';

export default {
    props: [
        "filterBy",
        "items"
    ],
    data() {
        return {
            
        }
    },
    computed: {
        itemsFiltered() {
            if(this.filterBy === "All Categories"){
                return this.items;
            }
            else if(this.filterBy){
                return this.items.filter(item => item.category === this.filterBy);
            } else {
                return this.items;
            }
            
        }
    },
    methods: {
        addRemoveToCart() {
            this.$emit('onAddRemoveToCart');
        }
    },
    components: {
        Card,
    },
}
</script>
<style>
.card {
    text-align: center;
    margin-bottom: 30px;
    box-shadow: 0 2px 6px 0 rgba(53, 53, 54, 0.25);
}
.cta-action {
    width: 180px;
    height: 40px;
}
</style>