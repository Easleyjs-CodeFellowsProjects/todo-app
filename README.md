# Lab 31-34  TO-DO Context Labs

## Installation
npm i

## Dependencies
uuid sass jest jwt-decode

## Requirements
Implement a Login/Auth React Context, “protect” the To Do application by restricting access to the various application features based on the users’ login status and capabilities.

**Define a function that can simulate a login event.**
Parameters: username and password as strings.
Sets a User on the auth context, and changes login status to true.

**Define a function that can simulate a logout event.**
Resets the User object and changes login status to `false.

**Define a function that can authorize a User based on a capability.**
Parameters: a capability as a string.
Returns a boolean whether the user has the capability parameter.

**Create an <Auth /> component with the following features:**
Given a **capability** prop of type string, conditionally render components based on the user stored in context.
Hide the entire interface until the user has logged in.

Implements the following RBAC rules:
- Logged In Users with ‘update’ permissions can click the records to mark them as complete.
- Logged In Users with ‘create’ permissions can create new items.
- Logged In Users with ‘delete’ permissions can delete items.
- Logged In Users with ‘read’ permissions can see the list of To Do Items.

Note: since only writers can ‘create’ and add new Todo items to state, in this lab, a person with read only access will not see any Todo items. This will change in the next lab once we populate Todo items from a database on page load.

**Implement a <Login /> Component that has the following features:**
Provide an account login screen with a form.
Accepts Username and Password.
On successful login, store the token as a cookie.

If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”.
Display a logout button instead of a form if they are “Logged In”.

## Details

1. Implement the React context API for defining settings across the entire application.
- Create React Context for managing application display settings and provide this at the application level.

Add the following defaults to the context provider’s state, they will not be changeable in this lab.
Display three items.
Hide completed items using a boolean.
Define “difficulty” as a default sort word to optionally use in the stretch goal.

2. Consume and utilize context values throughout your components.
Show a maximum of three items per screen by default in the <List /> component.
Use the Mantine <Pagination /> component to allow users to navigate a list of items.
Hide completed items in the list by default (the ability to show will be added in a later lab).

**Pagination Notes:**
Only display the first n items in the list, where n is the default number three from your settings context.
If you have more than n items in the list, the <Pagination /> component will add a button that, when clicked, will replace the list with the next n. items in the list.
the <Pagination /> component will manage the “previous” and “next” buttons upon correct implementation.

## Feature Documentation
Describe how global state is consumed by the components.
Setting values and a setter are passed around the app via React Context.

Describe the operation of the hook: useForm():
useForm() is a custom hook which provides a set of handlers for processing form changes/submissions.