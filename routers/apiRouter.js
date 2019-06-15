import express from "express";
import routes from "../routes";
import {
    postRegisterView,
    postAddComment,
    deleteComment
} from "../controllers/videoController";
import {
    onlyPrivate
} from "../middlewares";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.posppt(routes.deleteComment(), onlyPrivate, deleteComment);

export default apiRouter;