// Select required elements
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// Function to render blog posts
function renderBlogList() {
// Clear main content
    mainElement.innerHTML = '';
    
// Get posts from localStorage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
//post check
    if (blogPosts.length === 0) {
        mainElement.innerHTML = '<p>No Blog posts yet...</p>';
        return;
    }

    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>Author: ${post.username}</p>
            <div>${post.content}</div>
        `;
        mainElement.appendChild(article);
    });
}

// Back button handler
backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Initial render
renderBlogList();