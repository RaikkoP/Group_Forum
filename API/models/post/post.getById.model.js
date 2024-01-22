"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../utility/database"));
;
;
class Post {
    constructor({ id, title, slug, body, published, image_id, image, author_id, author }) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.body = body;
        this.published = published;
        this.image_id = image_id;
        this.image = image;
        this.author_id = author_id;
        this.author = author;
    }
    ;
    //get data from only the postsList table
    static getPostById(post, result) {
        database_1.default.query(`SELECT posts.id, posts.title, posts.slug, posts.body, posts.published, images.image AS image, users.username AS author FROM posts 
                INNER JOIN images ON posts.image_id=images.id 
                INNER JOIN users on users.id=posts.author_id
                WHERE id = ?`, [post.id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                post = res;
                console.log("post: ", post);
                result(null, post);
            }
        });
    }
    ;
}
exports.default = Post;
