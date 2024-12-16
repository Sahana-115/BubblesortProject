function renderArray(arr) {
    arrayContainer.innerHTML = "";
    arr.forEach((value) => {
        const numberElement = document.createElement("span");
        numberElement.classList.add("number");
        numberElement.textContent = value;
        arrayContainer.appendChild(numberElement);
    });
}

async function bubbleSort(arr) {
    let numbers = document.querySelectorAll(".number");

    const delayTime = 1000; 

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            numbers[j + 1].classList.add("highlight");

            
            await new Promise(resolve => setTimeout(resolve, delayTime));

        
            if (arr[j] > arr[j + 1]) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        
                numbers[j].textContent = arr[j];
                numbers[j + 1].textContent = arr[j + 1];
            }

            
            numbers[j].classList.remove("highlight");
            numbers[j + 1].classList.remove("highlight");
        }
    }
}
function startBubbleSort() {
    const input = arrayInput.value.trim();
    
    if (input === "") {
        alert("Please enter numbers!");
        return;
    }

    const array = input.split(",").map(Number).filter(num => !isNaN(num));
    
    if (array.length < 2) {
        alert("Please enter at least two numbers to sort.");
        return;
    }

    renderArray(array);
    bubbleSort(array);
}