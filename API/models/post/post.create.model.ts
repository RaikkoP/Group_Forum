import { MysqlError } from "mysql";
import db from "../../utility/database";

interface PostInterface {
    id?: number;
    title: string; 
    body: string;
    image_id: number;
    author_id: number;
};

interface ErrorInterface {
    message: string | MysqlError;
};

class Post {
    id?: number;
    title: string;
    body: string;
    image_id: number;
    author_id: number;

    constructor({id, title, body, image_id, author_id}: PostInterface) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.image_id = image_id;
        this.author_id = author_id;
    };

    //get data from only the postsList table
    static createNewPost(post: PostInterface, result:(error: ErrorInterface | string | null, data: PostInterface | null) => void) {
        db.query(`INSERT INTO posts SET title = ?, body = ?, image_id = ?, author_id = ?`, [post.title, post.body, post.image_id, post.author_id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            } 
            console.log("Created new post: ", {
                id: res.insertId,
                ...post,
              });
              result(null, { id: res.insertId, ...post });
        })
    };
}

export default Post;