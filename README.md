# RNPublicApiApp

**Version:** 0.0.1

## Overview

RNPublicApiApp is a React Native application that utilizes public APIs. This app demonstrates integration of native modules, cross-platform capabilities (iOS and Android), and modern TypeScript practices.

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS dependencies)

### Installation

```bash
git clone <repository-url>
cd RNPublicApiApp
yarn install
cd ios && pod install && cd ..
```

### Running the App

#### iOS

```bash
npx react-native run-ios
```

#### Android

```bash
npx react-native run-android
```

## Scripts

| Command | Description |
|---------|-------------|
| `android` | `react-native run-android` |
| `ios` | `react-native run-ios` |
| `lint` | `eslint .` |
| `start` | `react-native start` |
| `postinstall` | `patch-package` |
| `test` | `jest` |


## Dependencies

This project uses the following main dependencies:

- **@react-navigation/native**: ^6.1.6
- **@react-navigation/native-stack**: ^6.9.12
- **react**: 18.2.0
- **react-native**: 0.72.4
- **react-native-gesture-handler**: ^2.25.0
- **react-native-safe-area-context**: ^5.4.0
- **react-native-screens**: ^4.10.0
- **screenshot-toggler**: file:screenshot-toggler-plugin


## Project Structure

- `src/` - Main source files
- `ios/` - iOS native project
- `android/` - Android native project
- `App.tsx` - App entry point

## License

This project is licensed under the terms of your preferred license.

