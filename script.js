document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");

    fetch("https://www.reddit.com/r/aww/.json")
        .then(response => response.json())
        .then(reditData => {
            const posts = reditData.data.children;

            posts.forEach(post => {
                const postData = post.data;
                
                const postElement = document.createElement('div');
                postElement.className = 'post';

                const titleElement = document.createElement('a');
                titleElement.href = `https://www.reddit.com${postData.permalink}`;
                titleElement.target = '_blank';
                titleElement.className = 'title';
                titleElement.innerText = postData.title;

                const imgElement = document.createElement('img');
                imgElement.src = postData.thumbnail;
                imgElement.alt = postData.title;

                postElement.appendChild(imgElement);
                postElement.appendChild(titleElement);
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching api data:', error));
});

