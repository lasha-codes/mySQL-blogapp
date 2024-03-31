'use client'

import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

interface Post {
  id: number
  image: string
  user: string
  description: string
}

interface User {
  id: number
  email: string
  password: string | number
}

interface AppContextType {
  posts: Post[] | []
  setPosts: React.Dispatch<React.SetStateAction<Post[] | []>>
  user: User | object
  setUser: React.Dispatch<React.SetStateAction<User | object>>
}

const initialContextValue: AppContextType = {
  posts: [],
  setPosts: () => [],
  user: {},
  setUser: () => {},
}

export const AppContext = createContext<AppContextType>(initialContextValue)

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[] | []>([])
  const [user, setUser] = useState<User | object>({})

  useEffect(() => {
    axios.get('/user/get-user').then((response) => {
      setUser(response.data)
    })
  }, [])

  return (
    <AppContext.Provider value={{ posts, setPosts, user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
