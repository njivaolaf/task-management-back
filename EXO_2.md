# TODO:
-   localstorage
-   https://www.npmjs.com/package/jfs
-   Refactor into:
    -   services
    -   routes

---------------------------------------------
# TODO for next session:
-   create a service to verify if user exists (/GET   and parameter: id)
    -   example:    localhost:3000/userInfo?id=50
    -   if user exists, return the User Object
    -   if does not exist in the database ( "in-memory" storage ), return an error

-   architecture Express + Test Driven Development