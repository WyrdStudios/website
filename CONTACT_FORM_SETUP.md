# Contact Form Setup Guide

This guide explains how to deploy your contact form with a working backend that sends emails.

## How It Works

The contact form uses **Netlify Functions** - serverless functions that run on-demand without maintaining a server. Here's the flow:

1. User fills out form → JavaScript sends data to Netlify function
2. Netlify function receives data → Sends email via Nodemailer
3. User gets confirmation → You receive the email

## Deployment Options

### Option 1: Deploy to Netlify (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add contact form with backend"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "New site from Git"
   - Select your repository
   - Deploy settings will auto-detect

3. **Set Environment Variables**
   - In Netlify dashboard, go to Site Settings → Environment Variables
   - Add these variables:
     - `EMAIL_USER`: your-gmail@gmail.com
     - `EMAIL_PASS`: your-gmail-app-password

4. **Deploy**
   - Netlify will automatically build and deploy your site
   - Your contact form will work immediately!

### Option 2: Deploy to Vercel

1. **Push to GitHub** (same as above)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the setup

3. **Set Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add the same email variables

### Option 3: GitHub Pages + Netlify Functions

1. **Keep your site on GitHub Pages**
2. **Deploy only the functions to Netlify**
3. **Update the fetch URL** in your HTML to point to your Netlify function

## Email Setup

### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use the app password** as `EMAIL_PASS` environment variable

### Alternative Email Services

You can modify `netlify/functions/contact.js` to use:
- **SendGrid** (free tier available)
- **Mailgun** (free tier available)
- **AWS SES** (very cheap)

## Testing

1. **Local Testing**: Use `netlify dev` command
2. **Production Testing**: Deploy and test the live form
3. **Check Netlify Function Logs**: Monitor for any errors

## Security Features

- ✅ **Input validation** - Required fields checked
- ✅ **Rate limiting** - Netlify provides basic protection
- ✅ **Environment variables** - Sensitive data not in code
- ✅ **Error handling** - Graceful failure handling

## Troubleshooting

### Common Issues:

1. **"Function not found"**
   - Check `netlify.toml` configuration
   - Ensure functions are in `netlify/functions/` folder

2. **"Email not sending"**
   - Verify environment variables are set
   - Check Gmail app password is correct
   - Review Netlify function logs

3. **"CORS errors"**
   - Netlify handles this automatically
   - If using custom domain, ensure it's configured

## Cost

- **Netlify Functions**: Free tier includes 125,000 invocations/month
- **Email**: Gmail is free, other services have free tiers
- **Total cost**: $0 for most small-medium sites

## Next Steps

1. Choose your deployment platform
2. Set up environment variables
3. Deploy and test
4. Monitor function logs for any issues

Your contact form will be fully functional and professional!
