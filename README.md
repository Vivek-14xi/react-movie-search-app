#  Movie Search App (React)

A responsive Movie Search Application built using React that fetches movie data from the OMDb API and displays results in a card-based UI.

---

##  Today’s Agenda

- Introduction to API Calling / HTTP Requests  
- Revising useEffect() Hook  
- Using fetch()  
- Building a Movie Search App using React  

---

##  Main Objective

Build a Movie Search Application that:
- Fetches movie data from an external API  
- Displays results dynamically in UI  

---

##  Features

### 1. Search Functionality
- Input field to search movies  
- Search button to trigger API call  
- Fetch movies based on search query  

### 2. Display Movies
- Show movie results in card format  
- Each card displays:
  - Movie Poster  
  - Movie Title  
  - Release Year  

### 3. Loading State
- Show loader/spinner while fetching data  

### 4. Error Handling
- Display message when:
  - No movies found  
  - API fails  

---

##  Tech Stack

- React (Functional Components)  
- useEffect Hook  
- Fetch API  
- CSS  

---

## 🔗 API Used

OMDb API
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=SEARCH_TERM

---

## 📂 Project Structure
Movie-App/
│── public/
│── src/
│ ├── components/
│ │ └── MovieCard.js
│ ├── App.js
│ ├── App.css
│ └── index.js
│── package.json

---

## ⚙️ Installation & Setup
git clone https://github.com/Vivek-14xi/react-movie-search-app.git
cd Movie-App
npm install
npm start

---

## 🔑 API Key Setup

- Get your API key from OMDb  
- Replace `YOUR_API_KEY` in your fetch URL  

---

## 📸 Expected Output

- Search input field  
- Movie cards (poster, title, year)  
- Loader during API call  
- Error messages for no results or failure  

---

## 📌 Conclusion

This project demonstrates:
- API integration  
- useEffect usage  
- Fetching and displaying dynamic data  
- Error and loading state handling  
