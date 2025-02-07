import { useState, useEffect } from 'react'
import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection() {
  const [currentAdvice, setCurrentAdvice] = useState('')
  const [favorites, setFavorites] = useState([])

  const fetchNewAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setCurrentAdvice(data.slip.advice))
      .catch(error => {
        console.error('Error fetching advice:', error);
        setCurrentAdvice('Always use good error handling in your code!');
      })
  }

  useEffect(() => {
    fetchNewAdvice()
  }, [])

  const handleSaveToFavorites = () => {
    if (currentAdvice && !favorites.includes(currentAdvice)) {
      setFavorites([...favorites, currentAdvice])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip 
        advice={currentAdvice}
        onSaveToFavorites={handleSaveToFavorites}
        onGetNewAdvice={fetchNewAdvice}
      />
      <FavouriteSlipsList favorites={favorites} />
    </section>
  )
}

export default AdviceSection
