const requests = {
    fetchNowPlaying: "movie/now_playing",
    fetchNetflixOriginals: "/discover/tv?with_networks=213",
    fetchTrending:"/trending/all/week",
    fetchTopRated:"/movie/top_rated",
    fetchActionMovies:"/discover/movie?with_denres=28",
    fetchComedyMovies:"/discover/movie?with_denres=35",
    fetchHorrorMovies:"/discover/movie?with_denres=27",
    fetchRomanceMovies:"/discover/movie?with_denres=10749",
    fetchDocumentaries:"/discover/movie?with_denres=99",
}

export default requests;