# Product Engineering Operating Model Portal

Interactive web application for the Product Engineering Operating Model transformation guide.

## Tech Stack

- **Angular 17** (standalone components)
- **Tailwind CSS 3.4**
- **Angular Material 17** (Dialog component only)
- **ng2-charts + Chart.js** (Radar chart visualization)
- **Railway** hosting

## Features

- **Vision & Shift Tab**: Comparison table showing the transformation from old to new model, with a radar chart visualizing scope expansion
- **Team Structure Tab**: Interactive org chart with clickable role cards that open detail dialogs
- **E2E Lifecycle Tab**: Horizontal stepper showing the 4 phases of product lifecycle ownership
- **Managed Services Tab**: MSP oversight model with key authority points and responsibility matrix

## Development

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`

## Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/peom-portal/` directory.

## Production Deployment

```bash
npm run serve:prod
```

This serves the production build locally on port 3000 (or another available port).

## Deployment to Railway

The application is configured for automatic deployment to Railway:

1. Push code to GitHub
2. Railway auto-deploys in 1-2 minutes
3. Build command: `npm run build`
4. Start command: `npm run serve:prod`

## Content Updates

All content is hardcoded in TypeScript files under `src/app/data/`. To update content:

1. Edit the relevant `.data.ts` file in `src/app/data/`
2. Commit and push to GitHub
3. Railway auto-deploys the changes

### Data Files

- `page-config.data.ts` - Site title, intro text, footer
- `tabs.data.ts` - Tab configuration
- `comparison-items.data.ts` - Vision tab comparison table
- `chart-data.data.ts` - Vision tab radar chart data
- `role-cards.data.ts` - Structure tab org chart roles
- `lifecycle-steps.data.ts` - Lifecycle tab stepper steps
- `msp-points.data.ts` - MSP tab key authority points
- `msp-oversight-items.data.ts` - MSP tab oversight scenarios

## Project Structure

```
src/app/
├── components/           # Shared components (header, footer, nav, intro)
├── data/                # Hardcoded data files
├── models/              # TypeScript interfaces
├── pages/               # Lazy-loaded tab components
│   ├── vision-tab/
│   ├── structure-tab/
│   ├── lifecycle-tab/
│   └── msp-tab/
└── services/            # Data service (returns Observables)
```

## Future API Integration

The `DataService` is designed to make future API integration seamless:

- All methods return Observables
- Simply replace `of(DATA)` with `http.get<Type>(url)`
- No component changes needed

## License

© 2024 Product Engineering Organization. Internal Use Only.
