# 📋 Product Management Guide - Endless Electricals

## Overview
Your website now pulls product data from a **`products.json`** file. This allows you to easily update product information without touching code. You can edit it directly or import data from an Excel spreadsheet.

---

## 🎯 Method 1: Edit Products Directly (Easiest)

### Step 1: Open the JSON File
- In VS Code or any text editor, open the file: `products.json`

### Step 2: Add/Edit Products
Each product object contains:

```json
{
  "id": 1,
  "name": "Product Name",
  "brand": "Brand Name",
  "category": "wires|lights|switches|cables|fans",
  "price": 5000,
  "image": "https://image-url.com/image.jpg",
  "rating": 4.8,
  "reviews": 124,
  "seoKeywords": "keyword1, keyword2, keyword3"
}
```

### Step 3: Save the File
- Press `Ctrl+S` to save
- The website will automatically refresh and load the new products

### Field Guide

| Field | Description | Example |
|-------|-------------|---------|
| **id** | Unique product ID | 1, 2, 3... |
| **name** | Product name | "Polycab 1.5mm Wire" |
| **brand** | Manufacturer brand | "Polycab", "Havells", "Anchor" |
| **category** | Product category | "wires", "lights", "switches", "cables", "fans" |
| **price** | Price in INR | 4500 |
| **image** | Product image URL | "https://images.unsplash.com/..." |
| **rating** | Star rating (0-5) | 4.8 |
| **reviews** | Number of reviews | 124 |
| **seoKeywords** | SEO keywords (comma-separated) | "Polycab wire, copper wire" |

---

## 📊 Method 2: Use Excel Spreadsheet (Most User-Friendly)

### Step 1: Create Excel File
Create an Excel spreadsheet with these column headers:

```
id | name | brand | category | price | image | rating | reviews | seoKeywords
```

**Categories allowed:** `wires`, `lights`, `switches`, `cables`, `fans`

### Step 2: Add Your Products
Fill in product data in the Excel spreadsheet.

### Step 3: Convert Excel to JSON
You can use one of these online tools:

1. **Recommended:** https://www.convertcsv.com/csv-to-json.htm
   - Export your Excel as CSV
   - Upload to this tool
   - Copy the JSON output
   - Paste into products.json

2. **Alternative:** https://jsoncrack.com/
   - Has Excel to JSON conversion

3. **For Developers:** Use Python or Node.js script

### Step 4: Update products.json
- Replace the entire `products.json` file with your converted data
- Make sure it follows this format:

```json
{
  "products": [
    { product object 1 },
    { product object 2 },
    ...
  ]
}
```

### Step 5: Save & Refresh
- Save the file
- The website will automatically update

---

## 🖼️ Image URL Tips

### Free Image Sources:
1. **Unsplash** (recommended, used in current data)
   - https://unsplash.com
   - Copy image URL from "Download" menu → "Copy Link"

2. **Pexels**
   - https://pexels.com
   - Right-click image → "Get image link"

3. **Pixabay**
   - https://pixabay.com

4. **Your Own Server** (if you have image hosting)
   - Upload images to your server
   - Use direct URL: `https://yoursite.com/images/product.jpg`

### Recommended Image Size:
- Minimum: 400×400px
- Ideal: 600×600px (will be cropped to 400×400px on website)

---

## ✅ Adding New Products

### Example: Adding a new wire product

```json
{
  "id": 26,
  "name": "Havells 2.5mm House Wire",
  "brand": "Havells",
  "category": "wires",
  "price": 6500,
  "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
  "rating": 4.7,
  "reviews": 89,
  "seoKeywords": "Havells wire, house wire price Anand"
}
```

**Important:** 
- Each product MUST have a unique `id`
- Use the next available number (currently highest is 25)
- Don't skip IDs
- Ensure commas are correct (no comma after last product)

---

## ❌ Removing Products

Simply delete the entire product object (including the surrounding curly braces `{}`).

Example - to remove product ID 5, delete this entire block:
```json
{
  "id": 5,
  "name": "Polycab 6mm Heavy Duty Wire",
  ...
}
```

---

## 📱 Real-Time Updates

### How It Works:
1. The website loads `products.json` automatically on page load
2. Products are displayed on:
   - Home page (featured section)
   - Products page (main catalog)
   - Product detail pages
   - Search & filter functionality

### Update Timeline:
- **Local Testing:** Changes appear immediately after page refresh
- **Live Website:** Changes appear within 1-2 minutes (after CDN cache clears)
- **Force Refresh:** Press `Ctrl+Shift+R` to clear browser cache

---

## 🔍 JSON Validation

Before updating, validate your JSON file:

1. **VS Code:** Use built-in JSON validation (look for red squiggles)
2. **Online Tool:** https://jsonlint.com
   - Paste your JSON
   - Click "Validate JSON"
   - Fix any errors shown

### Common Errors:
- ❌ Missing commas between objects
- ❌ Trailing commas in the last item
- ❌ Missing quotes around strings
- ❌ Invalid category names

---

## 🎨 Category Filter Buttons

The website uses these categories. Match your product categories exactly:

```
wires     - Electrical wires
lights    - Lights and bulbs
switches  - Light switches and plates
cables    - Power cables
fans      - Ceiling fans
```

---

## 📞 Support

If you have questions:
1. Check if your JSON is valid (use jsonlint.com)
2. Ensure all products have required fields
3. Verify category names are spelled correctly
4. Make sure image URLs are working (test in browser)

---

## 🚀 Next Steps

After setting up products.json:
- ✅ Product page displays from JSON
- ✅ Search filters work automatically
- ✅ Product details load from JSON
- ✅ Images update automatically
- ✅ Prices & ratings update automatically

Your website now has **dynamic product management** without needing a database! 🎉
