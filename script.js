// ===== Nút chuyển Dark Mode =====

const themeButton = document.getElementById("theme-toggle");

// Đọc chế độ đã lưu
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
} else {
    themeButton.textContent = "🌙";
}

// Khi bấm nút
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});