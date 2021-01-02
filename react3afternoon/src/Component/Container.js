function Container({ dataObject }) {
  let list = dataObject.favoriteMovies.map((movie, index) => (
    <li key={index}>{movie}</li>
  ));

  return (
    <div className="container-box">
      <div className="current-object">{dataObject.id}/25</div>
      <div className="person-info-container">
        <h1>
          {dataObject.name.first} {dataObject.name.last}
        </h1>
        <div className="person-info">
          <p className="details">
            <span className="bold">From: </span>
            {dataObject.city}, {dataObject.country}
          </p>
          <p className="details">
            <span className="bold">Job Title: </span>
            {dataObject.title}
          </p>
          <p className="details">
            <span className="bold">Employer: </span>
            {dataObject.employer}
          </p>
        </div>
        <div>
          <span className="bold">Favorite Movies: </span>
          <ol className="movies">{list}</ol>
        </div>
      </div>
    </div>
  );
}

export default Container;
