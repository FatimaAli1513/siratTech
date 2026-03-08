import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
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

export default function ServiceDetailScreen({ route }) {
  const { service } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={[styles.card, shadow]}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{service.title.split(' ')[0]}</Text>
          </View>
          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.subtitle}>{service.subtitle}</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>{service.description}</Text>
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
    paddingBottom: 40,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: `${COLORS.orange}20`,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 18,
  },
  badgeText: {
    color: COLORS.orange,
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.textDark,
    lineHeight: 32,
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.orange,
    fontWeight: '600',
    marginBottom: 20,
  },
  divider: {
    width: 56,
    height: 4,
    backgroundColor: COLORS.orange,
    borderRadius: 2,
    marginBottom: 24,
  },
  description: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 26,
  },
});
