export type IUser = {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
}

export type INewUser = {
    name: string;
    email: string;
    password: string;
}

export type IContextType = {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
}