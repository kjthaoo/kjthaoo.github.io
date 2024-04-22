const myFunction = () => {
  const winScroll = window.scrollY;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = `${scrolled}%`;
};

window.onscroll = myFunction;

document.addEventListener('DOMContentLoaded', function() {
  const commentList = document.getElementById('comment-list');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');

  // loadin the comments
  loadComments();

  // the event listener for comments input
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const commentText = commentInput.value.trim();
    if (commentText !== '') {
      addComment(commentText);
      commentInput.value = '';
    }
  });

  // to add a new comment
  function addComment(text) {
    const comment = document.createElement('li');
    comment.className = 'comment';
    comment.innerHTML = `<p>${text}</p><span class="delete-btn">Delete</span>`;
    commentList.appendChild(comment);

    // save comment
    saveComment(text);
  };

  // to save comment
  function saveComment(comment) {
    let comments = localStorage.getItem('comments');
    comments = comments ? JSON.parse(comments) : [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  // to load comments
  function loadComments() {
    let comments = localStorage.getItem('comments');
    comments = comments ? JSON.parse(comments) : [];
    comments.forEach(comment => addComment(comment));
  };

  // event for delete button
  commentList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const comment = event.target.parentNode;
      commentList.removeChild(comment);
      removeComment(comment.querySelector('p').textContent);
    }
  });

  // to remove comment
  function removeComment(commentText) {
    let comments = localStorage.getItem('comments');
    comments = comments ? JSON.parse(comments) : [];
    comments = comments.filter(comment => comment !== commentText);
    localStorage.setItem('comments', JSON.stringify(comments));
  };
});
