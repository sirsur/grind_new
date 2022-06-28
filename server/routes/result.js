const router = require('express').Router();

// @desc GET results
// @route /result
// @access ALL
router.get('/', async(req, res) => {
    try {
        const NATURE_ANSWER = 'human-nature: all professions related to crop production, animal husbandry and forestry (agronomist, microbiologist, forester, farmer, veterinarian)';
        const TECH_ANSWER   = 'human-technique: all technical professions (specialists design, construct technical systems, devices, develop processes for their manufacture, specialists identify and recognize malfunctions of technical systems)';
        const HUMAN_ANSWER  = 'human-human: all professions related to serving people, with communication (editor, proofreader, typist, programmer, designer, process engineer)';
        const SIGN_ANSWER   = 'human-sign: all professions related to miscalculations, digital and alphabetic signs, including musical specialties (writer, artist, composer, jeweler, restorer, painter)';
        const ART_ANSWER    = 'art-sign: all creative professions (educator, teacher, sports coach, doctor, seller, hairdresser, lawyer, police officer)';

        const NATURE = ['1', '', '2', '', '', '1', '', '', '', '1', '1', '', '2', '', '', '1', '', '', '', '1'];
        const TECH   = ['2', '', '', '1', '', '', '2', '', '1', '', '2', '', '', '1', '', '', '2', '', '1', ''];
        const HUMAN  = ['', '1', '', '2', '', '2', '', '1', '', '', '', '1', '', '2', '', '2', '', '1', '', ''];
        const SIGN   = ['', '2', '', '', '1', '', '', '', '2', '2', '', '2', '', '', '1', '', '', '', '2', '2'];
        const ART    = ['', '', '1', '', '2', '', '1', '2', '', '', '', '', '1', '', '2', '', '1', '2', '', ''];

        let result = [];

        let natureRes = 0, techRes = 0, humanRes = 0, signRes = 0, artRes = 0;
        const arr = req.query.answers.split(',');

        for (let i = 0; i < arr.length; i++) {
            switch(arr[i]) {
                case NATURE[i]:
                    natureRes++;
                    break;
                case TECH[i]:
                    techRes++;
                    break;
                case HUMAN[i]:
                    humanRes++;
                    break;
                case SIGN[i]:
                    signRes++;
                    break;
                case ART[i]:
                    artRes++;
                    break;
                default:
                    break;
            }
        };

        const max = Math.max(natureRes, techRes, humanRes, signRes, artRes);

        switch(max) {
            case natureRes:
                result.push(NATURE_ANSWER);
                break;
            case techRes:
                result.push(TECH_ANSWER);
                break;
            case humanRes:
                result.push(HUMAN_ANSWER);
                break;
            case signRes:
                result.push(SIGN_ANSWER);
                break;
            case artRes:
                result.push(ART_ANSWER);
                break;
            default:
                break;
        };

        res.json(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
