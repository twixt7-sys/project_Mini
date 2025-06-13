import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../types/User'

type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
  loadUser: () => Promise<void>
  updateUser: (updates: Partial<User>) => Promise<void>
  clearUser: () => Promise<void>
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loadUser: async () => {},
  updateUser: async () => {},
  clearUser: async () => {},
})

type Props = {
  children: ReactNode
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const loadUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('user')
      if (userData) {
        setUser(JSON.parse(userData))
      }
    } catch (e) {
      setUser(null)
    }
  }

  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user))
    } else {
      AsyncStorage.removeItem('user')
    }
  }, [user])

  const updateUser = async (updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return prev
      const updated = { ...prev, ...updates }
      AsyncStorage.setItem('user', JSON.stringify(updated))
      return updated
    })
  }

  // Clear user from state and storage
  const clearUser = async () => {
    setUser(null)
    await AsyncStorage.removeItem('user')
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loadUser, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

export default UserProvider