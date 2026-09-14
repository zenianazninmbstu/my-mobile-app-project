# Dev Stack Builder

A modern and responsive web application that helps developers explore different technologies and build their own development stack.

## Technologies Used

* ⚛️ React
* 📘 TypeScript
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🔔 React-Toastify
* ⚡ Vite
* 📄 JSON

##  Features

### 1.  Explore Technologies

Browse different technologies with their category, difficulty level, rating, description, and badge.

### 2. Build Your Own Stack

Add technologies to your personal stack and prevent duplicate selections.

### 3.  Manage Your Stack

Remove individual technologies or remove all selected technologies with toast notifications.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to create and describe the user interface.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update changing data in a component. I used it to keep track of the technologies selected in the user's stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects such as fetching data. I used it to load the technology data from the local JSON file when the component loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React update the correct item efficiently when the list changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show the empty stack message when no technology has been selected:

tsx
{selectedTechnologies.length === 0 && (
  <p>Your stack is empty.</p>
)}


## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**. A child can send information back to the parent by calling a function that the parent passes as a prop.

---

##  Project

**Dev Stack Builder** — Explore technologies, compare options, and build your own development stack.
