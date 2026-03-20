import { useRouter } from "expo-router";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraPermissionGate } from "@/components/camera-permission-gate";
import { CameraPreview } from "@/components/camera-preview";
import { HapticFeedbackButton } from "@/components/haptic-feedback-button";
import { TextSaveForm } from "@/components/text-save-form";
import { PrimaryButton } from "@/components/ui/primary-button";
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from "react";

// 通知のハンドラーを設定
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export default function HomeScreen() {
  const router = useRouter();
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    requestPermision();
  }, []);

  const requestPermision = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    setPermissionGranted(status === 'granted');
  }

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'リマインダー',
        body: '5秒が経過しました'
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 5
      }
    })
  }

  return (
    <CameraPermissionGate>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior="padding"
        >
          {/* <View style={styles.top}>
            <PrimaryButton onPress={() => router.push("/detail")}>詳細画面</PrimaryButton>
            <HapticFeedbackButton />
          </View>

          <CameraPreview /> */}

          <Text style={styles.title}>ローカル通知のデモ</Text>
          {permissionGranted ? (
            <PrimaryButton onPress={scheduleNotification}>
              5秒後に通知を送信
            </PrimaryButton>
          ) : (
            <Text>通知の許可が必要です</Text>
          )}

          {/* <TextSaveForm storageKey="text" /> */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </CameraPermissionGate>
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
    justifyContent: "center",
    gap: 20,
  },
  top: {
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
