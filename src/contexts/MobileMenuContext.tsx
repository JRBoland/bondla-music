import React, { createContext, useState, ReactNode } from 'react'

interface MobileMenuContextProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export const MobileMenuContext = createContext<MobileMenuContextProps>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
})

interface MobileMenuProviderProps {
  children: ReactNode
}

export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}