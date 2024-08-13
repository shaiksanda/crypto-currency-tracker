const CryptocurrencyItem = props => {
  const {data} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = data
  return (
    <div className="item-container">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h1>Coin Type</h1>
        </div>
        <div>
          <h1>USD</h1>
          <h1>EURO</h1>
        </div>
      </div>
      <div>
        <div>
          <img src={currencyLogo} alt={currencyName} />
          <h1>{currencyName}</h1>
        </div>
        <div>
          <h1>{usdValue}</h1>
          <h1>{euroValue}</h1>
        </div>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
