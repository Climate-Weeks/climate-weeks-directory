# Climate Weeks

Welcome to Climate Weeks! 🌍 This is a collaborative directory of climate action events happening around the world. Our goal is to help connect climate leaders, innovators, and concerned citizens with important climate events in their region.

## Contributing

We welcome and encourage contributions! Whether you're adding a new climate week, updating event details, or improving the codebase, your help makes this resource better for everyone.

### Adding or Updating Events

Events are stored in `src/data/climateWeeks.js`. To add a new event:

1. Fork the repository
2. Add your event to the `climateWeeks` array following this format:

```javascript
{
  city: "City Name",
  slug: "city-name", // URL-friendly version of the city name
  eventName: "Event Name",
  website: "https://event-website.com",
  startDate: "YYYY-MM-DD", // If known
  endDate: "YYYY-MM-DD",   // If known
  months: ["Month"], // Array of months the event spans
  organizers: ["Organizer Name"],
  description: "A detailed description of the event...",
  imageUrl: "https://images.pexels.com/..." // Pexels image URL
}
```

If dates aren't confirmed yet, use:
```javascript
{
  // ... other fields ...
  isTBD: true,
  displayDate: "TBD (Month, YYYY)",
  // No startDate/endDate needed
}
```

### Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Development Guidelines

- This project uses React 18 with Vite for fast development
- Styling is done with Tailwind CSS
- We use ESLint for code quality - run `npm run lint` before committing
- React Router handles navigation
- Images should be from Pexels and properly credited

## Deployment to Cloudflare Pages

1. Fork this repository to your GitHub account

2. Log in to Cloudflare Pages and create a new project

3. Connect your GitHub repository

4. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 20.x

5. Configure environment variables if needed

6. Deploy! Cloudflare Pages will automatically deploy your site and provide a URL

### Automatic Deployments

- Every push to `main` will trigger a production deployment
- Pull requests will create preview deployments

## License

This project is open source - please see the LICENSE file for details.

## Contact

Have questions? Reach out to us:
- Email: alec@climatetechcities.com
- GitHub: Open an issue or pull request
- LinkedIn: [@alecturnbull](https://linkedin.com/in/alecturnbull)

Let's work together to make climate action more accessible and impactful! 🌱