import React, { useEffect, useState } from 'react'
import { local_posts, handleFetch_Data } from './FetchApi'

// Creazione delle Card nella chiamata Api.

export default function Posts({link}) {

    const isApi = link;
    const export_list = local_posts;

  return (
    <aside className='container-lg cont-flex'>
      <h1>RealTime Posts</h1>
    <div className='container-lg container-head'>
        {isApi.map( (element, index) =>{
            return(
                <div class="card" style={{width: "18rem"}} key={index}>
                <div class="card-body">
                  <h5 class="card-title">{element.title}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">{element.author}</h6>
                  <p class="card-text">{element.body}</p>
                  <a href="#" class="card-link">Post link</a>
                  <a href="#" class="card-link">Another Posts</a>
                </div>
              </div>
            )
        })}
    </div>
    </aside>
  )
}
