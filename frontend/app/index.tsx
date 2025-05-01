import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#555"
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "bold", fontFamily: "monospace" }}>Hello World</Text>
    </View>
  );
}
