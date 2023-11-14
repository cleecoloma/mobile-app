import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Barometer } from 'expo-sensors';

const App = () => {
  const [useBarometer, setUseBarometer] = useState(true);
  const [pressure, setPressure] = useState(null);
  const [manualPressure, setManualPressure] = useState('');
  const [boilingPoint, setBoilingPoint] = useState(null);

  useEffect(() => {
    if (useBarometer) {
      const subscribe = async () => {
        await Barometer.setUpdateInterval(1000);
        Barometer.addListener(({ pressure }) => {
          setPressure(pressure);
          calculateBoilingPoint(pressure);
        });
      };

      subscribe();

      return () => {
        Barometer.removeAllListeners();
      };
    }
  }, [useBarometer]);

  const calculateBoilingPoint = (currentPressure) => {
    // Use Antoine equation if barometer is selected as the pressure source
    if (useBarometer) {
      // Antoine equation constants for water
      const A = 8.07131;
      const B = 1730.63;
      const C = 233.426;

      // Convert pressure to kilopascals
      const pressureKPa = currentPressure / 10;

      // Calculate boiling point in Celsius
      const boilingPointCelsius =
        (B - A) / (Math.log10(pressureKPa) - C) - 273.15;

      // Convert Celsius to Fahrenheit
      const boilingPointFahrenheit = (boilingPointCelsius * 9) / 5 + 32;

      setBoilingPoint(boilingPointFahrenheit.toFixed(2));
    } else {
      // Use manual input if manual input is selected as the pressure source
      const manualPressureFloat = parseFloat(manualPressure);
      if (!isNaN(manualPressureFloat)) {
        setBoilingPoint(antoineEquation(manualPressureFloat).toFixed(2));
      } else {
        setBoilingPoint(null);
      }
    }
  };

  const antoineEquation = (pressure) => {
    // Antoine equation constants for water
    const A = 8.07131;
    const B = 1730.63;
    const C = 233.426;

    // Convert pressure to kilopascals
    const pressureKPa = pressure / 10;

    // Calculate boiling point in Celsius
    return (B - A) / (Math.log10(pressureKPa) - C) - 273.15;
  };

  const handleToggleSwitch = () => {
    setUseBarometer(!useBarometer);
  };

  const handleManualPressureInput = (input) => {
    setManualPressure(input);
  };

  const handleCalculatePress = () => {
    calculateBoilingPoint(useBarometer ? pressure : parseFloat(manualPressure));
    // Dismiss keyboard
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Use Barometer:</Text>
      <Switch value={useBarometer} onValueChange={handleToggleSwitch} />
      {useBarometer && (
        <Text style={styles.text}>Barometric Pressure: {pressure} hPa</Text>
      )}
      {!useBarometer && (
        <View>
          <Text style={styles.text}>Enter Manual Pressure (hPa):</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={manualPressure}
            onChangeText={handleManualPressureInput}
          />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleCalculatePress}>
        <Text style={styles.buttonText}>Calculate Boiling Point</Text>
      </TouchableOpacity>
      {boilingPoint && (
        <Text style={styles.text}>
          Estimated Boiling Point: {boilingPoint} °F
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
