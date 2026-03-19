import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior="padding"
      >
        <View style={styles.top}>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/detail")}>
            <Text style={styles.buttonText}>詳細画面へ遷移</Text>
          </TouchableOpacity>
          <Link href="/detail" style={styles.link}>
            <Text>Linkを使って詳細画面へ遷移</Text>
          </Link>
        </View>

        <TextInput placeholder="テキストを入力してください" style={styles.input} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBlockStart: 20,
    padding: 20,
  },
  flex: {
    flex: 1,
    justifyContent: "space-between",
  },
  top: {
    gap: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 24,
  },
});
