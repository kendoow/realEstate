import CommentsService from "../services/commentsService.js";

class CommentsController {
  async getOne(req, res) {
    try {
      let comments;
      if (req.query.page && req.query.limit) {
        comments = await CommentsService.getPagination(
          req.params.id,
          req.query.page,
          req.query.limit
        );
      } else {
        comments = await CommentsService.getOne(req.params.id);
      }
      res.json(comments);
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error - Comments Controller Get One - ${e}` });
    }
  }

  async create(req, res) {
    try {
      const createdComment = await CommentsService.create(
        req.params.id,
        req.body,
        req.files.image
      );
      res.json(createdComment);
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error - Comments Controller Create - ${e}` });
    }
  }

  async update(req, res) {
    try {
      const updatedComment = await CommentsService.update(
        req.params.id,
        req.body,
        req.files.image
      );
      res.json(updatedComment);
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error - Comments Controller Update - ${e}` });
    }
  }
}

export default new CommentsController();
