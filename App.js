import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [isSignifyActive, setIsSignifyActive] = useState(false);

  const toggleSignify = () => {
    setIsSignifyActive(true);
    console.log('Signify AI is now active:', isSignifyActive);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Signify</Text>
        <Text style={styles.subtitle}>AI-Powered Gesture Recognition</Text>
      </View>

      {/* Image Section */}
      <View style={styles.contentContainer}>
        <Image source={require('./assets/HS.png')} style={styles.image} />
      </View>

      {/* Prompt */}
      <Text style={styles.aiPrompt}>
        {isSignifyActive ? 'Signify AI is Active' : 'Press below to activate Signify AI'}
      </Text>

      {/* Action Button */}
      <TouchableOpacity
        style={[styles.button, isSignifyActive && styles.buttonActive]}
        onPress={toggleSignify}
      >
        <Text style={styles.buttonText}>
          {isSignifyActive ? 'AI Active' : 'Activate AI'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark black background
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f2f2f2', // Bright white for contrast
  },
  subtitle: {
    fontSize: 16,
    color: '#888888', // Subtle gray
    marginTop: 4,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  image: {
    width: '70%',
    height: 200,
    resizeMode: 'contain',
  },
  aiPrompt: {
    fontSize: 18,
    fontWeight: '500',
    color: '#f2f2f2', // Bright white for readability
    marginVertical: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333333', // Subtle dark gray
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonActive: {
    backgroundColor: '#28a745', // Green for active state
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff', // White text
  },
});
