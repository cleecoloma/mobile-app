import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';

const LandmarksScreen = () => {
  const landmarksData = [
    { name: 'Mount Everest', altitude: 29029 },
    { name: 'Matterhorn', altitude: 14692 },
    { name: 'K2', altitude: 28251 },
    { name: 'Grand Canyon', altitude: 6700 },
    { name: 'Eiffel Tower', altitude: 984 },
    { name: 'Burj Khalifa', altitude: 2717 },
    { name: 'Niagara Falls', altitude: 167 },
    { name: 'Great Wall of China', altitude: 3281 },
    { name: 'Sydney Opera House', altitude: 0 }, // sea level
    { name: 'Mount Kilimanjaro', altitude: 19341 },
  ];

  const renderLandmark = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.landmark}>{item.name}</Text>
      <Text style={styles.altitude}>{item.altitude} feet</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Landmarks and Altitudes</Text>
      <FlatList
        data={landmarksData}
        renderItem={renderLandmark}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const rowWidth = width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: rowWidth,
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  landmark: {
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: rowWidth * 0.6,
  },
  altitude: {
    fontSize: 16,
    color: '#333',
    maxWidth: rowWidth * 0.3,
  },
});

export default LandmarksScreen;
