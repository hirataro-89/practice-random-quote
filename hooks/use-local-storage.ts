import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

/**
 * AsyncStorage を使ったローカルストレージ管理フック
 *
 * マウント時にストレージから値を読み込み、state として保持する。
 * save() で現在の state をストレージに書き込み、remove() でストレージから削除する。
 *
 * @param key - AsyncStorage のキー名
 * @param initialValue - ストレージに値がない場合の初期値（デフォルト: 空文字列）
 *
 * @example
 * ```tsx
 * const { value, setValue, save } = useLocalStorage('user-name');
 *
 * <TextInput value={value} onChangeText={setValue} />
 * <Button onPress={save} title="保存" />
 * ```
 */
export const useLocalStorage = (key: string, initialValue = "") => {
	const [value, setValue] = useState(initialValue);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const saved = await AsyncStorage.getItem(key);
			if (saved != null) {
				setValue(saved);
			}
			setIsLoaded(true);
		})();
	}, [key]);

	/** 現在の value を AsyncStorage に保存する */
	const save = useCallback(async () => {
		await AsyncStorage.setItem(key, value);
	}, [key, value]);

	/** AsyncStorage からデータを削除し、state を初期値にリセットする */
	const remove = useCallback(async () => {
		await AsyncStorage.removeItem(key);
		setValue(initialValue);
	}, [key, initialValue]);

	return {
		/** 現在の値 */
		value,
		/** 値を更新する（AsyncStorage には書き込まれない。永続化するには save() を呼ぶ） */
		setValue,
		/** 現在の value を AsyncStorage に永続化する */
		save,
		/** AsyncStorage から値を削除し、初期値にリセットする */
		remove,
		/** AsyncStorage からの初回読み込みが完了したかどうか */
		isLoaded,
	};
};
