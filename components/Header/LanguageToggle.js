import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'
import { motion } from 'framer-motion'

const LanguageToggle = ({ sound }) => {
  const router = useRouter()
  const [lang, setLang] = useState(router.locale)

  return (
    <>
      <Link
        href={`${router.route}`}
        locale={router.locale === 'en' ? 'tr' : 'en'}
      >
        <button
          className={cx('switch', lang === 'tr' ? 'justify-end' : '')}
          onClick={() => {
            setLang(lang === 'tr' ? 'en' : 'tr')
            sound()
          }}
        >
          <motion.span layout className=" switch-image">
            {lang === 'tr' ? (
              <img src="/switch/turkey.svg" />
            ) : (
              <img src="/switch/uk.svg" />
            )}
          </motion.span>
        </button>
      </Link>
    </>
  )
}

export default LanguageToggle
