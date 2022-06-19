import { MongoClient } from 'mongodb';

// POST /api/new-meetup

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = req.body;

		const client = MongoClient.connect('mongoDB Atlas url');
		const db = (await client).db();
		const meetupsCollection = db.collection('meetups');
		const result = await meetupsCollection.insertOne(data);
		console.log(result);
		(await client).close();

		res.status(201).json({ message: 'Meetup inserted!' });
	}
};

export default handler;
