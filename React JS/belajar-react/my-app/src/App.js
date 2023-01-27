import React from 'react'
import './App.css'
import ReviewItems from './Reviews'
import PropTypes from 'prop-types'

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Kediri Gate" category="LEBARAN" />
      <ReviewItems />
    </div>
  )
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="1.jpg" alt="Foto 1" />
    </div>
  )
}

function CekDiskon(props) {
  const { isDiscount, discount } = props

  if (isDiscount === 'yes') {
    return <p>Diskon {discount}% off</p>
  } else if (isDiscount === 'coming') {
    return <p>Akan Ada Diskon</p>
  } else {
    return <p>Tidak ada Diskon</p>
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props
  const Benefits = ['Banyak Pengunjung', 'Lokasi Bisnis Terbaik', 'Tengah Kota']
  const listBenefit = Benefits.map((benefit) => <li key={benefit}>{benefit}</li>)
  return (
    <div className="Deskripsi">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR 74,000,000</p>
      <CekDiskon isDiscount={isDiscount} discount={50} />
      <p className="Info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate repudiandae, alias reiciendis possimus laudantium eligendi accusantium, excepturi inventore dolore impedit ipsam fuga similique consequuntur sint!
      </p>
      <ul>{listBenefit}</ul>
      <a onClick={(e) => TambahCart(name, e)} href="#">
        Add To Cart
      </a>
    </div>
  )
}

function TambahCart(e) {
  return console.log('Membeli ' + e)
}

CekDiskon.propTypes = {
  discount: PropTypes.number.isRequired
}

export default App
