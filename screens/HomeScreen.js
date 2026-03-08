import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

const shadow = Platform.select({
  ios: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  android: { elevation: 4 },
});

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <View style={[styles.logoWrap, shadow]}>
          <Image
            source={require('../assets/adaptive-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.brandName}>
          <Text style={styles.sirat}>SIRAT</Text>
          <Text style={styles.tech}>Tech</Text>
        </Text>
        <View style={styles.taglineBadge}>
          <Text style={styles.tagline}>INNOVATE YOUR PATH</Text>
        </View>
        <Text style={styles.companyName}>Tech Sirat Technologies (Pvt.) Ltd.</Text>
      </View>

      <View style={[styles.section, styles.cardSection]}>
        <View style={[styles.sectionCard, shadow]}>
          <View style={styles.sectionIcon}>
            <Ionicons name="business" size={24} color={COLORS.orange} />
          </View>
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <Text style={styles.paragraph}>
            A technology company committed to delivering innovative solutions that reshape industries. We help organizations adopt digital technologies and connect with the entire value chain.
          </Text>
        </View>
      </View>

      <View style={[styles.section, styles.cardSection]}>
        <View style={[styles.sectionCard, shadow]}>
          <View style={styles.sectionIcon}>
            <Ionicons name="eye" size={24} color={COLORS.orange} />
          </View>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.paragraph}>
            To be the leading partner in digital transformation, enabling businesses to achieve breakthrough growth through cutting-edge technology solutions.
          </Text>
        </View>
      </View>

      <View style={[styles.section, styles.cardSection]}>
        <View style={[styles.sectionCard, shadow]}>
          <View style={styles.sectionIcon}>
            <Ionicons name="star" size={24} color={COLORS.orange} />
          </View>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesGrid}>
            <View style={styles.valueChip}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.valueText}>Innovation</Text>
            </View>
            <View style={styles.valueChip}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.valueText}>Quality</Text>
            </View>
            <View style={styles.valueChip}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.valueText}>Transparency</Text>
            </View>
            <View style={styles.valueChip}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.valueText}>Client Success</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.section, styles.cardSection]}>
        <View style={[styles.sectionCard, styles.ctaCard, shadow]}>
          <Ionicons name="cube" size={32} color={COLORS.orange} style={styles.ctaIcon} />
          <Text style={styles.sectionTitle}>Explore Our Solutions</Text>
          <Text style={styles.paragraph}>
            From Agri-Tech to E-commerce, Field Force Management to Business Consultancy — we offer end-to-end digital solutions.
          </Text>
          <TouchableOpacity
            style={[styles.primaryButton, shadow]}
            onPress={() => navigation.navigate('Services')}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>View All Services</Text>
            <Ionicons name="arrow-forward-circle" size={22} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.aboutButton, shadow]}
          onPress={() => navigation.navigate('About')}
          activeOpacity={0.85}
        >
          <Ionicons name="information-circle" size={22} color={COLORS.orange} />
          <Text style={styles.aboutButtonText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 20,
  },
  logoWrap: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 75,
  },
  brandName: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },
  sirat: { color: COLORS.darkBlue },
  tech: { color: COLORS.orange },
  taglineBadge: {
    backgroundColor: COLORS.lightBg,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 11,
    color: COLORS.textMuted,
    letterSpacing: 3,
    fontWeight: '600',
  },
  companyName: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  cardSection: {
    paddingBottom: 20,
  },
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${COLORS.orange}18`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 10,
    letterSpacing: 0.3,
  },
  paragraph: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 24,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  valueChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.lightBg,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  valueText: {
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  ctaCard: {
    borderLeftWidth: 4,
    borderLeftColor: COLORS.orange,
  },
  ctaIcon: {
    marginBottom: 8,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: COLORS.orange,
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 20,
  },
  primaryButtonText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingBottom: 56,
  },
  aboutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.orange,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },
  aboutButtonText: {
    color: COLORS.orange,
    fontWeight: '600',
    fontSize: 16,
  },
});
