import React from "react";
import image from "../assets/news.jpeg"
const NewsItem = ({title,description,src,url}) => {
 
  return (
  
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{width:"345px"}}>
        <img src={src?src:image} className="card-img-top" style={{height:"200px",width:"328px"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">
         {description?description.slice(0,100):"the current  news is unavailable or unable to load"}
          </p>
          <a href={url} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
  
  );
};

export default NewsItem;
