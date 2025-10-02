// TODO: File này được sử dụng giống như 1 service, sẽ quay lại làm sau khi đã nắm vững React cơ bản

///////////////////////////////////////////////////////////////////////

import { createContext } from "react";
import { useState } from 'react';
import Modal from 'react-modal';
import Youtube from 'react-youtube';

const MovieContext = createContext();

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    }
}

const MovieProvider = ({ children }) => {
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
        <MovieContext.Provider value={{ handleTrailer }}>
            {children}
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
        </MovieContext.Provider>
    )
}

export { MovieProvider, MovieContext };