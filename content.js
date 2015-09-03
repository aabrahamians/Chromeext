
window.onload = function () {
  console.log("hi");
  console.log(document);
  // $("input").attr("type", "text");
  document.getElementsByTagName("input")[0].setAttribute("type", "text");
};