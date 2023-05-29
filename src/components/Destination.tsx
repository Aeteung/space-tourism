import React, {useState} from 'react'

type Props = {destinationsData: {
  name: string;
  images: {png: string, webp: string};
  description: string;
  distance: string;
  travel: string;
}[]}

// const Destination = () => {
const Destination = (props: Props) => {
  const [selectedSection, setSelectedSection] = useState<number>(0)

  let destinationsNavbar = <ul className='navbar flex'>
    {props.destinationsData.map((destination, index) => <li key={destination.name} ><a className={selectedSection==index?'active_link uppercase ff-sans-cond fs-300 fw-normal text-white letter-spacing-3':'uppercase ff-sans-cond fs-300 fw-normal text-white letter-spacing-3'} onClick={() => setSelectedSection(index)}>{destination.name}</a></li>)}
  </ul>

  return (
    <section className="page destination">
      <div className="container">       
        <h2 className='ff-sans-cond fs-300 uppercase letter-spacing-2 fw-normal'><span className='fw-bold'>01</span>Pick Your Destination</h2>
        <img src={new URL('/src'+props.destinationsData[selectedSection].images['png'].slice(1), import.meta.url).href} alt={props.destinationsData[selectedSection].name+' photo'}/>
        <dl className="destination-content">
          {destinationsNavbar}
          <dt className='ff-serif fs-700 uppercase'>{props.destinationsData[selectedSection].name}</dt>
          <dd className='ff-sans-normal fs-400 text-accent line-height-2' style={{'marginBottom': '2rem'}}>{props.destinationsData[selectedSection].description}</dd>
          <div className="hr" role="separator"></div>
        </dl>
        <dl className="destination-content">
          <div>
            <dt className='ff-sans-cond fs-200 uppercase letter-spacing-3 text-accent'>Avg. Distance</dt>
            <dd className='ff-serif fs-500 uppercase text-white'>{props.destinationsData[selectedSection].distance}</dd>
          </div>
          <div>
            <dt className='ff-sans-cond fs-200 uppercase letter-spacing-3 text-accent'>Est. Travel Time</dt>
            <dd className='ff-serif fs-500 uppercase text-white'>{props.destinationsData[selectedSection].travel}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Destination