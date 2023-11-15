import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Switch,
} from 'react-native';
import { Barometer } from 'expo-sensors';

const AppHome = () => {
  const [barometerData, setBarometerData] = useState(null);
  const [altitude, setAltitude] = useState('');
  const [useBarometer, setUseBarometer] = useState(true);
  const [boilingPoint, setBoilingPoint] = useState(null);
  const [boilingPointAtSeaLevel, setBoilingPointAtSeaLevel] = useState(null);

  useEffect(() => {
    const subscription = Barometer.addListener((data) => {
      setBarometerData(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    // Calculate boiling point at sea level (altitude = 0 feet)
    const boilingPointAtSeaLevel = 212;
    setBoilingPointAtSeaLevel(boilingPointAtSeaLevel.toFixed(2));
  }, []);

  const calculateBoilingPoint = () => {
    if (useBarometer && barometerData) {
      // Convert pressure to altitude using a simplified formula
      const elevationInFeet =
        (1 - Math.pow(barometerData.pressure / 1013.25, 0.190284)) * 145366.45;
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

      {boilingPointAtSeaLevel !== null && (
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>
            Boiling Point at Sea Level: {boilingPointAtSeaLevel} °F
          </Text>
        </View>
      )}

      <View style={styles.switchContainer}>
        <Text>{`Use Barometer:  `}</Text>
        <Switch
          value={useBarometer}
          onValueChange={() => setUseBarometer(!useBarometer)}
        />
      </View>

      {useBarometer && barometerData && (
        <View style={styles.dataContainer}>
          <Text>Pressure: {Math.round(barometerData.pressure)} hPa</Text>
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

      <TouchableHighlight
        style={styles.calculateButton}
        onPress={calculateBoilingPoint}
        underlayColor='#66bb6a' // Light green when pressed
      >
        <Text style={styles.buttonText}>Calculate Boiling Point</Text>
      </TouchableHighlight>

      {boilingPoint !== null && (
        <View style={styles.resultContainer}>
          <Text>Boiling Point: {boilingPoint} °F</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196f3', // Pastel blue color
    textShadowColor: '#ccc', // Light gray shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  bannerContainer: {
    backgroundColor: '#81c784', // Light green color
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White color
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
  calculateButton: {
    backgroundColor: '#4caf50', // Green color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // White color
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
  },
});

export default AppHome;
