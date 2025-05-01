import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2c74ab', '#144d78', '#0b304d']}
      style={styles.background}>
        <Text style={styles.text}>Welcome to Expo</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 25,
    fontFamily: 'pixeloperator',
    color: '#fff',
  },
});
