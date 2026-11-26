function checkout() {
  fetch(orderId).then(result).catch(error).finally();
  console.info("Checking merge conflict.");
}
