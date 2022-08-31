import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Page404() {
    return (
        <>
        <Header />
        <div id="main404">
            <div class="container404">
                <h1>Error 404</h1>
                <h2>Üzgünüz :( Aradığınız sayfayı bulamadık.</h2>
            </div>
        </div>
        <Footer />

        </>
    )
}

export default Page404