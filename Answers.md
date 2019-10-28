1. What problem does the context API help solve?
  Helps prevent prop drilling, but should be used in a case by case basis.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Actions we create for our switch in the reducer to dispatch an action based on the payload/data we expect in return. The store is meant to hold our data in an immutable station (single source of truth). We create new objects instead of changing the original data. Helps us to maintain and look back at the data.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Component state is more local and harder to keep track of on large applications. Application state in a redux system is the most ideal in my mind because the store holds our state and we can manage it more directly in an immutable fahsion. 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  A function within a function. Allows us to execute whenever we want between the action. It is middleware and gives us a lot of power/mobility on user interactions/data/routing etc...
1. What is your favorite state management system you've learned and this sprint? Please explain why!
  Redux is my favorite. I love the redux-hooks. I like the concept of being explicit about our data management and keeping the components clean.