// Get form elements
const blogForm = document.getElementById('blog-form');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const errorElement = document.getElementById('error');

// Form submission handler
blogForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    // Form Validation for error
    if (!username || !title || !content) {
        errorElement.textContent = "Please complete the form.";
        return;
    }

    // Create blog post object
    const blogPost = {
        username,
        title,
        content
    };

    // Get existing posts or initialize empty array
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Add new post
    blogPosts.push(blogPost);

    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Redirect to blog page
    window.location.href = 'blog.html';
});