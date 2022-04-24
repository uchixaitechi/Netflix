import { useEffect, useState } from 'react'
import Image from "next/image";
import { Movie } from '../typings';
import { baseUrl } from '../constans/main';
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from '@heroicons/react/solid';

interface Props {
    netflixOriginals:Movie[]
}

function Banner({ netflixOriginals }: Props) {
    
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }, [netflixOriginals])

    console.log(movie);
    

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 sm:space-x-3">
            <div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen">
                <Image
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-7xl">
                {movie?.title || movie?.name || movie?.orign_name}
            </h1>
            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:text-2xl">
                {movie?.overwiev}
            </p>
            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black"><FaPlay className="h-4 f-4 md:h-7 md:w-7"/>Play</button>
                <button className="bannerButton bg-[gray]/70"><InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/>More Info </button>
            </div>
        </div>
    )
}

export default Banner
