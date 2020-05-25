

import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function Home () {

return(
    <div>
        
        <h1> Welcome!</h1>
        <img src="/bb_worm.png" class="homepage-image" alt="Inch the Inchworm Beanie Baby"/>
        <p>
            This site offers a browsable collection of Beanie Babies and their associated meta-data. For more information on the project please read the <Link to="/about">About page</Link>.

        </p>
        <p>Currently, this site offers limited search capabilities. Hopefully in the coming months this will be developed further to include search by Zodiac Sign, Birthday and other meta-data fields.</p>
        <p> To see the only Beanie Baby listed please check out <a href="/beanies/1"> this page</a></p>

    </div>)
}