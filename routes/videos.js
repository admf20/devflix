const express = require('express');

function VideosApi (app) {
    const router = express.Router();

    app.use('/api/videos', router)

    router.get('/' ,(req,res) => {
        res.status(200).json({
            data: [],
            message: 'videos listed..'
        });
    });

    router.get('/:videoId', (req,res) => {
        const {videoId} = req.params;

        res.status(200).json({
            data: videoId,
            message: 'Video Retrived'
        });
    });

    router.post('/', (req,res,next) => {
        const {videoId} = req.params;

        res.status(201).json({
            data: {},
            message: 'video created successfully'
        });
    });

    router.put('/:videoId', (req,res) => {
        const {videoId} = req.params;

        res.status(200).json({
            data: videoId,
            message: 'video updated successfully'
        });
    });

    router.delete('/:videoId', (req,res) => {
        const {videoId} = req.params;
         
        res.status(200).json({
            data: videoId,
            message: 'video deleted successfully'
        });
    })
}

module.exports = VideosApi;