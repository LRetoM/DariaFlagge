import React from "react";
import { useSelector } from "react-redux";

/**
 * PointsElement-Komponente.
 *
 * Diese Komponente zeigt die aktuelle Punktzahl des Spielers an,
 * die aus dem Redux-Store (`state.game.points`) abgerufen wird.
 *
 * @component
 * @example
 * // Beispiel wie man die Komponente verwendet
 * return <PointsElement />;
 *
 * @returns {JSX.Element} Ein div-Element, das die aktuelle Punktzahl anzeigt.
 */
const PointsElement = () => {
  // Zugriff auf die Punktzahl aus dem Redux-Store
  const { points } = useSelector((state) => state.game);

  return <div>Punkte: {points}</div>;
};

export default PointsElement;
