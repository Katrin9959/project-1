

(() => {
    const refs2 = {
      openModa2lBtn: document.querySelector("[data-modal2-open]"),
      closeModa2lBtn: document.querySelector("[data-modal2-close]"),
      modal2: document.querySelector("[data-modal2]"),
    };
  
    refs2.openModa2lBtn.addEventListener("click", toggleModal2);
    refs2.closeModa2lBtn.addEventListener("click", toggleModal2);
  
    function toggleModal2() {
      console.log(refs2);
      refs2.modal2.classList.toggle("is-hidden2");
    }
    
  })();