import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.blue[900],
    borderColor: colors.blue[500],
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    opacity: 0.2,
    position: "absolute",
  },
  fullImage: {
    height: "100%",
    width: "100%",
  },
  initials: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
})
