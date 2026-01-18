import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // back button se splash na aaye
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>My App</Text>
      <Text style={styles.tagline}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // dark blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#38BDF8',
  },
  tagline: {
    marginTop: 10,
    color: '#E5E7EB',
  },
});
