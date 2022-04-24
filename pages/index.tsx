import Head from 'next/head'
import Banner from '../components/Banner'
import Header from "../components/Header"
import Row from '../components/Row';
import { Movie } from '../typings';
import requests from "../utils/requests";

interface Props {
  netflixOriginals: Movie[],
  trendingNow:Movie[],
  actionMovie: Movie[],
  comedyMovie:Movie[],
  horrorMovie:Movie[],
  romenceMovie:Movie[],
  documentaries:Movie[]
  
}

const Home = ({
  netflixOriginals,
  trendingNow,
  actionMovie,
  comedyMovie,
  horrorMovie,
  romenceMovie,
  documentaries


}:Props) => {
  
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home Netflix</title>
        <link rel="icon" href="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals}/>
        <section className="md:space-y-24">
          <Row title="Trending now" movies={trendingNow}/>
          <Row title="Action Movies" movies={actionMovie}/>
          <Row title="Horror Movies" movies={horrorMovie} />
          <Row title="Romantic Movies" movies={romenceMovie}/>
          <Row title="Comedy Movies" movies={comedyMovie}/>
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    actionMovie,
    comedyMovie,
    horrorMovie,
    romenceMovie,
    documentaries
  ] = await Promise.all([
    fetch(requests.fetchNetflixOrign).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json())
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      actionMovie: actionMovie.results,
      comedyMovie: comedyMovie.results,
      horrorMovie: horrorMovie.results,
      romenceMovie: romenceMovie.results,
      documentaries: documentaries.results,
    }
  }

}