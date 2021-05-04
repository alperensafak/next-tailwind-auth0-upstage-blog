import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import cx from 'classnames'
import { motion } from 'framer-motion'

const LanguageToggle = ({ sound }) => {
  const router = useRouter()
  const [lang, setLang] = useState(router.locale)
  const { t } = useTranslation('common')

  return (
    <div>
      <Link
        href={`${router.route}`}
        locale={router.locale === 'en' ? 'tr' : 'en'}
      >
        <button
          className={cx(
            'inline-flex w-12 h-6  rounded-full focus:outline-none transition-colors px-0.5 py-0.5 bg-yellow-300 dark:bg-darkblue',
            lang === 'tr' ? 'justify-end' : ''
          )}
          onClick={() => {
            setLang(lang === 'tr' ? 'en' : 'tr')
            sound()
          }}
        >
          <motion.span layout className=" w-5 h-5 bg-white rounded-full">
            {lang === 'tr' ? <img src="turkey.svg" /> : <img src="uk.svg" />}
          </motion.span>
        </button>
      </Link>
    </div>
  )
}

export default LanguageToggle
