export function setMinDateForExpiration() {
    const today = new Date();
    const minDate = today.toISOString().slice(0, 7);
    document.getElementById("expirationDate").min = minDate;
}