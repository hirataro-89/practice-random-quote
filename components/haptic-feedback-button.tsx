import { triggerHapticFeedback } from "@/utils/haptics";
import { PrimaryButton } from "@/components/ui/primary-button";

/**
 * Haptic Feedback デモ用ボタンコンポーネント
 *
 * タップすると触覚フィードバック（Medium）が発火する。
 * utils/haptics の triggerHapticFeedback を内部で呼び出す。
 */
export function HapticFeedbackButton() {
	return (
		<PrimaryButton onPress={() => triggerHapticFeedback()}>Haptic Feedback</PrimaryButton>
	);
}
