<script>
export default {
  inject: ["activeTabProvided", "setActiveTab"],
  props: {
    name: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.setActiveTab(this.name);
    },
  },
};
</script>

<template>
  <div @click="handleClick">
    <slot></slot>
  </div>
</template>
