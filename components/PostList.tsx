import { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        setPosts([{
            name: "Laddstolpe 1 vänster",
            identifier: "1L"
        },
        {
            name: "Laddstolpe 1 höger",
            identifier: "1R"

        }]);
    }, []);

    const listOfPosts = posts.map

    return (
        <Text style={{fontSize: 48}}>Ladda</Text>
    );
}