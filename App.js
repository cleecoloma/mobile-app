import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';
import { Barometer } from 'expo-sensors';

export default function App() {
  const [barometerData, setBarometerData] = useState(null);
  const [altitude, setAltitude] = useState('');
  const [useBarometer, setUseBarometer] = useState(true);
  const [boilingPoint, setBoilingPoint] = useState(null);

  useEffect(() => {
    const subscription = Barometer.addListener((data) => {
      setBarometerData(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const calculateBoilingPoint = () => {
    if (useBarometer && barometerData) {
      const { pressure } = barometerData;
      // Convert pressure to altitude using a simplified formula
      const elevationInFeet =
        (1 - Math.pow(pressure / 1013.25, 0.190284)) * 145366.45;
      const boilingPoint = 212 - 0.00198 * elevationInFeet;
      setBoilingPoint(boilingPoint.toFixed(2));
    } else if (!useBarometer && altitude !== '') {
      const elevationInFeet = parseFloat(altitude);
      const boilingPoint = 212 - 0.00198 * elevationInFeet;
      setBoilingPoint(boilingPoint.toFixed(2));
    } else {
      setBoilingPoint(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boiling Point Estimator</Text>

      <View style={styles.switchContainer}>
        <Text>Use Barometer</Text>
        <Switch
          value={useBarometer}
          onValueChange={() => setUseBarometer(!useBarometer)}
        />
      </View>

      {useBarometer && barometerData && (
        <View style={styles.dataContainer}>
          <Text>Pressure: {barometerData.pressure} hPa</Text>
        </View>
      )}

      {!useBarometer && (
        <View style={styles.dataContainer}>
          <Text>Enter Altitude (feet):</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={altitude}
            onChangeText={(text) => setAltitude(text)}
          />
        </View>
      )}

      <Button title='Calculate Boiling Point' onPress={calculateBoilingPoint} />

      {boilingPoint !== null && (
        <View style={styles.resultContainer}>
          <Text>Boiling Point: {boilingPoint} °F</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dataContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
});
