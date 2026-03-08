import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const COLORS = {
  darkBlue: '#1a3459',
  navy: '#2d5084',
  orange: '#f28b2a',
  orangeLight: '#ffb76d',
  grey: '#6e85a3',
  black: '#0a0a0a',
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/adaptive-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.brandName}>
          <Text style={styles.sirat}>SIRAT</Text>
          <Text style={styles.tech}>Tech</Text>
        </Text>
        
        <Text style={styles.tagline}>INNOVATE YOUR PATH</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.welcome}>
          Welcome to SIRATTech{'\n'}
          Your partner in innovation
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 100,
  },
  brandName: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
  },
  sirat: {
    color: COLORS.navy,
  },
  tech: {
    color: COLORS.orange,
  },
  tagline: {
    fontSize: 12,
    color: COLORS.grey,
    letterSpacing: 4,
    marginBottom: 32,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: COLORS.orange,
    marginBottom: 32,
    borderRadius: 2,
  },
  welcome: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: 'center',
    lineHeight: 26,
  },
});
