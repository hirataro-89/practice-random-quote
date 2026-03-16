import { useFetchQuote } from "@/hooks/use-fetch-quote";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

export default function HomeScreen() {
  const { quote, isLoading, fetchQuote } = useFetchQuote();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ランダム名言</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
      ) : (
        <View style={styles.quoteContainer}>
          <Text>{quote?.content}</Text>
          <Text>{quote?.author}</Text>
        </View>
      )}
      <TouchableOpacity onPress={fetchQuote} style={styles.button}>
        <Text style={styles.buttonText}>次の名言を表示</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  quoteContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  loader: {
    marginVertical: 40,
  }
});