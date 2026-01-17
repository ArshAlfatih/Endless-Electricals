# 📊 Google Sheets Integration Guide - Auto-Update Products

## Overview
Your website will now automatically sync with a Google Sheet! Whenever you add, edit, or update products in the sheet, the website updates in **1-2 minutes** automatically.

---

## ✅ Step 1: Create Your Google Sheet

### Option A: Use Our Template (Recommended)
1. Open: https://docs.google.com/spreadsheets/d/1yEkP5jkxY2XrZ3p9qWvYzZ_example/edit?usp=sharing
2. Click **File** → **Make a copy**
3. Name it something like "Endless Electricals Products"
4. The copy is now YOUR sheet to edit!

### Option B: Create From Scratch
1. Go to https://sheets.google.com
2. Click **+ New** → **Spreadsheet**
3. Name it "Endless Electricals Products"
4. Add these column headers in Row 1:

```
id | name | brand | category | price | image | rating | reviews | seoKeywords
```

---

## 📋 Column Details

| Column | What to Enter | Example |
|--------|---------------|---------|
| **id** | Unique number (1, 2, 3...) | 1 |
| **name** | Product name | Polycab 1.5mm Wire |
| **brand** | Brand name | Polycab |
| **category** | Must be one of: wires, lights, switches, cables, fans | lights |
| **price** | Price in INR (numbers only) | 4500 |
| **image** | Full image URL | https://images.unsplash.com/... |
| **rating** | Star rating 0-5 | 4.8 |
| **reviews** | Number of reviews | 124 |
| **seoKeywords** | Comma-separated keywords | Polycab wire, copper wire |

---

## 🔗 Step 2: Publish Sheet as CSV

This makes your sheet readable by the website.

### Instructions:
1. In your Google Sheet, click **File** → **Publish to the web**
2. Make sure:
   - **Link** tab is selected
   - Format shows: "Comma-separated values (.csv)"
   - Click **Publish**
3. Copy the published link (it looks like):
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv
   ```

---

## 🌐 Step 3: Add Sheet Link to Website

Now you need to tell the website where to find your sheet.

### Method: Edit config.js

1. Open your website files folder
2. Find file: **sheet-config.js** (in same folder as script.js)
3. Open it in a text editor
4. You'll see:
   ```javascript
   // ===== EDIT THIS PART =====
   const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv';
   const ENABLE_GOOGLE_SHEET = true;  // Set to false to disable
   // ==========================
   ```

5. Replace `YOUR_SHEET_ID` with your published CSV link
6. Save the file
7. Refresh your website - it should load products from the sheet!

**Example of what it should look like:**
```javascript
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1ABCd-xyz123/export?format=csv';
const ENABLE_GOOGLE_SHEET = true;
```

---

## 📝 How to Edit Products

### To Add a New Product:
1. Open your Google Sheet
2. Click empty row below last product
3. Fill in all columns:
   - id: Next number
   - name: Product name
   - brand: Brand name
   - category: One of: wires, lights, switches, cables, fans
   - price: Just the number (e.g., 5000 not ₹5000)
   - image: Full URL starting with https://
   - rating: Number 0-5 (e.g., 4.8)
   - reviews: Just the number (e.g., 124)
   - seoKeywords: Comma separated (e.g., "Havells wire, house wire")

4. The website updates automatically within 1-2 minutes!

### To Edit Existing Product:
1. Find the row in Google Sheet
2. Click the cell and edit
3. Save (it auto-saves)
4. Website updates in 1-2 minutes

### To Delete a Product:
1. Select the entire row
2. Right-click → **Delete row**
3. Website updates automatically

---

## 🖼️ Image URLs - Where to Get Them

### Free Image Websites:

**Unsplash (Recommended)**
- Go to: https://unsplash.com
- Search for your product (e.g., "electrical wire")
- Click image you like
- Right-click → Copy image address
- Paste in "image" column

**Pexels**
- Go to: https://pexels.com
- Find image
- Right-click → Copy image link
- Paste in "image" column

**Pixabay**
- Go to: https://pixabay.com
- Find image
- Right-click → Copy image URL
- Paste in "image" column

**Your Own Server**
- If you upload images yourself
- Use direct URL: `https://yoursite.com/images/product.jpg`

