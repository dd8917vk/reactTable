const fetchPosts = async () => {
    let response = await fetch('https://gist.githubusercontent.com/paulmillr/4524946/raw/c462a62ac9f3a072fc4106bbd131335ad730da16/github-users-stats.json');
    // let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
}

const postPost = async (post) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    let data = await response.json()
    return data;
}

export {
    fetchPosts,
    postPost,
}