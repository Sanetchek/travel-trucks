# TravelTrucks

TravelTrucks is a frontend web application for a camper rental company. This project aims to create an intuitive and user-friendly platform for browsing, filtering, and booking campers.

The project is implemented using modern web development tools and follows best practices to ensure clean and maintainable code.

## Features

- **Home Page**: Includes a banner with a call-to-action button leading to the catalog page.
- **Catalog Page**: Displays a list of available campers with:
  - Filtering options (location, vehicle type, features like AC, kitchen, etc.).
  - Ability to add campers to a favorites list.
  - Pagination with a "Load More" button to fetch additional results.
- **Camper Details Page**: Displays:
  - Detailed descriptions and images of the camper.
  - Reviews with a five-star rating system.
  - A booking form with a notification upon successful submission.
- **Favorites**: Persist favorites across page refreshes.
- **Responsive Design**: Desktop-focused layout with optional adaptability for smaller screens.
- **Error Handling**: Error states and loaders for asynchronous requests.

## Tech Stack

- **Frontend Framework**: React (using Vite as a bundler).
- **State Management**: Redux Toolkit.
- **Routing**: React Router.
- **HTTP Requests**: Axios.
- **Styling**: Custom CSS (or CSS-in-JS library of choice).
- **Backend API**: Mock API for campers:
  - `GET /campers` - Fetch all campers (supports backend filtering).
  - `GET /campers/:id` - Fetch camper details by ID.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or later)
- npm (v8 or later)

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/travel-trucks.git

Copy code
2. Navigate to the project directory:
   cd travel-trucks

3. Install dependencies:
   npm install

### Running the Application
To start the development server:
   npm run dev

Visit http://localhost:3000 to view the app in the browser.

To build the project for production:
   npm run build

To preview the production build:
   npm run preview

### Deployment
The project is deployed on Vercel or Netlify. Access the live version via the provided link.

## File Structure
src/
 - assets/            # Assets
 - components/        # Reusable UI components
 - pages/             # Page components for routing
 - redux/             # State slices for Redux

## Development Best Practices
 - Clean and readable code with comments where necessary.
 - DRY (Don\'t Repeat Yourself) principles followed.
 - Semantic and accessible HTML.
 - Valid CSS and linted JavaScript.

## Author
Oleksandr Gryshko
For inquiries or feedback, please contact: [algryshko@gmail.com].

## License
This project is licensed under the MIT License.