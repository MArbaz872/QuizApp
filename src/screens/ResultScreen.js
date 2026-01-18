import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { finalScore, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed 🎉</Text>

      <Text style={styles.score}>
        Your Score: {finalScore} / {total}
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.btnText}>Go Home</Text>
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
  },
  title: {
    fontSize: 28,
    color: '#38BDF8',
    marginBottom: 20,
  },
  score: {
    fontSize: 20,
    color: '#E5E7EB',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#38BDF8',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 8,
  },
  btnText: {
    color: '#020617',
    fontWeight: '600',
    fontSize: 16,
  },
});
