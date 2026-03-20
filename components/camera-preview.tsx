import { CameraView } from "expo-camera";
import { StyleSheet, View } from "react-native";

/**
 * カメラプレビューコンポーネント
 *
 * CameraView をラップし、親の領域いっぱいに表示する。
 * カメラのパーミッション管理は呼び出し側で行う想定。
 */
export function CameraPreview() {
	return (
		<View style={styles.wrapper}>
			<CameraView style={styles.camera} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	camera: {
		width: "100%",
		flex: 1,
	},
});
