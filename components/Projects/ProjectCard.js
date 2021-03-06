import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { fadeInUp, stagger } from './animation'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function ProjectCard({
  showDetail,
  setShowDetail,
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    descriptiontr,
    github_url,
    github_frontend,
    github_backend,
    key_techs,
    id
  }
}) {
  const router = useRouter()
  return (
    <>
      <Image
        width="300"
        height="150"
        src={image_path}
        layout="responsive"
        alt={name}
        onClick={() => setShowDetail(id)}
        className="cursor-pointer "
        quality={10}
      />

      <p className="my-2 text-center text-black">{name}</p>

      {showDetail === id && (
        <div className="">
          <div className="absolute  sm:top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-black-100  md:grid-cols-2 gap-x-12 ">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div
                className="border-4 border-gray-100 "
                variants={fadeInUp}
              >
                <Image
                  src={image_path}
                  alt={name}
                  className="overflow-hidden"
                  layout="responsive"
                  width={300}
                  height={150}
                />
                {/* <img src={image_path} alt={name} /> */}
              </motion.div>
              <motion.div
                className="flex justify-center my-4 space-x-3"
                variants={fadeInUp}
              >
                {github_frontend ? (
                  <>
                    <a
                      href={github_frontend}
                      target="_blank"
                      className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm text-black dark:bg-black-500 "
                    >
                      <AiFillGithub /> <span>Front-end</span>
                    </a>
                  </>
                ) : null}

                {github_backend ? (
                  <>
                    <a
                      href={github_backend}
                      target="_blank"
                      className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm text-black dark:bg-black-500 "
                    >
                      <AiFillGithub /> <span>Back-end</span>
                    </a>
                  </>
                ) : null}

                {github_url ? (
                  <>
                    <a
                      href={github_url}
                      target="_blank"
                      className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm text-black dark:bg-black-500 "
                    >
                      <AiFillGithub /> <span>Github</span>
                    </a>
                  </>
                ) : null}
                {deployed_url ? (
                  <>
                    <a
                      href={deployed_url}
                      target="_blank"
                      className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 text-black rounded-sm dark:bg-black-500"
                    >
                      <AiFillProject /> <span>Project</span>
                    </a>
                  </>
                ) : null}
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2
                variants={fadeInUp}
                className="mb-3 text-xl font-medium text-black md:text-2xl "
              >
                {name}
              </motion.h2>
              <motion.h3
                variants={fadeInUp}
                className="my-3 text-base text-black font-medium"
              >
                {router.locale === 'en' ? description : descriptiontr}
              </motion.h3>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              >
                {key_techs.map((value, i) => (
                  <span
                    key={i}
                    className="p-1 px-2 my-1 bg-gray-300 text-black rounded-sm dark:bg-black-500"
                  >
                    {value}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <button
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
              onClick={() => setShowDetail(null)}
            >
              <MdClose size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
