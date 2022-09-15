# Todo App

## Deployed-Site Link:

https://singular-paprenjak-896541.netlify.app/

## Test Login User and pass:

User: test@rapptrlabs.com
Password: Test123

## Brief Description

The login form took me about 7 hours to complete. I had to use State to handle the user input, error handling, validation, and authentication (to protect the routes if a user is not logged in). When the validation state was true (green) I then would make the api call using axios in order for the user to login. At the that point I would switch the authentication state to true and that would navigate to the todo list page.

The todo list component took me about 10 hours to complete. I used local storage to hold to todoList array in order to still maintain the list once the page was loaded or the user logged out. I also stored authentication in local storage so if a user left the page they would be able to come bck and not have to login again.

The overall design and styling took me ab out 5 hours to complete. I had to create a unique yet simplistic design which was appealing to the eye and functional. It was nice to use my CSS skills to style everything because I usually use UI frameworks such as Material UI and bootstrap.
