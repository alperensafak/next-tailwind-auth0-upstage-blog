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
    <header className="sticky z-40 bg-white dark:bg-darkbg top-0 ">
      <div className="container mx-auto flex  px-5 py-3 md:py-5  flex-col md:flex-row relative  ">
        <Menu />
        <div className="ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
          <ThemeToggle sound={switchSound} />
          <LanguageToggle sound={switchSound} />
        </div>
      </div>
    </header>
  )
}
