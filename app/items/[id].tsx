import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ItemDetailScreen() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>Item詳細</Text>
      <Text>ItemID: {params.id}</Text>
    </View>
  )
}