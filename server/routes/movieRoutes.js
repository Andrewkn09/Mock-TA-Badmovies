const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

//Route different requests to different endpoints
router.get('/search/:genre', movieController.getSearch);
router.get('/genres', movieController.getGenres);
router.get('/favorites', movieController.getFavorites);
router.post('/save', movieController.saveMovie);
router.delete('/delete', movieController.deleteMovie);

module.exports = router;
