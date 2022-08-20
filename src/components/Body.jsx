import React from 'react'
import Slider from './Slider'

function Body() {
    return (
        <>
            <div className="section">
                <div className="content">
                    <img className="img-movie-name" src="../img/body/moviename@2x.png" alt="Yanımda Kal" title="Yanımda Kal" />
                    <div className="rank">
                        <div className="style-distance">
                            <img src="../img/body/top10badge@2x.svg" alt="most-viewed" />
                            <h1>Türkiye'de Bugün 4 Numara</h1>
                        </div>
                    </div>
                    <p className="style-distance">Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.</p>
                    <div className="information style-distance">
                        <button className="button button-play" onclick="location.href='#';" style={{ cursor: "pointer" }}>
                            <img src="../img/body/play@2x.svg" alt="play" />
                            <span>Oynat</span>
                        </button>
                        <button className="button button-info" onclick="location.href='#';" style={{ cursor: "pointer" }}>
                            <img src="../img/body/detail@2x.svg" alt="play" />
                            <span>Daha Fazla Bilgi</span>
                        </button>
                    </div>
                    <div className="popular style-distance">
                        <h2>Netflix'te Populer</h2>
                        <Slider movieDetail={{ movieURL: 0, classNameImg: "img-original-movie-size", classNameSpan: "" }}/>
                    </div>
                </div>
            </div>
            {/* <!-- *  SECTION-main-end--> */}
            <div className="special style-distance">
                <h2>Melih, İzlemeye Devam Et</h2>
                <Slider isActive_bar={"true"} movieDetail={{ movieURL: 3, classNameImg: "img-original-movie-size", classNameSpan: "" }}/>
            </div>
            <div className="agenda style-distance">
                <h2>En Çok Oy Alanlar</h2>
                <Slider movieDetail={{ movieURL: 1, classNameImg: "img-original-movie-size", classNameSpan: "" }}/>
            </div>
            <div className="original style-distance">
                <h2>Yakın Zamanda Netflix'te</h2>
                <Slider movieDetail={{ movieURL: 2, classNameImg: "img-original-movie-size", classNameSpan: "" }}/>
            </div>
            <div className="most-viewed style-distance">
                <h2>Türkiye'de Bugünün Top 10 Listesi</h2>
                <Slider movieDetail={{ movieURL: 3, classNameImg: "most-viewed-img-size", classNameSpan: "most-viewed-span-size" }}/>
            </div>
            <div className="watch-again style-distance">
                <h2>Yeniden İzle</h2>
                <Slider movieDetail={{ movieURL: 0, classNameImg: "img-original-movie-size"}}/>
            </div>
        </>
    )
}

export default Body