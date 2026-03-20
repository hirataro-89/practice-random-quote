import { type PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";

type PrimaryButtonProps = PropsWithChildren<TouchableOpacityProps>;

/**
 * アプリ共通のプライマリボタン
 *
 * 青背景・白文字のスタイルを持つ汎用ボタン。
 * children にテキストやアイコンなど自由に渡せる。
 * TouchableOpacity の props をそのまま受け取れるため、
 * onPress や disabled などを自由に指定できる。
 *
 * @example
 * ```tsx
 * <PrimaryButton onPress={handleSave}>保存</PrimaryButton>
 * <PrimaryButton onPress={handleSubmit} disabled={!isValid}>送信</PrimaryButton>
 * ```
 */
export function PrimaryButton({ children, style, ...rest }: PrimaryButtonProps) {
	return (
		<TouchableOpacity style={[styles.button, style]} {...rest}>
			<Text style={styles.buttonText}>{children}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontSize: 16,
	},
});
