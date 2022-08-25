import React from 'react'
import Slider from './Slider'

const sliderInfo = [
    { gapSize: 15, rowInfo: 2, movieURL: 0, title: "Filmler, Diziler, TV Showları" },
    { gapSize: 1, rowInfo: 1, movieURL: 1, title: "En Çok Oy Alanlar" },
    { gapSize: 1, rowInfo: 1, movieURL: 2, title: "Yakın Zamanda Netflix'te" },
    { gapSize: 1, rowInfo: 1, movieURL: 3, title: "Top 20 Listesi" }
];

function HomeBody() {
    return (
        <>
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

export default HomeBody