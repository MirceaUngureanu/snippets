javascript: (function() {
  var xRaystyles = "<style id='pageCSSXRay'>*{background:#000!important;color:#0f0!important;outline:solid #f00 1px!important;}</style>";
  var pageCSSXRay = document.querySelector("#pageCSSXRay");

  if (pageCSSXRay) {
    document.body.removeChild(pageCSSXRay);
  } else {
    document.body.innerHTML += xRaystyles;
  }
})();