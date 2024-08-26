export default {
  editor: {
    label: {
      en: "My Element",
    },
    icon: "view-grid",
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
