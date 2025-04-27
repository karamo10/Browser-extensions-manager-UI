// Toggle Styling
const darkTheme = document.querySelector('.theme-mode');
// Filtering 
const filterTabs = document.querySelectorAll(".subheading__link");
const filterItems = document.querySelectorAll("[data-status]");
// Remove Btn Element
const btnRemove = document.querySelectorAll(".btn-remove");


darkTheme.onclick = () => {
  const body = document.body;
  body.classList.toggle('active');
};

// Looping Through each Tab
filterTabs.forEach(button => {
    button.addEventListener("click", () => {
        filterTabs.forEach((btn) => {
            btn.classList.remove("subheading__link-active");
        })
        button.classList.add("subheading__link-active");

        const filter = button.getAttribute("data-filter");

        filterItems.forEach((item) => {
            if (filter === "all" || item.getAttribute("data-status") === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })

    }) 
})
// Looping Through Each Remove Btn
btnRemove.forEach(button => {
     button.addEventListener("click", removeItem)
})
// Remove Btn Element Function
function removeItem(event) {
    const button = event.target;
    const extensionDiv = button.closest(".extention");
    if (extensionDiv) {
        extensionDiv.remove();
    }
}