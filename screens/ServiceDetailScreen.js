import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../constants/theme';

export default function ServiceDetailScreen({ route }) {
  const { service } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{service.title.split(' ')[0]}</Text>
        </View>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.subtitle}>{service.subtitle}</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>{service.description}</Text>
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
    paddingBottom: 40,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.orange,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 16,
  },
  badgeText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textDark,
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.orange,
    fontWeight: '500',
    marginBottom: 20,
  },
  divider: {
    width: 50,
    height: 3,
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
