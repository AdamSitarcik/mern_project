import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
    if (requestUser.userID === resourceUserId.toString()) return;
    throw new UnauthenticatedError('Not authorized to access this route');
};

export default checkPermissions;