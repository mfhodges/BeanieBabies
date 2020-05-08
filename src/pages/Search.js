import React, {useState, Fragment} from 'react'
import BBCard from '../components/BBCard'



export default function Search () {

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
    <Fragment>
        <h1>🔎 Search 🔍</h1>
        <p>Full search functionality is still being developed. In the meantime please browse the available Beanie Babies below</p>

        <div className='cards'>
            {fakedata.map((beanie) => (
                <BBCard beaniebaby={beanie} />
            ))}
        </div>
    </Fragment>)
}



/**
 * 
        {fakedata.map((img) => (
            <BBCard beaniebaby={img} />
        ))}
 */