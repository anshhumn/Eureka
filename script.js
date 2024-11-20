// JavaScript for the hero section slideshow
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    const images = [
        "images/Eureka logo.png", // Add the correct paths to your images
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg"
    ];
    let currentImageIndex = 0;

    // Function to update the background image
    function updateBackgroundImage() {
        // Set the background image to the current index
        heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
        heroSection.style.backgroundSize = "cover";
        heroSection.style.backgroundPosition = "center";
        heroSection.style.transition = "background 1s ease-in-out";

        // Move to the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Start the slideshow
    updateBackgroundImage(); // Set the first image immediately
    setInterval(updateBackgroundImage, 5000); // Change image every 5 seconds
});
