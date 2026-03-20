import { type PropsWithChildren } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useCamera } from "@/hooks/use-camera";
import { PrimaryButton } from "@/components/ui/primary-button";

/**
 * カメラパーミッションのガードコンポーネント
 *
 * パーミッションの状態に応じて表示を切り替える。
 * - 取得中: ローディングスピナー
 * - 未許可: 許可リクエストUI
 * - 許可済み: children をそのまま表示
 *
 * @example
 * ```tsx
 * <CameraPermissionGate>
 *   <CameraPreview />
 * </CameraPermissionGate>
 * ```
 */
export function CameraPermissionGate({ children }: PropsWithChildren) {
	const { isReady, isGranted, requestPermission } = useCamera();

	if (!isReady) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="black" />
			</View>
		);
	}

	if (!isGranted) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>カメラの使用を許可してください</Text>
				<PrimaryButton onPress={requestPermission}>カメラの使用を許可</PrimaryButton>
			</View>
		);
	}

	return <>{children}</>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	message: {
		marginBottom: 16,
		fontSize: 16,
	},
});
