import React, {useState, Fragment} from 'react'


const fakedata = {
    'id': 1,
    'img': "https://beaniepedia.com/beanies/files/2020/01/kenyaboo-1.jpg",
    'title': "Kenya the Ostrich (Large)",
    'birthday': "19 May",
    'theme': "Beanie Boos",
    'styleNumber': "36302",
    'color': "N/A",
    'animal': "N/A",
    'subtheme': "None",
    'zodiac':'Taurus'
}

export default function BBProfile () {

    const [{img,title,birthday,theme,styleNumber,color,animal,subtheme,zodiac}] = useState(fakedata);

return(
    <Fragment>
        <h1>{title}</h1>
        <div id="profile">
            <div>
                    <dl>

                    <dt>Theme</dt>
                    <dd>{theme}</dd>
                    <dt>Style No.</dt>
                    <dd>{styleNumber}</dd>
                    <dt>Color</dt>
                    <dd>{color}</dd>
                    <dt>Animal</dt>
                    <dd>{animal}</dd>
                    <dt>Subtheme</dt>
                    <dd>{subtheme}</dd>
                    <dt>Birthday</dt>
                    <dd>{birthday}</dd>
                    <dt>Zodiac</dt>
                    <dd>{zodiac}</dd>
                    </dl>
            
            </div>
            <div id="polaroid">
                <img src={img} alt="" height="200px" width="200px" />
            </div>

            <div>
                {/* Desription goes here */}
                <h3>Description</h3>
                <p>coming soon.</p>
            </div>
            <div>
                {/* Poem goes here */}
                <h3>Poem</h3>
                <p>coming soon.</p>
            </div>
            <div>
                {/* Collectors Note goes here */}
                <h3>Collectors Note</h3>
                <p>coming soon.</p>
            </div>
        </div>
    </Fragment>
    )
}



/**<BBCard beaniebaby={fakedata}/> */