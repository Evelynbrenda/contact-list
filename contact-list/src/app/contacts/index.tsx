import { useCallback, useState } from "react"

import { MaterialIcons } from "@expo/vector-icons"
import { router, useFocusEffect } from "expo-router"
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native"

import { ContactCard } from "@/componentes/contact-card"
import { ContactStorage, type Contact } from "@/storage/contact-storage"
import { colors } from "@/styles/colors"

import { styles } from "./styles"

export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  async function loadContacts() {
    const response = await ContactStorage.get()
    setContacts(response)
  }

  function handleCall(contactId: string) {
    router.push({
      pathname: "/call/[id]" as never,
      params: { id: contactId },
    })
  }

  function handleDelete(contact: Contact) {
    setSelectedContact(contact)
  }

  async function confirmDelete() {
    if (!selectedContact) {
      return
    }

    await ContactStorage.remove(selectedContact.id)
    setSelectedContact(null)
    await loadContacts()
  }

  useFocusEffect(
    useCallback(() => {
      loadContacts()
    }, []),
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.overline}>Lista de contatos</Text>
          <Text style={styles.title}>Quem você quer ligar hoje?</Text>
          <Text style={styles.subtitle}>
            Toque em um contato para iniciar uma ligação ou cadastre um novo número.
          </Text>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={() => router.push("/add")}>
          <MaterialIcons name="person-add" size={24} color={colors.green[900]} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactCard
            name={item.name}
            phone={item.phone}
            photo={item.photo}
            onPress={() => handleCall(item.id)}
            onDelete={() => handleDelete(item)}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Nenhum contato cadastrado</Text>
            <Text style={styles.emptyText}>
              Adicione um novo contato para começar a usar o aplicativo.
            </Text>
          </View>
        }
      />

      <Modal
        visible={Boolean(selectedContact)}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedContact(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Excluir contato</Text>
            <Text style={styles.modalText}>
              {selectedContact
                ? `Deseja remover ${selectedContact.name} da sua lista?`
                : ""}
            </Text>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.modalSecondaryButton}
                onPress={() => setSelectedContact(null)}
              >
                <Text style={styles.modalSecondaryText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalPrimaryButton} onPress={confirmDelete}>
                <Text style={styles.modalPrimaryText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
