Create a stored procedure for deleteWorkout instead of looping over all routines (loop over them in the stored procedure)

Fix token security and expiry date

Add missing fields: setTime/repetition etc.

Change navigation bar state according to user logged in status.

Drag and drop exercises to change order, add breaks between exercises.

Add and fix css.
Handle UI for loading (spinner next to button?) and errors (pop up?) for all api calls

## Backlog:

Warn user if he tried to leave an unsaved workout that will be deleted.

Require auth when user enters a page

Add option to login as a guest - Create user, delete it if the user leaves without logging out (after warning him)

Add all social media missing fields - public, likes, etc.
