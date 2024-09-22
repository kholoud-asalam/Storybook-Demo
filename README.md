
# **Storybook-Demo**

Welcome to the **Storybook Project** repository! This project is a Small Demo for Storybook features. 

## **Table of Contents**
- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running Storybook](#running-storybook)
- [Creating Stories](#creating-stories)
- [Using Add-ons](#using-add-ons)
- [Testing Components](#testing-components)

## **About the Project**

Storybook is an open-source tool that allows you to develop and test UI components independently of the application. This repository showcases a component library that is developed using React and Storybook. It also includes automated testing and documentation generation for reusable components.

### **Key Features**
- **Component isolation**: Build, test, and document UI components outside the app.
- **Interactive UI**: Explore various states of components (props, styles, etc.) in a visual way.
- **Live documentation**: Automatically generates component documentation based on stories.
- **Add-ons**: Extends functionality with tools for accessibility, actions, viewport testing, and more.

## **Getting Started**

To get a local copy of this project up and running, follow the instructions below.

### **Prerequisites**
Ensure that you have the following tools installed:
- **Node.js** (version 14 or higher)
- **npm** (or **yarn**)

You can verify the installation by running:
```bash
node -v
npm -v
```

### **Installation**

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/kholoud-asalam/Storybook-Demo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Storybook-Demo
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

    Or, if you're using Yarn:
    ```bash
    yarn install
    ```

## **Update .Storybook folder**

Replace the files auto generated in .storybook with the files in 'updates done to the auto generated .storybook' for the demo to work.

## **Running Storybook**

Once the dependencies are installed, you can start Storybook locally:

```bash
npm run storybook
```

Or, with Yarn:

```bash
yarn storybook
```

This will launch Storybook at `http://localhost:6006`, where you can explore and interact with the components.

## **Creating Stories**

To create stories for your components:

1. Add a `.stories.js` file next to your component file. For example, if you have a `Button.js` component, create a `Button.stories.js` file.
2. Define stories to showcase different states of the component:
   
   Example `Button.stories.js`:
   ```js
   import React from 'react';
   import { Button } from './Button';

   export default {
     title: 'Example/Button',
     component: Button,
   };

   const Template = (args) => <Button {...args} />;

   export const Primary = Template.bind({});
   Primary.args = {
     label: 'Primary Button',
     primary: true,
   };

   export const Secondary = Template.bind({});
   Secondary.args = {
     label: 'Secondary Button',
     primary: false,
   };
   ```

3. Visit Storybook to see the stories live in action!

## **Using Add-ons**

Storybook supports a range of add-ons to enhance your development workflow:

1. **Actions Add-on**: Logs events like button clicks in the UI.
2. **Controls Add-on**: Allows for dynamic adjustment of props in the Storybook UI.
3. **Accessibility Add-on**: Automatically checks your components for accessibility issues.
4. **Viewport Add-on**: Tests components on different screen sizes.

To use these add-ons, ensure they are installed in your project:
```bash
npm install @storybook/addon-actions @storybook/addon-controls @storybook/addon-a11y @storybook/addon-viewport
```

Then configure the add-ons in `.storybook/main.js`:

```js
module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
};
```

## **Testing Components**

You can integrate Storybook with tools like Jest or Chromatic for testing your components.

- **Jest**: Unit testing for components. Import Storybook stories into your test files to reuse story scenarios.

Example:

```js
import { Primary } from './Button.stories';
import { render } from '@testing-library/react';

test('renders Primary Button', () => {
  const { getByText } = render(<Primary {...Primary.args} />);
  expect(getByText('Primary Button')).toBeTruthy();
});
```

- **Chromatic**: Visual regression testing to detect changes in your UI across versions.

```bash
npx chromatic --project-token <your-token>
```

