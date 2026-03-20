import { StyleSheet, TextInput, View } from "react-native";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { PrimaryButton } from "@/components/ui/primary-button";

/**
 * テキスト保存フォームコンポーネント
 *
 * テキスト入力と保存ボタンを提供する。
 * 入力値は useLocalStorage フックで AsyncStorage と同期される。
 *
 * @param props.storageKey - AsyncStorage に保存する際のキー名
 */
export function TextSaveForm({ storageKey }: { storageKey: string }) {
	const { value, setValue, save } = useLocalStorage(storageKey);

	const handleSave = async () => {
		await save();
		alert("保存しました");
	};

	return (
		<View>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder="テキストを入力してください"
				style={styles.input}
			/>
			<PrimaryButton onPress={handleSave}>保存</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
		marginBottom: 24,
	},
});
