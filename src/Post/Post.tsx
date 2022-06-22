import React from 'react'
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query'
import { getData } from './apis/getData'
import axios from "axios";

interface PostProps {
    userId: string | number;
    id: string | number;
    body: string;
    title: string
}
export const Post = () => {
    const API = 'https://jsonplaceholder.typicode.com/posts'

    const { isLoading, error, data } = useQuery('fetchPosts', getData)

    const mutation = useMutation((newPost: PostProps) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    })

    return (
        <>
            <div>
                {isLoading ? 'Loading...' : null}
                {error ? 'Error' : null}
                {data?.splice(1, 10).map((post: PostProps) => (
                    <div key={post.id}>
                        <p>{post.title}</p>
                    </div>
                ))}
            </div>
            <div>
                {mutation.isLoading ? (
                    'Adding Post...'
                ) : (
                    <>
                        {mutation.isError ? (
                            <div>An error occurred: {mutation.error instanceof Error ? mutation.error.message : null}</div>
                        ) : null}

                        {mutation.isSuccess ? <div>Post added!</div> : null}

                        <button
                            onClick={() => {
                                mutation.mutate(
                                    {
                                        title: 'foo',
                                        body: 'bar',
                                        userId: 1,
                                        id: 1645
                                    }
                                )
                            }}
                        >
                            Create Post
                        </button>
                    </>
                )}
            </div>
        </>
    )
}
