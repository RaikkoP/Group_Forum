"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../utility/database"));
;
;
class Post {
    constructor({ id, title, body, image_id, author_id }) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.image_id = image_id;
        this.author_id = author_id;
    }
    ;
    //get data from only the postsList table
    static createNewPost(post, result) {
        database_1.default.query(`INSERT INTO posts SET title = ?, body = ?, image_id = ?, author_id = ?`, [post.title, post.body, post.image_id, post.author_id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("Created new post: ", Object.assign({ id: res.insertId }, post));
            result(null, Object.assign({ id: res.insertId }, post));
        });
    }
    ;
}
exports.default = Post;
