import { create } from "zustand";


interface UserInfo {
    name: string;
    avatar: string;
}

interface UserStore {
    userInfo: UserInfo | null;
    setUserInfo: (userInfo: UserInfo) => void;
    getUserInfo: () => UserInfo | null;
    auth: () => boolean;
}

export const useUserStore = create<UserStore>((set, get) => ({
    userInfo: null,
    setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
    getUserInfo: () => {
        return get().userInfo;
    },

    auth: () => {
        const userInfo = get().getUserInfo();
        if (!userInfo) {
            return false;
        }
        return true;
    },
}))
