import { useState, useEffect } from 'react'
import './App.css'

// components import
import NavBar from './components/Navbar'
import Search from './components/Search'
import NumResult from './components/NumResult'
import Main from './components/Main'
import Box from './components/Box'
import AnimeList from './components/AnimeList'
import AnimeDetail from './components/AnimeDetail'

// Redux Import
import { useDispatch, useSelector } from 'react-redux'
import { dataAnimeSelectors, getAnimeDatas } from './features/DataAnimesSlice'


export default function App() {
  const dispatch = useDispatch()
  const animesData = useSelector(dataAnimeSelectors.selectAll)

  useEffect(() => {
    dispatch(getAnimeDatas())
  }, [dispatch])

  const [animes, setAnimes] = useState(animesData)
  const [selectedAnime, setSelectedAnime] = useState({})

  useEffect(() => {
    if(animesData.length > 0){
      setAnimes(animesData)
      setSelectedAnime(animesData[0])
    }
  }, [animesData])

  function handleSelectedAnime(id) {
    const newAnime = animes.find((anime) => anime.id === id)
    setSelectedAnime(newAnime)
  }

  return (
    <>
      {/* Header Section */}
      <div className="header">
        <NavBar>
          <Search>
            <NumResult animes={animes} />
          </Search>
        </NavBar>
      </div>
      {/* Header Section End */}

      {/* Body Section */}
      <div className="body">
        <Main>
          <Box>
            <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
          </Box>
          <Box>
            <AnimeDetail selectedAnime={selectedAnime} />
          </Box>
        </Main>
      </div>
      {/* Body Section End */}
    </>
  )
}
