import Vapi from '@vapi-ai/web';

// Vapi configuration
export const VAPI_CONFIG = {
  publicKey: '92f10518-75a0-48e9-b657-707b639626b9',
  assistantId: '3cee7743-c005-4daa-a9b2-2c26c7740fe6',
};

// Initialize Vapi instance
export const vapi = new Vapi(VAPI_CONFIG.publicKey);

// Vapi event handlers
export const setupVapiEventHandlers = (
  onCallStart?: () => void,
  onCallEnd?: () => void,
  onSpeechStart?: () => void,
  onSpeechEnd?: () => void,
  onError?: (error: Error) => void
) => {
  vapi.on('call-start', () => {
    console.log('Vapi call started');
    onCallStart?.();
  });

  vapi.on('call-end', () => {
    console.log('Vapi call ended');
    onCallEnd?.();
  });

  vapi.on('speech-start', () => {
    console.log('User started speaking');
    onSpeechStart?.();
  });

  vapi.on('speech-end', () => {
    console.log('User stopped speaking');
    onSpeechEnd?.();
  });

  vapi.on('error', (error) => {
    console.error('Vapi error:', error);
    onError?.(error);
  });
};

// Start Vapi call
export const startVapiCall = async () => {
  try {
    await vapi.start(VAPI_CONFIG.assistantId);
  } catch (error) {
    console.error('Failed to start Vapi call:', error);
    throw error;
  }
};

// Stop Vapi call
export const stopVapiCall = () => {
  try {
    vapi.stop();
  } catch (error) {
    console.error('Failed to stop Vapi call:', error);
  }
};