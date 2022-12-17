"use strict";


let iconObserver;

function startIconRemover() {
  console.log("Looking for icons to remove...");
  document.querySelectorAll("._3GlyB.sordb.dwbWf").forEach((icon) => {
    icon.remove();
  });
  document.querySelectorAll("._1-FMR.message-in.focusable-list-item._7GVCb").forEach((icon) => {
    icon.style.paddingRight = "57px";
    icon.style.paddingLeft = "57px";
  });


  if (iconObserver === undefined) {
    iconObserver = new MutationObserver((mutations) => {
      startIconRemover();
    });

    iconObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}


window.addEventListener("load", startIconRemover);
startIconRemover();
