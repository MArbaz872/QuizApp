import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { questions } from '../data/questions';

export default function QuizScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const currentQuestion = questions[currentIndex];

  const handleOptionPress = (index) => {
    setSelected(index);

    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      } else {
        navigation.replace('Result', {
          score,
          total: questions.length,
          finalScore:
            index === currentQuestion.correctIndex ? score + 1 : score,
        });
      }
    }, 800);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Question {currentIndex + 1} / {questions.length}
      </Text>

      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((item, index) => {
        let bgColor = '#1E293B';

        if (selected !== null) {
          if (index === currentQuestion.correctIndex) bgColor = '#22C55E';
          else if (index === selected) bgColor = '#EF4444';
        }

        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, { backgroundColor: bgColor }]}
            disabled={selected !== null}
            onPress={() => handleOptionPress(index)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
    justifyContent: 'center',
  },
  progress: {
    color: '#94A3B8',
    marginBottom: 10,
  },
  question: {
    fontSize: 22,
    color: '#38BDF8',
    marginBottom: 20,
    fontWeight: '600',
  },
  option: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    color: '#F8FAFC',
    fontSize: 16,
  },
});
