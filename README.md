# techstack-onboarding
Onboarding for Postogon's techstack.


If tests are added, here are the conventions for future (June 12, 2022)
Testing Conventions:
- PascalCase for component file name and folder name
- Generally, I want to indicate if my components are container or component.
  Containers will usually be class components that contain state and logic,
  whereas components will house the actual content, styling and receive props from the container. 
  Example:
  - `MyComponent.container.js`
  - `MyComponent.component.js`
  - `MyComponent.jsx`          // if no container
  - `MyComponent.styles.js`
- lowerCamelCase for Higher Order Component file and folder name
- lowercase for all other root directory folders. For example: `src`, `components`, `assets`
