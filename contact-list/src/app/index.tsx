import { Image, Text, View } from "react-native"
import { router } from "expo-router"

import { Button } from "@/componentes/button"

import { styles } from "./start-styles"

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Bem-vindo</Text>
        </View>

        <View style={styles.logoWrap}>
          <Image
            source={require("@/assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.copy}>
          <Text style={styles.title}>Suas ligações começam aqui</Text>
          <Text style={styles.subtitle}>
            Acesse sua lista de contatos,
            adicione novos contatos e tenha total controle sobre suas ligações.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Entrar no app" onPress={() => router.push("/contacts")} />
        <Text style={styles.footerText}>
          Toque para abrir a lista de contatos e iniciar uma chamada.
        </Text>
      </View>
    </View>
  )
}
