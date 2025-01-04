import { View, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 60,
    backgroundColor: "purple",
    position: "absolute",
    bottom: 0,
  },
});