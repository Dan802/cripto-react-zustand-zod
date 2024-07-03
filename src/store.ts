// This component works with zustand
// it's our contextapi
import { create } from "zustand";
import {CryptoCurrency, CryptoPrice, Pair} from './types/index'
import { devtools } from "zustand/middleware";
import { fetchCurrentyCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[]
  result: CryptoPrice
  loading: boolean
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCrytpoStore = create<CryptoStore>()(devtools((set) => ({
  
  cryptocurrencies: [], // state 

  result: {} as CryptoPrice, // state

  loading: false, // state
  
  fetchCryptos: async () => { // action
    const gettingCryptos = await getCryptos()
    set(()=> ({
      cryptocurrencies: gettingCryptos
    }))
  },
  
  fetchData: async (pair) => { //action

    set(() => ({
      loading: true
    }))

    const result = await fetchCurrentyCryptoPrice(pair)

    set(() => ({
      result,
      loading: false
    }))
  }
  
})))