import { useEffect, useState } from "react"

import { MaterialIcons } from "@expo/vector-icons"
import { router, useLocalSearchParams } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

import { ContactAvatar } from "@/componentes/contact-avatar"
import { ContactStorage, type Contact } from "@/storage/contact-storage"
import { colors } from "@/styles/colors"

import { styles } from "./styles"

export default function CallScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [contact, setContact] = useState<Contact | null>(null)

  useEffect(() => {
    async function loadContact() {
      if (!id) {
        return
      }

      const response = await ContactStorage.getById(id)
      setContact(response)
    }

    loadContact()
  }, [id])

  if (!contact) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={22} color={colors.gray[100]} />
        </TouchableOpacity>

        <View style={styles.centerContent}>
          <Text style={styles.status}>Ligação</Text>
          <Text style={styles.name}>Contato não encontrado</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={22} color={colors.gray[100]} />
      </TouchableOpacity>

      <View style={styles.centerContent}>
        <Text style={styles.status}>Ligação em andamento...</Text>
        <ContactAvatar name={contact.name} photo={contact.photo} size={112} />
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>

        <View style={styles.pulse} />
      </View>

      <View style={styles.actions}>
        <View style={styles.action}>
          <View style={styles.secondaryButton}>
            <MaterialIcons name="mic-off" size={22} color={colors.gray[200]} />
          </View>
          <Text style={styles.actionLabel}>Mudo</Text>
        </View>

        <View style={styles.action}>
          <View style={styles.secondaryButton}>
            <MaterialIcons name="volume-up" size={22} color={colors.gray[200]} />
          </View>
          <Text style={styles.actionLabel}>Áudio</Text>
        </View>

        <View style={styles.action}>
          <TouchableOpacity style={styles.endButton} onPress={() => router.back()}>
            <MaterialIcons name="call-end" size={24} color={colors.gray[100]} />
          </TouchableOpacity>
          <Text style={styles.actionLabel}>Encerrar</Text>
        </View>
      </View>
    </View>
  )
}
