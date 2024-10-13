const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})


document.addEventListener("DOMContentLoaded", function() {
  const buyButtons = document.querySelectorAll(".buy-button");

  buyButtons.forEach(button => {
      button.addEventListener("click", function(event) {
          const productId = this.parentElement.getAttribute("data-id");
          // Chuyển hướng sang trang thanh toán với productId
          window.location.href = `checkout.html?productId=${productId}`;
      });
  });
});
