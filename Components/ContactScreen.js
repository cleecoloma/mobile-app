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
      <Image source={require('../assets/chester.jpeg')} style={styles.image} />
      <Text style={styles.backgroundText}>
        Hi, my name is Chester Lee Coloma. I’m a full-stack software
        developer and a mechanical engineer. I build digital bridges that connect ideas with the world. Connect with me using my icon links below:
      </Text>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => openLink('https://github.com/cleecoloma')}
        >
          <Ionicons
            name='logo-github'
            size={48}
            color='#333'
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openLink('https://www.linkedin.com/in/chesterleecoloma/')
          }
        >
          <Ionicons
            name='logo-linkedin'
            size={48}
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
