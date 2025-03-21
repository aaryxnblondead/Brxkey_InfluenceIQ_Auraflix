# InfluenceIQ

A cross-platform application that ranks public figures based on credibility, fame longevity, and meaningful engagement.

## Features

- View public figures ranked by their InfluenceIQ score
- Detailed metrics for each public figure
- User review system with AI-powered sentiment analysis
- Real-time updates of scores
- Cross-platform support (iOS, Android, Web)

## Technology Stack

- React Native for mobile apps (iOS & Android)
- React Native Web for web app
- TensorFlow.js for sentiment analysis
- CAPTCHA for spam prevention

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- React Native CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/influenceiq.git
cd influenceiq
```

2. Install dependencies
```bash
npm install
```

### Running the App

#### Mobile

For iOS:
```bash
npm run ios
```

For Android:
```bash
npm run android
```

#### Web

```bash
npm run web
```

## Building for Production

### Web

```bash
npm run build-web
```

### Mobile

Follow the standard React Native build process for iOS and Android.
```

## Final Steps

1. **Configure Metro for React Native Web**

Create a `metro.config.js` file:

```javascript:metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports
