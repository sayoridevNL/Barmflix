const movieGrid = document.getElementById('movieGrid');

fetch('movies.json')
    .then(res => res.json())
    .then(movies => {
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.thumbnail}" alt="${movie.title}">
                <div class="card-content">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                </div>
            `;
            card.onclick = () => {
                const query = `?title=${encodeURIComponent(movie.title)}&file=${encodeURIComponent(movie.videoUrl)}&desc=${encodeURIComponent(movie.description)}`;
                window.location.href = 'video.html' + query;
            };
            movieGrid.appendChild(card);
        });
    })
    .catch(err => {
        movieGrid.innerHTML = "<p style='color:red;'>Please use a local server to load movies.</p>";
    });