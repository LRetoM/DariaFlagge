/**
 * Initialisiert den Controller und stellt die Verbindung zur Datenbank her.
 *
 * Diese Funktion stellt sicher, dass eine Verbindung zur Datenbank besteht,
 * und ruft die aktuellen Einträge der Bestenliste aus der Datenbank ab.
 * Die abgerufenen Daten werden zusammen mit den in der `data.js`-Datei
 * gespeicherten Daten als JSON-Antwort zurückgegeben.
 *
 * @author Ferhat Agostinis
 *
 * @param {Object} req - Das Anfrageobjekt vom Client.
 * @param {Object} res - Das Antwortobjekt, um Daten oder Fehlermeldungen an den Client zu senden.
 *
 * @returns {Promise<void>} Sendet die Daten und die Bestenliste als JSON-Antwort.
 */
const data = require("../data/data.js");
const connectDatabase = require("../utils/connect.js");

const initController = async (req, res) => {
  let db;
  let client;

  // Verbindung zur Datenbank herstellen
  [db, client] = await connectDatabase(res);

  // Prüfen, ob die Verbindung erfolgreich war
  if (!db || db === "error") {
    return res
      .status(500)
      .json({ message: "Datenbankverbindung fehlgeschlagen" });
  }

  const collection = db.collection("highscore");

  // Abrufen der aktuellen Bestenliste aus der Datenbank
  const leaderboard = await collection.find({}).toArray();

  // Rückgabe der Daten und der Bestenliste als JSON-Antwort
  res.json({ data, leaderboard });
};

module.exports = initController;
