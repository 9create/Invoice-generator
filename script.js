// Electrical Items Database
const electricalItems = {
  "Wires & Cables": [
    { name: "Wire 1.5mm Copper", hsn: "85444290", unit: "meter", rate: 12 },
    { name: "Wire 2.5mm Copper", hsn: "85444290", unit: "meter", rate: 22 },
    { name: "Wire 4mm Copper", hsn: "85444290", unit: "meter", rate: 38 },
    { name: "Wire 6mm Copper", hsn: "85444290", unit: "meter", rate: 58 },
    { name: "3-Core Flex Wire", hsn: "85444290", unit: "meter", rate: 45 },
    { name: "Coaxial Cable", hsn: "85444290", unit: "meter", rate: 18 },
    { name: "LAN Cable Cat6", hsn: "85444290", unit: "meter", rate: 15 }
  ],
  "MCB & Protection": [
    { name: "MCB 6A Single Pole", hsn: "85362090", unit: "piece", rate: 95 },
    { name: "MCB 10A Single Pole", hsn: "85362090", unit: "piece", rate: 105 },
    { name: "MCB 16A Single Pole", hsn: "85362090", unit: "piece", rate: 115 },
    { name: "MCB 32A Single Pole", hsn: "85362090", unit: "piece", rate: 180 },
    { name: "MCB 40A Double Pole", hsn: "85362090", unit: "piece", rate: 350 },
    { name: "MCB 63A Triple Pole", hsn: "85362090", unit: "piece", rate: 650 },
    { name: "RCCB 30mA 40A", hsn: "85362090", unit: "piece", rate: 1200 },
    { name: "ELCB", hsn: "85362090", unit: "piece", rate: 2500 }
  ],
  "Switches & Sockets": [
    { name: "Modular Switch 1-Way", hsn: "85365090", unit: "piece", rate: 85 },
    { name: "Modular Switch 2-Way", hsn: "85365090", unit: "piece", rate: 110 },
    { name: "Bell Push Switch", hsn: "85365090", unit: "piece", rate: 65 },
    { name: "3-Pin Socket 5A", hsn: "85365090", unit: "piece", rate: 95 },
    { name: "3-Pin Socket 15A", hsn: "85365090", unit: "piece", rate: 125 },
    { name: "2-Pin Socket", hsn: "85365090", unit: "piece", rate: 75 },
    { name: "Multi Plug Socket", hsn: "85365090", unit: "piece", rate: 450 }
  ],
  "Lights & Fixtures": [
    { name: "LED Bulb 9W", hsn: "85395000", unit: "piece", rate: 85 },
    { name: "LED Bulb 12W", hsn: "85395000", unit: "piece", rate: 110 },
    { name: "LED Bulb 18W", hsn: "85395000", unit: "piece", rate: 145 },
    { name: "Tubelight 18W", hsn: "85395000", unit: "piece", rate: 180 },
    { name: "Tubelight 36W", hsn: "85395000", unit: "piece", rate: 280 },
    { name: "Batten Holder", hsn: "85395000", unit: "piece", rate: 35 },
    { name: "Ceiling Rose", hsn: "85395000", unit: "piece", rate: 25 },
    { name: "Panel Light Square", hsn: "85395000", unit: "piece", rate: 350 },
    { name: "Panel Light Round", hsn: "85395000", unit: "piece", rate: 320 }
  ],
  "Fans & Regulators": [
    { name: "Ceiling Fan", hsn: "84145100", unit: "piece", rate: 1200 },
    { name: "Exhaust Fan", hsn: "84145100", unit: "piece", rate: 850 },
    { name: "Fan Regulator Step Type", hsn: "85365090", unit: "piece", rate: 120 },
    { name: "Fan Regulator Dimmer", hsn: "85365090", unit: "piece", rate: 180 }
  ],
  "Distribution & Panels": [
    { name: "Distribution Board 4-Way", hsn: "85381010", unit: "piece", rate: 650 },
    { name: "Distribution Board 8-Way", hsn: "85381010", unit: "piece", rate: 1200 },
    { name: "Distribution Board 12-Way", hsn: "85381010", unit: "piece", rate: 1800 },
    { name: "Main Switch 63A", hsn: "85365090", unit: "piece", rate: 450 },
    { name: "Changeover Switch", hsn: "85365090", unit: "piece", rate: 850 }
  ],
  "Accessories": [
    { name: "PVC Conduit 20mm", hsn: "39172900", unit: "meter", rate: 28 },
    { name: "PVC Conduit 25mm", hsn: "39172900", unit: "meter", rate: 38 },
    { name: "Junction Box Small", hsn: "85389090", unit: "piece", rate: 45 },
    { name: "Junction Box Large", hsn: "85389090", unit: "piece", rate: 75 },
    { name: "Cable Ties (Pack)", hsn: "39269099", unit: "pack", rate: 80 },
    { name: "Electrical Tape", hsn: "39191099", unit: "piece", rate: 25 },
    { name: "Wire Connectors (Pack)", hsn: "85389090", unit: "pack", rate: 120 }
  ],
  "Labour Charges": [
    { name: "Wiring per Point", hsn: "998599", unit: "point", rate: 250 },
    { name: "Fan Installation", hsn: "998599", unit: "piece", rate: 200 },
    { name: "MCB Installation", hsn: "998599", unit: "piece", rate: 100 },
    { name: "DB Panel Installation", hsn: "998599", unit: "piece", rate: 800 },
    { name: "Testing & Commissioning", hsn: "998599", unit: "job", rate: 1500 }
  ]
};
// Get references to HTML elements
const invoiceNumberInput = document.getElementById('invoiceNumber');
const dispatchNumberInput = document.getElementById('dispatchNumber');
const invoiceDateInput = document.getElementById('invoiceDate');

