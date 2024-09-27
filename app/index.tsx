import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
