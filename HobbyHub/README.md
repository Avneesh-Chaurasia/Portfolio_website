# Avneesh Chaurasia - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science Engineering student specializing in AI/ML at Mumbai University.

## 🎯 About

This portfolio represents my learning journey in artificial intelligence and machine learning. Built with modern web technologies, it demonstrates my growing technical skills and passion for AI/ML development.

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-url.replit.app) *(Update with your actual deployment URL)*

## 📋 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Interactive Sections**: Smooth scrolling navigation
- **Contact Form**: Functional contact form with database storage
- **Professional Layout**: Clean, employer-ready presentation

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for state management
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js
- **PostgreSQL** with Drizzle ORM
- **TypeScript** for type safety

### Deployment
- **Replit** for hosting and development

## 📚 Sections

1. **Hero Section** - Introduction and professional photo
2. **About** - Personal story and learning journey
3. **Skills** - Technical skills with proficiency levels
4. **Projects** - Portfolio projects (coming soon)
5. **Education** - Academic background and certifications
6. **Experience** - Current status seeking opportunities
7. **Contact** - Get in touch form

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avneesh-Chaurasia/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Set up database**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database operations
│   └── db.ts              # Database configuration
├── shared/                 # Shared TypeScript types
│   └── schema.ts          # Database schema and validation
└── README.md              # This file
```

## 🎨 Customization

### Updating Personal Information
- Edit `client/src/components/about-section.tsx` for bio
- Update `client/src/components/hero-section.tsx` for introduction
- Modify `client/src/components/contact-section.tsx` for contact details

### Adding Projects
- Update `client/src/components/projects-section.tsx`
- Add project data to the projects array

### Styling Changes
- Colors: Edit CSS variables in `client/src/index.css`
- Components: Modify Tailwind classes throughout components

## 📧 Contact

- **Email**: chaurasiaavneesh1@gmail.com
- **LinkedIn**: [Avneesh Chaurasia](https://www.linkedin.com/in/avneesh-chaurasia/)
- **GitHub**: [Avneesh-Chaurasia](https://github.com/Avneesh-Chaurasia)

## 🎓 About Me

Third-year BE CSE(AIML) student at Mumbai University with a passion for artificial intelligence and machine learning. Currently building foundation skills in Python, data science, and AI technologies while seeking internship opportunities to apply my learning in real-world projects.

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to open an issue or reach out directly.

---

*Built with ❤️ by Avneesh Chaurasia*