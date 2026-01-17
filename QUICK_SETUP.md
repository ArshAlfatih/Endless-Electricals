# ⚡ Quick Google Sheets Setup (5 Minutes)

## What You'll Do:
1. Create a Google Sheet
2. Add product data (copy-paste from existing)
3. Publish as CSV
4. Add URL to website config
5. Done! Auto-updates from now on

---

## Step 1: Create Google Sheet (1 minute)

### Option A: Copy Our Template
1. Go to: **Google Sheets** (https://sheets.google.com)
2. Click **+ New** → **Spreadsheet**
3. Name it: `"Endless Electricals Products"`

### Option B: Existing Data
If you already have product data somewhere, you can copy-paste it into the sheet.

---

## Step 2: Add Column Headers (1 minute)

In Row 1 of your sheet, add these exact headers:

```
id | name | brand | category | price | image | rating | reviews | seoKeywords
```

Or just copy-paste this:

| id | name | brand | category | price | image | rating | reviews | seoKeywords |
|---|---|---|---|---|---|---|---|---|
| 1 | Polycab 1.5mm Wire | Polycab | wires | 4500 | https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop | 4.8 | 124 | Polycab wire, copper |

---

## Step 3: Add Your Products (varies)

For each product, fill in ONE ROW with:

```
1 | Polycab 1.5mm Wire | Polycab | wires | 4500 | https://images.unsplash.com/... | 4.8 | 124 | Polycab wire, copper
```

**Important Column Rules:**
- **id**: Just numbers (1, 2, 3...)
- **name**: Product name
- **brand**: Brand name  
- **category**: Must be: `wires` `lights` `switches` `cables` `fans`
- **price**: Just numbers (4500, not ₹4500)
- **image**: Full URL starting with https://
- **rating**: 0-5 (e.g., 4.8)
- **reviews**: Just number (e.g., 124)
- **seoKeywords**: Words separated by comma

---

## Step 4: Publish as CSV (2 minutes)

1. In your Google Sheet, click **File** → **Publish to the web**
2. Choose format: **Comma-separated values (.csv)**
3. Click **Publish**
4. Copy the URL that appears (looks like):
   ```
   https://docs.google.com/spreadsheets/d/ABCD1234xyz/export?format=csv
   ```

---

## Step 5: Add to Website Config (1 minute)

1. Find file: **sheet-config.js** (in your website folder)
2. Open in text editor
3. Find this line:
   ```javascript
   const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv';
   ```
4. Replace the URL with YOUR CSV export link from Step 4
5. Change:
   ```javascript
   const ENABLE_GOOGLE_SHEET = false;  // Change to TRUE
   ```
6. Save the file

**Example of completed config:**
```javascript
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1ABCd-xyz123456/export?format=csv';
const ENABLE_GOOGLE_SHEET = true;  // ✅ Now enabled
```

---

## Done! 🎉

Your website now auto-updates from Google Sheet!

**How it works:**
- Owner edits Google Sheet
- Website checks every 1-2 minutes
- Products automatically update
- No code needed!

---

## What's Next?

### To Add/Edit Products:
1. Open your Google Sheet
2. Add/edit rows with product data
3. Save (auto-saves in Google Sheets)
4. Website updates in 1-2 minutes

### To Disable Google Sheet (Go back to JSON):
1. Edit sheet-config.js
2. Change: `const ENABLE_GOOGLE_SHEET = false;`
3. Save

### To Use Different Sheet:
1. Publish that sheet as CSV
2. Copy new CSV URL
3. Paste in sheet-config.js GOOGLE_SHEET_URL
4. Save

---

## Image URL Tips

**Get free images from:**
- **Unsplash**: unsplash.com → right-click image → copy link
- **Pexels**: pexels.com → right-click image → copy link
- **Pixabay**: pixabay.com → right-click image → copy link

**Always use:** https:// (not http://)

---

## Test It Works

1. Add a test product to your sheet
2. Wait 1-2 minutes
3. Refresh website (Ctrl+R)
4. New product should appear!

If not:
- Check image URL is valid
- Check category is exactly: wires/lights/switches/cables/fans
- Check price is a number only
- Check ENABLE_GOOGLE_SHEET = true

---

## Full Documentation

For complete details: See **GOOGLE_SHEETS_SETUP.md**

For troubleshooting: See **GOOGLE_SHEETS_SETUP.md** → Troubleshooting section
