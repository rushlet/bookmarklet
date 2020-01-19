#Bookmarklet
A simple web app that maintains a list of links.
You can see it in action at [https://rushlet.github.io/bookmarklet/index.html](https://rushlet.github.io/bookmarklet/index.html)


##Overview
Built using JavaScript, CSS and HTML, this simple app allows the user to add, edit and delete a list of links.

A form is displayed on the top of the page that lets a user submit a link. This link is then validated using a regex to make sure it is an expected format. It is also checked against the existing links to make sure duplicates aren't added.
If it does not pass validation, a message is displayed to the user and the input box is highlighted.
When a valid link is submitted, the user is redirected to a results page telling them it was successfully added with a link back to the main page.

The user can edit any link in the list - updating the url, which is checked to make sure the new one doesn't already exist - and name, to make links appear more readable.
The user can also delete any link, a change which is reflected upon page reload.

The list of links is displayed with pagination, so 20 links are shown per page. A drop down was added to allow the user to change this to 10, 20 or all results. 


##Limitations
- Whether a link exists or not is not checked due to cross domain errors. I'd be interested to know how to achieve this only using front end technologies - I wanted to also get the page title and description to display in the list but couldn't achieve this because of the same reasons.
- Links will only persist on one device
- Currently, the name edits do not persist on reload - this is something that I would like to complete.
- This was built without a transpiler, using ES6 so would need to be transpiled (and polyfilled) to work across all browsers
-

## Icon Attribution:
- Exit by Juan Pablo Fernandez from the Noun Project
- Pencil by Adrien Coquet from the Noun Project
