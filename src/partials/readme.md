1## e-commerce

### installation

[e-commerce repository](https://github.com/erneryn/e-commerce.git) - Clone Repository here

```sh
$ cd ../server & cd ../client
```

run script from packages by using the comment bellow on server and client
```sh
$ npm start// on server
$ npm run serve // on client
```


### list of user Routes :
| Route | HTTP | Description |
| ------ | ------ | ----------- |
| /admin-login | POST  | Login and get access admin token |
| /admin-register | POST | Sign up new admin |
| /user-register | POST | register new user |
| /user-register | POST | Sign up new user |


### list of Product Routes :
| Route | HTTP | Description |
| ------ | ------ | ----------- |
| /product | GET  | Get all product ( (authentication, login required) |
| /product | POST | Add new product (authentication, login required) |
| /product/:id | GET | Get a single product by id (authentication, login required) |
| /product/:id | PUT | Update values of product (authentication, login required) |
| /product/:id | DELETE | Delete a single product (authentication, login required) |

### list of Cart Routes :
| Route | HTTP | Description |
| ------ | ------ | ----------- |
| /cart | GET  | Get all cart ( (authentication, login required) |
| /card| POST | Add new item to cart (authentication, login required) |
| /cart/:id | PUT | Edit quantity cart by ItemId  (authentication, login required) |
| /cart/:id | POST | Checkout Cart, then remove all item in cart(authentication, login required) |
| /cart/:id | DELETE | Delete a single cart (authentication, login required) |

### list of errors  :
| Code | Name | Description |
| ------ | ------ | ----------- |
| 400 | Bad Request  | Incorrect user access of form validation |
| 403 | Forbiden | Unauthorized acess |
| 404 | Not Found | Request Resource not Found |
| 500 | Internal Server Error | Server currently unable to handle this request |


### POST Admin-Login
- url: /admin-login
- Method: POST
- Request body:

```
{
    "email": "admin@admin.com", //required
    "password": "admin" //required
}
```

- Success Response
```
status 200

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",
     "role": "admin"
}
```
- error Response

```
status: 404

{
    "message": "email or password wrong"
}
{
    "message": "email not found"
}
```

### POST Admin-register
- url: /admin-register
- Method: POST
- Request body:

```
{
    "name": "admin1"
    "email": "admin@admin.com", //required
    "password": "admin" //required
    "secretkey": "newadmin"
}
```

- Success Response
```
status 200
{
    "id": 4,
    "name": "admin1",
    "email": "admin1@admin.com",
    "password": "$2a$10$n6ETpMwuNk2KT1hY.kfX1OLN3BGwA2OHVO9OxHk0sKu6gUxi8leJi",
    "updatedAt": "2020-02-22T10:05:06.533Z",
    "createdAt": "2020-02-22T10:05:06.533Z",
}
```
- error Response

```
status: 404

{
    "message": "email already exists"
}
```
```
status: 404

{
    "message": "Invalid Secret Key"
}
```

### POST User-Login
- url: /user-login
- Method: POST
- Request body:

```
{
    "email": "eryn@eryn.com", //required
    "password": "123456" //required
}
```

- Success Response
```
status 200

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",
    "role": "User",
    "name": "eryn",
    "id": 2
}
```
- error Response

```
status: 404

{
    "message": "email or password wrong"
}
{
    "message": "email not found"
}
```

### POST Admin-register
- url: /admin-register
- Method: POST
- Request body:

```
{
    "name": "eryn"
    "email": "eryn@eryn.com", //required
    "password": "eryn" //required
}
```

- Success Response
```
status 200
{
    "id": 4,
    "name": "admin1",
    "email": "admin1@admin.com",
    "password": "$2a$10$n6ETpMwuNk2KT1hY.kfX1OLN3BGwA2OHVO9OxHk0sKu6gUxi8leJi",
    "updatedAt": "2020-02-22T10:05:06.533Z",
    "createdAt": "2020-02-22T10:05:06.533Z",
}
```
- error Response

```
status: 404

{
    "message": "email already exists"
}
```
```
status: 404
{
    "message": "password or email invalid"
}
```


### GET Product
- url: /product
- Method: GET
- Request Headers:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```

- Success Response
```
status 200
[
    {
        "id": 9,
        "name": "Shimano 105 Pedal",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
        "createdAt": "2020-02-20T03:18:49.789Z",
        "updatedAt": "2020-02-20T18:18:27.136Z"
    },
]
```
- error Response

```
status: 403

{
    "message": "Unathentication"
}
```

### POST Product
- url: /product
- Method: POST
- Request Headers:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```
- Request Body:

```
{
        "name": "Shimano 105 Pedal",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
}
```

- Success Response
```
status 200
[
    {
        "id": 9,
        "name": "Shimano 105 Pedal",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
        "createdAt": "2020-02-20T03:18:49.789Z",
        "updatedAt": "2020-02-20T18:18:27.136Z"
    },
]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```
```
status: 400
{
    "message": [
        "Product Name Cannot Empty",
        "Price Cannot Empty",
        "stock at least 1"
    ]
}
```

### GET Product by id
- url: /product:id
- Method: GET
- URL Params:
```
"id":9
```
- Request Header:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```
- Success Response
```
status 200
[
    {
        "id": 9,
        "name": "Shimano 105 Pedal",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
        "createdAt": "2020-02-20T03:18:49.789Z",
        "updatedAt": "2020-02-20T18:18:27.136Z"
    },
]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```
```
status: 404
{
    "message": "Data not found!",
}
```


### PUT Product by id
- url: /product:id
- Method: PUT
- URL Params:
```
"id":9
```
- Request Header:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```
- Request Body
```
{
       
        "name": "Shimano",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
}
```

- Success Response
```
status 200
[
    {
        "id": 9,
        "name": "Shimano",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
        "createdAt": "2020-02-20T03:18:49.789Z",
        "updatedAt": "2020-02-20T18:18:27.136Z"
    },
]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```
```
status: 400
{
    "message": [
        "Product Name Cannot Empty",
        "Price Cannot Empty",
        "stock at least 1"
    ]
}
```


### DELETE Product by id
- url: /product:id
- Method: PUT
- URL Params: 
```
"id":9
```
- Request Header:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```

- Success Response
```
status 200
[
    {
        "id": 9,
        "name": "Shimano",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
        "createdAt": "2020-02-20T03:18:49.789Z",
        "updatedAt": "2020-02-20T18:18:27.136Z"
    },
]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```

### GET Cart
- url: /cart
- Method: GET
- URL Params:
```
"id":1
```
- Request Header:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```

- Success Response
```
status 200
[
    {
        "id": 1,
        "UserId": 2,
        "ProductId": 4,
        "quantity": 1,
        "createdAt": "2020-02-27T03:02:56.961Z",
        "updatedAt": "2020-02-27T03:02:56.961Z",
        "Product": {
            "id": 4,
            "name": "Group Set Dura Ace",
            "price": 14000000,
            "stock": 3,
            "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/P/A/PA00790.jpg",
            "description": "New designed crank arm for optimum power transfer\nPrecise & easy front derailleur set with lighter and intuitive shifting operation\nSHIMANO SHADOW RD construction for stable shifting performance\nOptimally balanced hydraulic brake system for racing with improved heat dissipation of ICE TECHNOLOGIES FREEZA",
            "createdAt": "2020-02-25T13:17:35.701Z",
            "updatedAt": "2020-02-26T16:56:07.305Z"
        }
    }
]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```
```
status: 404
{
    "message": "Data not found!",
}
```


### POST Cart
- url: /cart
- Method: POST
- Request Headers:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```
- Request Body:

```
{
        "ProductId": 9,
        "quantity": "2",
}
```

- Success Response
```
status 200
[
    {
        "id": 40,
        "ProductId": 1,
        "UserId": 2,
        "quantity": 2,
        "updatedAt": "2020-02-27T03:18:14.902Z",
        "createdAt": "2020-02-27T03:18:14.902Z"
    },
]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```
```
status: 400
{
    "message": [
        "Product Name Cannot Empty",
        "Price Cannot Empty",
        "stock at least 1"
    ]
}
```


### DELETE Cart by id
- url: /cart:id
- Method: PUT
- URL Params: 
```
"id":9
```
- Request Header:

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```

- Success Response
```
status 200
[]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```

### PUT Cart edit quantity by id
- url: /cart:id
- Method: PUT
- URL Params: 
```
"id":9
```
- Request Header:
```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```
- Request Body: 
```
{
    "ProductId": "9",
    "quantity": "2",
}
``` 
- Success Response
```
status 200
[ 
    {
     "id": 40,
     "ProductId": 9,
     "UserId": 2,
     "quantity": 2,
     "updatedAt": "2020-02-27T03:18:14.902Z",
     "createdAt": "2020-02-27T03:18:14.902Z"
    },
]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```

### POST Cart for checkout 
- url: /cart-checkout
- Method: POST
``
```
- Request Header:
```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYWZpenVscmlma2loYXdhcmlAZ21haWwuY29tIiwiaWF0IjoxNTgxNjQ0ODM4fQ.cUwd7Tv2KeusXaa58oEeHsF7L9SzK0HxPLWkb8Vfa88",  
}
```

``` 
- Success Response
```
status 200
[]
```
- error Response

```
status: 403
{
    "message": "Unathentication"
}
```


### Internal server error
- error cause server
```
status: 500
{
    "message": "Internal server error"
}
```
