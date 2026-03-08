import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SERVICES } from '../constants/theme';

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
        <Text style={styles.subtitle}>Tech Sirat Technologies (Pvt.) Ltd.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        {SERVICES.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceCard}
            onPress={() => navigation.navigate('ServiceDetail', { service })}
            activeOpacity={0.8}
          >
            <View style={styles.serviceIcon}>
              <Text style={styles.serviceIconText}>{service.id}</Text>
            </View>
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.ctaSection}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={styles.ctaButtonText}>View All Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ctaButtonOutline}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.ctaButtonOutlineText}>Get in Touch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.linkButtonText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 40,
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
    color: COLORS.grey,
    letterSpacing: 3,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.grey,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.white,
    marginBottom: 20,
    letterSpacing: 1,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkBlue,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIconText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 16,
  },
  serviceContent: {
    flex: 1,
    marginLeft: 14,
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.white,
  },
  serviceSubtitle: {
    fontSize: 12,
    color: COLORS.grey,
    marginTop: 2,
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 12,
  },
  ctaButton: {
    backgroundColor: COLORS.orange,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 16,
  },
  ctaButtonOutline: {
    borderWidth: 2,
    borderColor: COLORS.orange,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaButtonOutlineText: {
    color: COLORS.orange,
    fontWeight: '600',
    fontSize: 16,
  },
  linkButton: {
    paddingVertical: 12,
    marginTop: 8,
  },
  linkButtonText: {
    color: COLORS.grey,
    fontSize: 14,
  },
});
