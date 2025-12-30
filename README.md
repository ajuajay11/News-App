# News App

A responsive **News Application** built with **React + TypeScript**, using **Redux Toolkit (RTK Query)** for API data fetching and **i18next** for English & Arabic language support.

**Live Demo**  
https://news-app-lyart-six.vercel.app/

**GitHub Repository**  
https://github.com/ajuaj11/News-App

---

## Features

- News listing & article detail pages
- Author details (merged from Users API)
- Dynamic images with fallback support
- Skeleton loaders for better UX
- English / Arabic language toggle (RTL supported)
- Smooth scroll animations using AOS
- Client-side routing with React Router
- Responsive layout (desktop & mobile)
- Clean component-based architecture

---

## Tech Stack

- React
- TypeScript
- Redux Toolkit + RTK Query
- React Router
- Material UI (MUI)
- Tailwind CSS
- i18next (Internationalization)
- AOS (Animate On Scroll)
- Vite

---

## APIs Used

- **Posts API**  
  https://jsonplaceholder.typicode.com/posts

- **Users API**  
  https://jsonplaceholder.typicode.com/users

Posts and users are merged on the frontend using the `userId` field to display author information.

---

## Images

The API does not provide images.  
To maintain a realistic news-style UI, dynamic placeholder images are generated using **Picsum**:

