"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../utility/database"));
;
class Image {
    constructor({ id, image }) {
        this.id = id;
        this.image = image;
    }
    static uploadNewImage(image, result) {
        database_1.default.query(`INSERT INTO images SET image = ?`, [image.image], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("Image uploaded: ", Object.assign({ id: res.insertId }, image));
            image.id = res.insertId;
            result(null, Object.assign({ id: res.insertId }, image));
        });
    }
    ;
}
exports.default = Image;
