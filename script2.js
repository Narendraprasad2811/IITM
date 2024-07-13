document.addEventListener("DOMContentLoaded", function () {
    const fetchButton = document.getElementById("fetchButton");
    const dataContainer = document.getElementById("dataContainer");

    fetchButton.addEventListener("click", async function () {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if (!response.ok) {
                throw new Error('Error fetching data: ${response.status} ${response.statusText}');
            }
            const data = await response.json();
            dataContainer.textContent = 'Title: ${data.title}\nBody: ${data.body}';
        } catch (error) {
            dataContainer.textContent = 'Error: ${error.message}';
        }
    });
});
