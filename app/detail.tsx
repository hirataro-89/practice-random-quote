import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function DetailScreen() {
  const router = useRouter();
  return (
    <View>
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