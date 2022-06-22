import axios from "axios";

export const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>
        (response.data)
    )
}