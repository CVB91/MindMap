import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    //store the data in a database

    const newMessage = {
      email,
      name,
      message,
    }

    let client
    
    let url = process.env.MONGO_URI
    try {
      client = await MongoClient.connect(
        url
      )
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Could not connect to database', error: error })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing message failed' })
      return
    }

    client.close()

    res
      .status(201)
      .json({ message: 'Message sent successfully', message: newMessage })
  }
}

export default handler
