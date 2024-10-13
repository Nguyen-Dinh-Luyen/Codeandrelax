document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");

    if (productId) {
        // Giả sử bạn có thể lấy thông tin sản phẩm từ một API hoặc cơ sở dữ liệu
        // Ví dụ: fetch(`/api/product/${productId}`) để lấy thông tin sản phẩm
        document.getElementById("checkout-info").innerHTML = `<h2>Bạn đang mua sản phẩm ID: ${productId}</h2>`;
    } else {
        document.getElementById("checkout-info").innerHTML = "<h2>Không tìm thấy sản phẩm</h2>";
    }
});


document.getElementById('pay-button').addEventListener('click', function() {
    // Lấy giá trị từ input họ tên, địa chỉ và phương thức thanh toán
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var paymentMethod = document.querySelector('input[name="payment-method"]:checked');

    // Kiểm tra nếu người dùng đã nhập đầy đủ thông tin
    if (name !== "" && address !== "" && paymentMethod !== null) {
        // Ẩn form thanh toán và hiện thông báo cảm ơn
        document.querySelector('.checkout-form').style.display = 'none';
        document.getElementById('thankyou-message').classList.remove('hidden');
    } else {
        alert("Vui lòng nhập đầy đủ thông tin và chọn phương thức thanh toán.");
    }
});