# Hit City Radio

## Features

### YouTube Validation
- Ensure valid YouTube links are provided by users. 
- Automatically fetch and display video information.

### Real-Time Chat
- Implement a real-time chat feature for listeners.
- Users can communicate while listening.

### Song Queue
- Users can add songs to a queue for audio playback.
- Display upcoming songs in the queue.

### Audio Player Controls
- Play, pause, skip, and seek functionality for audio playback.
- Volume control and mute options available.

### Dark/Light Mode
- Users can switch between dark and light themes.
- Theme preference is saved for future visits.

### Responsive Design
- Optimized layouts for mobile, tablet, and desktop devices.
- Ensure usability across all screen sizes.

### Accessibility
- Implement features to make the application usable for individuals with disabilities.
- Support for keyboard navigation and screen readers.

### Smooth Animations
- Utilize animations to enhance user experience without causing delays.
- Consider performance implications of animations.

### Social Media Integration
- Links to social media platforms for sharing and engagement.
- Display social media feeds or latest updates.

## Configuration Instructions
1. Clone the repository: `git clone https://github.com/HitCityRadio/hit-city-radio.git`
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file.

## WebSocket Setup Guide
- Use WebSocket for real-time features.
- Example server setup:
```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    // Handle messages
  });
});
```

### Conclusion
- This repository serves as a comprehensive platform for streamlining and enhancing radio broadcasting.