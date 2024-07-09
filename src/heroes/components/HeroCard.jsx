import { Link } from "react-router-dom";

export const HeroCard = ({
  firstAppearance,
  superhero,
  publisher,
  alterEgo,
  id,
  characters
}) => {
  return (
    <>
      <div className="card animate__animated animate__fadeIn">
        <img src={`/assets/heroes/${id}.jpg`} alt="" />
        <div className="card-info">
          <h2>{superhero}</h2>
          <h4>{alterEgo}</h4>
          {alterEgo !== characters && <p>{characters}</p>}
          <p>
            <small>{firstAppearance}</small>
          </p>
          <Link to={`/hero/${id}`}>More information...</Link>
        </div>
      </div>
    </>
  );
};
