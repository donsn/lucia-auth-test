import { User, UserType } from "./user.model";
import { generateUserId, auth ,passwordUtil } from "./auth";
import { cookies } from "next/headers";

export type SignUpModel = Omit<UserType, "_id" | "__v" | "emailVerified" | "hashed_password"> & {
    password: string;
};

export const signupUser = async (user: SignUpModel) => {
   const hashed_password = await passwordUtil.hash(user.password);
    const newUser = new User({ ...user, _id: generateUserId(15), email: user.email.toLowerCase(), hashed_password });
    return newUser.save();
}

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return false;
    const isPasswordValid = await passwordUtil.verify(password, user.hashed_password || "" );
    if (!isPasswordValid) return false;
    const session = await auth.createSession(user._id, {});
    const sessionCookie = await auth.createSessionCookie(session.id);
    cookies().set(sessionCookie.name,sessionCookie.value,sessionCookie.attributes);
    return true;
}

export const validateSession = async () => {
    const sessionId = cookies().get(auth.sessionCookieName)?.value;
    if (!sessionId) {
        console.log("No session cookie found");
        return false;
    }
    const session = await auth.validateSession(sessionId);
    if (!session){
        console.log("Invalid session");
        return false;
    }
    return true;
}