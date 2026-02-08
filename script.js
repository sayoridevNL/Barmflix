const movieGrid = document.getElementById('movieGrid');

fetch('movies.json')
    .then(response => {
        if (!response.ok) throw new Error("Failed to load movie data");
        return response.json();
    })
    .then(movies => {
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            
            card.innerHTML = `
                <img src="${movie.thumbnail}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            
            card.onclick = () => {
                const query = `?title=${encodeURIComponent(movie.title)}&file=${encodeURIComponent(movie.videoUrl)}&desc=${encodeURIComponent(movie.description)}`;
                window.location.href = 'video.html' + query;
            };

            movieGrid.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error:", error);
        movieGrid.innerHTML = `<p>Error loading movies. Please ensure you are using a local server.</p>`;
    });