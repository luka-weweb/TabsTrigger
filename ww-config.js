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
    activation: {
      label: "Appearance",
      type: "TextSelect",
      options: {
        options: [
          { label: "Automatic", value: "auto", default: true },
          { label: "Manual", value: "manual" },
        ],
      },
      bindable: true,
      defaultValue: "",
    },
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
