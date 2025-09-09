# 🚀 Easy Netlify Deployment Guide

## Quick Setup (5 minutes!)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in (or create free account)
2. Click "New repository" (green button)
3. Name it: `wellness-form` 
4. Make it Public
5. Click "Create repository"

### Step 2: Upload Your Code
1. Download your project as ZIP
2. Extract the ZIP file
3. Open terminal/command prompt in the extracted folder
4. Run these commands:
```bash
git init
git add .
git commit -m "Initial wellness form"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wellness-form.git
git push -u origin main
```

### Step 3: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) 
2. Sign up with GitHub account (free)
3. Click "New site from Git"
4. Choose GitHub → Select your `wellness-form` repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Step 4: Custom Domain (Optional)
1. In Netlify dashboard → Site settings → Domain management
2. Add custom domain: `hello.energiq.nz`
3. Follow DNS instructions

## ✅ Form Submissions
- Forms automatically go to your Netlify dashboard
- Set up email notifications in Forms settings
- Download submissions as CSV

## 🎯 What's Included
- ✅ Gender identity field added
- ✅ Netlify Forms integration (no coding needed)
- ✅ Mobile responsive design
- ✅ Progress tracking
- ✅ Professional styling

## 🔧 No Technical Skills Needed!
Your form will be live at: `https://YOUR_SITE_NAME.netlify.app`

**That's it!** Your wellness form is now live and collecting submissions! 🎉