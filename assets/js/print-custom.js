function printPage() {
  // 1. Find all details elements
  const allDetails = document.querySelectorAll('details');
  
  // 2. Store their current state so we can restore it later
  const detailStates = [];
  allDetails.forEach(detail => {
    detailStates.push(detail.open);
    detail.open = true; // Force open for print
  });

  // 3. Trigger the print dialog
  window.print();

  // 4. Restore original states after a short delay (so the print process catches the open state)
  // Note: 'onafterprint' is cleaner but this timeout is a robust fallback
  setTimeout(() => {
    allDetails.forEach((detail, index) => {
      detail.open = detailStates[index];
    });
  }, 500);
}

// Optional: specific listener for Cmd+P / Ctrl+P users
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('details').forEach(d => d.open = true);
});