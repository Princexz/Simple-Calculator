const btnValue = document.querySelectorAll("button")
const screenValue = document.querySelector(".screen")

  btnValue.forEach(btnValue => btnValue.addEventListener("click", (e)=>{
    e.preventDefault()
    btnValue = e.target.innerHTML
    // screenValue.value = btnValue

    if(btnValue === "C"){
      screenValue.value = ""
    } else if(btnValue === "="){
      // let answer = eval(screenValue.value)
      // screenValue.value = answer
      screenValue.value = eval(screenValue.value)
    }else{
      return screenValue.value += btnValue
    }
  }))
  