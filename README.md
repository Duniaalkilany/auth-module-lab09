# auth-module-lab09

## Authors: 

* ### Dunia Alkilany 
* ### Yazan Baker
* ### Qasem Mohammad

## description
  ### Application using your API Server and Authentication System


  ## UML/Application

![img](/assest/lab9.png)
   

## Links and Resources:

 ### Heroku:

https://dunia-auth-lab9.herokuapp.com/


* ### pull request :




## Dependencies needs to install

### dependencies :

* ### "base-64"
* ### "bcrypt"
* ### "cors"
* ### "dotenv"
* ### "express"
* ### "jsonwebtoken"
* ### sequelize 
* ### sqlite3
* ### pg
* ### "morgan"

### devDependencies :

* ### eslint"
* ### "jest"
* ### "supertest"


## getting this app
* ### clone and npm i
* ### nodemon or - node index.js


## Setup 
### .env requirements :
* ### PORT=3000
* ### NODE_ENV=test
* ### SECRET - used to create jwt
* ### DATABASE_URL


## How to initialize/run your application (where applicable)

* ### nodemon - node index.js

* ### Endpoints:
   
    - ### end points

  - `/`

  ```

  {
   HELLO WORLD 😎!
  }

  ```

  - post `/signup`

  - body ` {"username": "dunia","password": "1234","role": "admin"}`

  ```
  {
  {
   "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzMzOTQ0fQ.XtpwcgWWFG3zS5oUBp8f5dub30Txk2X2e2NjzUzklSA",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": 1,
        "username": "dunia",
        "password": "$2b$10$YrmoH2rhzMDXtYfVzqWyCe0iEIMxX4Ht4prxuewaTt6u2evTNZGlK",
        "role": "admin",
        "updatedAt": "2021-08-19T00:45:29.715Z",
        "createdAt": "2021-08-19T00:45:29.715Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzMzOTQ0fQ.XtpwcgWWFG3zS5oUBp8f5dub30Txk2X2e2NjzUzklSA",
    "role": "admin"
  }
  }

  ```

  - post `/signin`

  - basic auth `{ username: 'dunia', password: '1234'};`

  ```
  {
  "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzM2MTQzfQ.vhDadkmZRMTiw9sl96R-B-Wmutbeg6pePesihkHCjzw",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": 1,
        "username": "dunia",
        "password": "$2b$10$YrmoH2rhzMDXtYfVzqWyCe0iEIMxX4Ht4prxuewaTt6u2evTNZGlK",
        "role": "admin",
        "createdAt": "2021-08-19T00:45:29.715Z",
        "updatedAt": "2021-08-19T00:45:29.715Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzM2MTQzfQ.vhDadkmZRMTiw9sl96R-B-Wmutbeg6pePesihkHCjzw"
  }

  ```

  - post `/api/v1/books` 

  - barear auth  ` "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzM2MTQzfQ.vhDadkmZRMTiw9sl96R-B-Wmutbeg6pePesihkHCjzw"`

  - body ` {"authors": "Hanya Yanagihara", "title":"A Little Life" ,"book_description": "about life","image_url": "https://i.guim.co.uk/img/media/eec342b926fd7028814f86dc3080e63b3c9a75fb/0_0_1500_900/master/1500.jpg?width=940&quality=85&auto=format&fit=max&s=18d9fb15cfd29e10aef637398adeba22","pub_date":"2015"}` 

  ```

  
      {
         "id": 2,
    "authors":"Hanya Yanagihara",
    "title": "A Little Life",
    "book_description": "about life",
    "image_url": "https://i.guim.co.uk/img/media/eec342b926fd7028814f86dc3080e63b3c9a75fb/0_0_1500_900/master/1500.jpg?width=940&quality=85&auto=format&fit=max&s=18d9fb15cfd29e10aef637398adeba22",
    "pub_date": "2015",
    "updatedAt": "2021-08-19T01:35:08.745Z",
    "createdAt": "2021-08-19T01:35:08.745Z"
      }
  

  ```

   - get `/api/v1/books` 

  - basic auth

  ```

  [
      {
        
        "id": 1,
        "authors": "Hanya Yanagihara",
        "title": "A Little Life",
        "book_description": "about life",
        "image_url": "https://i.guim.co.uk/img/media/eec342b926fd7028814f86dc3080e63b3c9a75fb/0_0_1500_900/master/1500.jpg?width=940&quality=85&auto=format&fit=max&s=18d9fb15cfd29e10aef637398adeba22",
        "pub_date": "2015",
        "createdAt": "2021-08-19T01:34:16.748Z",
        "updatedAt": "2021-08-19T01:34:16.748Z"
    
      }
  ]

  ```


  - get `/api/v1/books/${id}` 
  - for our testing :get `/api/v1/books/1` 

  - basic auth 

  ```
       {
        "id": 1,
        "authors": "A Little Life",
        "title": "Hanya Yanagihara",
        "book_description": "about life",
        "image_url": "https://i.guim.co.uk/img/media/eec342b926fd7028814f86dc3080e63b3c9a75fb/0_0_1500_900/master/1500.jpg?width=940&quality=85&auto=format&fit=max&s=18d9fb15cfd29e10aef637398adeba22",
        "pub_date": "2015",
        "createdAt": "2021-08-19T01:34:16.748Z",
        "updatedAt": "2021-08-19T01:34:16.748Z"
       }

  ```


  - put `/api/v1/books/${id}`
  - for our testing :put `/api/v1/books/1`

  -  barear auth for v1 `"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzM2MTQzfQ.vhDadkmZRMTiw9sl96R-B-Wmutbeg6pePesihkHCjzw"`

  - body ` {"authors": "John Harrison","title": "Light","book_description": "science fiction at its bes","image_url": "https://i.guim.co.uk/img/media/eec342b926fd7028814f86dc3080e63b3c9a75fb/0_0_1500_900/master/1500.jpg?width=940&quality=85&auto=format&fit=max&s=18d9fb15cfd29e10aef637398adeba22","pub_date":"2002"}` 

  ```
       {
           "id": 1,
    "authors": "John Harrison",
    "title": "Light",
    "image_url": "https://i.guim.co.uk/img/media/eec342b926fd7028814f86dc3080e63b3c9a75fb/0_0_1500_900/master/1500.jpg?width=940&quality=85&auto=format&fit=max&s=18d9fb15cfd29e10aef637398adeba22",
    "book_description": "science fiction at its bes",
    "pub_date": "2002",
    "createdAt": "2021-08-19T01:35:08.745Z",
    "updatedAt": "2021-08-19T02:09:57.427Z"
       }

  ```

  

  - delete `/api/v1/books/${id}` 

  - barear auth for v1 `"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzM2MTQzfQ.vhDadkmZRMTiw9sl96R-B-Wmutbeg6pePesihkHCjzw"`
 

   - get `/users`
   - barear auth for v1  `"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bmlhIiwiaWF0IjoxNjI5MzM2MTQzfQ.vhDadkmZRMTiw9sl96R-B-Wmutbeg6pePesihkHCjzw"`

  ```
   [
    "dunia"
   ]





  