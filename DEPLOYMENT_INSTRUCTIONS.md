# Energiq Wellness Questionnaire - Deployment Instructions

## Overview
This is a professional 6-step wellness questionnaire form for Energiq with digital signature capability, built with React and Tailwind CSS.

## Free Hosting & Form Collection Setup

### 1. Deploy to Netlify (FREE)
1. **Create Netlify Account**: Go to [netlify.com](https://netlify.com) and sign up for free
2. **Deploy from GitHub**:
   - Push your code to a GitHub repository
   - Connect your GitHub account to Netlify
   - Select your repository and deploy
3. **Enable Netlify Forms**:
   - In your Netlify dashboard, go to Site Settings > Forms
   - Enable form detection
   - Your form will automatically collect responses

### 2. Alternative: Deploy to Vercel (FREE)
1. **Create Vercel Account**: Go to [vercel.com](https://vercel.com)
2. **Connect GitHub**: Import your repository
3. **For form collection**: Use Vercel's built-in form handling or integrate with external services

### 3. Form Response Collection (FREE Options)

#### Option A: Netlify Forms (Recommended - FREE)
- **Automatic Setup**: Forms are detected automatically
- **View Responses**: Netlify Dashboard > Forms > wellness-questionnaire
- **Email Notifications**: Set up in Netlify Dashboard
- **Export Data**: Download as CSV from dashboard
- **Free Tier**: 100 submissions/month

#### Option B: Formspree (FREE Alternative)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form endpoint
3. Replace the form action URL in the code
4. **Free Tier**: 50 submissions/month

#### Option C: Google Forms Integration
1. Create a Google Form with matching fields
2. Use Google Apps Script to receive webhook data
3. Responses stored in Google Sheets (unlimited & free)

## Sharing the Form with Clients

### Direct Link Sharing
- **Your Form URL**: `https://your-site-name.netlify.app`
- **Custom Domain**: Set up custom domain in Netlify (optional)

### Email Integration
```html
<a href="https://your-site-name.netlify.app" 
   style="background-color: #b45309; color: white; padding: 12px 24px; 
          text-decoration: none; border-radius: 6px;">
   Complete Your Wellness Questionnaire
</a>
```

### Messenger Apps
- **WhatsApp**: Share direct link
- **Facebook Messenger**: Share as link preview
- **SMS**: Include shortened URL (use bit.ly or tinyurl)

### QR Code Generation
1. Use [qr-code-generator.com](https://www.qr-code-generator.com)
2. Enter your form URL
3. Download QR code for print materials

## Mobile Optimization
- ✅ Fully responsive design
- ✅ Touch-friendly interface
- ✅ Fast loading on mobile networks
- ✅ Progressive web app capabilities

## Data Privacy & Security
- ✅ HTTPS encryption (automatic with Netlify/Vercel)
- ✅ No data stored in browser
- ✅ Secure form submission
- ✅ Client declaration included

## Customization Options
- **Branding**: Logo and colors already integrated
- **Questions**: Modify step components as needed
- **Styling**: Update Tailwind classes for different appearance
- **Additional Steps**: Add more steps by updating the form structure

## Support & Maintenance
- **Form Analytics**: Available in Netlify dashboard
- **Response Management**: Export/download responses as needed
- **Updates**: Push changes to GitHub for automatic deployment
- **Backup**: Responses automatically backed up by hosting provider

## Cost Breakdown (All FREE)
- **Hosting**: Netlify/Vercel free tier
- **Form Collection**: Netlify Forms (100/month) or Formspree (50/month)
- **Custom Domain**: Optional (~$10-15/year)
- **SSL Certificate**: Included free
- **Email Notifications**: Included free

Your wellness questionnaire is now ready for professional use with zero monthly costs!