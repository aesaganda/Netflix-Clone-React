import React from 'react'
import Slider from './Slider'

function HomeBody() {
    return (
        <>
             
            <div className="special style-distance">
                <h1>Filmler, Diziler, TV Showları</h1>
                <br />
                <br />
                <Slider gapSize={15} rowsInfo={2} movieDetail={{ movieURL: 0, classNameImg: "img-original-movie-size", classNameSpan: "" }}/>
            </div>
        
            <div className="agenda style-distance">
                <h2>En Çok Oy Alanlar</h2>
                <Slider gapSize={1} rowsInfo={1} movieDetail={{ movieURL: 1, classNameImg: "img-original-movie-size", classNameSpan: "" }}/>
            </div>
            <div className="original style-distance">
                <h2>Yakın Zamanda Netflix'te</h2>
                <Slider gapSize={1} rowsInfo={1} movieDetail={{ movieURL: 2, classNameImg: "img-original-movie-size", classNameSpan: "" }}/>
            </div>
            <div className="watch-again style-distance">
                <h2>Top 20 Listesi</h2>
                <Slider gapSize={1} rowsInfo={1} movieDetail={{ movieURL: 3, classNameImg: "img-original-movie-size"}}/>
            </div>
        </>
    )
}

export default HomeBody