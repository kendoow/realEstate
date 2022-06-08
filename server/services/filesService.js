import { v4 } from "uuid";
import path from 'path';

class FileService {
    uploadFile(file) {
        const expansion = `.${file.name.split('.').pop()}`
        const fileName = v4() + expansion
        const filePath = path.resolve('static', fileName)
        file.mv(filePath)
        return fileName;
    }
}

export default new FileService;