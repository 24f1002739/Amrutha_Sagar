# 🔑 Formspree Setup Instructions

Quick reference for adding your Formspree Form IDs to the project.

## Step 1: Get Your Formspree IDs

1. Visit: https://formspree.io
2. Sign in with GitHub
3. For each form, copy the **Form ID**
4. IDs look like: `abc123def456789`

---

## Step 2: Add IDs to Your Code

### For Contact Form

**File**: `frontend/src/components/Contact.js`

Find this line (around line 10):
```javascript
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
```

Replace with your actual ID:
```javascript
const FORMSPREE_ID = "abc123def456789";
```

### For Party Orders

**File**: `frontend/src/components/PartyOrders.js`

Find this line (around line 8):
```javascript
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
```

Replace with your actual ID:
```javascript
const FORMSPREE_ID = "xyz789abc123456";
```

---

## Step 3: Test Locally

```bash
cd frontend
npm install
npm start
```

Visit: `http://localhost:3000`

1. Fill out Contact form
2. Click Submit
3. Check your email for confirmation

---

## Step 4: Push to GitHub

```bash
git add .
git commit -m "Add Formspree IDs for email notifications"
git push
```

Auto-deployment triggers automatically! ✅

---

## ✅ Verification

After deployment:
1. Visit: `https://www.amruthasagar.com`
2. Test Contact form
3. Test Party Orders form
4. Check email inbox for notifications

---

## 🐛 If Forms Don't Work

1. Verify Formspree ID is correct (check copy-paste)
2. Check browser console for errors (F12)
3. Visit Formspree dashboard to see submissions
4. Ensure both forms are created in Formspree

---

**Your website is ready to receive customer inquiries! 🎉**
