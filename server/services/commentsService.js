import CommentsModel from "../models/commentsModel.js";
import FilesService from "./filesService.js";


class CommentsService {
    async getOne(productId) {
        if (!productId) {
            throw new Error('Comments Service Get One - нет productId')
        }
        const { comments } = await CommentsModel.findOne({productId})
        if(!comments.length){
            throw new Error('Comments Service Get One - comments array is empty')

        }
        return comments
    }

    async getPagination(productId, page, limit) {
        const { comments } = await CommentsModel.findOne({productId})
        return comments.slice((page - 1) * limit, page * limit)
    }

    async create(productId, comment, image) {
        const imageName = FilesService.uploadFile(image)
        const commentCreated = await CommentsModel.create({productId, comments: [{...comment, image: imageName}]})
        return commentCreated
    }

    async update(productId, comment, image) {
        const imageName = FilesService.uploadFile(image)
        const { comments } = await CommentsModel.findOne({productId})
        const commentUpdate = await CommentsModel.findOneAndUpdate({productId}, {
            comments: [...comments, {...comment, image: imageName}]
        })
        return commentUpdate
    }
}

export default new CommentsService();