async function checkout() {
  try {
    const response = await fetch(url);

    // Check if the HTTP status is in the 200-299 range
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("GET Success:", data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
