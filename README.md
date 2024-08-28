# AcademiaHub - Frontend

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#Tech-Stack)
- [Prerequisites](#Prerequisites)
- [Project Structure](#project-structure)

## Introduction
**AcademiaHub** is a general blog application covering various topics such as Lifestyle, Technology, Travel, Food, Business, Personal Development, Hobbies, and Education. This repository contains the frontend of the project built with **React**.

## Features
- User-friendly interface for browsing posts across multiple categories.
- Responsive design for both desktop and mobile.
- User authentication (login/register).
- Create, read, update, and delete (CRUD) functionality for blog posts.
- Like/Dislike functionality on blog posts.
- **Comment system**: Users can add, edit, delete, and like/dislike comments on posts.
- Dynamic tags for categorizing posts.

## Tech Stack
- **React** (Frontend Framework)
- **React Router** (For client-side routing)
- **Axios** (For HTTP requests)
- **CSS / Styled Components** (For styling the application)

## Prerequisites
To run the project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- npm or yarn

## Project Structure
src/
  ├── index.css
  ├── main.jsx
  ├── assets/
  ├── contexts/
    ├── CommentContext.jsx
    ├── PostsContext.jsx
    ├── UserContext.jsx
  ├── services/
    ├── api.js
  ├── components
    ├── CategoriesFilter/
    ├── Comments/
    ├── DataBox/
    ├── Footer/
    ├── Header/
    ├── Hero/
    ├── Newsletter/
    ├── PostInteraction/
    ├── PostLayout/
    ├── PostListing/
    ├── RecPosts/
    ├── Tags/
    ├── UserInfo/
  ├── pages/
    ├── About/
    ├── Categories/
    ├── Home/
    ├── Login/
    ├── Posts/
    ├── PostsEdit/
    ├── Profile/
    ├── Register/
    ├── Search/
    ├── Write/
