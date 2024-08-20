function scrollToCategory() {
    const select = document.getElementById("category-select");
    const category = select.value;

    if (category) {
        document.getElementById(category).scrollIntoView({
            behavior: "smooth"
        });
    }
}
