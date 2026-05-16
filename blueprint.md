# Lotto Number Recommendation Site

## Overview

A simple, visually appealing web application that generates and displays random lottery numbers for users. The application will be built with HTML, CSS, and JavaScript, following modern web development best practices.

## Design and Features

*   **UI/UX:**
    *   A clean and modern user interface with a central focus on the number generation feature.
    *   A prominent "Generate Numbers" button.
    *   A visually distinct area to display the generated lottery numbers.
    *   Responsive design that works well on both desktop and mobile devices.
    *   Use of modern CSS for styling, including gradients, drop shadows, and a subtle background texture to create a premium feel.
    *   Expressive typography to guide the user's attention.
*   **Functionality:**
    *   Clicking the "Generate Numbers" button will produce a set of 6 unique random numbers.
    *   The numbers will be within the typical lottery range (e.g., 1-45).
    *   The generated numbers will be clearly displayed to the user.

## Current Plan

1.  **Modify `index.html`:**
    *   Update the page title to "Lotto Number Generator".
    *   Add a main heading `<h1>` for the application title.
    *   Create a container `<div>` to hold the generated numbers.
    *   Add a button `<button>` to trigger the number generation.
2.  **Modify `style.css`:**
    *   Implement a visually appealing layout using Flexbox.
    *   Style the number display area and the individual number elements.
    *   Apply modern styling to the button, including a "glow" effect on interaction.
    *   Add a subtle background texture and a balanced color scheme.
3.  **Modify `main.js`:**
    *   Create a JavaScript function to generate 6 unique random numbers between 1 and 45.
    *   Add an event listener to the button to call the generation function.
    *   Implement logic to display the generated numbers in the designated container.
