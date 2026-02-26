export interface Movie {
  id: string;
  title: string;
  year: number;
  poster: string;
  category: string[];
}

export const categories = [
  "Trending",
  "Sci-Fi",
  "Action",
  "Adventure",
  "Horror",
  "Classics",
] as const;

export type Category = (typeof categories)[number];

// Movies with TMDB IDs for vidsrc embedding
export const movies: Movie[] = [
  { id: "157336", title: "Interstellar", year: 2014, poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", category: ["Sci-Fi", "Trending"] },
  { id: "27205", title: "Inception", year: 2010, poster: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg", category: ["Sci-Fi", "Action", "Trending"] },
  { id: "603", title: "The Matrix", year: 1999, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", category: ["Sci-Fi", "Action", "Classics"] },
  { id: "78", title: "Blade Runner", year: 1982, poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg", category: ["Sci-Fi", "Classics"] },
  { id: "348", title: "Alien", year: 1979, poster: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg", category: ["Sci-Fi", "Horror", "Classics"] },
  { id: "18785", title: "The Terminator", year: 1984, poster: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GNtKgMo.jpg", category: ["Sci-Fi", "Action", "Classics"] },
  { id: "329865", title: "Arrival", year: 2016, poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", category: ["Sci-Fi", "Trending"] },
  { id: "264660", title: "Ex Machina", year: 2014, poster: "https://image.tmdb.org/t/p/w500/btbRB7BrD887pSaVMKr4IXRW68k.jpg", category: ["Sci-Fi"] },
  { id: "152601", title: "Her", year: 2013, poster: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg", category: ["Sci-Fi"] },
  { id: "335984", title: "Blade Runner 2049", year: 2017, poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", category: ["Sci-Fi", "Trending"] },
  { id: "872585", title: "Oppenheimer", year: 2023, poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", category: ["Trending"] },
  { id: "693134", title: "Dune: Part Two", year: 2024, poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nez7S.jpg", category: ["Sci-Fi", "Adventure", "Trending"] },
  { id: "438631", title: "Dune", year: 2021, poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", category: ["Sci-Fi", "Adventure", "Trending"] },
  { id: "76600", title: "Avatar: The Way of Water", year: 2022, poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", category: ["Sci-Fi", "Adventure", "Trending"] },
  { id: "19995", title: "Avatar", year: 2009, poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", category: ["Sci-Fi", "Adventure"] },
  { id: "140607", title: "Star Wars: The Force Awakens", year: 2015, poster: "https://image.tmdb.org/t/p/w500/wqnLdLEacQS0ShrGMOyRAaVSBLq.jpg", category: ["Sci-Fi", "Adventure"] },
  { id: "11", title: "Star Wars", year: 1977, poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", category: ["Sci-Fi", "Adventure", "Classics"] },
  { id: "1891", title: "The Empire Strikes Back", year: 1980, poster: "https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg", category: ["Sci-Fi", "Adventure", "Classics"] },
  { id: "68718", title: "Django Unchained", year: 2012, poster: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg", category: ["Action"] },
  { id: "155", title: "The Dark Knight", year: 2008, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911kpUpYQO3QBRr.jpg", category: ["Action", "Trending"] },
  { id: "24428", title: "The Avengers", year: 2012, poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmhMm77.jpg", category: ["Action", "Adventure"] },
  { id: "299536", title: "Avengers: Infinity War", year: 2018, poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDhRkZoA1rNIYr8.jpg", category: ["Action", "Adventure", "Trending"] },
  { id: "299534", title: "Avengers: Endgame", year: 2019, poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", category: ["Action", "Adventure", "Trending"] },
  { id: "245891", title: "John Wick", year: 2014, poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", category: ["Action"] },
  { id: "603692", title: "John Wick: Chapter 4", year: 2023, poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7buMlR6Ksrl8.jpg", category: ["Action", "Trending"] },
  { id: "550", title: "Fight Club", year: 1999, poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", category: ["Action", "Classics"] },
  { id: "680", title: "Pulp Fiction", year: 1994, poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", category: ["Classics"] },
  { id: "278", title: "The Shawshank Redemption", year: 1994, poster: "https://image.tmdb.org/t/p/w500/9cjIGRDQ0qCeB9uZKSyaJIFGOQT.jpg", category: ["Classics"] },
  { id: "238", title: "The Godfather", year: 1972, poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", category: ["Classics"] },
  { id: "424", title: "Schindler's List", year: 1993, poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", category: ["Classics"] },
  { id: "694", title: "The Shining", year: 1980, poster: "https://image.tmdb.org/t/p/w500/nRj5511mZdTl4saWEPoj9QroTIu.jpg", category: ["Horror", "Classics"] },
  { id: "539", title: "Psycho", year: 1960, poster: "https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg", category: ["Horror", "Classics"] },
  { id: "493922", title: "Hereditary", year: 2018, poster: "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3KkMDJmMsqfPFsQaGI.jpg", category: ["Horror"] },
  { id: "419704", title: "Ad Astra", year: 2019, poster: "https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg", category: ["Sci-Fi", "Adventure"] },
  { id: "62", title: "2001: A Space Odyssey", year: 1968, poster: "https://image.tmdb.org/t/p/w500/ve72VilhgiWtMpiFPOAb2MHNbAF.jpg", category: ["Sci-Fi", "Classics"] },
  { id: "244786", title: "Whiplash", year: 2014, poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg", category: ["Trending"] },
  { id: "346364", title: "It", year: 2017, poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", category: ["Horror"] },
  { id: "507086", title: "Jurassic World Dominion", year: 2022, poster: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg", category: ["Adventure", "Action"] },
  { id: "122906", title: "About Time", year: 2013, poster: "https://image.tmdb.org/t/p/w500/bvam4MywIsgxRqvOwhEt6y3lcMm.jpg", category: ["Sci-Fi"] },
  { id: "49026", title: "The Dark Knight Rises", year: 2012, poster: "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg", category: ["Action"] },
  { id: "120", title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", category: ["Adventure", "Classics"] },
  { id: "121", title: "The Lord of the Rings: The Two Towers", year: 2002, poster: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg", category: ["Adventure", "Classics"] },
  { id: "122", title: "The Lord of the Rings: The Return of the King", year: 2003, poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", category: ["Adventure", "Classics"] },
  { id: "105", title: "Back to the Future", year: 1985, poster: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg", category: ["Sci-Fi", "Adventure", "Classics"] },
  { id: "607", title: "Men in Black", year: 1997, poster: "https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg", category: ["Sci-Fi", "Action", "Classics"] },
  { id: "218", title: "The Terminator 2", year: 1991, poster: "https://image.tmdb.org/t/p/w500/weVXMD5QBGeQil4HEATZqAkXvT5.jpg", category: ["Sci-Fi", "Action", "Classics"] },
  { id: "577922", title: "Tenet", year: 2020, poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg", category: ["Sci-Fi", "Action", "Trending"] },
  { id: "475557", title: "Joker", year: 2019, poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", category: ["Action", "Trending"] },
  { id: "447365", title: "Guardians of the Galaxy Vol. 3", year: 2023, poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", category: ["Sci-Fi", "Adventure", "Trending"] },
  { id: "569094", title: "Spider-Man: Across the Spider-Verse", year: 2023, poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", category: ["Action", "Adventure", "Trending"] },
  { id: "634649", title: "Spider-Man: No Way Home", year: 2021, poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", category: ["Action", "Adventure", "Trending"] },
  { id: "646389", title: "Plane", year: 2023, poster: "https://image.tmdb.org/t/p/w500/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg", category: ["Action"] },
  { id: "505642", title: "Black Panther: Wakanda Forever", year: 2022, poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg", category: ["Action", "Adventure"] },
  { id: "76341", title: "Mad Max: Fury Road", year: 2015, poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", category: ["Action", "Sci-Fi"] },
  { id: "447332", title: "A Quiet Place", year: 2018, poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", category: ["Horror", "Sci-Fi"] },
  { id: "420818", title: "The Lion King", year: 2019, poster: "https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOFvrl4zGYigDzh.jpg", category: ["Adventure"] },
  { id: "580489", title: "Venom: Let There Be Carnage", year: 2021, poster: "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg", category: ["Action", "Sci-Fi"] },
  { id: "436270", title: "Black Adam", year: 2022, poster: "https://image.tmdb.org/t/p/w500/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg", category: ["Action", "Adventure"] },
  { id: "585511", title: "Babylon", year: 2022, poster: "https://image.tmdb.org/t/p/w500/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg", category: ["Classics"] },
];

export function getMoviesByCategory(category: Category): Movie[] {
  return movies.filter((m) => m.category.includes(category));
}

export function searchMovies(query: string): Movie[] {
  const q = query.toLowerCase();
  return movies.filter((m) => m.title.toLowerCase().includes(q));
}

export function getVidsrcUrl(movieId: string): string {
  return `https://vidsrc.xyz/embed/movie/${movieId}`;
}
