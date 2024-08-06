// <!-- script untuk menampilkan bg navbar ketika di scrol -->

  const navbar = document.getElementById("navbar");

  // Tambahkan event listener untuk scroll
  window.addEventListener("scroll", () => {
    // Cek posisi scroll
    if (window.scrollY > 50) {
      // Sesuaikan nilai scroll sesuai kebutuhan
      navbar.classList.add("bg-blue-400", "shadow-xl");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-blue-400", "shadow-xl");
    }
  });



  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.getElementById("darkMode");
    const icon = document.getElementById("iconMode");
    const navbarMobile = document.getElementById("navbarMobile");
    const menuLainnyaMobile = document.getElementById("menuLainnyaMobile");
    const menuLainnyaDekstop =
      document.getElementById("menuLainnyaDekstop");
    body.classList.toggle("bg-gray-100");
    body.classList.toggle("text-gray-700");
    body.classList.toggle("bg-gray-900");
    body.classList.toggle("text-gray-100");
    navbarMobile.classList.toggle("bg-gray-100");
    navbarMobile.classList.toggle("text-gray-700");
    navbarMobile.classList.toggle("bg-gray-900");
    navbarMobile.classList.toggle("text-gray-100");
    menuLainnyaDekstop.classList.toggle("bg-gray-100");
    menuLainnyaDekstop.classList.toggle("text-gray-700");
    menuLainnyaDekstop.classList.toggle("bg-gray-900");
    menuLainnyaDekstop.classList.toggle("text-gray-100");

    // Update icon class based on mode
    if (body.classList.contains("bg-gray-900")) {
      icon.classList.replace("bi-lightbulb", "bi-lightbulb-fill");
      icon.classList.replace("text-gray-700", "text-gray-100");
      localStorage.setItem("mode", "dark");
    } else {
      icon.classList.replace("bi-lightbulb-fill", "bi-lightbulb");
      icon.classList.replace("text-gray-100", "text-gray-700");
      localStorage.setItem("mode", "light");
    }
  }

  // Add event listener to the button
  document.getElementById("mode").addEventListener("click", toggleDarkMode);

  // Apply saved mode on page load
  document.addEventListener("DOMContentLoaded", function () {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      document
        .getElementById("darkMode")
        .classList.add("bg-gray-900", "text-gray-100");
      document
        .getElementById("navbarMobile")
        .classList.add("bg-gray-900", "text-gray-100");
      document
        .getElementById("menuLainnyaMobile")
        .classList.add("bg-gray-900", "text-gray-100");
      document
        .getElementById("menuLainnyaDekstop")
        .classList.add("bg-gray-900", "text-gray-100");
      document
        .getElementById("iconMode")
        .classList.replace("bi-lightbulb", "bi-lightbulb-fill");
      document
        .getElementById("iconMode")
        .classList.replace("text-gray-700", "text-gray-100");
    } else {
      document
        .getElementById("darkMode")
        .classList.add("bg-gray-100", "text-gray-700");
      document
        .getElementById("navbarMobile")
        .classList.add("bg-gray-100", "text-gray-700");
      document
        .getElementById("menuLainnyaMobile")
        .classList.add("bg-gray-100", "text-gray-700");
      document
        .getElementById("menuLainnyaDekstop")
        .classList.add("bg-gray-100", "text-gray-700");
      document
        .getElementById("iconMode")
        .classList.replace("bi-lightbulb-fill", "bi-lightbulb");
      document
        .getElementById("iconMode")
        .classList.replace("text-gray-100", "text-gray-700");
    }
  });

// <!-- aos animate -->

  AOS.init();
