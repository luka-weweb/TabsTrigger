<script>
export default {
  inject: ["activeTabProvided", "setActiveTab", "registerTabTrigger"],
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
  computed: {
    isSelected() {
      return this.activeTabProvided === this.content.name;
    },
  },
  methods: {
    handleFocus() {
      if (this.content.activation === "auto") {
        this.setActiveTab(this.content.name);
      }
    },
  },
  mounted() {
    this.registerTabTrigger(this.content.name, this.$el);
  },
};
</script>

<template>
  <wwLayoutItemContext is-repeat :index="1" :data="{ active: isSelected }">
    <button
      role="tab"
      :aria-selected="isSelected"
      @click="setActiveTab(content.name)"
      @focus="handleFocus"
    >
      <wwLayout path="slot" />
    </button>
  </wwLayoutItemContext>
</template>
