        // Get references to the buttons and the container
        const addButton = document.getElementById('addButton');
        const removeButton = document.getElementById('removeButton');
        const container = document.getElementById('container');

        // Initialize a counter for item numbers
        let itemCount = 0;

        // Event listener for the "Add Item" button
        addButton.addEventListener('click', () => {
            itemCount++;
            const newItem = document.createElement('p');
            newItem.textContent = `Item #${itemCount}`;
            container.appendChild(newItem);
        });

        // Event listener for the "Remove Last Item" button
        removeButton.addEventListener('click', () => {
            const lastItem = container.lastChild;
            if (lastItem) {
                container.removeChild(lastItem);
                itemCount--;
            }
        });