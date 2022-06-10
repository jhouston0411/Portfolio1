document.addEventListener("click", (event) => {

  const isdropdown = event.target.matches(".data-btn");
  if (!isdropdown && event.target.closest(".dropdown") != null)
    return


  let currentDropdown
  if (isdropdown) {
    currentDropdown = event.target.closest(".dropdown")
    currentDropdown.classList.toggle("active");

  }

  document.querySelectorAll(".dropdown.active").forEach(dropdown => {
    if (currentDropdown === dropdown)
      return;
    else
      dropdown.classList.remove("active")

  })
})

document.addEventListener("click", (event) =>{

  const botisdropdown = event.target.matches(".bot-btn");
  if(!botisdropdown && event.target.closest(".bot-dropdown") != null)
    return

  let currentDropdownBot
  if(botisdropdown){
    currentDropdownBot = event.target.closest(".bot-dropdown")
    currentDropdownBot.classList.toggle("botActive")
  }

  document.querySelectorAll(".bot-dropdown.botActive").forEach(botdropdown =>{
    if(currentDropdownBot === botdropdown)
     return
    else
      botdropdown.classList.remove("botActive")
  })
})
