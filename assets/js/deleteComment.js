import axios from "axios";
import routes from "../../routes";

const commentNumber = document.getElementById("jsCommentNumber");
const commentList = document.getElementById("jsCommentList");
const comment = document.getElementById("jsComment");
const commentDeleteBtn = document.getElementById("jsDeleteCommentBtn");

const decreaseNum = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const delComment = (id, target) => {
    const span = target.parentElement;
    const li = span.parentElement;
    commentList.removeChild(li);
    decreaseNum();
};

const handleClick = async (event) => {
    const commentId = event.target.id;
    const response = await axios({
        url: `${routes.api}/${commentId}/comment/delete`,
        method: "POST",
        data: {
            commentId
        }
    });
    if (response.status === 200) {
        delComment(commentId, event.target);
    }
};

function init() {
    commentDeleteBtn.addEventListener("click", handleClick);
}

if (comment) {
    init();
}