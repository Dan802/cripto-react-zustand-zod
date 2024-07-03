import { useState } from "react"
import { currencies } from "../data"
import { useCrytpoStore } from "../store"
import { Pair } from "../types"
import ErrorMessages from "./ErrorMessages"

export default function CryptoSearchForm() {

  const cryptoCurrencies = useCrytpoStore((state) => state.cryptocurrencies)
  const fetchData = useCrytpoStore((state) => state.fetchData)
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptoCurrency: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if(Object.values(pair).includes('')){
      return setError('All the fields are required')
    }

    fetchData(pair)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      {error && <ErrorMessages>{error}</ErrorMessages>}
      
      <div className="field">
        <label htmlFor="currency">Currency:</label>
        <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
          <option value="">--Select--</option>
          
          {currencies.map( currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptoCurrency">Cryptocurrency</label>
        <select name="criptoCurrency" id="criptoCurrency" onChange={handleChange} value={pair.criptoCurrency}>
          <option value="">--Select--</option>

          {cryptoCurrencies.map(crypto => (
            <option
              key={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Name}
            >{crypto.CoinInfo.FullName}</option>
          ))}

        </select>
      </div>

      <input type="submit" value="Quote" />
    </form>
  )
}
