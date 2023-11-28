let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let input = document.getElementById("input").value


    input = input.split(" ")
    let count = 0
    let count2 = 0
    for (let item of input) {
        if (item == "()") {
            count++;
        }

        if (item === "(") {
            count2++;
        }

        if (item == ")") {
            count2++;
        }
    }

    let result = parseInt(count2 - count)


    alert(result)

    document.getElementById("ochiq").innerText = count2
    document.getElementById("yopiq").innerText = count
})