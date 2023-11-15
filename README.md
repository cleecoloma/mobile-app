# Mobile App - Boiling Point Calculator

This React Native app uses Expo and the device's barometer sensor to calculate the boiling point of water. Users can input pressure values manually or use the barometer readings.

## Try It
> Open the link below using Expo Go:
- Android - [exp://u.expo.dev/update/ba263b10-ccee-4df4-ae69-13f1e59ed785](exp://u.expo.dev/update/ba263b10-ccee-4df4-ae69-13f1e59ed785)
- Apple - [exp://u.expo.dev/update/e3472314-ec0a-45f7-970e-fdb605737ea8](exp://u.expo.dev/update/e3472314-ec0a-45f7-970e-fdb605737ea8)

## Features

- Retrieve barometer readings from the device.
- Allow users to manually input pressure values.
- Calculate and display the boiling point of water in Fahrenheit.
- Display the boiling point at sea level.
- Show popular landmarks and their altitudes, including those below sea level.
- Contact/About Me page with author information and social media links.

## Prerequisites

- Node.js and npm installed
- Expo CLI installed (`npm install -g expo-cli`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cleecoloma/mobile-app.git
   ```

2. Navigate to the project directory:

    ```bash
    cd mobile-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    expo start
    ```

## Installation
- Open the app on your device or emulator.
- If your device has a barometer, the app will display the barometer reading.
- Enter a pressure value manually if you don't have a barometer.
- Press the "Calculate Boiling Point" button to get the boiling point of water in Fahrenheit.

## Library Used
- React Native
- Expo
- expo-sensors

## Author
- Chester Lee Coloma
- ChatGPT (help with barometer template)
