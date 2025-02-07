import { useState, useEffect } from 'react'
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artworks, setArtworks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setArtworks(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching artworks:', error)
        setError('Failed to load artworks. Please try again later.')
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <h2>Arts Section</h2>
        <p>Loading artworks...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <h2>Arts Section</h2>
        <p className="error-message">{error}</p>
      </section>
    )
  }

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks} />
      </div>
    </section>
  )
}

export default ArtsSection
