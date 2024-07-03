import { useMemo } from "react"
import { useCrytpoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
  
  const result = useCrytpoStore((state) => state.result)
  const loading = useCrytpoStore((state) => state.loading)
  const hasResult = useMemo(() => Object.values(result).length !> 0 , [result])

  return (
    <div className="result-wrapper">
      {loading ? <Spinner/> : hasResult && (
        <>
          <h2>Quote</h2>

          <div className="result">

            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Image Crypto Currency" />

            <div>
              <p>Price: <span>{result.PRICE}</span></p>
              <p>Highest: <span>{result.HIGHDAY}</span></p>
              <p>Lowest: <span>{result.LOWDAY}</span></p>
              <p>Change: <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>Last updated: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
      
    </div>
  )
}
