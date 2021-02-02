<template>
  <div>
    <h3>{{ filterBy }}</h3>
    <div class="card" v-for="(item, index) in itemsFiltered" :key="index">
      <card :displayItem="item" @addRemoveToCart="addRemoveToCart"></card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/card.vue";

export default {
  props: ["filterBy", "items"],
  data() {
    return {};
  },
  computed: {
    itemsFiltered() {
      if (this.filterBy === "All Categories") {
        return this.items;
      } else if (this.filterBy) {
        return this.items.filter(item => item.category === this.filterBy);
      } else {
        return this.items;
      }
    }
  },
  methods: {
    addRemoveToCart() {
      this.$emit("onAddRemoveToCart");
    }
  },
  components: {
    Card
  }
};
</script>
<style>
.card {
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 2px 6px 0 rgba(53, 53, 54, 0.25);
}
.cta-action {
  color: #ff5300;
  width: 150px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ff5300;
}
.cta-action:hover {
  color: #fff;
  background-color: #ff5300;
}
</style>
