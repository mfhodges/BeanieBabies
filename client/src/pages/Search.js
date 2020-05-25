import React, {useState, Fragment} from 'react'
import BBCard from '../components/BBCard'
import Select from 'react-select'
import { useLazyQuery } from 'react-apollo'
import gql from 'graphql-tag';




const SEARCH_BEANIES = gql`
query($search: String!) {
    getBeanies(search:$search) {
    id
    img
    title
    zodiac
    }
  }
`

/**
 * 
 * 
 * 
 * The useLazyQuery hook is perfect for executing queries in response to events other than component rendering
 * https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually
 */


export default function Search () {
    //const [beanies, setBeanies]= useState(null);
    const [title, updateTitle] = useState("Enter Name");
    const [getBeanies, { called,loading,data}] = useLazyQuery(SEARCH_BEANIES,
        {variables: { "search": title}});
    

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