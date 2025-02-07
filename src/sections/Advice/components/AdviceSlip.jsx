function AdviceSlip({ advice, onSaveToFavorites, onGetNewAdvice }) {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={onGetNewAdvice}>Get More Advice</button>
      <button onClick={onSaveToFavorites}>Save to Favourites</button>
    </section>
  )
}

export default AdviceSlip
