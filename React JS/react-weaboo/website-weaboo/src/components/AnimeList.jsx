import Anime from "./Anime"

export default function AnimeList({ animes, onSelectedAnime }) {
    return (
      <>
        <ul className="list list-anime">
          {animes?.map((anime) => (
            <Anime key={anime.id} anime={anime} onSelectedAnime={onSelectedAnime} />
          ))}
        </ul>
      </>
    )
  }