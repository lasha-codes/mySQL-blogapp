'use client'

import React, { createContext, useState } from 'react'

interface Post {
  id: number
  image: string
  user: string
  description: string
}

interface AppContextType {
  posts: Post[] | []
  setPosts: React.Dispatch<React.SetStateAction<Post[] | []>>
}

const initialContextValue: AppContextType = {
  posts: [],
  setPosts: () => {},
}

export const AppContext = createContext<AppContextType>(initialContextValue)

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[] | []>([])
  return (
    <AppContext.Provider value={{ posts, setPosts }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
