import { View, Text, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

const shadow = Platform.select({
  ios: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  android: { elevation: 3 },
});

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={[styles.heroCard, shadow]}>
          <Image
            source={require('../assets/adaptive-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.brandName}>
            <Text style={styles.sirat}>SIRAT</Text>
            <Text style={styles.tech}>Tech</Text>
          </Text>
          <View style={styles.taglineBadge}>
            <Text style={styles.tagline}>INNOVATE YOUR PATH</Text>
          </View>
        </View>

        <View style={[styles.sectionCard, shadow]}>
          <View style={styles.sectionHeader}>
            <Ionicons name="business" size={22} color={COLORS.orange} />
            <Text style={styles.sectionTitle}>Tech Sirat Technologies (Pvt.) Ltd.</Text>
          </View>
          <Text style={styles.paragraph}>
            We are a technology company committed to delivering innovative solutions that reshape industries and connect organizations with digital transformation.
          </Text>
        </View>

        <View style={[styles.sectionCard, shadow]}>
          <View style={styles.sectionHeader}>
            <Ionicons name="layers" size={22} color={COLORS.orange} />
            <Text style={styles.sectionTitle}>Our Expertise</Text>
          </View>
          <View style={styles.expertiseList}>
            <View style={styles.expertiseItem}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.expertiseText}>Agri-Tech Solutions</Text>
            </View>
            <View style={styles.expertiseItem}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.expertiseText}>Bio-Tech Solutions</Text>
            </View>
            <View style={styles.expertiseItem}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.expertiseText}>Secondary Sale Management</Text>
            </View>
            <View style={styles.expertiseItem}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.expertiseText}>E-commerce Solutions</Text>
            </View>
            <View style={styles.expertiseItem}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.expertiseText}>Field Force Management</Text>
            </View>
            <View style={styles.expertiseItem}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.orange} />
              <Text style={styles.expertiseText}>Business Consultancy</Text>
            </View>
          </View>
        </View>

        <View style={[styles.sectionCard, styles.valuesCard, shadow]}>
          <View style={styles.sectionHeader}>
            <Ionicons name="heart" size={22} color={COLORS.orange} />
            <Text style={styles.sectionTitle}>Our Values</Text>
          </View>
          <Text style={styles.paragraph}>
            Innovation, Quality, Transparency, and Client Success drive everything we do.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  heroCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  logo: {
    width: 90,
    height: 68,
    marginBottom: 16,
  },
  brandName: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },
  sirat: { color: COLORS.darkBlue },
  tech: { color: COLORS.orange },
  taglineBadge: {
    backgroundColor: COLORS.lightBg,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagline: {
    fontSize: 11,
    color: COLORS.textMuted,
    letterSpacing: 3,
    fontWeight: '600',
  },
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  paragraph: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 26,
  },
  expertiseList: {
    gap: 12,
  },
  expertiseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  expertiseText: {
    fontSize: 15,
    color: COLORS.textMuted,
    flex: 1,
  },
  valuesCard: {
    borderLeftWidth: 4,
    borderLeftColor: COLORS.orange,
  },
});
