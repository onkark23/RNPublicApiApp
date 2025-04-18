import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import ScreenshotToggler from 'screenshot-toggler';
import { sendDeviceData } from '../services/api';

const ScreenshotToggleScreen = () => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    try {
      const result = await ScreenshotToggler.toggleScreenshot(!enabled);
      setEnabled(!enabled);
      const response = await sendDeviceData({ screenshotEnabled: !enabled });
      Alert.alert('Success', 'API call succeeded');
      console.log('API Response:', response);
    } catch (error: any) {
      console.error('Toggle or API call failed:', error);
      Alert.alert('Error', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../../src/assets/logo.png')} // Add your logo to /assets/
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Screenshot Protection</Text>

      <Text style={[styles.status, { color: enabled ? 'green' : 'gray' }]}>
        {enabled ? 'Activated' : 'Deactivated'}
      </Text>

      <Switch
        value={enabled}
        onValueChange={handleToggle}
        trackColor={{ false: '#ccc', true: '#4CAF50' }}
        thumbColor="#ffffff"
        style={styles.switch}
      />

      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.buttonText}>{enabled ? 'Deactivate' : 'Activate'}</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 20 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#111827',
  },
  status: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ScreenshotToggleScreen;
