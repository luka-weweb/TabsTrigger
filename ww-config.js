export default {
  editor: {
    label: {
      en: "My Element",
    },
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
      navigator: {
        group: "Dropdown",
      },
    },
  },
};
