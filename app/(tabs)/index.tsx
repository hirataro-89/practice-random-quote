import { useFetchQuote } from "@/hooks/use-fetch-quote";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image, useWindowDimensions, FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";

type Item = {
  id: string;
  text: string;
}

const generateItems = (count: number) =>
  Array.from({ length: count }, () => {
    const random = Math.random();
    return {
      id: random.toString(),
      text: `アイテム ${random}`,
    }
  });

export default function HomeScreen() {
  const { quote, isLoading, fetchQuote } = useFetchQuote();
  const { width } = useWindowDimensions();
  const [items, setItems] = useState<Item[]>(generateItems(50));
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setItems(generateItems(50));
    setIsRefreshing(false);
  }

  const loadMore = () => {
    const newItems = generateItems(50);
    setItems((prev) => [...prev, ...newItems]);
  };


  const renderHeader = () => (
    <>
      <View style={styles.section}>
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

      <View style={styles.section}>
        <Text style={styles.title}>Demo Images</Text>
        <Image source={require('@/assets/images/icon.png')} style={styles.image} />
        <Image source={{ uri: 'https://placehold.jp/150x150.png' }} style={styles.image} />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Demo Boxes</Text>
        <View style={styles.boxesContainer}>
          <View style={[styles.box1, { width: width * 0.8 }]} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
      </View>

      <Text style={styles.title}>Demo List</Text>
    </>
  );

  return (
    <FlashList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={items}
      renderItem={({ item }) => <Text style={styles.listItem}>{item.text}</Text>}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBlockStart: 20,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  image: {
    width: 150,
    height: 150,
  },
  boxesContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  box1: {
    backgroundColor: 'red',
    width: '100%',
    height: 100,
  },
  box2: {
    backgroundColor: 'blue',
    width: '100%',
    height: 100,
  },
  box3: {
    backgroundColor: 'green',
    width: '100%',
    height: 100,
  },
  listContainer: {
    gap: 10,
  },
  section: {
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 8,
    fontSize: 16,
  },
});