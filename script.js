
const functionUrl = "https://3l55exyp2vzpz6r4q3b6eqerae0oqkra.lambda-url.us-east-1.on.aws/";


async function fetchViewCount() {
  try {
    const response = await fetch(functionUrl);
    const data = await response.json();

    // Display the view count
    document.getElementById("count-value").innerText = data.views;
  } catch (error) {
    console.log(error)
    console.error("Error fetching view count:", error);
    document.getElementById("count-value").innerText = "error";
  }
}

// Run when the page loads
window.onload = fetchViewCount;
