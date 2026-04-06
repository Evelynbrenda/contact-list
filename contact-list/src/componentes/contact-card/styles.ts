import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[800],
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 14,
    padding: 16,
  },
  content: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 14,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  actions: {
    gap: 10,
  },
  name: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: "700",
  },
  phone: {
    color: colors.gray[400],
    fontSize: 14,
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: colors.green[900],
    borderRadius: 999,
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  deleteButton: {
    alignItems: "center",
    backgroundColor: colors.gray[800],
    borderRadius: 999,
    height: 42,
    justifyContent: "center",
    width: 42,
  },
})
