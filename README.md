**Habit Tracker Web Application**  
**Description**  
The **Habit Tracker** is a web application designed to help users build and track their habits over time. The application encourages users by displaying a daily motivational quote and a beautiful random background image. The main features include the ability to add new habits, track them on a list, and get inspired with motivational quotes. By leveraging clean and modern design, the app aims to make habit tracking an enjoyable part of the user’s daily routine.  
**Problem It Solves**  
Maintaining habits is crucial for personal development, but it can be challenging without a system to track them. This web app provides a simple and visually appealing way to keep track of habits, encouraging users to stay consistent through motivational quotes and an interactive interface. Additionally, the app randomly generates a fresh background image on each load, keeping the interface engaging.  
**Instructions for Setup and Running the Project**  
**1\. Clone the Repository**  
```bash
git clone https://github.com/your-username/habit-tracker.git  
cd habit-tracker  
```

**2\. Install Dependencies**  
Make sure you have Node.js installed. Then, run the following command to install all required dependencies:  
```bash
npm install  
```
**3\. Set Up API Keys**  
**Pexels API:**

	•	Sign up at [Pexels](https://www.pexels.com/api/) to get your API key.

	•	In the code, replace YOUR\_API\_KEY with your actual Pexels API key in background.js.  
**ZenQuotes API:**

	•	If using ZenQuotes for the motivational quote, ensure the API is correctly integrated with the endpoint in the MotivationalQuote.js file.

	•	Update with any required API keys or authentication.  
**4\. Create a `.env` File**

Create a `.env` file in the root directory to store your API key securely.

**5\. Run the Application**  
Start the development server by running:  
npm start  
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.  
**APIs Used**  
**1\. Pexels API**  
The Pexels API is used to fetch high-quality, random background images for the app. On each page load, the app queries Pexels’ curated image collection and displays a different landscape image as the background, providing a fresh and engaging user experience.

	•	Endpoint used: https://api.pexels.com/v1/curated

	•	Random image selection: A curated set of images is retrieved, and one is randomly selected to display as the background.

	•	Integration: The API key for Pexels is included in the request headers, and the image URL is then dynamically set as the page background.  
**2\. ZenQuotes API**  
The ZenQuotes API provides a daily motivational quote, inspiring users to stay positive as they work towards building their habits.

	•	Endpoint used: https://zenquotes.io/api/random

	•	Integration: A random quote is fetched and displayed at the top of the app.  
**Handling CORS (Cross-Origin Resource Sharing)**  
During development, I encountered **CORS (Cross-Origin Resource Sharing)** issues when trying to fetch data from external APIs, such as the ZenQuotes API. Since modern browsers restrict cross-origin HTTP requests due to security reasons, CORS policy was initially blocking the requests.  
To solve this issue:

	1\.	**CORS Proxy**: I used a CORS proxy like cors-anywhere to temporarily bypass CORS restrictions while fetching resources from ZenQuotes. A request to the API was prepended with the CORS proxy URL to enable the browser to retrieve the resource without triggering CORS policy issues. This was only a temporary solution for development.

	2\.	**Pexels API**: The Pexels API didn’t present CORS issues because it includes the necessary Access-Control-Allow-Origin headers in its response, allowing the image resources to be fetched directly without additional workarounds.  
**Important**: In production, it’s recommended to handle CORS by ensuring that APIs allow requests from the relevant domains, or by using server-side solutions that proxy the API requests and serve them to the frontend.  
**Credits for AI-Generated Code**  
This project was built with the assistance of AI-generated code using OpenAI’s ChatGPT for the following parts:

	•	**Initial Project Setup**: AI assisted in generating the structure of the React project and organizing components effectively.

	•	**Background Image Fetching**: Code snippets for fetching a random background image from the Pexels API were generated with AI’s help, including error handling and applying the image as a full-page background.

	•	**Motivational Quote Integration**: AI provided a solution for integrating the ZenQuotes API to fetch and display motivational quotes.

	•	**CORS Solution**: AI assisted in explaining the CORS issue and recommending the use of CORS proxies and alternative solutions for handling cross-origin requests.

The AI suggestions were reviewed and integrated by the developer, with custom modifications made as needed to meet project requirements.  

**Conclusion**  
This Habit Tracker web application is a lightweight and interactive tool to help users track habits and stay motivated with beautiful background images and inspirational quotes. Whether for personal use or as a tool for improving daily routines, this app aims to provide a seamless and visually pleasing experience for all users.  

