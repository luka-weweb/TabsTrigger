<script>
export default {
  inheritAttrs: false,
  inject: [
    "activeTabProvided",
    "setActiveTab",
    "registerTabTrigger",
    "activationMode",
  ],
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
      if (this.activationMode === "auto") {
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
      <wwLayout v-bind="$attrs" path="slot" />
    </button>
  </wwLayoutItemContext>
</template>
