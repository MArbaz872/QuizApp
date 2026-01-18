import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      <Text style={styles.subtitle}>Test your knowledge</Text>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.startText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#38BDF8',
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    marginVertical: 10,
  },
  startBtn: {
    marginTop: 30,
    backgroundColor: '#38BDF8',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  startText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#020617',
  },
});
