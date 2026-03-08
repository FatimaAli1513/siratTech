import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS } from '../constants/theme';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Image
          source={require('../assets/adaptive-icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.brandName}>
          <Text style={styles.sirat}>SIRAT</Text>
          <Text style={styles.tech}>Tech</Text>
        </Text>
        <Text style={styles.tagline}>INNOVATE YOUR PATH</Text>

        <Text style={styles.sectionTitle}>Tech Sirat Technologies (Pvt.) Ltd.</Text>
        <Text style={styles.paragraph}>
          We are a technology company committed to delivering innovative solutions that reshape industries and connect organizations with digital transformation.
        </Text>

        <Text style={styles.sectionTitle}>Our Expertise</Text>
        <Text style={styles.paragraph}>
          • Agri-Tech Solutions{'\n'}
          • Bio-Tech Solutions{'\n'}
          • Secondary Sale Management{'\n'}
          • E-commerce Solutions{'\n'}
          • Field Force Management{'\n'}
          • Business Consultancy
        </Text>

        <Text style={styles.sectionTitle}>Our Values</Text>
        <Text style={styles.paragraph}>
          Innovation, Quality, Transparency, and Client Success drive everything we do.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    padding: 24,
    paddingBottom: 100,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 75,
    marginBottom: 16,
  },
  brandName: {
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 6,
  },
  sirat: { color: COLORS.navy },
  tech: { color: COLORS.orange },
  tagline: {
    fontSize: 11,
    color: COLORS.textMuted,
    letterSpacing: 3,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.orange,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  paragraph: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 26,
    marginBottom: 28,
    textAlign: 'left',
  },
});
