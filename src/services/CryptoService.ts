import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema, } from "./../schema/Crypto-schema";
import { Pair } from "../types";

export async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  
  // const {data: {Data}} = await axios(url) is the same that next code
  const {data} = await axios(url)
  const {Data : cryptos} = data

  const result = CryptoCurrenciesResponseSchema.safeParse(cryptos)
  
  if(result.success) {
    return result.data
  }
}

export async function fetchCurrentyCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoCurrency}&tsyms=${pair.currency},EUR`

  const {data: {DISPLAY}} = await axios(url)
  
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptoCurrency][pair.currency])
  
  if(result.success) {
    return result.data
  }
}