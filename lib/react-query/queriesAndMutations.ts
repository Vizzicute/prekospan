import { INewUser } from '@/types'
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import { createUserAccount, getCurrentUser, googleAuth, signInAccount, signOutAccount } from '../appwrite/api'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    })
};

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (
            user: {
                email: string;
                password: string;
            }
        ) => signInAccount(user),
    })
};

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};

export const useSession = () => {
    return useMutation({
        mutationFn: getCurrentUser,
    });
};

export const useGoogleAuth = () => {
    return useMutation({
        mutationFn: googleAuth,
    });
}