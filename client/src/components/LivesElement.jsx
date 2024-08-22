import React from "react";
import { useSelector } from "react-redux";

/**
 * LivesElement-Komponente.
 *
 * Diese Komponente zeigt die Anzahl der verbleibenden Leben des Spielers an,
 * die aus dem Redux-Store (`state.game.lifes`) abgerufen wird.
 *
 * @component
 * @example
 * // Beispiel wie man die Komponente verwendet
 * return <LivesElement />;
 *
 * @returns {JSX.Element} Ein div-Element, das die aktuelle Anzahl der Leben anzeigt.
 */
const LivesElement = () => {
  // Zugriff auf die Lebensanzahl aus dem Redux-Store
  const { lifes } = useSelector((state) => state.game);

  return <div>Leben: {lifes}</div>;
};

export default LivesElement;
