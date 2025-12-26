# Tvara

A Next.js project featuring interactive animations and AI integration with Google's Gemini.

## What I've Done

### Project Setup
- Initialized a Next.js 16 project with TypeScript
- Configured Tailwind CSS for styling
- Set up ESLint for code linting
- Added PostCSS configuration

### Dependencies Installed
- **@google/genai**: For integrating Google's Gemini AI
- **motion**: Framer Motion for animations
- **lucide-react**: Icon library
- **class-variance-authority**, **clsx**, **tailwind-merge**: Utility for conditional styling
- **tw-animate-css**: Additional animations

### Components Created

#### BlurText Component
- Animated text component that blurs in from top or bottom
- Supports animation by words or letters
- Uses Framer Motion for smooth transitions
- Configurable delay, direction, and easing

#### MagnetLines Component
- Interactive grid of lines that rotate based on mouse position
- Customizable rows, columns, colors, and sizes
- Creates a magnetic effect following the cursor

### Pages

#### Home Page (`/`)
- Displays the BlurText component with sample text
- Shows the MagnetLines component in a grid
- Includes a link to the Gemini AI playground

#### Gemini Page (`/gemini`)
- Clean UI for interacting with Gemini AI
- Textarea for input prompts
- Button to generate responses
- Displays AI responses in a styled card

### API Routes

#### `/api/gemini`
- POST endpoint that accepts a prompt
- Uses Google GenAI SDK to generate content
- Returns the AI response as JSON
- Requires `GEMINI_API_KEY` environment variable

### Configuration
- TypeScript configuration for Next.js
- Tailwind CSS setup with custom utilities
- ESLint configuration for code quality

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file with:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features
- Interactive animations on the home page
- AI-powered chat interface with Gemini
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Modern React with hooks and client components