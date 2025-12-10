/**
 * Example component demonstrating Unistyles usage
 * This file shows how to use Unistyles StyleSheet with themes and breakpoints
 */

import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export function UnistylesExample() {
  // Access the current theme
  const { theme } = StyleSheet.useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unistyles Demo</Text>
      <Text style={styles.subtitle}>Theme-aware styling</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Theme</Text>
        <Text style={styles.cardText}>
          Background: {theme.colors.background}
        </Text>
        <Text style={styles.cardText}>Primary: {theme.colors.primary}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Primary</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Secondary</Text>
        </Pressable>
      </View>
    </View>
  );
}

// StyleSheet.create with theme access and responsive breakpoints
const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.caption,
    color: theme.colors.placeholder,
    marginBottom: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    // Responsive width based on breakpoints
    width: {
      xs: "100%",
      md: "80%",
      lg: "60%",
    },
  },
  cardTitle: {
    ...theme.typography.h4,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  cardText: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  buttonRow: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    // Responsive padding
    padding: {
      xs: theme.spacing.sm,
      md: theme.spacing.md,
    },
  },
  buttonText: {
    color: "#ffffff",
    ...theme.typography.body,
    fontWeight: "600",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
  },
  secondaryButtonText: {
    color: theme.colors.primary,
    ...theme.typography.body,
    fontWeight: "600",
    textAlign: "center",
  },
}));

export default UnistylesExample;
