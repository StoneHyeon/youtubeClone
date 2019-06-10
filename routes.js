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
    facebookCallback: FACEBOOK_CALLBACK
};

export default routes;