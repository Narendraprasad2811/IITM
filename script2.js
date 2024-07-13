const fetchButton = document.getElementById('fetchButton');
const dataContainer = document.getElementById('dataContainer');

fetchButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        dataContainer.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        dataContainer.textContent = `Error: ${error.message}`;
    }
});