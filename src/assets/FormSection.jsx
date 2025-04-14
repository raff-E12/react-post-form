import React from 'react'
import { local_posts, handleFetch_Data } from './FetchApi'

export default function FormSection() {
  return (
    <>
    <form className="form-wrapper">
  {/* <!-- Autore del post --> */}
  <div className="form-group">
    <label className="label" for="author">Autore del post</label>
    <input type="text" id="author" name="author" className="input" required />
  </div>

  {/* <!-- Titolo del post --> */}
  <div className="form-group">
    <label className="label" for="title">Titolo del post</label>
    <input type="text" id="title" name="title" className="input" required />
  </div>

  {/* <!-- Testo del post --> */}
  <div className="form-group">
    <label className="label" for="content">Testo del post</label>
    <textarea id="content" name="content" className="textarea" required></textarea>
  </div>

  {/* <!-- Sezione per scegliere se il post è pubblico o bozza --> */}
  <div className="form-group">
    <label className="label">Stato del post</label>
    <div className="radio-group">
      <input type="radio" id="public" name="status" value="public" className="radio" checked />
      <label for="public" className="radio-label">Pubblico</label>

      <input type="radio" id="draft" name="status" value="draft" className="radio" />
      <label for="draft" className="radio-label">Bozza</label>
    </div>
  </div>
  
  <div classNameName="form-group">
    <button type="submit" classNameName="btn">Invia post</button>
  </div>
</form>
    </>
  )
}
