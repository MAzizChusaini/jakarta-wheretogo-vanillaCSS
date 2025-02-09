Where To-Go
Where To-Go is a web application that helps users explore various places to visit in Jakarta, including food spots, hangout places, and experiences. The application provides a user-friendly interface to browse through different categories and locations.

# Project Documentation

## Overview

This project contains JavaScript code to handle various UI interactions such as scrolling effects, popups, dropdowns, and image filtering. Additionally, it includes a Swiper slider for the main content.

## Files

### script.js

This file contains the following functionalities:

- **Sticky Header on Scroll**: Adds a 'sticky' class to the header when the user scrolls down.
- **Popup Handling**: Opens and closes a popup when specific buttons are clicked.
- **Dropdown Menu**: Toggles the display of a dropdown menu when the button is clicked.
- **Image Filtering**: Filters images based on the selected category from the dropdown menu.
- **Random Image Display**: Displays a random image when a submit button is clicked.

### main.js

This file initializes a Swiper slider with the following configurations:

- **Effect**: Coverflow
- **Loop**: Enabled
- **Slides Per View**: Auto
- **Coverflow Effect**: Custom settings for rotate, stretch, depth, and modifier.
- **Pagination**: Clickable pagination bullets.
- **Navigation**: Next and previous buttons.
- **Touch Settings**: Custom settings for touch interactions.

## Usage

1. **Sticky Header**: Scroll down the page to see the header become sticky.
2. **Popup**: Click the button with the class `popup-btn` to open the popup and the button with the class `close-btn` or the overlay to close it.
3. **Dropdown Menu**: Click the button with the class `dropbtn` to toggle the dropdown menu.
4. **Image Filtering**: Click on the links inside the dropdown menu to filter images based on categories.
5. **Random Image Display**: Click the button with the class `submit-btn` to display a random image.

## Author

[MAzizChusaini](https://github.com/MAzizChusaini)

## License

[MIT LICENSE](LICENSE)