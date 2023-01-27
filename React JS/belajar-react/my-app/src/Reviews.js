import React from 'react'
import './App.css'

function ReviewItems() {
  // mempersiapkan data dummy JSON
  const users = [
    {
      id: 1,
      name: 'Zidan',
      review: 'Harganya murah dan lokasinya strategis, Keren.',
      image: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 2,
      name: 'Al-Aziz',
      review: 'Harganya murah dan lokasinya strategis, Keren.',
      image: 'https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 3,
      name: 'Rahmatullah',
      review: 'Harganya murah dan lokasinya strategis, Keren.',
      image: 'https://images.pexels.com/photos/2853198/pexels-photo-2853198.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ]
  const listReview = users.map((itemReview) => (
    <div className="Item" key={itemReview.id}>
      <img src={itemReview.image} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ))
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  )
}


export default ReviewItems