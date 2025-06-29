# Avneesh Chaurasia Portfolio

## Overview

This is a modern, responsive portfolio website showcasing Avneesh Chaurasia's journey as a Computer Science Engineering student specializing in AI/ML at Mumbai University. The application is built with a full-stack architecture featuring a React frontend with TypeScript and a Node.js backend with Express, utilizing PostgreSQL for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Comprehensive set of reusable components using Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for consistent type safety across the stack
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL with WebSocket support
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with profile photo and call-to-action buttons
2. **About Section**: Personal story and learning journey with interactive cards
3. **Skills Section**: Technical skills organized by categories with visual badges
4. **Projects Section**: Showcase of AI/ML projects (currently showing "Coming Soon")
5. **Education Section**: Academic background with CGPA and coursework
6. **Experience Section**: Current status seeking internship opportunities
7. **Contact Section**: Functional contact form with database storage

### UI Components
- Responsive navigation header with smooth scrolling
- Professional footer with social links
- Toast notifications for user feedback
- Form validation with error handling
- Mobile-optimized design with collapsible navigation

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, message, and timestamp

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, and message
2. Frontend validates data using Zod schema
3. Form data is sent to `/api/contact` endpoint via POST request
4. Backend validates and inserts data into PostgreSQL database
5. Success/error response is sent back to frontend
6. Toast notification displays result to user

### Static Content Delivery
- Vite serves optimized static assets in production
- Images are served from the attached_assets directory
- CSS and JavaScript are bundled and minified for performance

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development features

## Deployment Strategy

### Replit Hosting
- Application is configured to run on Replit with automatic deployment
- Development and production builds are handled by Vite
- Environment variables manage database connections and configuration
- Public URL is automatically generated for sharing with employers

### Build Process
1. **Development**: `npm run dev` starts both frontend and backend in development mode
2. **Build**: `npm run build` creates optimized production bundles
3. **Production**: `npm start` runs the production server
4. **Database**: `npm run db:push` applies schema changes to the database

### Configuration Files
- **vite.config.ts**: Frontend build configuration with path aliases
- **tailwind.config.ts**: Styling configuration with custom theme variables
- **drizzle.config.ts**: Database connection and migration settings
- **tsconfig.json**: TypeScript configuration for the entire project

## Changelog
- June 29, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.