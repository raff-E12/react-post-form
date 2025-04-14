import React, { useEffect, useState } from 'react'
import { local_posts, handleFetch_Data, handlePostParmsposts } from './FetchApi'

/**
 * Rapprensentazione dei dati e invio del oggetto ottenuto al server:
 * 
 * @function handleInputTargetparam - Tracciamento dei valori ottenuti dagli input.
 * @function object_Assemble - Asseblaggio dei dati raccolti dagli input.
 * @function handleOnSendObjres - Invio dell'oggetto in callback alla chiamata POST con il server.
 * 
 */


export default function FormSection() {

    const [isAuthor, setAuthor] = useState("");
    const [isTitle, setTitle] = useState("");
    const [isText, setText] = useState("");
    const [isState, setState] = useState(false);
    const [isID, setID] = useState(989)

    function handleInputTargetparam(e){
       const { id, value } = e.target;
       console.log(value, id);

       switch (id) {
        case "author":
            setAuthor(value);
            break;

        case "title":
            setTitle(value);
            break;

        case "content":
            setText(value);
            break;

        case "status":
            setState( value === "draft" ? true : false);
            console.log(isState);
            break;
       }
    }
    
    function object_Assemble(){
        setID( value => value + 1);

        const object_post = {
            author: isAuthor,
            body: isText,
            id: isID,
            public: setState,
            title: isTitle
        }

        console.log(object_post)
        return object_post;
    }

     async function handleOnSendObjres(e){
        e.preventDefault();
        const object = object_Assemble();
        const fun_param_send = await handlePostParmsposts(object);
        
        if (fun_param_send.status === 201) {
            window.alert("Il form è stato inviato con sucesso");
            setAuthor("");
            setText("");
            setTitle("");
            setState(false);
            window.location.reload();
        } else{
            window.alert("Il form non è stato inviato.");
            setAuthor("");
            setText("");
            setTitle("");
            setState(false);
        }
    }

    useEffect(()=>{
       handleOnSendObjres();
    }, [])

  return (
    <>
    <form className="form-wrapper" onSubmit={handleOnSendObjres}>
  {/* <!-- Autore del post --> */}
  <div className="form-group">
    <label className="label" htmlFor="author">Autore del post</label>
    <input type="text" id="author" name="author" value={isAuthor} className="input" required  onChange={handleInputTargetparam}/>
  </div>

  {/* <!-- Titolo del post --> */}
  <div className="form-group">
    <label className="label" htmlFor="title">Titolo del post</label>
    <input type="text" id="title" name="title" className="input" value={isTitle} required  onChange={handleInputTargetparam}/>
  </div>

  {/* <!-- Testo del post --> */}
  <div className="form-group">
    <label className="label" htmlFor="content">Testo del post</label>
    <textarea id="content" name="content" className="textarea" required value={isText} onChange={handleInputTargetparam}></textarea>
  </div>

  {/* <!-- Sezione per scegliere se il post è pubblico o bozza --> */}
  <div className="form-group">
    <label className="label">Stato del post</label>
    <div className="radio-group">
      <input type="radio" id="public" name="status" value="public" className="radio"  onChange={handleInputTargetparam}/>
      <label htmlFor="public" className="radio-label">Pubblico</label>

      <input type="radio" id="draft" name="status" value="draft" className="radio"  onChange={handleInputTargetparam}/>
      <label htmlFor="draft" className="radio-label">Bozza</label>
    </div>
  </div>
  
  <div classNameName="form-group">
    <button type="submit" className="btn" >Invia post</button>
  </div>
</form>
    </>
  )
}
