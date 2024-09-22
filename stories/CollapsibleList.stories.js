// src/stories/CollapsibleList.stories.js
import { CollapsibleList } from "./CollapsibleList";

export default {
  title: "Example/CollapsibleList",
  component: CollapsibleList,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    title: "Collapsible List",
    items: ["Item 1", "Item 2", "Item 3"],
  },
};

export const WithManyItems = {
  args: {
    title: "Collapsible List with Many Items",
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
      "Item 9",
      "Item 10",
    ],
  },
};
