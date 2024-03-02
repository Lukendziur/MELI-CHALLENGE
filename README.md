# Welcome to Meli Frontend Challenge

- Node version >= 18

# Instructions to run the project

1. npm i
2. npm run dev

# Optional: you can run the eslint custom configuration with: npm run lint:fix

# About the project structure

- Each route path was created in /src/app directory.

### ABOUT CLIENT AND SIDE RENDERING:

Almost of this project is render on the server side (server sends to the client ready pages).
We only have two components (because we need user interaction)
on the client side: BackButton.tsx and SearchForm.tsx.
This allows to have a very quicky service response while navigating.

## PAGES

1. Base /
2. items /items to show the products results
3. items:id /items:id to show dynamic selected product
4. error /error if the service response is error, the user will be redirected to the /error page where there is a text and a button to go back to base url /.

## SERVICES:

1. We use the folder /services/ to host the services scripts.

- getProductByIdService.ts:

* getProductById: https://api.mercadolibre.com/items/${id}

* getProductDescription: https://api.mercadolibre.com/items/${id}/description

* getProductCategorie: https://api.mercadolibre.com/categories/${category}

- getProductsBySearchService:

* getProductsBySearchService: https://api.mercadolibre.com/sites/MA/search?q=:${search}&limit=4

# ADAPTERS:

Adapters are used to bring the data from the services and format it to be consumed by the components. In this way, we abstract the logic to keep it on the server and the components are kept clean.
If the services call is ok, the adapter will return the data
If the services call gets error from the server, the adapter will return
an object with {hasError: true, messageError: string}

In the happy case the adapters/getProductById.tsx will return:
const productByIdAdapted = {
author: {
name: 'Lucila',
lastname: 'Kendziur',
},
item: {
id: string,
title: string,
price: {
currency: string,
amount: number,
decimals: number,
},
picture: string,
condition: string,
free_shipping: boolean,
sold_quantity: number,
description: string,
product_categorie: string[],
},
}

In the happy case the adapters/getProductBySearchAdapter.tsx will return:
{
author: {
name: string,
lastname: string
},
categories: string[],
items:{
id: string,
title: string,
price: {
currency: string,
amount: string,
decimals: number
},
picture: string,
condition?: string,
free_shipping: boolean,
city: string
}
}

# STYLES:

In this project I'm using sass.
I created a folder /styles/ with partials to separate responsabilities. Then I import this configuration, variables, mixins and theme into app.scss which is imported in general src/app/layout.tsx.

There is also a custom configuration in next.config.js that allows me to access globally to mixins and variables without importing the scss file.

# TESTS:

As I am not an expert in this area, I implemented an end to end test using playwright.
Doc: https://playwright.dev/docs/intro
The testing script path: /test/e2e.spect.ts
If you are running this app on port !== 3000, please edit the port in e2e.spect.ts

To use the test part, follow these instructions:

1. In Visual Studio Code install the "Playwright Test for VSCode" extension. Follow the instructions given in the extension.

2. Go to the Testing part in Visual Studio Code. Select the "show trace viewer" option for convenience (but you can select "Show browser" as well).

3. Execute "Test end to end".

# CONSIDERATIONS:

1. This challenge could have been solved in a simpler way, with less file structure, less componetization, less styling and even setting up a simple server in Node. My intention is to show how I would work on a medium scale project using one of the most used technologies for server side rendering nowadays: Next.js.
   Anyway, I reiterate, the over-engineering of this project is only for challenge purposes.
2. With more time, I would have liked to do these things:

- Style the loading component.
- Implement the filter by categories of the Breadcrumb (for the moment it's just strings).

3. I didn't implement a git workflow, but in a real project must be required
