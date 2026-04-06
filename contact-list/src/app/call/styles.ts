import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[950],
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 56,
    paddingHorizontal: 24,
    paddingTop: 56,
  },
  closeButton: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[800],
    borderRadius: 14,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  centerContent: {
    alignItems: "center",
    gap: 14,
    justifyContent: "center",
  },
  status: {
    color: colors.blue[300],
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  name: {
    color: colors.gray[100],
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },
  phone: {
    color: colors.gray[400],
    fontSize: 16,
  },
  pulse: {
    backgroundColor: colors.green[300],
    borderRadius: 999,
    height: 14,
    marginTop: 8,
    opacity: 0.9,
    width: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    alignItems: "center",
    gap: 10,
    width: 92,
  },
  secondaryButton: {
    alignItems: "center",
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[700],
    borderRadius: 999,
    borderWidth: 1,
    height: 64,
    justifyContent: "center",
    width: 64,
  },
  endButton: {
    alignItems: "center",
    backgroundColor: "#DC2626",
    borderRadius: 999,
    height: 64,
    justifyContent: "center",
    width: 64,
  },
  actionLabel: {
    color: colors.gray[300],
    fontSize: 13,
    fontWeight: "600",
  },
})