const sellerNameInput = document.getElementById('sellerName');
const sellerAddressInput = document.getElementById('sellerAddress');
const sellerEmailInput = document.getElementById('sellerEmail');
const sellerPhoneInput = document.getElementById('sellerPhone');
const sellerGSTINInput = document.getElementById('sellerGSTIN');
const sellerStateInput = document.getElementById('sellerState');

const buyerNameInput = document.getElementById('buyerName');
const buyerAddressInput = document.getElementById('buyerAddress');
const buyerEmailInput = document.getElementById('buyerEmail');
const buyerPhoneInput = document.getElementById('buyerPhone');
const buyerGSTINInput = document.getElementById('buyerGSTIN');
const buyerStateInput = document.getElementById('buyerState');

// New: Dispatch & Delivery Details
const dispatchedFromAddressInput = document.getElementById('dispatchedFromAddress');
const shipToAddressInput = document.getElementById('shipToAddress');

const invoiceItemsBody = document.getElementById('invoiceItems');
const addItemBtn = document.getElementById('addItemBtn');

const subtotalSpan = document.getElementById('subtotal');
const totalCGSTSpan = document.getElementById('totalCGST');
const totalSGSTSpan = document.getElementById('totalSGST');
const totalIGSTSpan = document.getElementById('totalIGST');
const grandTotalSpan = document.getElementById('grandTotal');

// New: Bank Details
const bankNameInput = document.getElementById('bankName');
const accountNumberInput = document.getElementById('accountNumber');
const ifscCodeInput = document.getElementById('ifscCode');
const swiftCodeInput = document.getElementById('swiftCode');

// New: Declaration
const declarationTextInput = document.getElementById('declarationText');

const generateInvoiceBtn = document.getElementById('generateInvoiceBtn');
const printInvoiceBtn = document.getElementById('printInvoiceBtn');
const invoicePreviewDiv = document.getElementById('invoicePreview');

// --- Functions ---

// Set initial invoice date to today and default declaration text
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
    const dd = String(today.getDate()).padStart(2, '0');
    invoiceDateInput.value = `${yyyy}-${mm}-${dd}`;
    addItem(); // Add one initial item row
    updateTotals(); // Calculate initial totals
  // Populate initial dropdown
setTimeout(() => {
  const firstDropdown = document.querySelector('.item-dropdown');
  if (firstDropdown) populateItemDropdown(firstDropdown);
}, 100);

    // Set default declaration text
    declarationTextInput.value = `We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.`;
});

// Function to add a new item row
function addItem() {
    const newRow = document.createElement('tr');
    newRow.classList.add('invoice-item'); // Add a class for easy selection later

    newRow.innerHTML = `
        <td>
  <select class="item-dropdown" onchange="fillItemDetails(this)">
    <option value="">Select Item...</option>
  </select>
</td>
        <td><input type="text" class="item-hsn" placeholder="HSN/SAC"></td>
        <td><input type="number" class="item-quantity" value="1" min="0.01" step="0.01"></td>
        <td><input type="number" class="item-price" value="0.00" min="0" step="0.01"></td>
        <td><input type="number" class="item-gst-rate" value="18" min="0" step="0.01"></td>
        <td class="item-taxable-value">0.00</td>
        <td class="item-cgst">0.00</td>
        <td class="item-sgst">0.00</td>
        <td class="item-igst">0.00</td>
        <td class="item-total">0.00</td>
        <td><button class="remove-item-btn">Remove</button></td>
    `;
    invoiceItemsBody.appendChild(newRow);
// Populate the dropdown manually
const dropdown = newRow.querySelector('.item-dropdown');
populateItemDropdown(dropdown);   
    attachRowEventListeners(newRow); // Attach listeners to new row
    updateTotals(); // Recalculate totals after adding
}

