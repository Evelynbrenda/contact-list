import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, TouchableOpacity, View } from "react-native"

import { ContactAvatar } from "@/componentes/contact-avatar"
import { colors } from "@/styles/colors"

import { styles } from "./styles"

type Props = {
  name: string
  phone: string
  photo: string
  onPress: () => void
  onDelete: () => void
}

export function ContactCard({ name, phone, photo, onPress, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.content} onPress={onPress}>
        <ContactAvatar name={name} photo={photo} />

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </Pressable>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <MaterialIcons name="delete-outline" size={20} color={colors.gray[100]} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <MaterialIcons name="call" size={20} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
