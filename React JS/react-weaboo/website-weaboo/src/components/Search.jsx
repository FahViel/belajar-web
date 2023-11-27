

export default function Search({ children, query, setQuery }) {
    return (
      <div className="search-container">
        <input className="search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
        {children}
      </div>
    )
  }