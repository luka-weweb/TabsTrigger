<script>
export default {
  inject: ["activeTabProvided", "setActiveTab"],
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
  methods: {
    handleClick() {
      this.setActiveTab(this.content.name);
    },
  },
};
</script>

<template>
  <div @click="handleClick">
    <wwLayout path="slot" />
  </div>
</template>
