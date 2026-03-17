# Vapi.ai Voice Integration Guide

## Overview
The Command Center now includes a voice orb interface that can be connected to Vapi.ai for voice conversations.

## Setup Instructions

### 1. Install Vapi SDK
```bash
npm install @vapi-ai/web
```

### 2. Get Your Vapi API Key
- Sign up at https://vapi.ai
- Get your API key from the dashboard

### 3. Update VoiceOrb Component

Add this to `components/ui/VoiceOrb.tsx`:

```typescript
import Vapi from '@vapi-ai/web';

// Initialize Vapi
const vapi = new Vapi('YOUR_VAPI_PUBLIC_KEY');

// In the toggleListening function:
const toggleListening = async () => {
  if (!isListening) {
    // Start call
    await vapi.start({
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US"
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [{
          role: "system",
          content: "You are a helpful AI assistant for Mr Ki's automation services."
        }]
      },
      voice: {
        provider: "11labs",
        voiceId: "your-voice-id"
      }
    });
    setIsListening(true);
  } else {
    // Stop call
    vapi.stop();
    setIsListening(false);
  }
};
```

## Features Implemented

1. **Chat Interface** - Text-based conversation with webhook integration
2. **Voice Orb** - Animated circular voice interface with audio visualization
3. **Command Center** - Full-page chat experience with starfield background
4. **Webhook Integration** - Connected to n8n webhook for message processing
5. **Smooth Transitions** - Navigate from landing page to command center

## Webhook Endpoint
```
https://n8n.srv967587.hstgr.cloud/webhook/c4c6a588-36f1-4c97-a405-272747948943
```

## Color Palette
- Primary Orange: #ff6b35
- Secondary Orange: #ff7d4d
- Background: #0f0f0f
- White overlays with various opacity levels

## Usage

1. User clicks on chat input or mic button on landing page
2. Redirects to `/command-center`
3. Can toggle between text chat and voice mode
4. Voice orb connects to Vapi.ai for real-time voice conversations
5. All messages are sent to the n8n webhook for processing
