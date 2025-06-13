import React from "react";
import { View, StyleSheet, Image } from "react-native";

const AvatarIcon = ({ uri, size }: { uri: string; size: number }) => {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
      <Image
        source={{ uri }}
        style={[styles.image, { borderRadius: size / 2 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 0,
    borderWidth: 2.5,
    borderColor: '#5e66ff',
    zIndex: 100,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },
});

export default AvatarIcon;
