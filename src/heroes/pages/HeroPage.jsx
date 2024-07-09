import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers/getHeroesById";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroesById(id),[id]);
  const onNavigateBack = () => {
    if (id.startsWith("marvel")) {
      navigate("/");
    }
    else {
      navigate("/dc");
    }
  };
  if (!hero) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>{hero.superhero}</h1>
      <main className="hero-container">
        <img src={`../../../assets/heroes/${hero.id}.jpg`} alt="" />
        <div className="hero-info">
          <ul>
            <li>
              <b>Superhero:</b>
              {hero.superhero}
            </li>
            <li>
              <b>Alter Ego:</b>
              {hero.alterEgo}
            </li>
            <li>
              <b>First Appearance:</b>
              {hero.firstAppearance}
            </li>
            <p>
              <b>Characters:</b>
              {hero.characters}
            </p>
            <button className="btn btn-primary" onClick={onNavigateBack}>
              Back
            </button>
          </ul>
        </div>
      </main>
    </>
  );
};
