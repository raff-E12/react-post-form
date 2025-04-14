import './App.css'
import { useState, useEffect } from 'react';
import FormSection from './assets/FormSection'
import Posts from './assets/Posts'
import { handleFetch_Data } from './assets/FetchApi';

/**
 * Esportazione della chiamata al componente card nella fase di rendering:
 * @function isData - Trasporto dei dati ottenuti in chiamata in una variabile di stato.
 */

function App() {
     const [isApi, setApi] = useState([]);
  
      async function isData(){
          const data_wait = await handleFetch_Data();
          // console.log(data_wait);
          setApi(data_wait);
      }
  
      useEffect(()=>{
          isData();
      },[])

  return (
    <>
    <FormSection link={isApi}/>
    <Posts link={isApi}/>
    </>
  )
}

export default App
