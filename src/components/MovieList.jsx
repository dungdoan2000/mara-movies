import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const MovieList = ({ title, data }) => {
    return (
        <div className='text-white p-10 mb-10'>
            <h2 className='uppercase text-xl font-bold mb-4'>
                {title}
            </h2>
            <Carousel responsive={responsive} className='flex items-center space-x-4'>
                {data.length > 0 && data.map((item) => (
                    <div key={item.id}
                        className='w-[200px] h-[300px] relative movie-card pr-4 cursor-pointer group overflow-hidden'>
                        <img
                            src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                            alt="img"
                            className='w-full h-full object-cover rounded-lg
                            group-hover:scale-110 transition-transform duration-500
                            ease-in-out'
                        />
                        <div className='absolute bottom-0 p-3 bg-black/67 w-full flex justify-center'>
                            <p className='text-md font-bold'>{item.title || item.orignal_title}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default MovieList;