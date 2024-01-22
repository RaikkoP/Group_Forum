import { Response, Request } from 'express';
import Post from '../../models/post/post.get.model';

const getController = {
    getPost: async (req: Request, res: Response) => {
        const postData = new Post({
            id: req.body.id,
            title: req.body.id,
            body: req.body.body,
            image: req.body.image,
            author_id: req.body.author_id,
            author: req.body.author,
        });
        
        Post.getAllPosts(postData, (err, data) => {
            if (err) {
                console.log(err);
                res.json({Found: false})
                throw err;
            }
            if (data) {
                console.log(data);
                res.json(data)
                return data;
            }
        });

    },
}

export default getController;