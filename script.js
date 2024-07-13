document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const addButton = document.getElementById("addButton");
    const removeButton = document.getElementById("removeButton");
    let itemCount = 0;

    addButton.addEventListener("click", function () {
        itemCount++;
        const newItem = document.createElement("p");
        newItem.textContent = 'Narendra #${itemCount}';
        container.appendChild(newItem);
    });

    removeButton.addEventListener("click", function () {
        const items = container.getElementsByTagName("p");
        if (items.length > 0) {
            container.removeChild(items[items.length - 1]);
            itemCount--;
        }
    });
});