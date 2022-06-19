import { MongoClient } from 'mongodb';

// POST /api/new-meetup

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = req.body;

		const client = MongoClient.connect(
			'mongodb+srv://lalit:Lalitrana12-B@cluster0.r8vrarm.mongodb.net/meetups?retryWrites=true&w=majority'
		);
		const db = (await client).db();
		const meetupsCollection = db.collection('meetups');
		const result = await meetupsCollection.insertOne(data);
		console.log(result);
		(await client).close();

		res.status(201).json({ message: 'Meetup inserted!' });
	}
};

export default handler;
