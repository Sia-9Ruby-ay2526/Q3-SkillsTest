function getTotal(result_ticket) {

    const TICKET_PRICE = 250;
    const ADMIN_FEE = 50.00;

    let ticket = document.getElementById("get_your_ticket").value;
    let subtotal = TICKET_PRICE * ticket;
    let total = subtotal + ADMIN_FEE;

    document.getElementById("subtotal").innerHTML = "₱" + subtotal.toFixed(2);
    document.getElementById("total").innerHTML = "₱" + total.toFixed(2);
}
    
