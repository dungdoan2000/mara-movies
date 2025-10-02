import { useState } from 'react';

import Modal from 'react-modal';
import Youtube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    }
}

const MovieSearch = ({ title, data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailer, setTrailer] = useState('');

    const handleTrailer = async (id) => {
        setTrailer('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            setTrailer(data.results[0].key);
            setModalIsOpen(true);
        } catch (error) {
            setModalIsOpen(false);
            console.log('error', error);
        }
    };

    return (
        <div className='text-white p-10 mb-10'>
            <h2 className='uppercase text-xl font-bold mb-4'>
                {title}
            </h2>
            <div className="grid grid-cols-2
                sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {data && data.length > 0 && data.map((item) => (
                    <div
                        key={item.id}
                        className='w-[200px] h-[300px] relative movie-card pr-4 cursor-pointer group overflow-hidden'
                        onClick={() => {
                            handleTrailer(item.id)
                        }}
                    >
                        <img
                            src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                            alt="img"
                            className='w-full h-full object-cover rounded-lg
                            group-hover:scale-110 transition-transform duration-500
                            ease-in-out'
                        />
                        <div className='absolute bottom-0 p-3 bg-black/67 w-full flex justify-center'>
                            <p className='text-md font-bold'>
                                {item.title || item.orignal_title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        zIndex: 9999
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    }
                }}
            >
                <Youtube opts={opts} videoId={trailer} />
            </Modal>
        </div>
    )
}

export default MovieSearch;