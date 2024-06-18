export async function fetchGETPage(page = 1) {
    const response = await fetch(`https://gorest.co.in/public/v1/posts?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }        
    });
    
    const result = await response.json();
    return {posts: result.data, pagination: result.meta.pagination};
}

export async function fetchGETPost(id) {
    const response = await fetch(`https://gorest.co.in/public/v1/posts?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }        
    });
    const result = await response.json();
    return result.data;
}

export async function fetchGETComments(postId) {
    const response = await fetch(`https://gorest.co.in/public/v1/comments?post_id=${postId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }        
    });
    const result = await response.json();
    return result.data;
}