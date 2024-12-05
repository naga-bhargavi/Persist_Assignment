// // Dark Mode Toggle
// document.getElementById('darkModeToggle').addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     const buttonText = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
//     document.getElementById('darkModeToggle').innerText = buttonText;
// });

// // Playlist Functionality
// const videoListItems = document.querySelectorAll('#videoList li');
// const mainVideo = document.getElementById('mainVideo');
// const videoTitle = document.getElementById('videoTitle');

// videoListItems.forEach(item => {
//     item.addEventListener('click', () => {
//         mainVideo.src = item.getAttribute('data-src');
//         videoTitle.innerText = item.getAttribute('data-title');
//         mainVideo.play();
//     });
// });

// // Comment Section
// function addComment() {
//     const commentInput = document.getElementById('commentInput');
//     const commentText = commentInput.value.trim();

//     if (commentText !== "") {
//         const newComment = document.createElement('li');
//         newComment.textContent = commentText;

//         document.getElementById('commentsList').appendChild(newComment);
//         commentInput.value = "";
//     }
// }


// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const buttonText = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    document.getElementById('darkModeToggle').innerText = buttonText;
});

// Playlist Functionality
const videoListItems = document.querySelectorAll('#videoList li');
const mainVideo = document.getElementById('mainVideo');
const videoTitle = document.getElementById('videoTitle');

videoListItems.forEach(item => {
    item.addEventListener('click', () => {
        mainVideo.src = item.getAttribute('data-src');
        videoTitle.innerText = item.getAttribute('data-title');
        mainVideo.play();
    });
});

// Comment Section
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        document.getElementById('commentsList').appendChild(newComment);
        commentInput.value = "";
    }
}
