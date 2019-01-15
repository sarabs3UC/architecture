***Architechture for React applications**

Folder Structure

![Directory Structure](/home/ucreate-32/Pictures/architecture.png  "Directory Structure")

**Module Directory**
All application modules should go under module directory.

A module will further have below structure

- components/
- pages/
- services/
- store/
- [module].routing.jsx
- declarations.js
- index.js

**Index.js** will have all the exporting for the module.
**declarations.js** will have constants for the module.
**[module].routing.jsx** will have all the routes for the module and will be called in main route file of the project.
**store** directory will have all the contexts or redux store, side effects (redux-saga) for the module.
**services** will contains the API calls fetch/axios. Which can be consumed by redux saga or directly by container components.
**pages** It's an optional, but I would recommend to have all the container components inside pages directory. eg. Login, Register, Reset Password etc.
**components** directly will holds all the components used in the module. If the module is very large in size and have more then 25 components then components can be separate inside pages directory. 