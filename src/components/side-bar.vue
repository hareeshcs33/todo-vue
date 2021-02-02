<template>
  <div>
    <ul>
      <li
        v-for="(item, inx) in filterBasedContents"
        :key="inx"
        @click="selectCategory(item)"
        v-bind:class="item.name === selectedFilter ? 'active' : ''"
      >
        {{ item.name }}
        <img src="../images/chevron-right.svg" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterBasedContents: [
        {
          name: "All Categories"
        },
        {
          name: "Vegetables"
        },
        {
          name: "Fruits"
        },
        {
          name: "Chocolates"
        }
      ],
      isActiveSelected: false,
      selectedFilter: "All Categories"
    };
  },
  methods: {
    selectCategory(contents) {
      this.selectedFilter = contents.name;
      this.$emit("selectCat", contents.name);
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
ul li {
  /* color: #0a6315; */
  /* background-color: #fff700b8; */
  border: 1px solid #ff5300;
  border-radius: 6px;
  /* border: 1px solid transparent; */
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}
ul li:hover {
  color: #fff;
  background-color: #ff5300;
}
ul li.active {
  color: #fff;
  background-color: #ff5300;
}
ul li.active:hover {
  background-color: #d44d0c;
}
ul li img {
  width: 13px;
  float: right;
  display: none;
}
ul li:hover img,
ul li.active img {
  display: block;
}
</style>