### Image Size Tips:
- Minimum: 400×400px
- Ideal: 600×600px or larger
- Format: JPG or PNG

---

## ⚙️ How Auto-Update Works

**Timeline:**
- You edit Google Sheet
- You press Enter/Save
- Website checks sheet every 1-2 minutes
- Website automatically displays updated products
- No manual refresh needed!

**Why 1-2 minutes delay?**
- The website caches data for 1-2 minutes for speed
- Then it re-fetches from your sheet
- This is normal and optimal

---

## 🔒 Security & Sharing

### Making Your Sheet Shareable:

1. Click **Share** button (top right of sheet)
2. Set to **"Anyone with the link can view"** (don't use "Public on the web")
3. Copy the link
4. Only the CSV export URL is needed for the website

**Important:** 
- Never share the direct sheet editing link
- Only share the published CSV export link
- The CSV export is read-only for the website

---

## ❌ Categories Must Match Exactly

Use ONLY these category names (lowercase, exact spelling):

```
wires      - Electrical wires and cables
lights     - Lights, bulbs, panels
switches   - Light switches and plates
cables     - Power cables
fans       - Ceiling fans
```

❌ Don't use: "Wire", "Lights ", "Switch", "Electrical"
✅ Use: "wires", "lights", "switches", "cables", "fans"

---

## 🧪 Testing Your Setup

1. Add a test product to your Google Sheet
2. Wait 1-2 minutes
3. Refresh your website
4. New product should appear!

If it doesn't appear:
- Check image URL is valid (test in browser)
- Check category spelling (must be wires/lights/switches/cables/fans)
- Check price is a number only
- Check rating is 0-5

---

## 📱 Mobile Friendly

The auto-update works on:
- ✅ Desktop
- ✅ Mobile  
- ✅ Tablets
- ✅ All devices

Just refresh the page to see latest products!

---

## 🔄 To Disable Google Sheet (Go Back to JSON)

If you want to use the old `products.json` instead:

1. Edit **sheet-config.js**
2. Change: `const ENABLE_GOOGLE_SHEET = false;`
3. Save
4. Website goes back to using products.json

---

## 💡 Pro Tips

1. **Batch Updates**: You can edit multiple products at once in the sheet
2. **Images**: Copy-paste image URLs works - no need to upload files
3. **Backup**: Keep a backup of your sheet (File → Make a copy)
4. **Test Changes**: Add test products with (TEST) in name, then delete after testing
5. **URL Format**: Always use `https://` not `http://` for images

---

## 🆘 Troubleshooting

### Products not updating?
- ✅ Check if ENABLE_GOOGLE_SHEET = true in sheet-config.js
- ✅ Wait 2 minutes for cache to clear
- ✅ Refresh browser page (Ctrl+Shift+R for hard refresh)
- ✅ Check browser console for errors (F12 → Console tab)

### Images not showing?
- ✅ Check URL starts with `https://`
- ✅ Test URL in new tab - should show image
- ✅ Use different image if URL is broken

### Products showing wrong?
- ✅ Check category spelling exactly matches list
- ✅ Check price is number only (no ₹ symbol)
- ✅ Check rating is 0-5
- ✅ Check no extra spaces in cells

### Still having issues?
- Check browser console: Press F12, click Console tab
- Look for error messages (red text)
- Share error message for support

---

## 📞 Support

If you need help:
1. Check the troubleshooting section above
2. Verify all column headers match exactly
3. Check category names (wires, lights, switches, cables, fans)
4. Test with one product first before adding many

You now have a **fully dynamic website** that updates automatically! 🎉
No coding required - just edit the Google Sheet and the site updates!
