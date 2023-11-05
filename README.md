# Lab 31-34  TO-DO Context Labs

## Installation
npm i

## Dependencies
uuid sass jest

## Requirements
- Create a Detailed UML.
- Properly modularize the application into separate components, note the proposed file structure below.
- Implement the Context API to make some basic application settings available to components.

Show three items by default.
Hide completed items by default.
Add the sort word ‘difficulty’ by default.

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