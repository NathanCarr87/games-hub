# Games Hub

A clean, modern, and responsive website hosting free browser games. Built with React, TypeScript, Vite, and designed for deployment on Firebase Hosting.

## Features

- **Homepage**: Displays featured games and upcoming additions in a responsive grid layout.
- **Word Search**: Featured card with a link leading to `/word-search/`.
- **Coming Soon Placeholders**: Clear indication of future games under development.
- **SEO Optimized**: Standard meta description, descriptive title, visible H1 heading, and semantic HTML elements.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Testing**: Vitest, React Testing Library, jsdom
- **Hosting**: Firebase Hosting (static hosting with client-side rewrites)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development Server

To run the application locally with hot module replacement:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Running Tests

To run the unit test suite:

```bash
npm test
```

### Type Checking

To verify TypeScript types across the project:

```bash
npm run typecheck
```

### Production Build

To build the project for production:

```bash
npm run build
```

The optimized static build artifacts will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment to Firebase Hosting

 Firebase Hosting is configured in `firebase.json` to serve the static build from the `dist` folder.

To deploy to Firebase Hosting:

1. Install the Firebase CLI (if not already installed):

   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:

   ```bash
   firebase login
   ```

3. Initialize or link your Firebase project (if needed):

   ```bash
   firebase use --add
   ```

4. Build and deploy:

   ```bash
   npm run build
   firebase deploy --only hosting
   ```
