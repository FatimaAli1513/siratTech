import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
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
        <Text style={styles.companyName}>Tech Sirat Technologies (Pvt.) Ltd.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Who We Are</Text>
        <Text style={styles.paragraph}>
          A technology company committed to delivering innovative solutions that reshape industries. We help organizations adopt digital technologies and connect with the entire value chain.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.paragraph}>
          To be the leading partner in digital transformation, enabling businesses to achieve breakthrough growth through cutting-edge technology solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Values</Text>
        <View style={styles.valuesList}>
          <View style={styles.valueItem}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.orange} />
            <Text style={styles.valueText}>Innovation</Text>
          </View>
          <View style={styles.valueItem}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.orange} />
            <Text style={styles.valueText}>Quality</Text>
          </View>
          <View style={styles.valueItem}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.orange} />
            <Text style={styles.valueText}>Transparency</Text>
          </View>
          <View style={styles.valueItem}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.orange} />
            <Text style={styles.valueText}>Client Success</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore Our Solutions</Text>
        <Text style={styles.paragraph}>
          From Agri-Tech to E-commerce, Field Force Management to Business Consultancy — we offer end-to-end digital solutions.
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={styles.primaryButtonText}>View All Services</Text>
          <Ionicons name="arrow-forward" size={18} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => navigation.navigate('About')}
          activeOpacity={0.8}
        >
          <Text style={styles.aboutButtonText}>About Us</Text>
          <Ionicons name="information-circle-outline" size={20} color={COLORS.orange} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 90,
    marginBottom: 16,
  },
  brandName: {
    fontSize: 28,
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
    marginBottom: 4,
  },
  companyName: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.orange,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  paragraph: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 24,
  },
  valuesList: {
    gap: 10,
  },
  valueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  valueText: {
    fontSize: 15,
    color: COLORS.textMuted,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.orange,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 16,
  },
  primaryButtonText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingBottom: 48,
  },
  aboutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: COLORS.orange,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  aboutButtonText: {
    color: COLORS.orange,
    fontWeight: '600',
    fontSize: 16,
  },
});
