import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'text';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const router = useRouter();

  const handlePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  useEffect(() => {
    loadText();
  }, []);

  const loadText = async () => {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    if(saved != null) {
      setText(saved);
    }
  }

  const saveText = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, text);
    alert('保存しました');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior="padding"
      >
        <View style={styles.top}>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/detail")}>
            <Text style={styles.buttonText}>詳細画面</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Haptic Feedback</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TextInput value={text} onChangeText={setText} placeholder="テキストを入力してください" style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={saveText}>
            <Text style={styles.buttonText}>保存</Text>
          </TouchableOpacity>
        </View>
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
