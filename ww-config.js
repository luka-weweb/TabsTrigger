export default {
  editor: {
    label: {
      en: "Trigger",
    },
    icon: "view-grid",
  },
  inherit: {
    type: "ww-layout",
  },
  options: {
    autoByContent: true,
    displayAllowedValues: ["flex", "grid"],
  },
  properties: {
    name: {
      label: {
        en: "Name",
      },
      type: "Text",
      bindable: true,
      defaultValue: "",
    },
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
