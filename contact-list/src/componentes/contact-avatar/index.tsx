import { Image, Text, View } from "react-native"

import { styles } from "./styles"

type Props = {
  name: string
  photo: string
  size?: number
}

function getInitials(name: string) {
  return name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

export function ContactAvatar({ name, photo, size = 56 }: Props) {
  const isDefaultPhoto = photo === "default"

  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
      {isDefaultPhoto ? (
        <>
          <Image
            source={require("@/assets/logo.png")}
            style={[styles.image, { width: size * 0.58, height: size * 0.58 }]}
            resizeMode="contain"
          />
          <Text style={styles.initials}>{getInitials(name)}</Text>
        </>
      ) : (
        <Image
          source={{ uri: photo }}
          style={styles.fullImage}
          resizeMode="cover"
        />
      )}
    </View>
  )
}
