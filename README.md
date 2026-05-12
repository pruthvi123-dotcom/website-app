# DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED - Website

## Project Overview
This is a modern, responsive advertising agency website for DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED, based in Bangalore, Karnataka, India.

## Features Included

✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
✅ **Dark Theme with Gradients** - Modern, professional appearance
✅ **Smooth Animations** - Fade-in effects and transitions
✅ **All Required Pages**:
  - Home (Hero section with features)
  - About Us (Company information)
  - Services (6 service offerings)
  - Portfolio (6 project showcases)
  - Contact (Contact form + WhatsApp button + Google Maps)

✅ **Company Details**:
  - Company Name: DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED
  - Location: No. 176, 2nd Main Road, 4th Cross Road,13th Block,  
     Nagarabhavi 2nd Stage, Bengaluru -560072.

  - Email:disipl816@gmail.com 
  - Phone: 7022662105 

## File Structure
```
company website/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── portfolio.html          # Portfolio/Projects page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet (all styling)
├── script.js               # JavaScript for animations & interactivity
├── server.py               # Python HTTP server
└── README.md               # This file
```

## How to Run Locally

### Option 1: Python HTTP Server (Recommended - Already Running)
```bash
python server.py
```
Then open: `http://localhost:8000`

### Option 2: Using Python (Direct)
```bash
cd "path/to/company website"
python -m http.server 8000
```

### Option 3: Using Node.js
```bash
npx http-server
```

## Publishing to www.deekshith.com

### Step 1: Choose a Hosting Provider
Popular options:
- **Bluehost** (Easy setup, cPanel)
- **GoDaddy** (Domain + Hosting bundle)
- **Namecheap** (Affordable)
- **AWS** (Scalable)
- **Netlify** (Free tier available)
- **Vercel** (Free tier available)

### Step 2: Purchase Domain
1. Go to your chosen provider
2. Search for `deekshith.com`
3. Purchase the domain

### Step 3: Upload Files
Choose your method based on provider:

**Via FTP/SFTP:**
- Use FileZilla or similar FTP client
- Connect to your hosting server
- Upload all files to `public_html` or `www` folder

**Via cPanel File Manager:**
- Login to cPanel
- Use File Manager
- Upload all files to `public_html`

**Via Git/GitHub (For Netlify/Vercel):**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 4: Configure DNS
- Point your domain's DNS to the hosting provider's nameservers
- This usually takes 24-48 hours to propagate

### Step 5: Setup SSL Certificate
- Most hosts provide free SSL via Let's Encrypt
- Enable HTTPS in your hosting control panel

## Customization Guide

### Change Company Information
Edit the following files:
- **contact.html** - Update phone, email, address
- **styles.css** - Can modify colors and gradients
- **services.html** - Add or remove services

### Update Portfolio Projects
Edit **portfolio.html**:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="your-image-url" alt="Project Title">
        <div class="portfolio-overlay">
            <h3>Project Title</h3>
            <p>Project Description</p>
            <span class="category">Category</span>
        </div>
    </div>
</div>
```

### Change WhatsApp Number
In **contact.html**:
```html
<a href="https://wa.me/919876543210" target="_blank" class="whatsapp-btn">
```
Replace `919876543210` with your WhatsApp number (country code + number, no + or spaces)

### Modify Colors
In **styles.css**, look for:
- Primary Color: `#4ecdc4` (Turquoise)
- Secondary Color: `#ff6b6b` (Red)
- Background: `linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)` (Dark gradient)

## Performance Tips

1. **Optimize Images**: Use compressed/optimized images
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minify CSS/JS**: For production
4. **Enable Caching**: In your hosting control panel
5. **CDN**: Use a CDN for faster image delivery

## Maintenance

### Regular Updates
- Update portfolio projects monthly
- Keep contact information current
- Monitor contact form submissions
- Update services as they evolve

### SEO Optimization
Add to HTML `<head>`:
```html
<meta name="description" content="DEEKSHITH INFRA SOLUTIONS - Leading Advertising Agency in Bangalore">
<meta name="keywords" content="advertising, digital marketing, branding, Bangalore">
<meta name="author" content="DEEKSHITH INFRA SOLUTIONS">
```

### Analytics
Add Google Analytics to track visitors:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## Mobile Responsiveness
Website is fully responsive. Test on:
- Chrome DevTools (F12) → Toggle device toolbar
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tablet devices

## Contact Form
Currently shows alert on submission. For production, integrate with:
- **Formspree** (Free email form)
- **EmailJS** (Free tier)
- **Your own backend** (Node.js, PHP, etc.)

## Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## Troubleshooting

**Images not loading?**
- Check image URLs are accessible
- Use absolute URLs or relative paths
- Ensure images are in correct folder

**Styles not applying?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check file paths in HTML
- Verify CSS file is in same directory

**WhatsApp button not working?**
- Verify phone number format (include country code)
- Test URL: `https://wa.me/PHONENUMBER`

## Next Steps

1. ✅ Review all pages and content
2. ✅ Test on mobile devices
3. ✅ Get domain name (www.deekshith.com)
4. ✅ Choose hosting provider
5. ✅ Upload files to hosting
6. ✅ Configure email forms
7. ✅ Setup SSL certificate
8. ✅ Go live!

## Support & Questions
For updates or modifications to the website, contact your web developer.

---

**Created**: 2024
**Last Updated**: May 5, 2026
**Status**: ✅ Ready for Production
