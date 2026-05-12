# Deployment Guide - How to Publish to www.deekshith.com

## Quick Summary
Your website is ready to go live! Follow this guide to publish it to the internet.

## Step 1: Register Domain (www.deekshith.com)

### Recommended Registrars:
- **Namecheap** - Affordable ($5-15/year)
- **GoDaddy** - Popular (Includes email options)
- **BigRock** - Local India provider
- **HostGator** - Has domain + hosting packages

### Registration Process:
1. Visit registrar website
2. Search for "deekshith.com"
3. Check availability
4. Add to cart and checkout
5. Complete payment
6. You now own the domain for 1 year

**Cost**: ₹400-1000 per year

---

## Step 2: Choose Web Hosting

### Best Options for Small Business:

#### **Option A: Shared Hosting (Recommended for Budget)**
- **Providers**: Bluehost, HostGator, BigRock, Hostinger
- **Cost**: ₹2000-5000/year
- **Pros**: Cheap, easy setup, cPanel included
- **Cons**: Slower performance

**Recommended: Bluehost** (3-year plan: ~$2.95/month)

#### **Option B: Cloud Hosting (Better Performance)**
- **Providers**: AWS, DigitalOcean, Linode, Vultr
- **Cost**: ₹300-1000/month
- **Pros**: Fast, scalable, reliable
- **Cons**: Technical setup required

**Recommended: DigitalOcean** ($5/month)

#### **Option C: Free Static Hosting**
- **Providers**: Netlify, Vercel, GitHub Pages
- **Cost**: FREE
- **Pros**: Very easy setup
- **Cons**: Limited customization

**Recommended: Netlify** (best for beginners)

---

## Step 3: Upload Your Website

### Method 1: Using cPanel (If you chose Shared Hosting)

1. **Login to cPanel**
   - Email you'll receive credentials
   - Go to your hosting provider's login page
   - Enter your domain and password

2. **Access File Manager**
   - In cPanel, click "File Manager"
   - Navigate to `public_html` folder
   - This is where your website files go

3. **Upload Files**
   - Click "Upload"
   - Select all your files:
     - index.html
     - about.html
     - services.html
     - portfolio.html
     - contact.html
     - styles.css
     - script.js
   - Wait for upload to complete

4. **Test Website**
   - Open browser
   - Type: `www.deekshith.com`
   - Your website should appear!

### Method 2: Using FTP (Alternative)

1. **Download FTP Client**
   - FileZilla (Free)
   - WinSCP (Free)

2. **Get FTP Credentials**
   - From your hosting provider's email
   - Usually: FTP Host, Username, Password

3. **Connect in FileZilla**
   - Host: ftp.deekshith.com (or provided address)
   - Username: your username
   - Password: your password
   - Port: 21

4. **Upload Files**
   - Left side: Your computer files
   - Right side: Server folder (public_html)
   - Drag files from left to right

### Method 3: Using Netlify (Easiest)

1. **Create Netlify Account**
   - Go to netlify.com
   - Sign up with GitHub/Email

2. **Deploy Website**
   - Drag & drop your project folder OR
   - Connect your GitHub repository

3. **Connect Domain**
   - In Netlify settings
   - Add custom domain: deekshith.com
   - Update DNS records (Netlify will guide)

---

## Step 4: Configure Domain DNS

### If using Shared Hosting:

1. **Get Nameservers**
   - From hosting provider's email
   - Usually: ns1.hostingprovider.com, ns2.hostingprovider.com

2. **Login to Registrar**
   - Namecheap, GoDaddy, etc.
   - Go to Domain Management
   - Find "Nameservers" or "DNS"

3. **Update Nameservers**
   - Replace existing with hosting provider's
   - Save changes
   - **Wait 24-48 hours** for DNS to propagate

### If using Netlify:
- Netlify will provide DNS records to add
- Update A, CNAME, or NS records in registrar

---

## Step 5: Setup Email (Optional but Recommended)

### Option A: Using Hosting Provider's Email
- Usually included with shared hosting
- Create email: info@deekshith.com
- Setup in your email client (Gmail, Outlook)

### Option B: Use Gmail with Domain
- Go to Gmail
- Settings → Add another email address
- Use: info@deekshith.com
- Verify domain ownership

---

## Step 6: Setup SSL Certificate (HTTPS)

### For Shared Hosting:
- Go to cPanel
- Find "AutoSSL" or "SSL/TLS"
- Click "Install" or "Activate"
- Usually free and automatic!

### For Netlify:
- Automatic! Netlify provides free SSL

### For DigitalOcean:
```bash
sudo apt-get install certbot
sudo certbot certonly --standalone -d deekshith.com
```

---

## Step 7: Final Checks

✅ Website loads at www.deekshith.com
✅ All pages work (Home, About, Services, Portfolio, Contact)
✅ Images load properly
✅ Contact form works
✅ WhatsApp button works
✅ Website is HTTPS (green lock in browser)
✅ Mobile version works

---

## Post-Launch Maintenance

### Monthly Tasks:
- [ ] Check all links work
- [ ] Test contact form
- [ ] Update portfolio if needed
- [ ] Monitor website uptime

### Quarterly Tasks:
- [ ] Update company information
- [ ] Refresh images/content
- [ ] Check Google Analytics
- [ ] Review contact form submissions

### Yearly Tasks:
- [ ] Renew domain registration
- [ ] Renew hosting subscription
- [ ] Update SSL certificate (if not automatic)
- [ ] Backup website files

---

## Pricing Summary

| Service | Annual Cost | Provider |
|---------|------------|----------|
| Domain (deekshith.com) | ₹400-1000 | Namecheap/BigRock |
| Hosting (Shared) | ₹2000-5000 | Bluehost/HostGator |
| Email (if needed) | Included | Hosting Provider |
| SSL Certificate | FREE | Auto-included |
| **TOTAL** | **₹2400-6000/year** | |

**For Premium Option:**
- Domain: ₹400-1000
- Cloud Hosting (DigitalOcean): ₹3600-12000/year
- Email: ₹0-2000
- **TOTAL: ₹4000-15000/year**

---

## Troubleshooting

### Website shows "Not Found" error
- DNS hasn't propagated yet (wait 24-48 hours)
- Files not uploaded correctly
- Check if files are in public_html folder

### Images not showing
- Image URLs in code are broken
- Images not uploaded to hosting
- Check file names and paths

### Contact form not working
- Need backend script to handle submissions
- Use Formspree for simple solution
- Or use Email service integration

### Domain shows hosting provider's page
- Nameservers not updated
- DNS propagation in progress
- Try clearing browser cache

---

## Contact Form Setup (Important!)

Your website currently shows an alert when form is submitted.
For production, do ONE of these:

### Option 1: Formspree (Easiest)
1. Go to formspree.io
2. Sign up free
3. Add to contact.html:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Go to emailjs.com
2. Setup and get API key
3. Add JavaScript to handle submissions

### Option 3: Backend Script
- Use PHP/Node.js to handle form
- Send emails from your server

---

## Next Steps

1. ✅ Choose hosting provider
2. ✅ Register domain www.deekshith.com
3. ✅ Upload website files
4. ✅ Configure DNS
5. ✅ Setup SSL
6. ✅ Setup contact form handler
7. ✅ Test everything
8. ✅ Go live!

---

**Your website is ready to deploy!** 🚀

For support, contact your hosting provider or web developer.
