import React from "react";

function Newsbox(props) {
  let { title, description, imageurl, newurl, author, date } = props;
  return (
    <div>
      <div className="card mx-3 my-2">
        <img
          src={
            imageurl
              ? imageurl
              : "https://images.indianexpress.com/2021/10/2021-10-21T164658Z_879281293_RC2H4Q9F77QX_RTRMADP_3_SCIENCE-DINOSAUR.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}.....</h5>
          <p className="card-text">{description}.....</p>
        </div>
        <p className="card-text m-1">
          <small className="text-muted">
            Published By: {author ? author : "Unknown"} on
            {new Date(date).toGMTString()}
          </small>
        </p>
        <a
          rel="noreferrer"
          href={newurl}
          target="_blank"
          className="btn btn-primary btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default Newsbox;
