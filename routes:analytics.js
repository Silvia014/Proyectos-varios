const express = require("express");

const router = express.Router();

const analytics = require("../controllers/analyticsController");

router.get("/kpis", analytics.getKPIs);

router.get("/traffic", analytics.getTraffic);

router.get("/countries", analytics.getCountries);

router.get("/devices", analytics.getDevices);
router.get("/pages", analytics.getPages);

router.get("/channels", analytics.getChannels);

router.get("/browsers", analytics.getBrowsers);

router.get("/sources", analytics.getSources);

router.get("/events", analytics.getEvents);

router.get("/realtime", analytics.getRealtime);

router.get("/conversions", analytics.getConversions);

module.exports = router;