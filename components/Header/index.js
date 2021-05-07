import useSound from 'use-sound'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import Menu from './Menu'
import { useTheme } from 'next-themes'

export default function Header() {
  const [switchSound] = useSound('/sound/switchsound.mp3')
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <div className="container mx-auto flex  p-5 flex-col md:flex-row  border-2">
        <Menu />
        <div className="ml-auto flex flex-wrap items-center text-base justify-center space-x-4 border-2 ">
          <ThemeToggle sound={switchSound} />
          <LanguageToggle sound={switchSound} />
        </div>
      </div>
    </header>
  )
}
