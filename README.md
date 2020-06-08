Hacker News

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

## Project and folder structure

```
app/
  public/
  src/
    components/ <!-- components for features/ sub features -->
      loader/
        loader.jsx
        index.js
    dashboard/  <!-- features -->
      chart/    <!-- sub features -->
      news/
        details.jsx
        header.jsx
        news.jsx
      pagination/
      container.js
      dashboard.jsx
      index.js
    domain/  <!-- service calls and reducers -->
    store/   <!-- redux middleware and local storage -->
    utils/
```
### Details

1) Used named export
  It helps better tree shaking and it helps in compile time errors and easy for refactoring

2) use kebab case for all files and folders.
   casing files based on the casing of classes and functions name results in an insconsist file naming structure.
   we can gain consistency by choosing a single casing and using it across all files and folders.
   Reason for kebab case : Windows is not case sensitive but linux is.. we can avoid build errors due to casing...

3) Avoid redundant imports..
   ie exported only the necessary functions..avoid unnecessary lines of code and also helps in better tree shaking

4) colocated files/ grouping by functions / ducks approach
  Grouping componnets, unit tests, css, container and its sub features is much more maintanable them in different seperate folders/places
  so that we can easily understand what a module and feature consists of..
  (high cohesion & low coupling)
   
5) one render function per component (Singular responsibility)
   Functions should do one one thing.

6) Container and presentaional components ( Dashboard - View, container.js - redux connect)
   view layer should not concern about redux connect - Just presentatonal layer

7) Selectors
   Used selectors for accessing redux state. so that we can avoid changes in the components if any change in the api structure. we can just change the path in the selectors based on api structure..

8) Do more in action  creators and less in reducers..
  all the mapping and dispatch/adapters in actions.. maintainer simple reducer so that, it is easy to read. this will also helps in svc versioning.

9) Reactive redux actions..
   Used same reducer even for updating votes, hide (many to many mapping)

10) Redux state (seperation of concerns)

```
meta: {
    loading: false,
    error: null
},
model: [
    .. news collections
]
```
having meta/model for redux state helps in seperation of errors, loading, loaded property from data model.

11) Domain folder ( API )

Decouples views from application.. and it is the conceptual representation of what the application is about.(ie entity relationship model)

