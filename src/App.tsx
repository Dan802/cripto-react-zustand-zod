import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCrytpoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const fetchCryptos = useCrytpoStore((state) => state.fetchCryptos)
  
  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador the <span>Cryptomoney</span>
        </h1>

        <div className="content">
          <CryptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
