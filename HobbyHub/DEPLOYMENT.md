# Deployment Guide

This guide will help you deploy your portfolio website and prepare it for sharing with potential employers.

## 🚀 Quick Deploy on Replit

Your portfolio is already set up to run on Replit. To make it publicly accessible:

1. **Make sure your project is running**
   - Click the "Run" button or use the "Start application" workflow
   - Your site will be available at `https://your-repl-name.your-username.replit.app`

2. **Get your public URL**
   - Copy the URL from the webview window
   - This is the link you can share with employers

## 📁 GitHub Repository Setup

To upload your code to GitHub:

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository"
3. Name it `portfolio-website` or `avneesh-portfolio`
4. Make it public so employers can see your code
5. Don't initialize with README (we already have one)

### Step 2: Upload Your Code
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial portfolio website with React and Node.js"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Update Links
After uploading to GitHub, update these files:
- `README.md`: Replace GitHub URL with your actual repository URL
- Add your live Replit URL to the README demo section

## 🌐 Alternative Deployment Options

### Option 1: Vercel (Recommended for Frontend)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables for database

### Option 2: Railway (Full-stack)
1. Connect GitHub repository
2. Railway will auto-detect Node.js app
3. Add PostgreSQL database service
4. Set environment variables

### Option 3: Render
1. Connect GitHub repository
2. Choose "Web Service"
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`

## 📝 Environment Variables

For production deployment, you'll need:

```
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
PORT=5000
```

## 🔧 Production Optimizations

### Database Setup
```bash
# Push database schema to production
npm run db:push
```

### Build Optimization
```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📋 Pre-Deployment Checklist

- [ ] All personal information is accurate
- [ ] Contact form is working
- [ ] All navigation links work properly
- [ ] Images are loading correctly
- [ ] Site is responsive on mobile devices
- [ ] Database connection is configured
- [ ] Environment variables are set

## 🎯 Sharing Your Portfolio

### For Job Applications
1. **Live URL**: Share your Replit or deployed site URL
2. **GitHub Repository**: Include link in your resume/applications
3. **LinkedIn**: Add to your profile projects section

### Professional Links
- **Portfolio Website**: `https://your-portfolio-url.com`
- **Source Code**: `https://github.com/Avneesh-Chaurasia/portfolio-website`
- **LinkedIn**: `https://www.linkedin.com/in/avneesh-chaurasia/`
- **Email**: `chaurasiaavneesh1@gmail.com`

## 🛠️ Maintenance

### Regular Updates
- Add new projects as you complete them
- Update skills as you learn new technologies
- Keep certifications section current
- Update your profile photo when needed

### Monitoring
- Check that contact form submissions are working
- Monitor site performance and loading times
- Ensure all external links are working

## 🔒 Security Best Practices

- Never commit sensitive data (API keys, passwords)
- Use environment variables for all secrets
- Keep dependencies updated regularly
- Use HTTPS for all production deployments

---

Your portfolio is now ready for deployment! The combination of a live website and accessible source code on GitHub will demonstrate your technical skills to potential employers.