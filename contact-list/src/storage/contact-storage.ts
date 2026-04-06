import AsyncStorage from "@react-native-async-storage/async-storage"

const CONTACTS_STORAGE_KEY = "contacts-storage"

export type Contact = {
  id: string
  name: string
  phone: string
  photo: string
}

const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Ana Souza",
    phone: "(11) 98888-1234",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "Bruno Lima",
    phone: "(21) 97777-4567",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "Carla Mendes",
    phone: "(31) 96666-7890",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
]

async function seed() {
  const storage = await AsyncStorage.getItem(CONTACTS_STORAGE_KEY)

  if (!storage) {
    await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(mockContacts))
  }
}

function normalizeContacts(contacts: Contact[]) {
  let hasChanges = false

  const normalizedContacts = contacts.map((contact) => {
    const mockContact = mockContacts.find((item) => item.id === contact.id)

    if (mockContact && contact.photo === "default") {
      hasChanges = true
      return { ...contact, photo: mockContact.photo }
    }

    return contact
  })

  return { normalizedContacts, hasChanges }
}

async function get(): Promise<Contact[]> {
  await seed()

  const storage = await AsyncStorage.getItem(CONTACTS_STORAGE_KEY)
  const contacts: Contact[] = storage ? JSON.parse(storage) : []
  const { normalizedContacts, hasChanges } = normalizeContacts(contacts)

  if (hasChanges) {
    await AsyncStorage.setItem(
      CONTACTS_STORAGE_KEY,
      JSON.stringify(normalizedContacts),
    )
  }

  return normalizedContacts
}

async function getById(id: string) {
  const contacts = await get()
  return contacts.find((contact) => contact.id === id) ?? null
}

async function save(contact: Contact) {
  const contacts = await get()
  await AsyncStorage.setItem(
    CONTACTS_STORAGE_KEY,
    JSON.stringify([...contacts, contact]),
  )
}

async function remove(id: string) {
  const contacts = await get()
  const filteredContacts = contacts.filter((contact) => contact.id !== id)

  await AsyncStorage.setItem(
    CONTACTS_STORAGE_KEY,
    JSON.stringify(filteredContacts),
  )
}

export const ContactStorage = {
  get,
  getById,
  remove,
  save,
}
