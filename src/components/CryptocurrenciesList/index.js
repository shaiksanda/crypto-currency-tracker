import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getApiCurrencyData()
  }

  getApiCurrencyData = async () => {
    const res = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const data = await res.json()

    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
      id: each.id,
    }))

    this.setState({cryptoData: updatedData, isLoading: false})
  }

  renderCryptocurrencyList = () => {
    const {cryptoData} = this.state

    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div>
          {cryptoData.map(each => (
            <CryptocurrencyItem key={each.id} data={each} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
