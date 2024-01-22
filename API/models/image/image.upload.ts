import { MysqlError } from "mysql";
import db from "../../utility/database"


interface ImageInterface {
    id?: number;
    image: string;
}

interface ErrorInterface {
    message: string | MysqlError;
};

class Image {
    id?: number;
    image: string;

    constructor({ id, image }: ImageInterface) {
        this.id = id;
        this.image = image;
    }

    static uploadNewImage(image: ImageInterface, result: (error: ErrorInterface | string | null, data: ImageInterface | null) => void) {
        db.query(`INSERT INTO images SET image = ?`, [image.image], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("Image uploaded: ", {
                id: res.insertId,
                ...image
            });

            image.id = res.insertId

            result(null, { id : res.insertId, ...image})
        })
    };
}

export default Image;