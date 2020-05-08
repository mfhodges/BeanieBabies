import React, {useState} from 'react'
import BBCard from '../components/BBCard'

export default function Birthday () {
    const fakedata = [{
        'id': 1,
        'img': "https://beaniepedia.com/beanies/files/2020/01/kenyaboo-1.jpg",
        'title': "Kenya the Ostrich (Large)",
        'birthday': "19 May",
        'theme': "Beanie Boos",
        'styleNumber': "36302",
        'color': "N/A",
        'animal': "N/A",
        'subtheme': "None",
        'zodiac': 'Taurus'
    },
    {
        'id': 1,
        'img': "https://beaniepedia.com/beanies/files/2020/01/kenyaboo-1.jpg",
        'title': "Kenya the Ostrich (Large)",
        'birthday': "19 May",
        'theme': "Beanie Boos",
        'styleNumber': "36302",
        'color': "N/A",
        'animal': "N/A",
        'subtheme': "None",
        'zodiac': 'Taurus'
    },
    {
        'id': 1,
        'img': "https://beaniepedia.com/beanies/files/2020/01/kenyaboo-1.jpg",
        'title': "Kenya the Ostrich (Large)",
        'birthday': "19 May",
        'theme': "Beanie Boos",
        'styleNumber': "36302",
        'color': "N/A",
        'animal': "N/A",
        'subtheme': "None",
        'zodiac': 'Taurus'
    },
    {
        'id': 1,
        'img': "https://beaniepedia.com/beanies/files/2020/01/kenyaboo-1.jpg",
        'title': "Kenya the Ostrich (Large)",
        'birthday': "19 May",
        'theme': "Beanie Boos",
        'styleNumber': "36302",
        'color': "N/A",
        'animal': "N/A",
        'subtheme': "None",
        'zodiac': 'Taurus'
    }, {
        'id': 1,
        'img': "https://beaniepedia.com/beanies/files/2020/01/kenyaboo-1.jpg",
        'title': "Kenya the Ostrich (Large)",
        'birthday': "19 May",
        'theme': "Beanie Boos",
        'styleNumber': "36302",
        'color': "N/A",
        'animal': "N/A",
        'subtheme': "None",
        'zodiac': 'Taurus'
    }]


return(
    <div>
        <h1>Today's Birthday!🎉</h1>
        <p> RANDOM</p>
        <BBCard beaniebaby={fakedata[0]} />

        <h3>Birthdays this week</h3>
        <p>content</p>
        <div className='cards'>
            {fakedata.map((beanie) => (
                <BBCard beaniebaby={beanie} />
            ))}
        </div>
    </div>)
}

/*
This page should show who's birhday it currently is,
if no ones birthday do a sad face and show who's birthday it will be this week. 


*/