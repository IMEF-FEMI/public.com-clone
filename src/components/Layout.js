import React from 'react'
import GifVid from "../image/gif.mp4"

function Layout() {

    return (
        <div className="layout">
            <div className="left-side">
                <h1>Invest in Stocks, funds and crypto.</h1>
                <p>Follow other investors, invest with any amount of money, build your portfolio.</p>
                
                <div className="input-form">
                    <input
                        type="text"
                        placeholder='+1 (212) 123 4567'
                    />
                    <button>Text Me The App</button>
                </div>

                <span className='more'>Tell me everything  </span>
            </div>

            <div className="right-side">
                <video autoplay playsinline  controls  >
                    <source src={GifVid} type="video/mp4"/>
                </video>
            </div>

            <div className="download-btn">
                <button>Download on appstore</button>
                <button>download now</button>
            </div>
        </div>
    )
}

export default Layout
