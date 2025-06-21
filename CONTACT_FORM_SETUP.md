# Contact Form Setup Guide

This guide will help you set up the contact form for local testing with Resend and Supabase.

## Prerequisites

- A Resend account (free tier available)
- A Supabase project
- Node.js and npm installed

## Step 1: Set up Resend

### 1.1 Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 1.2 Get Your API Key
1. After logging in, go to the **API Keys** section in your dashboard
2. Click **Create API Key**
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the API key (starts with `re_`)
5. **Important**: Save this key securely - you won't be able to see it again

### 1.3 Add Your Domain (for production)
1. Go to **Domains** in your Resend dashboard
2. Add your domain (for local testing, this step can be skipped)
3. For local development, you can use the default Resend domain

## Step 2: Set up Supabase Project

### 2.1 Create a Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click **New Project**
4. Choose your organization
5. Fill in project details:
   - Name: `portfolio-contact-form`
   - Database Password: (create a strong password)
   - Region: Choose closest to your location
6. Click **Create new project**
7. Wait for the project to be created (takes 1-2 minutes)

### 2.2 Get Your Supabase Credentials
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **Anon public key** (starts with `eyJ`)

## Step 3: Configure Environment Variables

### 3.1 Create Local Environment File
Create a `.env` file in your project root with the following content:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace the values with your actual Supabase credentials from Step 2.2.

### 3.2 Configure Supabase Edge Function Environment Variables
1. In your Supabase dashboard, go to **Edge Functions**
2. You should see the `send-contact-email` function listed
3. Click on the function name
4. Go to the **Settings** tab
5. Add the following environment variables:

```
RESEND_API_KEY=your_resend_api_key_here
YOUR_EMAIL=akonsmith1989@gil.com
```

**Important**: 
- Replace `your_resend_api_key_here` with your actual Resend API key from Step 1.2
- The `YOUR_EMAIL` is where you'll receive contact form notifications

## Step 4: Update the Edge Function

The edge function needs to be updated with the correct email addresses. Here's the updated version:

```typescript
// The function is already configured correctly in your project
// Just make sure the environment variables are set properly
```

## Step 5: Deploy the Edge Function

### 5.1 Using Supabase CLI (Recommended)
If you have Supabase CLI installed:

```bash
# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Deploy the function
supabase functions deploy send-contact-email
```

### 5.2 Using the Dashboard (Alternative)
1. Go to **Edge Functions** in your Supabase dashboard
2. Click **Create Function**
3. Name it `send-contact-email`
4. Copy and paste the function code from `supabase/functions/send-contact-email/index.ts`
5. Click **Deploy**

## Step 6: Configure Email Addresses in the Function

Update the edge function to use your specific email addresses. The function should send:

- **Notification email**: 
  - From: `sridhanu2004@gmail.com`
  - To: `akonsmith1989@gil.com`

- **Auto-reply email**:
  - From: `sridhanu2004@gmail.com`
  - To: User's email address

## Step 7: Test the Setup

### 7.1 Start Your Development Server
```bash
npm run dev
```

### 7.2 Test the Contact Form
1. Navigate to the contact page (`/contact`)
2. Fill out the contact form with test data
3. Submit the form
4. Check for:
   - Success message on the website
   - Notification email in `akonsmith1989@gil.com`
   - Auto-reply email in the test email you used

### 7.3 Troubleshooting
If the form doesn't work:

1. **Check Browser Console**: Look for any JavaScript errors
2. **Check Supabase Logs**: 
   - Go to **Edge Functions** → `send-contact-email` → **Logs**
   - Look for error messages
3. **Verify Environment Variables**: 
   - Make sure all environment variables are set correctly
   - Check that there are no extra spaces or quotes
4. **Check Resend Dashboard**: 
   - Go to your Resend dashboard
   - Check the **Logs** section for any failed email attempts

## Step 8: Domain Verification (For Production)

### 8.1 Add Your Domain to Resend
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow the DNS verification steps

### 8.2 Update Email Addresses
Once your domain is verified, you can use:
- `noreply@yourdomain.com` for system emails
- `contact@yourdomain.com` for contact forms

## Common Issues and Solutions

### Issue 1: "Email service not configured" Error
**Solution**: Make sure `RESEND_API_KEY` and `YOUR_EMAIL` are set in Supabase Edge Function environment variables.

### Issue 2: Emails Not Being Sent
**Solution**: 
- Check your Resend API key is correct
- Verify the email addresses are valid
- Check Resend dashboard for error logs

### Issue 3: CORS Errors
**Solution**: The edge function already includes CORS headers. If you still get CORS errors, check that your Supabase URL is correct.

### Issue 4: Function Not Found
**Solution**: Make sure the edge function is deployed and the URL in your frontend matches the function name.

## Testing Checklist

- [ ] Supabase project created and configured
- [ ] Resend account created and API key obtained
- [ ] Environment variables set in `.env` file
- [ ] Environment variables set in Supabase Edge Function
- [ ] Edge function deployed successfully
- [ ] Contact form submits without errors
- [ ] Notification email received at `akonsmith1989@gil.com`
- [ ] Auto-reply email received at test email address
- [ ] Success message displayed on website

## Security Notes

1. **Never commit your `.env` file** - it's already in `.gitignore`
2. **Keep your API keys secure** - don't share them publicly
3. **Use environment variables** - never hardcode sensitive data
4. **Regularly rotate API keys** - especially for production

## Support

If you encounter any issues:
1. Check the Supabase Edge Function logs
2. Check the Resend dashboard logs
3. Verify all environment variables are correctly set
4. Test with a simple email first to ensure the service is working