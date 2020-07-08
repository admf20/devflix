const express = require('express');
const {VideoService} = require('../services/video');

function VideosApi (app) {
    const router = express.Router();
    const VideoServices = new VideoService();
    
    app.use('/api/videos', router);
    
    router.get('/' , async (req,res,next) => {
        const {tags} = req.query;
        
        try {
            const videos = await VideoServices.getVideos({tags});
            res.status(200).json({
                data: videos,
                message: 'videos listed..'
            });
        } catch(err) {
            next(err);
        }
    });
    
    router.get('/:videoId', async (req,res,next) => {
        const {videoId} = req.params;
        
        try {
            const video = await VideoServices.getVideo({videoId})
            res.status(200).json({
            data: video,
            message: 'Video Retrived'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res,next) => {
    const {body: video} = req;
    
    try {
        const createVideoId = await VideoServices.createVideo({video})
        
        res.status(201).json({
            data: createVideoId,
            message: 'video created successfully'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:videoId', async (req,res,next) => {
    const {videoId} = req.params;
    const {body: video} = req;

    try {
        const UpdateVideo = await VideoServices.updateVideo({
            videoId,
            video
        })
        res.status(200).json({
        data: UpdateVideo,
        message: 'video updated successfully',
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:videoId', async (req,res,next) => {
        const {videoId} = req.params;
         
        try {
            const deleteVideo = await VideoServices.deleteVideo({videoId})
            res.status(200).json({
                data: deleteVideo,
                message: 'video deleted'
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = VideosApi;