import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import useSound from 'use-sound'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import Menu from './Menu'

export default function Header() {
  const { t } = useTranslation('common')
  const [switchSound] = useSound('/sound/switchsound.mp3')
  return (
    <header className="relative fixed z-20 w-full bg-white dark:bg-darkbg h-24 px-8 ">
      <nav className="container flex items-center justify-between h-full max-w-6xl mx-auto">
        <div className=" ">
          <Menu />
        </div>

        <div className="flex space-x-2 ">
          <ThemeToggle sound={switchSound} />
          <LanguageToggle sound={switchSound} />
        </div>
      </nav>
    </header>
  )
}
