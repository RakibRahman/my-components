
import { useFetch } from './hooks/useFetch';
import { Card } from "./composition/Card"

interface PostProps {
    userId: string | number;
    id: string | number;
    body: string;
    title: string
}
export const Posts = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <>
            <h1>{loading && 'Loading Server Data...'}</h1>
            <h1>{error && 'Something went wrong...'}</h1>

            <div className="grid-container">

                {data?.splice(1, 10).map((post: PostProps) => ((
                    <Card title={post.title} id={post.id} body={post.body}>
                        <a href={`https://jsonplaceholder.typicode.com/posts/${post.id}`} >Read More</a>
                    </Card>
                )))}
            </div>
        </>
    );
}

