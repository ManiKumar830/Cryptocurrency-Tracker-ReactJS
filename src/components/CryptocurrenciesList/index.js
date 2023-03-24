// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const newList = data.map(eachList => ({
      currencyLogo: eachList.currency_logo,
      currencyName: eachList.currency_name,
      euroValue: eachList.euro_value,
      id: eachList.id,
      usdValue: eachList.usd_value,
    }))

    this.setState({currencyList: newList, isLoading: false})

    console.log(data)
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div className="loader-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="currency-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="image"
              alt="cryptocurrency"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <div className="box-container">
              <div className="coins-list-container">
                <h1 className="currency-heading type">Coin Type</h1>
                <div className="currency">
                  <h1 className="currency-heading usd">USD</h1>
                  <h1 className="currency-heading euro">EURO</h1>
                </div>
              </div>
              <ul className="result-list">
                {currencyList.map(eachItem => (
                  <CryptocurrencyItem
                    cryptoDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
