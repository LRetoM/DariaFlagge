const express = require("express");
const router = express.Router();

const getAndUpdateLeaderboard = require("../controllers/getAndUpdateLeaderboardController.js");
const initController = require("../controllers/initController.js");

/**
 * Initiale Datenroute.
 *
 * Diese Route wird verwendet, um die initialen Daten vom Server abzurufen.
 * Der `initController` verarbeitet die Anfrage und sendet die erforderlichen Daten als Antwort.
 *
 * @route GET /
 * @param {express.Request} req - Die Anfrage-Objekt.
 * @param {express.Response} res - Das Antwort-Objekt.
 */
router.get("/", (req, res) => {
  initController(req, res);
});

/**
 * Route für Leaderboard-Updates.
 *
 * Diese Route wird verwendet, um die Bestenliste zu aktualisieren.
 * Die `getAndUpdateLeaderboard`-Funktion verarbeitet die Anfrage und sendet das aktualisierte Leaderboard als Antwort.
 *
 * @route POST /getAndUpdateLeaderboard
 * @param {express.Request} req - Die Anfrage-Objekt.
 * @param {express.Response} res - Das Antwort-Objekt.
 */
router.post("/getAndUpdateLeaderboard", async (req, res) => {
  getAndUpdateLeaderboard(req, res);
});

module.exports = router;
