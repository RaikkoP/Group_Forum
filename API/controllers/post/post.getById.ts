import { Response, Request } from 'express';
import Post from '../../models/post/post.getById.model';

const getByIdController = {
    getPostById: async (req: Request, res: Response) => {
        const postData = new Post({
            id: req.body.id,
            title: req.body.id,
            slug: req.body.slug,
            body: req.body.body,
            published: req.body.published,
            image_id: req.body.image_id,
            image: req.body.image,
            author_id: req.body.author_id,
            author: req.body.author,
        });
        
        Post.getPostById(postData, (err, data) => {
            if (err) {
                res.json({Found: false})
                throw err;
            }
            if (data) {
                res.json({Found: true})
                return data;
            }
        });

    },
}

export default getByIdController;