import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[950],
    flex: 1,
    paddingTop: 56,
  },
  header: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  headerText: {
    flex: 1,
    gap: 6,
  },
  overline: {
    color: colors.blue[300],
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    color: colors.gray[100],
    fontSize: 28,
    fontWeight: "800",
    lineHeight: 34,
  },
  subtitle: {
    color: colors.gray[400],
    fontSize: 15,
    lineHeight: 22,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: colors.green[300],
    borderRadius: 20,
    height: 56,
    justifyContent: "center",
    marginTop: 12,
    width: 56,
  },
  list: {
    marginTop: 28,
  },
  listContent: {
    gap: 14,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  emptyState: {
    alignItems: "center",
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[800],
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 12,
    padding: 24,
  },
  emptyTitle: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  emptyText: {
    color: colors.gray[400],
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  modalOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(9, 9, 11, 0.72)",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  modalCard: {
    backgroundColor: colors.gray[900],
    borderColor: colors.gray[800],
    borderRadius: 24,
    borderWidth: 1,
    gap: 12,
    padding: 24,
    width: "100%",
  },
  modalTitle: {
    color: colors.gray[100],
    fontSize: 22,
    fontWeight: "800",
  },
  modalText: {
    color: colors.gray[400],
    fontSize: 15,
    lineHeight: 22,
  },
  modalActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  modalSecondaryButton: {
    alignItems: "center",
    backgroundColor: colors.gray[800],
    borderRadius: 12,
    flex: 1,
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: 16,
  },
  modalSecondaryText: {
    color: colors.gray[100],
    fontSize: 15,
    fontWeight: "700",
  },
  modalPrimaryButton: {
    alignItems: "center",
    backgroundColor: colors.green[300],
    borderRadius: 12,
    flex: 1,
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: 16,
  },
  modalPrimaryText: {
    color: colors.green[900],
    fontSize: 15,
    fontWeight: "800",
  },
})
