# Bookshelf 

Bookshelf is where you can have your very own book tracker. Keep track of what books you have read and add some notes to your book as a reminder of why liked the book or why you didn't. 

Your list of books and notes are only accesable to you.

## Technologies Used:
- HTML
- CSS
- bootstrap
- JavaScript
- MongoDB
- Mongoose
- Express
- cors
- bycrpt
- jsonwebtoken
- passport

## Entity Relationship Diagram (ERD):

![ERD](/images/ERD.png)

|   NAME    |           PATH          |   HTTP VERB   |                 PURPOSE                 |
| --------- | ----------------------- | ------------- | --------------------------------------- |
|   Index   |  /books                 |   GET         | Display all books                       |
|   Show    |  /books/:id             |   GET         | Show one specific book                  |
|   Create  |  /books                 |   POST        | Creat a new book                        |
|   Update  |  /books/:id             |   PATCH       | Update a specific book                  |
|   Delete  |  /books/:id             |   DELETE      | Delete a specific book                  |
|   Create  |  /notes                 |   POST        | Create a note linked to a specific book |
|   Update  |  /notes/:noteId         |   PATCH       | Update a note linked to a specific book |
|   Delete  |  /notes/:noteId/:bookId |   DELETE      | Delete a note linked to a specific book |
|   Create  |  /sign-up               |   POST        | Create a new user                       |
|   Create  |  /sign-in               |   POST        | Create a user token for a exisitng user |

## User Story:

### Version 2:
- As a user, I want to have a list of books I am currently reading
- As a user, I want to to add to the list of books I am currently reading
- As a user, I want to to see the list of books I am currently reading
- As a user, I want to to update a book in the list of books I am currently reading
- As a user, I want to to delete a book in the list of books I am currently reading
- As a user, I want to be able to remove a book from currently reading and add it to the book list
- As a user, I want the show more to display the book info under the book and not at the bottom of the page (bootstrap accordion)

### Version 3:
- As a user, I want my book list to be organized by Author alphabetically
