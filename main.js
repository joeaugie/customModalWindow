(function(){
  let modalLinks = document.getElementsByClassName("modal-link");
  let modalCloseButtons = document.getElementsByClassName("modal-close");

  let showModal = (e) => {
    // prevent default behavior
    e.preventDefault();

    // get corresponding modal and toggle the show class
    let href = e.target.getAttribute("href");
    let targetId = href.slice(1);
    let targetModal = document.getElementById(targetId);
    targetModal.classList.add("show");
  }

  let hideModal = (e) => {
    e.target.closest(".modal").classList.remove('show');
  }

  // append to all modals
  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', showModal, false);
  }
  for (var i = 0; i < modalCloseButtons.length; i++) {
    modalCloseButtons[i].addEventListener('click', hideModal, false);
  }
})();
