function ua() {

 const agent = navigator.userAgent || navigator.vendor || window.opera;

 const mobile = /android|iPhone|iPad|iPod|blackberry|windows phone|mobile/i.test(agent);

 if (mobile) {
   window.location.href = "/mobile.html";
 }
}

window.onload = ua;
