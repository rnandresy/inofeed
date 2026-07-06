import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Erreur :", error)
    }
  }

  useEffect(() => { fetchPosts() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username || !content) return
    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, content })
      })
      setContent('')
      fetchPosts()
    } catch (error) { console.error(error) }
  }

  const handleLike = async (id) => {
    try {
      await fetch(`/api/posts/${id}/like`, { method: 'POST' })
      fetchPosts()
    } catch (error) { console.error(error) }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, { method: 'DELETE' })
      fetchPosts()
    } catch (error) { console.error(error) }
  }

  return (
    <div style={{ backgroundColor: '#121214', minHeight: '100vh', color: '#e1e1e6', fontFamily: 'system-ui, sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Header One Piece */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#facc15', textShadow: '2px 2px #e11d48', margin: '0 0 10px 0', letterSpacing: '2px' }}>
            🍖 INOFEED : VOYAGE SUR GRAND LINE
          </h1>
          <p style={{ color: '#a1a1aa', fontStyle: 'italic', margin: 0 }}>
            "Deviens le Roi des Développeurs !"
          </p>
        </header>

        {/* Formulaire d'inscription au journal de bord */}
        <div style={{ backgroundColor: '#202024', padding: '25px', borderRadius: '12px', border: '2px solid #e11d48', marginBottom: '35px', boxShadow: '0 10px 15px -3px rgba(225, 29, 72, 0.1)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ color: '#facc15', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>Nom de Pirate</label>
              <input 
                type="text" placeholder="ex: Monkey_D_Luffy" value={username} onChange={(e) => setUsername(e.target.value)} 
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#121214', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ color: '#facc15', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>Message au monde (Journal de Bord)</label>
              <textarea 
                placeholder="Raconte ton aventure ou lance un défi..." value={content} onChange={(e) => setContent(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#121214', color: 'white', fontSize: '1rem', height: '90px', resize: 'none', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <button type="submit" style={{ padding: '14px', backgroundColor: '#e11d48', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: '0.2s', textTransform: 'uppercase', letterSpacing: '1px' }}>
              💥 Gomu Gomu no Publier !
            </button>
          </form>
        </div>

        {/* Flux de primes / Avis de recherche */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#71717a' }}>L'océan est calme... Trop calme. Écris le premier message !</p>
          ) : (
            posts.map(post => (
              <div key={post.id} style={{ backgroundColor: '#f5e6cc', color: '#1c1917', padding: '25px', borderRadius: '8px', border: '4px double #78350f', boxShadow: '5px 5px 0px #e11d48', position: 'relative' }}>
                
                {/* Badge WANTED style */}
                <div style={{ textAlign: 'center', borderBottom: '2px dashed #78350f', paddingBottom: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '3px', color: '#78350f' }}>WANTED</span>
                  <h3 style={{ margin: '5px 0 0 0', fontSize: '1.4rem', color: '#e11d48' }}>@{post.username}</h3>
                </div>

                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0 0 20px 0', fontFamily: 'serif', fontStyle: 'italic', wordBreak: 'break-word' }}>
                  "{post.content}"
                </p>

                {/* Actions de Pirate */}
                <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', borderTop: '1px solid #78350f', paddingTop: '12px' }}>
                  <button onClick={() => handleLike(post.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#e11d48', fontWeight: 'bold' }}>
                    ❤️ Prime : {post.likes} Berry
                  </button>
                  
                  <button onClick={() => handleDelete(post.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', color: '#71717a', marginLeft: 'auto', fontWeight: '600' }}>
                    🪓 Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}

export default App