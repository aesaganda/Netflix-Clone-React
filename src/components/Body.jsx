import React from 'react'
import Slider from './Slider'
import { MovieInfoProvider  } from "../context/MovieInfoContext";

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
                        
                        <MovieInfoProvider>
                            <Slider />
                        </MovieInfoProvider>

                        {/* <div className="slider">
                            <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="" />
                            <a className="card card1" href="#"><img className="card-img-size" src="../img/body/amsterdam-y.png" alt="" /></a>
                            <a className="card card2" href="#"><img className="card-img-size" src="../img/body/moden-f.png" alt="" /></a>
                            <a className="card card3" href="#"><img className="card-img-size" src="../img/body/leyla-mecnun.png" alt="" /></a>
                            <a className="card card4" href="#"><img className="card-img-size" src="../img/body/50m2p.png" alt="" /></a>
                            <a className="card card5" href="#"><img className="card-img-size" src="../img/body/snow.png" alt="" /></a>
                            <a className="card card6" href="#"><img className="card-img-size" src="../img/body/brooklyn.png" alt="" /> </a>
                            <a className="card card7" href="#"><img className="card-img-size" src="../img/body/yanimda2.png" alt="" /></a>
                            <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="" />
                        </div> */}


                    </div>
                </div>
            </div>
            {/* <!-- *  SECTION-main-end--> */}

            {/* <!-- * SECTION-start --> */}

            <div className="special style-distance">
                <h2>Melih, İzlemeye Devam Et</h2>
                <div className="slider">
                    <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="" />
                    <a className="card card1" href="#">
                        <img className="card-img-size" src="../img/body/brooklyn.png" alt="" />
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </a>
                    <a className="card card2" href="#"><img className="card-img-size" src="../img/body/ginny2.png" alt="" />
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </a>
                    <a className="card card3" href="#"><img className="card-img-size" src="../img/body/inanc.png" alt="" />
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </a>
                    <a className="card card4" href="#"><img className="card-img-size" src="../img/body/witcher.png" alt="" />
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </a>
                    <a className="card card5" href="#"><img className="card-img-size" src="../img/body/howi.png" alt="" />
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </a>
                    <a className="card card6" href="#"><img className="card-img-size" src="../img/body/lupin.png" alt="" />
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </a>
                    <a className="card card7" href="#"><img className="card-img-size" src="../img/body/leyla-mecnun.png" alt="" />
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </a>
                    <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="" />
                </div>
            </div>

            <div className="agenda style-distance">
                <h2>Gündemdekiler</h2>
                <MovieInfoProvider>
                    <Slider />
                </MovieInfoProvider>



                {/* <div className="slider">
                    <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="" />
                    <a className="card card1" href="#"><img className="card-img-size" src="../img/body/lupin.png" alt="" /></a>
                    <a className="card card2" href="#"><img className="card-img-size" src="../img/body/harry.png" alt="" /></a>
                    <a className="card card3" href="#"><img className="card-img-size" src="../img/body/murder.png" alt="" /></a>
                    <a className="card card4" href="#"><img className="card-img-size" src="../img/body/ricky.png" alt="" /></a>
                    <a className="card card5" href="#"><img className="card-img-size" src="../img/body/witcher.png" alt="" /></a>
                    <a className="card card6" href="#"><img className="card-img-size" src="../img/body/tarih.png" alt="" /></a>
                    <a className="card card7" href="#"><img className="card-img-size" src="../img/body/sir.png" alt="" /></a>
                    <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="" />
                </div> */}
            </div>

            <div className="original style-distance">
                <h2>Netflix Orijinal İçerikleri</h2>
                <div className="slider">
                    <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="" />
                    <a className="card card1" href="#"><img className="img-original-movie-size" src="../img/body/Anne-with.png" alt="" /></a>
                    <a className="card card2" href="#"><img className="img-original-movie-size" src="../img/body/ginny-17@1x.png" alt="" /></a>
                    <a className="card card3" href="#"><img className="img-original-movie-size" src="../img/body/50m2.png" alt="" /></a>
                    <a className="card card4" href="#"><img className="img-original-movie-size" src="../img/body/tribes.png" alt="" /></a>
                    <a className="card card5" href="#"><img className="img-original-movie-size" src="../img/body/Anne-with.png" alt="" /></a>
                    <a className="card card6" href="#"><img className="img-original-movie-size" src="../img/body/tribes.png" alt="" /></a>
                    <a className="card card7" href="#"><img className="img-original-movie-size" src="../img/body/Anne-with.png" alt="" /></a>
                    <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="" />
                </div>
            </div>

            <div className="most-viewed style-distance">
                <h2>Türkiye'de Bugünün Top 10 Listesi</h2>
                <div className="slider">
                    <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="left-arrrow" />
                    <div className="card card1">
                        <span className="most-viewed-span-size">1</span>
                        <img className="most-viewed-img-size" src="../img/body/nobetci.png" alt="nobetci-afis" />
                    </div>
                    <div className="card card2">
                        <span className="most-viewed-span-size">2</span>
                        <img className="most-viewed-img-size" src="../img/body/gozlerin.png" alt="gozlerinin-ardinda" />
                    </div>
                    <div className="card card3">
                        <span className="most-viewed-span-size">3</span>
                        <img className="most-viewed-img-size" src="../img/body/amsterdam.png" alt="new-amsterdam" />
                    </div>
                    <div className="card card4">
                        <span className="most-viewed-span-size">4</span>
                        <img className="most-viewed-img-size" src="../img/body/yanimdaKal.png" alt="yanimda-kal" />
                    </div>
                    <div className="card card5">
                        <span className="most-viewed-span-size">5</span>
                        <img className="most-viewed-img-size" src="../img/body/ginny.png" alt="ginniy-georgia" />
                    </div>
                    <div className="card card6">
                        <span className="most-viewed-span-size">6</span>
                        <img className="most-viewed-img-size" src="../img/body/nobetci.png" alt="nobetci" />
                    </div>
                    <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="right-arrow" />
                </div>
            </div>

            <div className="watch-again style-distance">
                <h2>Yeniden İzle</h2>
                
                <MovieInfoProvider>
                    <Slider />
                </MovieInfoProvider>
                
                {/* <div className="slider">
                    <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="" />
                    <a className="card card1" href="#"><img className="card-img-size" src="../img/body/howi.png" alt="" /></a>
                    <a className="card card2" href="#"><img className="card-img-size" src="../img/body/harry.png" alt="" /></a>
                    <a className="card card3" href="#"><img className="card-img-size" src="../img/body/lupin.png" alt="" /></a>
                    <a className="card card4" href="#"><img className="card-img-size" src="../img/body/murder.png" alt="" /></a>
                    <a className="card card5" href="#"><img className="card-img-size" src="../img/body/leyla-mecnun.png" alt="" /></a>
                    <a className="card card6" href="#"><img className="card-img-size" src="../img/body/yanimda2.png" alt="" /> </a>
                    <a className="card card7" href="#"><img className="card-img-size" src="../img/body/orphan.png" alt="" /></a>
                    <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="" />
                </div> */}
            </div>

            <div className="my-list style-distance">
                <h2>Listem</h2>
                
                <MovieInfoProvider>
                    <Slider />
                </MovieInfoProvider>
                
                {/* <div className="slider">
                    <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="" />
                    <a className="card card1" href="#"><img className="card-img-size" src="../img/body/witcher.png" alt="" /></a>
                    <a className="card card2" href="#"><img className="card-img-size" src="../img/body/ricky.png" alt="" /></a>
                    <a className="card card3" href="#"><img className="card-img-size" src="../img/body/tarih.png" alt="" /></a>
                    <a className="card card4" href="#"><img className="card-img-size" src="../img/body/sir.png" alt="" /></a>
                    <a className="card card5" href="#"><img className="card-img-size" src="../img/body/snow.png" alt="" /></a>
                    <a className="card card6" href="#"><img className="card-img-size" src="../img/body/leyla-mecnun.png" alt="" /></a>
                    <a className="card card7" href="#"><img className="card-img-size" src="../img/body/inanc.png" alt="" /></a>
                    <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="" />
                </div> */}
            </div>

        </>
    )
}

export default Body