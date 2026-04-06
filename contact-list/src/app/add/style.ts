import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[950],
    flex: 1,
    paddingTop: 56,
  },
  header: {
    gap: 18,
    paddingHorizontal: 24,
  },
  backButton: {
    alignItems: "center",
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[800],
    borderRadius: 14,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  headerText: {
    gap: 6,
  },
  title: {
    color: colors.gray[100],
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.gray[400],
    fontSize: 15,
    lineHeight: 22,
  },
  form: {
    gap: 18,
    padding: 24,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    color: colors.gray[300],
    fontSize: 14,
    fontWeight: "600",
  },
  photoHint: {
    alignItems: "center",
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[800],
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    padding: 14,
  },
  photoHintText: {
    color: colors.gray[400],
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
})
