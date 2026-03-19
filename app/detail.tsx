import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Text>スタックナビゲーションで遷移した画面です。</Text>
      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Text>戻る</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBlockStart: 20,
    padding: 20,
  },
});