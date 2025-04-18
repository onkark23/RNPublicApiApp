import 'react-native-gesture-handler'; // 🔑 Must be first
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens'; // ✅ Import native screens
enableScreens(); // ✅ Optimize navigation performance

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

