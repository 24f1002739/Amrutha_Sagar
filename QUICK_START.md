# ⚡ Quick Start - GitHub Deployment (5 minutes)

**Fast track to deploy your website with one command!**

---

## 🚀 One-Time Setup (5 minutes)

### 1️⃣ Setup Formspree (2 minutes)
```
✓ Go to formspree.io
✓ Sign up with GitHub
✓ Create 2 forms: "Contact" and "Party Orders"
✓ Copy Form IDs
✓ Paste IDs in Contact.js and PartyOrders.js
```

### 2️⃣ Push to GitHub (2 minutes)
```bash
cd e:\Amrutha_Sagar

# First time only:
git init
git remote add origin https://github.com/YOUR_USERNAME/amrutha-sagar.git
git branch -M main

# Add and push
git add .
git commit -m "Initial deployment setup"
git push -u origin main
```

### 3️⃣ Enable GitHub Pages (1 minute)
```
✓ Go to your repo → Settings → Pages
✓ Select: Branch "main", Folder "/ (root)"
✓ Copy the GitHub Pages URL
✓ (Optional) Add custom domain
```

---

## ✅ Auto-Setup Complete!

**GitHub Actions automatically:**
- Installs dependencies ✅
- Builds your React app ✅
- Deploys to GitHub Pages ✅
- Updates live website ✅

All happen automatically on every push! 🎉

---

## 📝 Making Updates (1 minute each)

```bash
# Make changes to files...

# Then run:
git add .
git commit -m "Your change description"
git push

# Done! Website auto-updates in 1-2 minutes ✅
```

---

## 🌐 Your Website URLs

| URL | What It Is |
|-----|-----------|
| `https://YOUR_USERNAME.github.io/amrutha-sagar` | GitHub Pages (default) |
| `https://www.amruthasagar.com` | Custom domain (optional) |

---

## 📞 What Works Automatically

✅ Contact form → sends email
✅ Party orders → sends email  
✅ Gallery → displays images
✅ Reviews → shows customer feedback
✅ Responsive design → works on phones/tablets/desktop
✅ HTTPS → secure connection
✅ Auto-deploys on every push

---

## 🔍 Files Already Setup

| File | What It Does |
|------|-------------|
| `.github/workflows/deploy.yml` | Auto-deploys on push |
| `.gitignore` | Prevents committing unnecessary files |
| `Contact.js` | Formspree integration |
| `PartyOrders.js` | Formspree integration |
| `package.json` | Build scripts |

---

## 💡 Common Questions

**Q: How do I update the website?**
A: Make changes locally → `git add . → git commit → git push` → Done!

**Q: Where's my backend?**
A: Not needed! Formspree handles all emails automatically.

**Q: Why is my domain still not working?**
A: DNS takes 5-10 minutes to propagate. Wait and refresh.

**Q: Do I need to run npm deploy?**
A: No! GitHub Actions does it automatically.

**Q: Why is my image not showing?**
A: Check the path and ensure file is in `frontend/public/images/`

---

## 🎯 Next Steps

1. ✅ Create Formspree account
2. ✅ Get Form IDs
3. ✅ Update Contact.js and PartyOrders.js
4. ✅ Push to GitHub
5. ✅ Wait 2 minutes
6. ✅ Website goes live!

---

## 📚 Detailed Guides

For more detailed info, see:
- `DEPLOYMENT_GUIDE.md` - Complete deployment guide
- `FORMSPREE_SETUP.md` - Formspree ID setup
- `README.md` - Project overview

---

**That's it! Your restaurant website is now live with email notifications! 🎉**
