/**
 * GOOGLE SHEETS CONFIGURATION
 * Configure your Google Sheet URL here for automatic product updates
 */

// ===== EDIT THIS SECTION =====
// Step 1: Replace with YOUR Google Sheet CSV export URL
// Instructions: See GOOGLE_SHEETS_SETUP.md

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjLK7Oo2nfLyDhyak7_8tEwNjG9kLaOHGUEm8-XJxouQiedeXD4LnxrgRw75yn-ZGMDrAR3-6IAY3n/export?format=csv';

// Step 2: Set to true to enable Google Sheets, false to use products.json
const ENABLE_GOOGLE_SHEET = true;

// Step 3: Cache duration in milliseconds (default 60000 = 1 minute)
// Recommended: 60000-120000 (1-2 minutes)
const SHEET_CACHE_DURATION = 60000;

// =============================

// Expose config globally
window.GOOGLE_SHEET_CONFIG = {
    url: GOOGLE_SHEET_URL,
    enabled: ENABLE_GOOGLE_SHEET,
    cacheDuration: SHEET_CACHE_DURATION
};

console.log('📊 Google Sheets Config Loaded');
console.log('✅ Status:', ENABLE_GOOGLE_SHEET ? 'ENABLED' : 'DISABLED');
if (ENABLE_GOOGLE_SHEET) {
    console.log('📍 Sheet URL:', GOOGLE_SHEET_URL);
}
