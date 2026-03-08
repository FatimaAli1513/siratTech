import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { COLORS } from '../constants/theme';

export default function ContactScreen() {
  const openWebsite = () => Linking.openURL('https://techsirattech.com');
  const openEmail = () => Linking.openURL('mailto:info@techsirattech.com');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Image
          source={require('../assets/adaptive-icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.subtitle}>
          Have a project in mind? We'd love to hear from you.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Website</Text>
          <Text style={styles.infoValue}>techsirattech.com</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={openWebsite}>
          <Text style={styles.buttonText}>Visit Website</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={openEmail}>
          <Text style={styles.buttonOutlineText}>Email Us</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Tech Sirat Technologies (Pvt.) Ltd.{'\n'}
          © 2026 All Rights Reserved
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  content: {
    padding: 24,
    paddingBottom: 100,
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.grey,
    textAlign: 'center',
    marginBottom: 32,
  },
  infoCard: {
    width: '100%',
    backgroundColor: COLORS.darkBlue,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.grey,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.orange,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    width: '100%',
    borderWidth: 2,
    borderColor: COLORS.orange,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: COLORS.orange,
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    fontSize: 12,
    color: COLORS.grey,
    textAlign: 'center',
    marginTop: 40,
  },
});
