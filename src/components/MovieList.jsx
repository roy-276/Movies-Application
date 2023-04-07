const MovieList = (props) => {
  return (
    <>
      {/* Map through the movies array and render an image for each movie */}
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movie.Poster} alt="Movie Poster" />
        </div>
      ))}
    </>
  );
};

export default MovieList;
