import React from "react";
import { Card } from "./Card";

// const withBorder = (Story) => {
//   return (
//     <div style={{ border: "1px solid #fab", padding: 10 }}>
//       <Story />
//     </div>
//   );
// };

export default {
  title: "Example/Card",
  component: Card,
  // decorators: [withBorder],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
};

export const Primary = {
  args: {
    title: "Primary Card",
    content: "This is a primary card.",
    backgroundColor: "#1ea7fd",
  },
};

export const Secondary = {
  args: {
    title: "Secondary Card",
    content: "This is a secondary card.",
    backgroundColor: "#e0e0e0",
  },
};
