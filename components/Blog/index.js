import React from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Blog = ({ posts }) => {
  const router = useRouter()
  const { t } = useTranslation('blog')

  return (
    <>
      <div className="container px-5 pt-14  mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 className="  text-5xl  font-title font-bold text-black dark:text-white">
              <span className="relative inline-block  ">
                <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
                <span className="relative"> {t('title')}</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="-my-8 divide-y-2 divide-gray-200 w-3/5   mx-auto">
          {posts.map((post) => {
            return (
              router.locale === post.frontMatter.language && (
                <div className="py-8 flex flex-wrap md:flex-nowrap  key={post.url} hover:scale:1.5">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col  ">
                    <span className="mt-1 text-color block">
                      {post.frontMatter.date}
                    </span>
                  </div>
                  <Link href={post.url}>
                    <div className="md:flex-grow">
                      <h2 className=" text-title mb-2 e">
                        {post.frontMatter.title}
                      </h2>
                      <p className="text-color">{post.frontMatter.excerpt}</p>

                      <div className="text-color text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Blog
