import React from 'react'
import facebook  from "/static/img/footer/facebook@2x.svg";
import instagram from "/static/img/footer/instagram@2x.svg";
import twitter   from "/static/img/footer/twitter@2x.svg";
import youtube   from "/static/img/footer/youtube@2x.svg";

const media_logo_info = [
    { url: "https://tr-tr.facebook.com/netflixturkiye", img_src: facebook,  img_alt: "facebook-logo"  },
    { url: "https://www.instagram.com/netflixturkiye",  img_src: instagram, img_alt: "instagram-logo" },
    { url: "https://twitter.com/netflixturkiye",        img_src: twitter,   img_alt: "twitter-logo"   },
    { url: "https://www.youtube.com/c/Netflix",         img_src: youtube,   img_alt: "youtube-logo"   },
];

const link_group_info = [
    ["Seslendirme ve Alt Yazı"  , "Medya Merkezi"           , "Bize Ulaşın"         ],
    ["Sesli Betimleme"          , "Yatırımcı İlişkileri"    , "Yasal Yükümlülükler" ],
    ["Yardım Merkezi"           , "İş İmkanları"            , "Çerez Tercihleri"    ],
    ["Hadiye Kartları"          , "Kullanım Koşulları"      , "Kurumsal Bilgiler"   ]
];

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="block"></div>
                <div className="block">
                    <div className="social-media">
                        {
                            media_logo_info.map((info, item) => {
                                return (
                                    < div className="media-logo" key={item}>
                                        <a href={info.url}><img src={info.img_src} alt={info.img_alt} /></a>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="link-group">
                        {
                            link_group_info.map((data, item) => {
                                return (
                                    <ul className="group" key={item}>
                                        {
                                            data.map((info, index) => {
                                                return (
                                                    <li key={index}><a href="#">{info}</a></li>
                                                );
                                            })
                                        }
                                    </ul>
                                );
                            })
                        }
                    </div>
                    <a className="service-code" href="#">
                        <button className="service-code-button">Hizmet Kodu</button>
                    </a>
                    <div className="copyright">
                        <span>&copy 1997-2022 Netflix, Inc..</span>
                    </div>
                </div>
                <div className="block"></div>
            </div>
        </>
    )
}

export default Footer