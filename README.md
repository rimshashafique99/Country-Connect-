CountryConnect
CountryConnect is a simple web application that allows users to search for any country and view its detailed information, including its flag, capital, population, region, and more. This project demonstrates the use of Node.js, Express.js, and EJS for building a server-side rendered application that interacts with a third-party API.

Features
Search Functionality: Easily search for any country by its name.

Detailed Country Information: Displays comprehensive data for the searched country, such as:

Country Name

Capital

Region

Population

And other relevant details provided by the API.

Responsive Design: The application is designed to be viewable on different screen sizes (though basic responsiveness is implemented, further styling can enhance it).

Error Handling: Provides user-friendly messages for invalid searches or API errors.

Technologies Used
Node.js: A JavaScript runtime for building server-side applications.

Express.js: A fast, unopinionated, minimalist web framework for Node.js.

EJS (Embedded JavaScript): A simple templating language that lets you generate HTML with plain JavaScript.

Axios: A promise-based HTTP client for making requests to external APIs.

HTML5: For structuring the web content.

CSS3: For styling the application.

Font Awesome: For icons used in the search bar.

API Used
This project utilizes the Countries API by Abhishek Jain to fetch country data.

Setup and Installation
To get this project up and running on your local machine, follow these steps:


1. Install Dependencies
Navigate to the project directory in your terminal and install the required Node.js packages:

npm install express body-parser axios ejs

2. Project Structure
Ensure your project has a structure similar to this:

CountryConnect/
├── app.js             # Your main Express application file
├── public/
│   ├── style.css      # Your CSS file for styling
│   └── images/
│       └── logo.jpeg  # Your logo image
└── views/
    └── index.ejs      # Your EJS template file

3. Run the Application
Execute the following command in your terminal from the project root:

node app.js

The server should start, and you will see a message in your console:

Server is running on port 3000

4. Access the Application
Open your web browser and go to:

http://localhost:3000

You can now search for countries!

Usage
Enter the name of a country (e.g., "United States", "Pakistan", "Turkey") into the search bar.

Click the search icon or press Enter.

The page will display the country's detailed information fetched from the API.

If the country is not found or an error occurs, an appropriate message will be displayed.

