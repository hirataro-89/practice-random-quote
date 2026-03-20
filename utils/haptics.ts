import * as Haptics from "expo-haptics";

/**
 * 触覚フィードバック（Haptics）を発火するユーティリティ関数
 *
 * expo-haptics の impactAsync をラップし、デフォルトで Medium スタイルの
 * フィードバックを提供する。ボタンタップ時などに呼び出す。
 *
 * @param style - フィードバックの強さ（Light / Medium / Heavy）。デフォルト: Medium
 *
 * @example
 * ```tsx
 * <TouchableOpacity onPress={() => triggerHapticFeedback()}>
 * <TouchableOpacity onPress={() => triggerHapticFeedback(ImpactFeedbackStyle.Heavy)}>
 * ```
 */
export const triggerHapticFeedback = async (
	style: Haptics.ImpactFeedbackStyle = Haptics.ImpactFeedbackStyle.Medium,
) => {
	await Haptics.impactAsync(style);
};
