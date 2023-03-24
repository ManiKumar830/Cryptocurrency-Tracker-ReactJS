// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails

  return (
    <li className="list-container">
      <div className="image-container">
        <img className="cur-logo" alt={currencyName} src={currencyLogo} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="euro-val">{usdValue}</p>
        <p className="euro-val">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
