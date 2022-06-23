const router = require('express').Router();

// @desc GET results
// @route /test/result
// @access ALL
router.get('/', async(req, res) => {
    try {
        const nature = ['1', '', '2', '', '', '1', '', '', '', '1', '1', '', '2', '', '', '1', '', '', '', '1'];
        const tech = ['2', '', '', '1', '', '', '2', '', '1', '', '2', '', '', '1', '', '', '2', '', '1', ''];
        const human = ['', '1', '', '2', '', '2', '', '1', '', '', '', '1', '', '2', '', '2', '', '1', '', ''];
        const sign = ['', '2', '', '', '1', '', '', '', '2', '2', '', '2', '', '', '1', '', '', '', '2', '2'];
        const art = ['', '', '1', '', '2', '', '1', '2', '', '', '', '', '1', '', '2', '', '1', '2', '', ''];

        let natureRes = 0, techRes = 0, humanRes = 0, signRes = 0, artRes = 0;
        const arr = req.query.answers.split(',');

        for (let i = 0; i < arr.length - 1; i++) {
            switch(arr[i]) {
                case nature[i]:
                    natureRes++;
                    break;
                case tech[i]:
                    techRes++;
                    break;
                case human[i]:
                    humanRes++;
                    break;
                case sign[i]:
                    signRes++;
                    break;
                case art[i]:
                    artRes++;
                    break;
                default:
                    break;
            }
        }

        const max = Math.max(natureRes, techRes, humanRes, signRes, artRes);

        res.json({natureRes, techRes, humanRes, signRes, artRes});
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
