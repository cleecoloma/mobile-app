import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ContactScreen = () => {
  const openLink = (url) => {
    // Implement the logic to open the link (e.g., using Linking)
    // This example uses a console.log for demonstration purposes
    console.log(`Opening link: ${url}`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./your-image.jpg')} style={styles.image} />
      <Text style={styles.backgroundText}>
        {/* Add a background paragraph about yourself here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
        lorem vel mauris laoreet eleifend.
      </Text>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => openLink('https://github.com/your-username')}
        >
          <Ionicons
            name='logo-github'
            size={32}
            color='#333'
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink('https://www.linkedin.com/in/your-username')}
        >
          <Ionicons
            name='logo-linkedin'
            size={32}
            color='#0077b5'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  backgroundText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    marginBottom: 20,
  },
});

export default ContactScreen;
