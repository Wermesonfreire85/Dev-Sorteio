function generateNumber(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)
    const value = document.getElementById("value")

    const result = Math.floor(Math.random() * (max - min + 1) + min);
    value.innerHTML = `${result}`
}