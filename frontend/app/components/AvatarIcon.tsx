import React from "react";
import { View, StyleSheet, Image } from "react-native";

const AvatarIcon = ({ uri, size }: { uri: string; size: number }) => {
  return (
    <>
      {/*Avatar*/}
      <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
        {/*Active status button*/}
        <View style={{ position: "absolute", bottom: 25, right: 25, width: 12, height: 12, borderRadius: 6, backgroundColor: "#2C2", zIndex: 1, borderColor: '#9E9', borderWidth: 2, shadowColor: '#000', elevation: 3, shadowRadius: 10}} />

        <Image
          source={{ uri }}
          style={[styles.image, { borderRadius: size / 2 }]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
