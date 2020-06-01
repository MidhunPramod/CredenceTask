const router = require('express').Router();
const Movie = require('../models/Movie');

router.get('/', async (req,res) => {
    try{
        const result = await Movie.find({},{_id: 0});
        return res.send(result);
    }
    catch(e){
        console.log(e.toString());
        return res.send('Internal Server Error');
    }
});

router.post('/add', async (req,res) => {
    try{
        const {name,img,summary} = req.body;
        const movie = new Movie({
            name,
            img,
            summary
        });

        await movie.save();
        res.send('Movie saved in database!');
    }
    catch(e){
        console.log(e.toString());
        return res.send('Internal Server Error');
    }
});

module.exports = router;