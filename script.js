document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    const queryInput = document.getElementById('query');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = queryInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });
});
