# 🛍️ Express.js Product API

## Setup

```bash
npm install
node server.js
 API Key
All routes require a header:

makefile
Copy
Edit
x-api-key: 15213
 API Endpoints
Method	Route	Description
GET	/api/products	List all products
GET	/api/products/:id	Get a product by ID
POST	/api/products	Create a product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product
GET	/api/products/search?q=term	Search products by name
GET	/api/products/stats	Get product stats
GET	/api/products?category=Electronics&page=1&limit=5	Filter + paginate

Example Request (Postman)
GET /api/products

Headers:

makefile
Copy
Edit
x-api-key: 15213
