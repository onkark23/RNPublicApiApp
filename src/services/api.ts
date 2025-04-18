import { Platform } from 'react-native';

export const sendDeviceData = async ({ screenshotEnabled }: { screenshotEnabled: boolean }) => {
  const payload = {
    os: Platform.OS,
    deviceName: 'Test Device',
    mac: '00:11:22:33:44:55',
    imei: '123456789012345',
    location: { lat: 18.5204, lng: 73.8567 },
    publicIP: '1.2.3.4',
    screenshotEnabled,
  };

  try {
    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Response error:', data);
      throw new Error('Failed to send device data');
    }

    console.log('API success response:', data);
    return data;
  } catch (err) {
    console.error('Network/API error:', err);
    throw err;
  }
};

