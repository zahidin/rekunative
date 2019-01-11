# RekuNative

Welcome to **RekuNative**! RekuNative is a boilerplate and generator for React Native. It let you focus on your app, instead starting everything from scratch everytime you need to build an app. :)

### Why RekuNative?

- **Let You focus on your app** with best practice inside
- **We use it too for production** in Rekeningku.com, so you can relax your own while we maintained it for you :)
- **We keep it Simple Stupid** but powerful. It's best for any level of developer

### Whats Inside?

- UI with **native-base**
- Routing and Navigation with **react-navigation**
- API call with **axios**
- State Management with **redux** and **redux-promise-middleware**
- GraphQL Client with **apollo-client** (COMING SOON)
- Testing with **detox** or **jest** generator (COMING SOON)

### Configuration

You can set any configuration inside .env file, here are the list that you can set:
- API_URL: <port String>
- USE_REDUX: <boolean>
- USE_GRAPHQL: <boolean>
- MODE: <debug/production String> debug will activate Redux Logger

### Code Structure

We use very simple structure to get started with

```
.
+-- rekurn-generator
+-- src
|   +-- _navigators
|   +-- _redux
    |   +-- actions
    |   +-- reducers
    |   +-- middlewares.js
    |   +-- store.js
|   +-- components
|   +-- screens
+-- App.js
+-- index.js
```

### Generators

1. Generate a new Screen

Usage:
```rekunative make:screen <name> [options]```

Arguments:
- name: Name of the Screen

Options:
- -t <value>: Template name that you want to use (signin1, signin2, signup1, signup2, forgetpassword, profile1, profile2, profile3, profilesetting, notification, contact, article1, article2, article3, articleview1, articleview2, chat, chatlist, comment, dashboard1, dashboard2, onboarding1, onboarding2, creditcard, gridmenu1, gridmenu2, listmenu, sidemenu, setting, product1, product2, transaction1, transaction2, illustration) 
- -redux-plain: Generate Redux that consist of action, and reducer that using plain array data, and plain reducer naming convention, **this will also make your generated screen is using Redux connect**
- -redux-promise: Generate Redux that consist of action, and reducer that using redux-promise-middleware, **this will also make your generated screen is using Redux connect**
- -redux-thunk: Generate Redux that consist of action, and reducer that using redux thunk, **this will also make your generated screen is using Redux connect**
- --functional: Generate functional Component instead Class

2. Generate a new Component

Usage:
```rekunative make:component <name> [options]```

Options:
- -t <value>: Template name that you want to use (signin1, signin2, signup1, signup2, forgetpassword, profile1, profile2, profile3, profilesetting, notification, contact, article1, article2, article3, articleview1, articleview2, chat, chatlist, comment, dashboard1, dashboard2, onboarding1, onboarding2, creditcard, gridmenu1, gridmenu2, listmenu, sidemenu, setting, product1, product2, transaction1, transaction2, illustration)
- -redux-plain: Generate Redux that consist of action, and reducer that using plain array data, and plain reducer naming convention, **this will also make your generated screen is using Redux connect**
- -redux-promise: Generate Redux that consist of action, and reducer that using redux-promise-middleware, **this will also make your generated screen is using Redux connect**
- -redux-thunk: Generate Redux that consist of action, and reducer that using redux thunk, **this will also make your generated screen is using Redux connect**
- --functional: Generate functional Component instead Class

3. Generate a new Redux (action, and reducer)

Usage:
```rekunative make:redux <name> [options]```

Options:
- --action-only: Generate only redux action
- --reducer-only: Generate only redux reducer
- -redux-plain: Generate Redux that consist of action, and reducer that using plain array data, and plain reducer naming convention, **this will also make your generated screen is using Redux connect**
- -redux-promise: Generate Redux that consist of action, and reducer that using redux-promise-middleware, **this will also make your generated screen is using Redux connect**
- -redux-thunk: Generate Redux that consist of action, and reducer that using redux thunk, **this will also make your generated screen is using Redux connect**

### Contributor List

- @deceive: Defri Tri as the main contributor
- @radiegtya: Ega Radiegtya as the main contributor