import { MysqlError } from "mysql";
import db from "../utility/database";

interface PostInterface {
    id: number;
    title: string; 
    slug: string;
    body: string;
    published: string;
    image_id: number;
    image: string;
    author_id: number;
    author: string;
};

interface TagInterface {
    tag: string;
    tag_id: number;
    post_id: number;
}

interface ErrorInterface {
    message: string | MysqlError;
};

class Post {
    id: number;
    title: string;
    slug: string;
    body: string;
    published: string;
    image_id: number;
    image: string;
    author_id: number;
    author: string;
    tag: string;
    tag_id: number;
    post_id: number;

    constructor({id, title, slug, body, published, image_id, image, author_id, author}: PostInterface, {tag, tag_id, post_id}: TagInterface) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.body = body;
        this.published = published;
        this.image_id = image_id;
        this.image = image;
        this.author_id = author_id;
        this.author = author;
        this.tag = tag;
        this.tag_id = tag_id;
        this.post_id = post_id;
    };


    //get data from only the postsList table
    static getAllPosts(post: PostInterface, result:(error: ErrorInterface | string | null, data: PostInterface | null) => void) {
        db.query('SELECT * FROM postsList', (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                post = res;
                console.log("postsList: ", post);
                result(null, post);
            }
        })
    };

    static getById(post: PostInterface, tags: TagInterface, result:(error: ErrorInterface | string | null, data: PostInterface | TagInterface | null) => void) {
        db.query(`SELECT posts.id, posts.title, posts.slug, posts.body, posts.published, images.image AS image, users.username AS author FROM posts 
                INNER JOIN images ON posts.image_id=images.id 
                INNER JOIN users on users.id=posts.author_id 
                WHERE posts.id = ?`, [post.id], (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                    }

                    if (res.length) {
                        console.log("found post: ", res[0]);
                    }
                })
    }
}

export default Post;