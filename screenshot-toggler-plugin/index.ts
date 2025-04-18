import { NativeModules } from 'react-native';
const { ScreenshotToggler } = NativeModules;
export default {
  toggleScreenshot: ScreenshotToggler.toggleScreenshot,
};
