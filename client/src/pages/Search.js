import React, {useState, Fragment} from 'react'
import BBCard from '../components/BBCard'
import Select from 'react-select'
import { useLazyQuery } from 'react-apollo'
import gql from 'graphql-tag';



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
    'id': 2,
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
    'id': 3,
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


const SEARCH_BEANIES = gql`
query {
    getBeanies {
    id
    img
    title
    birthday
    theme
    styleNumber
    color
    animal
    subTheme
    zodiac
    }
  }
`

/**
 * The useLazyQuery hook is perfect for executing queries in response to events other than component rendering
 * https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually
 */


export default function Search () {
    //const [beanies, setBeanies]= useState(null);
    const [getBeanies, { called,loading,data}] = useLazyQuery(SEARCH_BEANIES);
    const [title, updateTitle] = useState("Enter Name");


    if (called && loading) return <p>Loading</p>;


    if (!called){
    return(
        <Fragment>
            <h1><span role="img" aria-label="Magnifying Glass">🔎</span> Search <span role="img" aria-label="Magnifying Glass">🔍</span></h1>
            <p>searching: {title}</p>
            <form
            onSubmit={e => {
            e.preventDefault();
            getBeanies();
            }}
        >
            <label htmlFor="title">
            Name
            <input
                id="title"
                value={title}
                placeholder="Name"
                onChange={e => updateTitle(e.target.value)}
            />
            </label>
            <button>Submit</button>
        </form>
        </Fragment>)
        }
    
    return (
        <>
            <h1>Results For: {title}</h1>
            <p>Pagination coming soon.</p>
            <pre>{JSON.stringify(data,null,2)}</pre>
            <div className='cards'>
            {data.getBeanies.map((beanie) => (
                <BBCard beaniebaby={beanie} />
            ))}
        </div>
        </>
    )
}



/**
 * 
        {fakedata.map((img) => (
            <BBCard beaniebaby={img} />
        ))}
 */