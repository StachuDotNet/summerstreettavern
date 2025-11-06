# Summer Street Tavern Website

A modern, responsive website for Summer Street Tavern in Barre, Vermont. Built with React, TypeScript, and Bulma CSS framework.

## Features

- **Home Page**: Welcome section with information about the tavern, amenities, and location details
- **Events & Music**: Calendar page showing upcoming live music, karaoke nights, and special events
- **Pool Tournament**: Dedicated page for weekly pool tournament information
- **Responsive Design**: Mobile-friendly layout using Bulma CSS framework
- **Easy to Edit**: Simple TypeScript data structures for updating content

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Bulma** - CSS framework for responsive design
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Editing Content

### Adding/Editing Events

Edit the events array in `src/pages/Events.tsx`:

```typescript
const [events] = useState<Event[]>([
  {
    id: '1',
    title: "Brew's Brothers Live",
    date: '2025-11-20',
    time: '6:00 PM',
    description: 'Event description here...',
    type: 'music', // 'music' | 'karaoke' | 'special' | 'tournament'
  },
  // Add more events...
]);
```

### Updating Pool Tournament Schedule

Edit the tournaments array in `src/pages/PoolTournament.tsx`:

```typescript
const [tournaments] = useState<PoolTournamentType[]>([
  {
    id: '1',
    day: 'Thursday',
    time: '7:00 PM',
    format: '8-Ball Singles',
    entryFee: '$10',
    prize: 'Cash Prize Pool',
  },
  // Add more tournaments...
]);
```

### Changing Contact Information

Edit the Footer component in `src/components/Footer.tsx` to update:
- Address
- Phone number
- Email
- Facebook link

### Customizing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --tavern-primary: #d4af37;  /* Gold color */
  --tavern-dark: #2c1810;     /* Dark brown */
  --tavern-accent: #8b4513;   /* Saddle brown */
}
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer with contact info
├── pages/
│   ├── Home.tsx            # Home page
│   ├── Events.tsx          # Events and music calendar
│   └── PoolTournament.tsx  # Pool tournament page
├── types/
│   └── index.ts            # TypeScript type definitions
├── App.tsx                 # Main app component with routing
├── main.tsx                # App entry point
└── index.css               # Global styles and CSS variables
```

## Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`:

```typescript
<Route path="/new-page" element={<NewPage />} />
```

3. Add a link in the Navbar component (`src/components/Navbar.tsx`)

## Bulma Documentation

This site uses Bulma CSS framework. For styling reference:
- [Bulma Documentation](https://bulma.io/documentation/)
- [Bulma Components](https://bulma.io/documentation/components/)

## Support

For questions or issues with the website:
- Email: Summerstreettavern@gmail.com
- Phone: (802) 622-0055

## License

Copyright © 2025 Summer Street Tavern. All rights reserved.
