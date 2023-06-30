/**
 * Script to handle the navigation links events.
 * When the user presses arrow left or arrow right, the page will be redirected to the previous/next page if corresponding link exists.
 */

// Get the previous (id="prev-page") and next (id="next-page") links
const prevPageLink = document.getElementById("prev-page");
const nextPageLink = document.getElementById("next-page");

// Add event listener to the document
document.addEventListener("keydown", (event) => {
  if (!event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey) {
    return;
  } else {
    if (event.key === "ArrowLeft" && prevPageLink) {
      prevPageLink.click();
    }
    if (event.key === "ArrowRight" && nextPageLink) {
      nextPageLink.click();
    }
  }
});
