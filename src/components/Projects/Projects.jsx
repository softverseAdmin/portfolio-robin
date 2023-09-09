import React from 'react';
import Cards from './Cards';
import img from "../../assets/videos/ntg.png";

export default function Projects() {

  const data = [
    {
      customer: "Nepal Travel Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
    {
      customer: "Nepal Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
    {
      customer: "Travel Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
    {
      customer: "Nepal Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
  ];
  return (
    <div className="container-fluid d-flex align-items-center vh-100">
      <div className="container flex-column gap-5">
        <div className="row gap-4">
          {data.map((d, index) => {
            const { customer, url, img } = d;
            return (
              <div className="col" key={index}>
                <Cards
                  customer={customer}
                  url={url}
                  img={img}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );}
