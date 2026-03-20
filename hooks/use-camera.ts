import { useCameraPermissions } from "expo-camera";

/**
 * カメラのパーミッション状態を管理するカスタムフック
 *
 * expo-camera の useCameraPermissions をラップし、
 * パーミッションの状態判定を簡潔にするヘルパープロパティを提供する。
 *
 * @example
 * ```tsx
 * const { isReady, isGranted, requestPermission } = useCamera();
 *
 * if (!isReady) return <Loading />;
 * if (!isGranted) return <PermissionRequest onPress={requestPermission} />;
 * return <CameraView />;
 * ```
 */
export const useCamera = () => {
	const [permission, requestPermission] = useCameraPermissions();

	return {
		/** パーミッション情報の取得が完了したかどうか（null でなくなった時点で true） */
		isReady: permission != null,
		/** カメラの使用が許可されているかどうか */
		isGranted: permission?.granted ?? false,
		/** カメラの使用許可をユーザーにリクエストする関数 */
		requestPermission,
	};
};
