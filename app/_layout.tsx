import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Text, TouchableOpacity } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="detail" options={{ title: '詳細画面', headerRight: () => (
          <TouchableOpacity
            onPress={() => alert('タップされました')}
          >
            <Text>タップ</Text>
          </TouchableOpacity>
        ) }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
