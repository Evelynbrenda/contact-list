import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[950],
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 36,
    paddingTop: 72,
  },
  hero: {
    gap: 28,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.blue[900],
    borderColor: colors.blue[500],
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  badgeText: {
    color: colors.blue[300],
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  logoWrap: {
    alignItems: "center",
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[800],
    borderRadius: 36,
    borderWidth: 1,
    minHeight: 280,
    justifyContent: "center",
    overflow: "hidden",
    padding: 32,
  },
  logo: {
    height: 160,
    opacity: 0.92,
    width: 160,
  },
  copy: {
    gap: 12,
  },
  title: {
    color: colors.gray[100],
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 40,
  },
  subtitle: {
    color: colors.gray[400],
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
  footer: {
    gap: 14,
  },
  footerText: {
    color: colors.gray[500],
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
})
