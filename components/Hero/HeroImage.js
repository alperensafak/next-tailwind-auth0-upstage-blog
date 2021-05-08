import React from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const HeroImage = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
        <motion.div
          className="max-w-lg w-full "
          whileHover={{
            scale: 1.3
          }}
        >
          {theme === 'dark' ? (
            <img
              className="  object-cover object-center"
              src="/hero/heroimgdark.svg"
              alt="heroimgdark"
            />
          ) : (
            <img
              className="object-cover object-center"
              src="/hero/heroimg.svg"
              alt="heroimg"
            />
          )}
        </motion.div>
      </div>
    </>
  )
}

export default HeroImage
