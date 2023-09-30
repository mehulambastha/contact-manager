# contact-manager
Exercise project to learn private routing and authentication

### Backend Architecture
The division of modules is as demonstrated below-
```
contact-manager
└── mycontacts-backend
    ├── config
    │   └── dbCOnnection.js
    ├── constants.js
    ├── controllers
    │   ├── contactController.js
    │   └── userController.js
    ├── middleware
    │   ├── errorHandler.js
    │   └── validationHandler.js
    ├── models
    │   ├── contactModel.js
    │   └── userModel.js
    ├── package.json
    ├── package-lock.json
    ├── routes
    │   ├── contactRoute.js
    │   └── userRoutes.js
    └── server.js
```
The Backend is divided into three major parts: *controllers*, *routes*, *middleware* - while the data models are defined in *models*.

### Features of contact manager
- User Login and Authentication system using JWT Tokens
- Create/Update/Delete/View contacts (can only be viewed by the user that created them - incorporates the process of private routing)
- Register/Update/Delete Users

### To Do
- [x] Make all routes except Create as private and protected
- [ ] Make frontend
- [ ] Deploy
