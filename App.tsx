import React, { useState } from 'react';
import { View, Text, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import ScreenshotToggler from './screenshot-toggler';
import { sendDeviceData } from './src/services/api';

const App = () => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    try {
      const result = await ScreenshotToggler.toggleScreenshot(!enabled);
      setEnabled(!enabled);
      await sendDeviceData({ screenshotEnabled: !enabled });
      Alert.alert('Success', result);
    } catch (err) {
      Alert.alert('Error', 'Toggle or API failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screenshot Toggler</Text>
      <Button title={enabled ? 'Deactivate' : 'Activate'} onPress={handleToggle} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 }
});

export default App;
