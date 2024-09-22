<script>
    function redirectToPayment(productId) {
      const paymentUrl = 'https://example.com/payment?product=${productId}';
        window.location.href = paymentUrl;
    }
        
    document.getElementById('buy1').addEventListener('click', function() {
        redirectToPayment('multistrand-wire-nexa-series');
    });

    document.getElementById('buy2').addEventListener('click', function() {
        redirectToPayment('submersible-cables');
    });

    // document.getElementById('buy3').addEventListener('click', function() {}
</script>