// Function to calculate GST for a single item
function calculateGST(taxableValue, gstRate, sellerState, buyerState) {
    const gstAmount = (taxableValue * gstRate) / 100;
    let cgst = 0;
    let sgst = 0;
    let igst = 0;

    // Normalize states for comparison
 const sState = sellerState.toUpperCase().trim();
    const bState = buyerState.toUpperCase().trim();

    // Current location is Nagpur, Maharashtra, India.
    // Assuming sellerState is the origin for GST calculation.
    // If sellerState and buyerState are the same, it's intra-state.
    if (sState === bState && sState !== '') { // Intra-state supply
        cgst = gstAmount / 2;
        sgst = gstAmount / 2;
        igst = 0;
    } else { // Inter-state supply or state not defined (default to IGST)
        igst = gstAmount;
        cgst = 0;
        sgst = 0;
    }

    return { cgst, sgst, igst, totalGST: gstAmount };
}

// Function to update all totals
function updateTotals() {
    let subtotal = 0;
    let totalCGST = 0;
    let totalSGST = 0;
    let totalIGST = 0;

    const sellerState = sellerStateInput.value || '';
    const buyerState = buyerStateInput.value || '';

    const itemRows = document.querySelectorAll('.invoice-item');

    itemRows.forEach(row => {
        const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
        const price = parseFloat(row.querySelector('.item-price').value) || 0;
        const gstRate = parseFloat(row.querySelector('.item-gst-rate').value) || 0;

        const taxableValue = quantity * price;
        row.querySelector('.item-taxable-value').textContent = taxableValue.toFixed(2);

        const gstResult = calculateGST(taxableValue, gstRate, sellerState, buyerState);

        row.querySelector('.item-cgst').textContent = gstResult.cgst.toFixed(2);
        row.querySelector('.item-sgst').textContent = gstResult.sgst.toFixed(2);
        row.querySelector('.item-igst').textContent = gstResult.igst.toFixed(2);

        const itemTotal = taxableValue + gstResult.totalGST;
        row.querySelector('.item-total').textContent = itemTotal.toFixed(2);

        subtotal += taxableValue;
        totalCGST += gstResult.cgst;
        totalSGST += gstResult.sgst;
        totalIGST += gstResult.igst;
    });

    const grandTotal = subtotal + totalCGST + totalSGST + totalIGST;

    subtotalSpan.textContent = subtotal.toFixed(2);
    totalCGSTSpan.textContent = totalCGST.toFixed(2);
    totalSGSTSpan.textContent = totalSGST.toFixed(2);
    totalIGSTSpan.textContent = totalIGST.toFixed(2);
    grandTotalSpan.textContent = grandTotal.toFixed(2);
}

// Function to attach event listeners to a new row's inputs and remove button
function attachRowEventListeners(row) {
    row.querySelector('.item-quantity').addEventListener('input', updateTotals);
    row.querySelector('.item-price').addEventListener('input', updateTotals);
    row.querySelector('.item-gst-rate').addEventListener('input', updateTotals);
    row.querySelector('.remove-item-btn').addEventListener('click', (event) => {
        event.target.closest('.invoice-item').remove();
        updateTotals(); // Recalculate totals after removing
        if (document.querySelectorAll('.invoice-item').length === 0) {
            addItem(); // Ensure there's always at least one item row
        }
    });
}

