import React, {useState} from 'react'

type Props = {crewData: {
  name: string;
  images: {png: string, webp: string};
  role: string;
  bio: string;
}[]}

const Crew = (props: Props) => {
  const [selectedSection, setSelectedSection] = useState<number>(0)

  let crewNavbar = <ul className='dot-nav flex'>
    {props.crewData.map((crew, index) => <li key={crew.name} ><a className={selectedSection==index?'active_link uppercase ff-sans-cond fs-300 fw-normal text-white letter-spacing-3':'uppercase ff-sans-cond fs-300 fw-normal text-white letter-spacing-3'} onClick={() => setSelectedSection(index)}></a></li>)}
  </ul>

  return (
    <section className="page crew">
      <div className="container">
        <h2 className='ff-sans-cond fs-300 uppercase letter-spacing-2 fw-normal'><span className='fw-bold'>02</span>Meet Your Crew</h2>
        <img src={new URL('/src'+props.crewData[selectedSection].images['png'].slice(1), import.meta.url).href} alt={props.crewData[selectedSection].name+' photo'} />
        <dl className="crew-content">
          <div className="hr" role="separator"></div>
          {crewNavbar}
          <dd className='ff-serif fs-500 uppercase text-white' style={{opacity: .5, marginBottom: ".5rem"}}>{props.crewData[selectedSection].role}</dd>
          <dt className='ff-serif fs-700 uppercase' style={{marginBottom: "1.5rem"}}>{props.crewData[selectedSection].name}</dt>
          <dd className='ff-sans-normal fs-400 text-accent line-height-2'>{props.crewData[selectedSection].bio}</dd>
        </dl>
      </div>
    </section>
  )
}

export default Crew