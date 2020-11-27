const express = require('express');
const connectDB = require('./models/Connection')
const app = express();
const {cloudinary} = require('./Utils/cloudinary');

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/usermodel', require('./Api/User'));
//app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

const port = process.env.PORT || 3001; 
app.listen(port, () => {
  console.log(`app is running on ${port}`);
});