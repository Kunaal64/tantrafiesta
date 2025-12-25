# TantraFiesta

This project was originally a Next.js application, now migrated to a **React (Vite)** frontend with an **Express** backend.

## Tech Stack

-   **Frontend**: React, Vite, Tailwind CSS, Framer Motion
-   **Backend**: Node.js, Express, Nodemailer
-   **Routing**: React Router DOM

## Getting Started

### Prerequisites

-   Node.js installed on your machine.
-   A `.env` file with necessary credentials (e.g., `password` for Nodemailer).

### Installation

Install the dependencies:

```bash
npm install
```

### Running Development Server

To run both the frontend (Vite) and backend (server) concurrently:

```bash
npm run dev
```

-   **Frontend**: [http://localhost:5173](http://localhost:5173)
-   **Backend**: [http://localhost:5000](http://localhost:5000)

### Building for Production

To build the frontend:

```bash
npm run build
```

The output will be in the `dist` folder.

To start the backend server in production mode:

```bash
npm start
```

## Project Structure

-   `src/`: Frontend React source code.
    -   `main.jsx`: Entry point.
    -   `App.jsx`: Main component and routing.
    -   `components/`: UI components.
    -   `app/`: Page components (migrated structure).
-   `server/`: Backend Express server.
    -   `server.js`: API logic (Email sending).
