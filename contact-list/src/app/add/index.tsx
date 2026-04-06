import { useState } from "react"

import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Alert, Text, TouchableOpacity, View } from "react-native"

import { Button } from "@/componentes/button"
import { Input } from "@/componentes/input"
import { ContactStorage } from "@/storage/contact-storage"
import { colors } from "@/styles/colors"

import { styles } from "./style"

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)

  if (digits.length <= 2) {
    return digits
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function Add() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  async function handleAdd() {
    if (!name.trim()) {
      return Alert.alert("Nome", "Informe o nome do contato.")
    }

    if (!phone.trim()) {
      return Alert.alert("Telefone", "Informe o telefone do contato.")
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return Alert.alert("Telefone", "Informe um telefone valido.")
    }

    await ContactStorage.save({
      id: String(new Date().getTime()),
      name: name.trim(),
      phone: phone.trim(),
      photo: "default",
    })

    Alert.alert("Contato salvo", "O novo contato foi adicionado à lista.")
    router.back()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color={colors.gray[100]} />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>Novo contato</Text>
          <Text style={styles.subtitle}>Preencha os dados básicos para cadastrar alguém.</Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Nome</Text>
          <Input
            placeholder="Ex.: Maria Oliveira"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Telefone</Text>
          <Input
            placeholder="Ex.: (11) 99999-9999"
            value={phone}
            onChangeText={(value) => setPhone(formatPhone(value))}
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>

        <View style={styles.photoHint}>
          <MaterialIcons name="photo-camera" size={18} color={colors.blue[300]} />
          <Text style={styles.photoHintText}>
            Novos contatos usam uma imagem padrão, como pedido na atividade.
          </Text>
        </View>

        <Button title="Adicionar contato" onPress={handleAdd} />
      </View>
    </View>
  )
}
