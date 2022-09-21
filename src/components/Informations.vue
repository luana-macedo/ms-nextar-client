<template>
  <FormulateForm :schema="schema"/>
</template>

<script>
const schema = [
  {
    component: "h3",
    class: "text-2xl mb-4",
    children: "Order pizza"
  },
  {
    type: "select",
    label: "Pizza size",
    name: "size",
    placeholder: "Select a size",
    options: {
      small: "Small",
      large: "Large",
      extra_large: "Extra Large"
    },
    validation: "required"
  },
  {
    component: "div",
    class: "flex",
    children: [
      {
        type: "select",
        name: "country_code",
        label: "Code",
        value: "1",
        "outer-class": ["w-1/4 mr-4"],
        options: {
          "1": "+1",
          "49": "+49",
          "55": "+55"
        }
      },
      {
        type: "text",
        label: "Phone number",
        name: "phone",
        inputmode: "numeric",
        pattern: "[0-9]*",
        validation: "matches:/^[0-9-]+$/",
        "outer-class": ["flex-grow"],
        "validation-messages": {
          matches: "Phone number should only include numbers and dashes."
        }
      }
    ]
  },
  {
    type: "submit",
    label: "Order pizza"
  }
];

export default {
  data() {
    return {
      schema
    };
  }
};
</script>