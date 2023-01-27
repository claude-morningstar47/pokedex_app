import React from "react";
import "./error.css";

const Error = () => {
  return (
    <div className="mainContent">
      <h1 data-test-id="text-404">404</h1>
      <p>
        Je crains que vous n'ayez trouvé une page qui n'existe pas sur
        Pokemon-App. Cela peut arriver lorsque vous suivez un lien vers quelque
        chose qui a depuis été supprimé. Ou le lien était incorrect au départ.
      </p>
      <p>
        Désolé pour ça. Nous avons consigné l'erreur pour examen, au cas où ce
        serait de notre faute.
      </p>
      <ul>
        <li>
          <a href="/">Aller à la page d'accueil</a>
        </li>
        <li>
          <a href="/admin/">Aller à la page d'administration</a>
        </li>
      </ul>
    </div>
  );
};

export default Error;
