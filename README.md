# Trekbag

Trekbag is a simple React application for managing a packing list, built with [Vite](https://vitejs.dev/) and [Zustand](https://zustand-demo.pmnd.rs/) for state management. It allows you to add, remove, and manage items you want to pack for your next trip.

## Features

- **Add Items:** Add new items to your packing list.
- **Mark as Packed/Unpacked:** Toggle items as packed or unpacked.
- **Sort Items:** Sort your list by packed, unpacked, or default order.
- **Remove Items:** Delete individual items, clear the entire list, or reset to the initial list.
- **Persistent State:** Your list is saved in your browser and persists across reloads.

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/) (with persist middleware)
- [react-select](https://react-select.com/) for sorting dropdown

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/trekbag.git
   cd trekbag

   ```

2. Install dependencies:
   npm install

# or

yarn install

3. Start the development server:
   npm run dev

# or

yarn dev

4. Open http://localhost:5173 in your browser.

Project Structure

src/
components/ # React components (UI)
lib/ # Constants and utility files
store/ # Zustand store for state management
[index.css](http://_vscodecontentref_/0) # Global styles
[main.jsx](http://_vscodecontentref_/1) # App entry point

Customization
Initial Items: Edit src/lib/contants.js to change the default packing list.
Styling: Modify src/index.css for custom styles.
Scripts
npm run dev – Start the development server
npm run build – Build for production
npm run preview – Preview the production build
npm run lint – Run ESLint
License
MIT

Made with ❤️ by Gihan Ubayawardana
