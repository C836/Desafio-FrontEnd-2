import React from 'react'
import './footer.scss'

function Footer(){
    return(
        <footer className='footer'>
            <div>
                <span className='social'>
                    <h1>
                        Follow Us
                    </h1>
                    <div>
                        <a href='#'>
                            <img src='assets/images/youtube.svg' />
                        </a>
                        <a href='#'>
                            <img src='assets/images/facebook.svg' />
                        </a>
                        <a href='#'>
                            <img src='assets/images/twitter.svg' />
                        </a>
                    </div>
                </span>
                <span className='contact'>
                    <h1>
                        Contact
                    </h1>
                    <p>
                        2490 Leisure Lane San Luis Obispo California
                    </p>
                </span>
            </div>
        </footer>
    )
}

export default Footer