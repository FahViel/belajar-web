import Anime from "./Anime"

export default function AnimeList({ onSelectedAnime, sortedAnimes }) {
    return (
      <>
        <ul className="list list-anime">
          {sortedAnimes?.map((anime) => (
            <Anime key={anime.id} anime={anime} onSelectedAnime={onSelectedAnime} />
          ))}
        </ul>
      </>
    )
  }