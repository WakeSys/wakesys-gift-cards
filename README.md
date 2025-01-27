# Wakesys Gift Card Display Widget

A simple widget to display and sell gift cards on your water park website. This widget connects to your Wakesys account to fetch real-time gift card data and pricing.

## Quick Start

1. Copy the contents of `index.html` into your webpage
2. Replace the subdomain with your Wakesys account:
   ```html
   <script>
     const WAKESYS_SUBDOMAIN = 'your-subdomain'; // Replace with your Wakesys subdomain
   </script>
   ```

## Features

- Automatically generates gift card display elements for all available denominations
- Real-time pricing from your Wakesys account
- Customizable appearance through CSS
- Mobile-responsive design
- Direct integration with Wakesys payment system

## Dependencies

- jQuery 3.7.1 (loaded from CDN)
- Google Fonts - Roboto (400, 500, 700)
- Modern web browser with JavaScript enabled

The widget automatically loads these dependencies when you include the `index.html` file. No additional configuration is needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

The widget generates placeholder elements for each gift card amount available through the API. You can customize the appearance of these elements by:

1. Modifying the included CSS styles
2. Adding your own images and branding
3. Adjusting the layout and positioning

## API Integration

The widget automatically connects to your Wakesys account and fetches:
- Available gift card amounts
- Current pricing
- Payment processing details

No additional API configuration is required beyond setting your subdomain.

## Installation

1. Include the required dependencies in your HTML:
   ```html
   <!-- Required Dependencies -->
   <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
   <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
   
   <!-- Wakesys Gift Cards -->
   <script src="https://cdn.jsdelivr.net/gh/wakesys/giftcards@1.0.0/wakesysgiftcards.js"></script>
   <link href="https://cdn.jsdelivr.net/gh/wakesys/giftcards@1.0.0/wakesysgiftcards.css" rel="stylesheet">
   ```

2. Add the gift cards container to your HTML:
   ```html
   <div id="gift_cards"></div>
   ```

2. Configure each gift card using this format:
   Option A - Using the preview:
   - Open the page where you've installed the widget
   - For any unconfigured gift cards, you'll see "DESCRIPTION not defined (gift_card.master_ID_giftcard=XX)" in the description
   - Note these XX values - these are your `master_ID_giftcard` values

   Option B - Using Developer Tools:
   - Open your webpage with Developer Tools (Chrome: View > Developer > Developer Tools)
   - Look for the API response array in the console
   - Note the `master_ID_giftcard` values for each gift card

   ```javascript
   gift_cards_information[master_ID_giftcard] = [
       'image_url',      // URL to gift card image (300x300px recommended)
       'title',          // Gift card title
       'description',    // Gift card description
       order_index      // Display order (start from 0)
   ];
   ```

### Example Implementation

```html
<script>
    /* GENERAL CONFIGURATION */
    var sub_domain_of_your_wakesys_account = 'wakelake';

    /* GIFT CARD CONFIGURATIONS */
    var gift_cards_information = [];
    
    gift_cards_information[30] = [
        "https://ws-fileshare.s3.amazonaws.com/background/gift_card/demo/1.png",
        "1 Hour Pass",
        "Gift card, for instance for a 1 Hour Pass on the full-size cable.",
        0
    ]; 

    gift_cards_information[2] = [
        "https://ws-fileshare.s3.amazonaws.com/background/gift_card/demo/2.png",
        "Value gift card",
        "Redeem your gift card online or in the shop",
        1
    ];
</script>

<div id="gift_cards"></div>
```

### Configuration Tips
- Images should be 300x300px for optimal display
- Order index must start at 0
- Each gift card needs a unique master_ID_giftcard
- Make sure all image URLs are accessible from your server

## Important Notes About Gift Card Descriptions

⚠️ **CRITICAL: All gift cards are VALUE-BASED, not product-specific**

When configuring your gift cards, always remember:

### DO ✅
- Write descriptions like:
  - "Gift card, for instance for a 1 Hour Pass"
  - "Gift card with a value of 25 EUR"
  - "Gift card that could be used for a Day Pass"
- Keep descriptions flexible and value-focused
- Make it clear that the gift card adds credit to the customer's prepaid account

### DON'T ❌
- Never write product-specific descriptions like:
  - "1 Hour Wakeboard Gift Card"
  - "Day Pass Gift Card"
  - "Equipment Rental Gift Card"

### Why This Matters

1. **Tax Compliance**: 
   - Value gift cards are NOT subject to VAT/sales tax
   - Product-specific gift cards MUST include VAT/sales tax by law. wakesys does not support this.
   - Using value-based descriptions ensures proper tax handling

2. **Price Protection**: When product prices change, value-based gift cards remain valid and usable
3. **Flexibility**: Customers can use the credit for any purchase, not just specific products
4. **Legal Clarity**: Prevents misunderstandings about what the gift card represents

Remember: When redeemed, all gift cards add their monetary value to the customer's prepaid account in Wakesys, regardless of their description or suggested use.

## License

GNU GPLv3

Copyright (c) 2025 wakesys s.à.r.l.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You must share any derivative works under the same license terms. All modifications and improvements must be made available publicly under the GNU GPLv3.

Commercial use of this software is allowed, but the source code of any derivative works MUST be made freely available under the terms of the GNU GPLv3.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

## Support

For technical support or questions about the widget, please contact wakesys support.