// Function to generate and display the invoice HTML
function generateInvoice() {
    const itemRows = document.querySelectorAll('.invoice-item');
    let itemsHtml = '';
    // Check if CGST/SGST or IGST totals are greater than a very small number (to avoid float precision issues)
    let hasCGST = parseFloat(totalCGSTSpan.textContent) > 0.001 || parseFloat(totalSGSTSpan.textContent) > 0.001;
    let hasIGST = parseFloat(totalIGSTSpan.textContent) > 0.001;

    // Determine which GST columns to show in the generated invoice table header
    let cgstHeader = hasCGST ? '<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">CGST (₹)</th>' : '';
    let sgstHeader = hasCGST ? '<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">SGST (₹)</th>' : '';
    let igstHeader = hasIGST ? '<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">IGST (₹)</th>' : '';


    itemRows.forEach(row => {
        const description = row.querySelector('.item-description').value;
        const hsn = row.querySelector('.item-hsn').value;
        const quantity = row.querySelector('.item-quantity').value;
        const price = parseFloat(row.querySelector('.item-price').value).toFixed(2);
        const gstRate = row.querySelector('.item-gst-rate').value;
        const taxableValue = row.querySelector('.item-taxable-value').textContent;
        const cgst = row.querySelector('.item-cgst').textContent;
        const sgst = row.querySelector('.item-sgst').textContent;
        const igst = row.querySelector('.item-igst').textContent;
        const total = row.querySelector('.item-total').textContent;

        // Conditionally include cells based on GST type
        let cgstCell = hasCGST ? `<td style="padding: 8px; border: 1px solid #ddd;">${cgst}</td>` : '';
        let sgstCell = hasCGST ? `<td style="padding: 8px; border: 1px solid #ddd;">${sgst}</td>` : '';
        let igstCell = hasIGST ? `<td style="padding: 8px; border: 1px solid #ddd;">${igst}</td>` : '';

        itemsHtml += `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">${description}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${hsn}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${quantity}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${price}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${gstRate}%</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${taxableValue}</td>
                ${cgstCell}
                ${sgstCell}
                ${igstCell}
                <td style="padding: 8px; border: 1px solid #ddd;">${total}</td>
            </tr>
        `;
    });

    invoicePreviewDiv.innerHTML = `
        <h2 style="text-align: center; color: #333; margin-bottom: 20px; text-transform: uppercase;">TAX INVOICE</h2>
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 0.95rem;">
            <div>
                <p style="margin: 5px 0;"><strong>Invoice No.:</strong> ${invoiceNumberInput.value}</p>
                <p style="margin: 5px 0;"><strong>Dispatch No.:</strong> ${dispatchNumberInput.value}</p>
                <p style="margin: 5px 0;"><strong>Date:</strong> ${invoiceDateInput.value}</p>
            </div>
            <div>
                </div>
        </div>

        <div class="invoice-parties" style="display: flex; justify-content: space-between; margin-bottom: 20px; border: 1px solid #eee; padding: 10px;">
            <div class="seller-block" style="width: 48%;">
                <p style="font-weight: bold; margin-bottom: 5px; color: #555;">Seller Details:</p>
                <address style="font-style: normal; margin-top: 0; margin-bottom: 5px;">
                    <strong>${sellerNameInput.value}</strong><br>
                    ${sellerAddressInput.value.replace(/\n/g, '<br>')}<br>
                    Email: ${sellerEmailInput.value}<br>
                    Phone: ${sellerPhoneInput.value}<br>
                    GSTIN: ${sellerGSTINInput.value}<br>
                    State: ${sellerStateInput.value}
                </address>
            </div>
            <div class="buyer-block" style="width: 48%;">
                <p style="font-weight: bold; margin-bottom: 5px; color: #555;">Buyer Details (Bill To):</p>
                <address style="font-style: normal; margin-top: 0; margin-bottom: 5px;">
                    <strong>${buyerNameInput.value}</strong><br>
                    ${buyerAddressInput.value.replace(/\n/g, '<br>')}<br>
                    Email: ${buyerEmailInput.value}<br>
                    Phone: ${buyerPhoneInput.value}<br>
                    GSTIN: ${buyerGSTINInput.value}<br>
                    State: ${buyerStateInput.value}
                </address>
            </div>
        </div>

        <div class="dispatch-delivery-preview" style="margin-bottom: 20px; border: 1px solid #eee; padding: 10px; font-size: 0.95rem;">
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 48%;">
                    <p style="font-weight: bold; margin-bottom: 5px; color: #555;">Dispatched From:</p>
                    <address style="font-style: normal; margin-top: 0; margin-bottom: 5px;">
                        ${dispatchedFromAddressInput.value.replace(/\n/g, '<br>')}
                    </address>
                </div>
                <div style="width: 48%;">
                    <p style="font-weight: bold; margin-bottom: 5px; color: #555;">Ship To (Destination):</p>
                    <address style="font-style: normal; margin-top: 0; margin-bottom: 5px;">
                        ${shipToAddressInput.value.replace(/\n/g, '<br>')}
                    </address>
                </div>
            </div>
        </div>

        <table class="invoice-table" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Description</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">HSN/SAC</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Qty</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Rate (₹)</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">GST (%)</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Taxable Value (₹)</th>
                    ${cgstHeader}
                    ${sgstHeader}
                    ${igstHeader}
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Total (₹)</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHtml}
            </tbody>
        </table>

        <div class="invoice-totals" style="text-align: right; margin-top: 20px; font-size: 1rem;">
            <p style="margin: 5px 0;">Subtotal: ₹ ${subtotalSpan.textContent}</p>
            ${hasCGST ? `<p style="margin: 5px 0;">Total CGST: ₹ ${totalCGSTSpan.textContent}</p>` : ''}
            ${hasCGST ? `<p style="margin: 5px 0;">Total SGST: ₹ ${totalSGSTSpan.textContent}</p>` : ''}
            ${hasIGST ? `<p style="margin: 5px 0;">Total IGST: ₹ ${totalIGSTSpan.textContent}</p>` : ''}
            <p style="font-size: 1.2rem; font-weight: bold; border-top: 1px solid #ccc; padding-top: 10px; margin-top: 15px;">Grand Total: ₹ ${grandTotalSpan.textContent}</p>
        </div>

        <div class="bank-declaration-section" style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 0.9rem;">
            <div class="bank-details-preview" style="width: 48%; border: 1px solid #eee; padding: 10px;">
                <p style="font-weight: bold; margin-bottom: 5px; color: #555;">Bank Details:</p>
                <p style="margin: 3px 0;">Bank Name: ${bankNameInput.value || 'N/A'}</p>
                <p style="margin: 3px 0;">Account No.: ${accountNumberInput.value || 'N/A'}</p>
                <p style="margin: 3px 0;">IFSC Code: ${ifscCodeInput.value || 'N/A'}</p>
                ${swiftCodeInput.value ? `<p style="margin: 3px 0;">SWIFT Code: ${swiftCodeInput.value}</p>` : ''}
            </div>
            <div class="declaration-preview" style="width: 48%; border: 1px solid #eee; padding: 10px; text-align: justify;">
                <p style="font-weight: bold; margin-bottom: 5px; color: #555;">Declaration:</p>
                <p style="margin: 3px 0;">${declarationTextInput.value}</p>
                <p style="margin-top: 30px; text-align: right; font-weight: bold;">For ${sellerNameInput.value || 'Your Company'}</p>
                <p style="margin-top: 50px; text-align: right;">(Authorized Signatory)</p>
            </div>
        </div>
    `;
    invoicePreviewDiv.style.display = 'block'; // Show the preview
}

