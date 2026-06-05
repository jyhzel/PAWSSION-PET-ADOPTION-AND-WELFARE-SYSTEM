
# Project Directory Structure Overview

CLIENT SIDE (Frontend)

- public

Mga files na diretso ginagamit ng browser.
Example: favicon at icons.

- src

Main folder ng React app.
Dito nakalagay halos lahat ng frontend code.

- assets

Storage ng images, logos, fonts, at videos.

- components

Reusable UI parts.
Example: Navbar, Button, Footer.

- pages

Buong page/screen ng website.
Example: Login page, Dashboard page.

- routes

Nagha-handle ng navigation ng pages.
Example: /login, /dashboard.

- services

Taga-connect sa backend/API gamit axios o fetch.

- App.jsx

Main component ng React app.
Dito madalas nilalagay routes at layouts.

- main.jsx

Starting point ng React app.
Ito unang nilo-load kapag run ang app.

- App.css / index.css

Mga style/design ng app.

- vite.config.js

Configuration ni Vite na nagpapatakbo ng React dev server.

config – stores system settings like database connection, port, and secret keys.

controllers – contains the main logic (what the system does like login, register, add data).

models – defines the structure of data in the database (tables or schemas).

routes – defines API endpoints (URLs) and connects them to controllers.

services – contains reusable helper functions (email, token, file upload, etc.).

uploads – stores uploaded files like images or documents.

.env – stores private and sensitive information (passwords, API keys).

app.js – sets up the server (middleware, routes, configurations).

server.js – starts the backend server and makes it run.