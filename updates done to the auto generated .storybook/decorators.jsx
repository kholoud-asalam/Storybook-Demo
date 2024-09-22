import React from "react";
export const withBorder = (Story) => {
  return (
    <div style={{ border: "1px solid #fab", padding: 10 }}>
      <Story />
    </div>
  );
};
