import '../styles/global.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-700 ">
      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
