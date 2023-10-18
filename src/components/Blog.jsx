import React from 'react'
import Stories from './Stories'

function Blog() {
  return (
    <div id="carouselExampleInterval4" className='container carousel slide' data-mdb-ride="carousel">
      <div className='carousel-inner mx-auto w-50 rounded shadow-4'>
        <div className='carousel-item active'>
          <Stories />
        </div>
        <div className='carousel-item'>
          <Stories />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleInterval4"
    data-mdb-slide="prev">
    <i class="fas fa-chevron-circle-left fa-2x rounded-circle shadow-3"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleInterval4"
    data-mdb-slide="next">
    <i class="fas fa-chevron-circle-right fa-2x rounded-circle shadow-3"></i>
    <span class="visually-hidden">Next</span>
  </button>
    </div>
  )
}

export default Blog