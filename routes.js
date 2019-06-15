// Globals
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// GitHUB
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook";

// api
const API = "/api";
const REGISTER_VIEW = "/:id/view";

// comment
const ADD_COMMENT = "/:id/comment";
const DELETE_COMMENT = "/:id/comment/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    editProfile: EDIT_PROFILE,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        }
        return USER_DETAIL;
    },
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`;
        }
        return VIDEO_DETAIL;
    },
    editVideo: (id) => {
        if (id) {
            return `/videos/${id}/edit`;
        }
        return EDIT_VIDEO;

    },
    deleteVideo: (id) => {
        if (id) {
            return `/videos/${id}/delete`;
        }
        return DELETE_VIDEO;
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    me: ME,
    facebook: FACEBOOK,
    facebookCallback: FACEBOOK_CALLBACK,
    api: API,
    registerView: REGISTER_VIEW,
    addComment: ADD_COMMENT,
    deleteComment: (id) => {
        if (id) {
            return `/${id}/comment/delete`;
        }
        return DELETE_COMMENT;
    }
};

export default routes;