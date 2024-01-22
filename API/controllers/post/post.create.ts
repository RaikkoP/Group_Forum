import { Response, Request } from 'express';
import Post from '../../models/post/post.create.model';

const createController = {
    createPost: async (req: Request, res: Response) => {
        const postData = new Post({
            id: req.body.id,
            title: req.body.id,
            body: req.body.body,
            image_id: req.body.image_id,
            author_id: req.body.author_id,
        });
        
        Post.createNewPost(postData, (err, data) => {
            if (err) {
                res.json({Created: false})
              } 
              if (data) {
                res.json({Created: true})
              }
        });

    },
}

export default createController;