import express from 'express';
import cors from 'cors';
import exifParser from 'exif-parser';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/getCameraSpecs', async (req, res) => {
    const imageUrl = req.query.imageUrl;

    try {
        const response = await fetch(imageUrl);
        const buffer = await response.buffer();

        // Parse EXIF data
        const parser = exifParser.create(buffer);
        const result = parser.parse();

        // Send camera specs as JSON response
        res.json({
            make: result.tags.Make,
            model: result.tags.Model,
            focalLength: result.tags.FocalLength,
            exposureTime: result.tags.ExposureTime,
            aperture: result.tags.FNumber,
            // Add more fields as needed
        });
    } catch (error) {
        console.error('Error fetching or parsing image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});