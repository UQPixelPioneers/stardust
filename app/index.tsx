import { Text, View } from "react-native";
import { Login } from "./Login";
import styles from '@/styles/GlobalSheet';
export default function Index() {
  return (
    <View
      style={styles.GlobalView}
    >
      <Login></Login>
    </View>
  );
}
