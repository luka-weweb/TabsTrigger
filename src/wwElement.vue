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
    handleFocus() {
      if (this.content.acivation === "automatic") {
        this.setActiveTab(this.content.name);
      }
    },
  },
};
</script>

<template>
  <wwLayoutItemContext is-repeat :data="{ aaa: 'blabla' }">
    <button
      role="tab"
      :aria-selected="isSelected ? 'true' : 'false'"
      @click="handleClick"
      @focus="handleFocus"
    >
      <wwLayout path="slot" />
    </button>
  </wwLayoutItemContext>
</template>