// --- Event Listeners ---

addItemBtn.addEventListener('click', addItem);
generateInvoiceBtn.addEventListener('click', generateInvoice);
printInvoiceBtn.addEventListener('click', () => {
    generateInvoice(); // Ensure the preview is updated before printing
    window.print();
});

// Event delegation for item rows to update totals on input changes
invoiceItemsBody.addEventListener('input', (event) => {
    if (event.target.classList.contains('item-quantity') ||
        event.target.classList.contains('item-price') ||
        event.target.classList.contains('item-gst-rate')) {
        updateTotals();
    }
});

// Listen for changes in seller/buyer state to re-calculate GST
sellerStateInput.addEventListener('input', updateTotals);
buyerStateInput.addEventListener('input', updateTotals);

// Note: For fields that don't affect calculations (like dispatch/ship to, bank, declaration),
// they only need to be read when `generateInvoice()` is called. No need for specific event listeners here
// unless you want real-time preview updates for these fields, which might be overkill for this app.

// Populate dropdown with electrical items
function populateItemDropdown(selectElement) {
  if (!selectElement) return;
  
  // Clear and add default option
  selectElement.innerHTML = '<option value="">Select Item...</option>';
  
  // Check if electricalItems exists
  if (typeof electricalItems === 'undefined') {
    console.error('electricalItems not loaded!');
    return;
  }
  
  // Add all items
  for (let category in electricalItems) {
    const optgroup = document.createElement('optgroup');
    optgroup.label = category;
    
    electricalItems[category].forEach(item => {
      const option = document.createElement('option');
      option.value = JSON.stringify(item);
      option.textContent = item.name;
      optgroup.appendChild(option);
    });
    
    selectElement.appendChild(optgroup);
  }
}
