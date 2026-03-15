function getTotal() {

    const TICKET_PRICE = 250;
    const ADMIN_FEE = 50.00;

    let ticket = Number(document.getElementById("get_your_ticket").value);
    let subtotal = TICKET_PRICE * ticket;
    let total = subtotal + ADMIN_FEE;

    document.getElementById("subtotal").innerHTML = "₱" + subtotal.toFixed(2);
    document.getElementById("totalprice").innerHTML = "₱" + total.toFixed(2);

}  
