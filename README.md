# Flower Pot Website

A delightful, interactive static website featuring a flower pot button with a midcentury modern aesthetic and earth tone color palette.

## Features

- 🌺 **Interactive Flower Pot Button** - Click to toggle text between "definitely" and "defiantly"
-- ☁️ **Inspirational Clouds** - Clouds appear with rotating messages when you click the pot
- ☁️ **Inspirational Clouds** - Clouds appear in the sky with rotating messages
- 🏔️ **Layered Mountain Background** - Multiple mountain silhouettes create depth
- 🎨 **Midcentury Modern Design** - Earthy earth tones (terracotta, olive, sage, cream)

## Quick Start

1. Open `index.html` in your web browser
2. Click the flower pot button to see messages appear in clouds
3. Each click cycles through a collection of inspirational messages

## File Structure

```
flower-pot-website/
├── index.html       # Main HTML file
├── styles.css       # Styling with earth tones and midcentury design
├── script.js        # Interactive functionality
└── README.md        # This file
```

## Messages

The cloud messages cycle through an array of inspirational words. Currently includes:
- bloom!
- grow wild
- flourish
- blossom bright
- reach high
- dance free
- pure joy
- beauty blooms
- seize it
- be bold
- thrive now
- life happens

You can customize these by editing the `cloudMessages` array in `script.js`.

## Customization

### Change Cloud Messages
Edit the `cloudMessages` array in `script.js` to add your own messages:

```javascript
const cloudMessages = [
    'your message here',
    'another message',
    // ... more messages
];
```

### Change Colors
All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --terracotta: #c85a3a;
    --olive: #556b2f;
    --sage: #9cab7b;
    --warm-brown: #8b6f47;
    --cream: #f4e8d8;
    /* ... more colors */
}
```

## Browser Support

This website works in all modern browsers that support:
- CSS Grid and Flexbox
- CSS Animations
- ES6 JavaScript
- CSS Variables

## License

Free to use and modify for your own projects!
