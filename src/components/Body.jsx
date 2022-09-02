import React from 'react'
import Slider from './Slider'

const sliderInfo = [
    { gapSize : 1, rowInfo : 1, movieURL: 3, title: "Melih, İzlemeye Devam Et" },
    { gapSize : 1, rowInfo : 1, movieURL: 1, title: "En Çok Oy Alanlar" },
    { gapSize : 1, rowInfo : 1, movieURL: 2, title: "Yakın Zamanda Netflix'te" },
    { gapSize : 1, rowInfo : 1, movieURL: 0, title: "Yeniden İzle" }
];

function Body() {
    return (
        <>
            <div className="section">
                <div className="content">
                    <img className="img-movie-name" src="../static/img/body/moviename@2x.png" alt="Yanımda Kal" title="Yanımda Kal" />
                    <div className="rank">
                        <div className="style-distance">
                            <img src="../static/img/body/top10badge@2x.svg" alt="most-viewed" />
                            <h1>Türkiye'de Bugün 4 Numara</h1>
                        </div>
                    </div>
                    <p className="style-distance">Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.</p>
                    <div className="information style-distance">
                        <button className="button button-play" onclick="location.href='#';" style={{ cursor: "pointer" }}>
                            <img src="../static/img/body/play@2x.svg" alt="play" />
                            <span>Oynat</span>
                        </button>
                        <button className="button button-info" onclick="location.href='#';" style={{ cursor: "pointer" }}>
                            <img src="../static/img/body/detail@2x.svg" alt="play" />
                            <span>Daha Fazla Bilgi</span>
                        </button>
                    </div>
                    <div className="popular style-distance">
                        <Slider data={{ gapSize : 1, rowInfo : 1, movieURL: 0, title: "Netflix'te Populer" }}/>
                    </div>
                </div>
            </div>

            {
                sliderInfo.map((info, item) => {
                    return (
                        <div className="style-distance" key={item}>
                            <Slider data={info} />
                        </div>
                    );
                })
            }
        </>
    )
}

export default Body


