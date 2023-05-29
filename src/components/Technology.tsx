import React, { useState } from "react";

type Props = {
  technologyData: {
    name: string;
    images: { portrait: string; landscape: string };
    description: string;
  }[];
};

const Technology = (props: Props) => {
  const [selectedSection, setSelectedSection] = useState<number>(0);

  let technologyCrew = (
    <ul className="num-nav flex">
      {props.technologyData.map((technology, index) => (
        <li key={technology.name}>
          <a
            className={
              selectedSection == index
                ? "active_link uppercase ff-serif fs-300 fw-normal"
                : "uppercase ff-serif fs-300 fw-normal"
            }
            onClick={() => setSelectedSection(index)}
          ></a>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="page technology">
      <div className="container">
        <h2 className="ff-sans-cond fs-300 uppercase letter-spacing-2 fw-normal container"><span className="fw-bold">03</span>Space Launch 101</h2>
      </div>
      <img
        className="landscape"
        src={
          new URL(
            "/src" +
              props.technologyData[selectedSection].images["landscape"].slice(
                1
              ),
            import.meta.url
          ).href
        }
        alt={props.technologyData[selectedSection].name + " photo"}
      />
      <img
        className="portrait"
        src={
          new URL(
            "/src" +
              props.technologyData[selectedSection].images["portrait"].slice(
                1
              ),
            import.meta.url
          ).href
        }
        alt={props.technologyData[selectedSection].name + " photo"}
      />
      <div className="container">
        <dl className="technology-content">
          {technologyCrew}
          <dd
            className="ff-sans-cond letter-spacing-3 fs-500 uppercase text-accent"
            style={{ marginBottom: ".5rem" }}
          >
            The Terminology…
          </dd>
          <dt
            className="ff-serif fs-700 uppercase"
            style={{ marginBottom: "1.5rem" }}
          >
            {props.technologyData[selectedSection].name}
          </dt>
          <dd className="ff-sans-normal fs-400 text-accent line-height-2">
            {props.technologyData[selectedSection].description}
          </dd>
        </dl>
      </div>

    </section>
  );
};

export default Technology;
