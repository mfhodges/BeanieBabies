import React, {useState, Fragment} from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag';
import { useParams } from 'react-router-dom'


const GET_BEANIE = gql`
query ($id: Int!) {
    beanie: getBeanie(id:$id){
      title
          birthday {
              month
              day
              year
          }
          zodiac
          img
          theme
          styleNumber
          color
          animal
          subTheme
      id
    }
  }
`


export default function BBProfile () {
    const beanieID = useParams().bbID;
    const { loading, error, data } = useQuery(GET_BEANIE,{
        variables: { "id": Number(beanieID)}});
    //const [{img,title,birthday,theme,styleNumber,color,animal,subtheme,zodiac}] = useState(fakedata);
    console.log("beanie", data);
    console.log("beanieID",beanieID)

    if (loading) return "Loading...";

    if (error) return `Error! ${error.message}`;

    /*return (
    <pre>{JSON.stringify(data.beanie,null,2)}</pre>
    )*/
    
    return (
      <Fragment>
        <h1>{data.beanie.title}</h1>
        <div id="profile">
          <div>
            <dl>
              <dt>Theme</dt>
              <dd>{data.beanie.theme}</dd>
              <dt>Style No.</dt>
              <dd>{data.beanie.styleNumber}</dd>
              <dt>Color</dt>
              <dd>{data.beanie.color}</dd>
              <dt>Animal</dt>
              <dd>{data.beanie.animal}</dd>
              <dt>Subtheme</dt>
              <dd>{data.beanie.subTheme}</dd>
              <dt>Birthday</dt>
              <dd>{data.beanie.birthday.month} {data.beanie.birthday.day}</dd>
              <dt>Zodiac</dt>
              <dd>{data.beanie.zodiac}</dd>
            </dl>
          </div>
          <div id="polaroid">
            <img src={data.beanie.img} alt="" height="200px" width="200px" />
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
    );
}



/**<BBCard beaniebaby={fakedata}/> */