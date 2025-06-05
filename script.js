function addNewItem() {
    const itemsDiv = document.getElementById('items');
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.innerHTML = `
        <input type="text" placeholder="Item Name" class="item-name">
        <input type="number" placeholder="Quantity" class="item-qty">
        <input type="number" placeholder="Price (₹)" class="item-price">
    `;
    itemsDiv.appendChild(newItem);
}

function generateInvoice() {
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const items = document.querySelectorAll('.item');
    
    let invoiceHTML = `
        <h3>Invoice For: ${customerName}</h3>
        <p>${customerAddress}</p>
        <table border="1" cellpadding="10" cellspacing="0" width="100%">
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
    `;
    
    let grandTotal = 0;
    
    items.forEach(item => {
        const name = item.querySelector('.item-name').value || "N/A";
        const qty = parseFloat(item.querySelector('.item-qty').value) || 0;
        const price = parseFloat(item.querySelector('.item-price').value) || 0;
        const total = qty * price;
        grandTotal += total;
        
        invoiceHTML += `
            <tr>
                <td>${name}</td>
                <td>${qty}</td>
                <td>₹${price.toFixed(2)}</td>
                <td>₹${total.toFixed(2)}</td>
            </tr>
        `;
    });
    
    invoiceHTML += `
            <tr>
                <td colspan="3" align="right"><strong>Grand Total:</strong></td>
                <td><strong>₹${grandTotal.toFixed(2)}</strong></td>
            </tr>
        </table>
    `;
    
    document.getElementById('invoiceContent').innerHTML = invoiceHTML;
}

function downloadPDF() {
    const invoiceContent = document.getElementById('invoiceContent');
    
    html2canvas(invoiceContent).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice.pdf');
    });
}
