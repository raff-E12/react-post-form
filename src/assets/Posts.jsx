import React from 'react'
import { local_posts, handleFetch_Data } from './FetchApi'

export default function Posts() {
    const export_list = local_posts;
  return (
    <div className='container-lg container-head'>
        {export_list.map( element =>{
            return(
                <div class="card" style={{width: "18rem"}}>
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
  )
}
