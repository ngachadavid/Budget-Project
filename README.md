# BUDGET BUDDY API
#### Description
This project is a REACT/RUBY application that tracks the budget expenses in a monthly setting, organizing each into categories for easu access

#### Features
As a user of the application,you will be able to :

Add an expense
Signup as a new user
Login as a newly created user
update budget

#### About
- Its front end repository is https://github.com/ngachadavid/budget-creact

- The frontend deployed app is https://budget-buddy-jade.vercel.app/

- The backend deployed api is https://budget-buddyy.onrender.com


#### Requirements
- Access to a computer or any other gadget and internet
- Ruby 2.7.4
- Rails
- Sqlite3
- Postman-to test the API

# Installation Process
Clone this repo on your local machine
Navigate to the project directory
Install the required dependencies by running:
```console
$ bundle install
```

Run the migrations and seed the databasevia:
```console
$ rails db:migrate db:seed
```

Start the server by:
```console
$ rails s
```
The app should now be running on `http://localhost:3000`


The endpoints include:-
#### POST
/signup

Create a new user
Action
```console
{
      "first_name": "David",
      "last_name": "Mwangi",
      "username":"ngachaa",
      "password":"ngacha",
      "password_confirmation":"ngacha"
}
```
Response:
```console
{
    "id": 1,
    "expenses": [],
    "categories": []
}
```
#### GET
/me

Get a logged in user stored in the sessions
Response:
```console
{
    "id": 1,
    "first_name": "David",
    "last_name": "Mwangi",
    "username": "ngachaa",
    "expenses": [
        {
            "id": 2,
            "amount": "1200.0",
            "user_id": 1,
            "category_id": 20,
            "date": null
        }
    ],
    "categories": [
        {
            "id": 20,
            "category": "Housing"
        },
        {
            "id": 14,
            "category": "Groceries"
        },
    ]
}
```

#### POST
/login/user

Finds a user with matching username and password in the database
Action
```console
{
    "username":"ngachaa",
    "password":"ngacha"
}
```

# Technology Used
REACT - For the frontend

CSS - which was used to style the User Interface.

Bootstrap - which was used to create a responsive navbar

Ruby - For backend and database

MIT License

Copyright (c) [2023] [David Mwangi]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
