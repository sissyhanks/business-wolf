import React from 'react';


export default function Portfolio({ webSites }) {
  return (
    
    <div>
      <h1>Portfolio</h1>
      <div className="web-sites">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {webSites.map((webSite) => (
          <div>
          <h3 className="web-sites-item" key={webSite.title}>{webSite.title}</h3>
          <img src={webSite.img} alt={webSite.title} />
          <p>{webSite.description}</p>
          </div>
          // <img src={weather} alt="Weather Dashboard"></img>
          // <li className="web-sites-item" key={webSite.title}>
          //   {`${webSite.title} ${webSite.img} (${webSite.description})`}
          // </li>
        ))}
      </div>
    </div>
  );
}
