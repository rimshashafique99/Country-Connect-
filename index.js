import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_url = "https://countries-api-abhishek.vercel.app/"; // Correct API Base URL

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Enter a country name to search." }); // Initial message
});

app.get("/countryname", async (req, res) => {
  const search = req.query.search;
  if (!search) {
    return res.render("index.ejs", { content: "Please enter a country name.", search: "" }); // Also pass search as empty string
  }
  try {
    const response = await axios.get(`${API_url}countries/${search}`);
    const countryData = response.data; // Get the actual country data
    const countryName = countryData.name; // Extract the common name of the country

    res.render("index.ejs", {
      content: JSON.stringify(countryData, null, 2),
      search: search, // Pass the original search term
      countryName: countryName // Pass the extracted country name
    });
  } catch (error) {
    let errorMessage = "An error occurred while fetching data.";
    let searchedCountry = req.query.search || ""; // Keep the searched term for persistence
    if (error.response && error.response.data) {
      errorMessage = JSON.stringify(error.response.data, null, 2);
    } else if (error.message) {
      errorMessage = error.message;
    }
    res.render("index.ejs", { content: errorMessage, search: searchedCountry, countryName: "" }); // Pass empty countryName on error
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});