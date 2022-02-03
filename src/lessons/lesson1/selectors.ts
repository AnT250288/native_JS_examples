import {IGlobalState} from "../../redux/state";


export const selectCurrencies = (state: IGlobalState) => state.currency.currencies
export const selectCurrentCurrencies = (state: IGlobalState) => state.currency.currentCurrency
export const selectIsBuying = (state: IGlobalState) => state.currency.isBuying
export const selectAmountOfBYN = (state: IGlobalState) => state.currency.amountOfBYN
export const selectAmountOfCurrency= (state: IGlobalState) => state.currency.amountOfCurrency

export const selectAllCurrencyState = (state: IGlobalState) => state.currency;