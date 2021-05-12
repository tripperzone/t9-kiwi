import Dictionary from "../helpers/Dictionary";
import config from 'config';
import express from 'express';

const router = express.Router();

const dictionaryPath = config.get('dictionaryPath');
const dictionary = new Dictionary(dictionaryPath);
dictionary.prepareTrieDictionary();

router.post("/", async (req, res) => {
    const { numericString } = req.body;
    const suggestions = await dictionary.getSuggestions(numericString);

    res.json({ suggestions });
});

export default router;