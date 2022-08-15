import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="block"></div>
                <div className="block">
                    <div className="social-media">
                        <div className="media-logo">
                            <a href="https://tr-tr.facebook.com/netflixturkiye/"><img src="./img/footer/facebook@2x.svg" alt="facebook-logo"/></a>
                        </div>
                        <div className="media-logo">
                            <a href="https://www.instagram.com/netflixturkiye/?hl=tr"><img src="./img/footer/instagram@2x.svg" alt="instagram-logo"/></a>
                        </div>
                        <div className="media-logo">
                            <a href="https://twitter.com/netflixturkiye?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="./img/footer/twitter@2x.svg" alt="twitter-logo"/></a>
                        </div>
                        <div className="media-logo">
                            <a href="https://www.youtube.com/c/Netflix/videos"><img src="./img/footer/youtube@2x.svg" alt="youtube-logo"/></a>
                        </div>
                    </div>

                    <div className="link-group">
                        <ul className="group">
                            <li><a href="#">Seslendirme ve Alt Yazı</a></li>
                            <li><a href="#">Medya Merkezi</a></li>
                            <li><a href="#">Bize Ulaşın</a></li>
                        </ul>
                        <ul className="group">
                            <li><a href="#">Sesli Betimleme</a></li>
                            <li><a href="#">Yatırımcı İlişkileri</a></li>
                            <li><a href="#">Yasal Yükümlülükler</a></li>
                        </ul>
                        <ul className="group">
                            <li><a href="#">Yardım Merkezi</a></li>
                            <li><a href="#">İş İmkanları</a></li>
                            <li><a href="#">Çerez Tercihleri</a></li>
                        </ul>
                        <ul className="group">
                            <li><a href="#">Hadiye Kartları</a></li>
                            <li><a href="#">Kullanım Koşulları</a></li>
                            <li><a href="#">Kurumsal Bilgiler</a></li>
                        </ul>
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