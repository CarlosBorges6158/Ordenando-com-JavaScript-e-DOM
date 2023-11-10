function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  
  function bubble_sort(arr) {
    const n = arr.length;
    let swapped;
    
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);
  }
  
  function selection_sort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      
      if (minIndex !== i) {
        swap(arr, i, minIndex);
      }
    }
  }
  
  function quick_sort(arr, start, end) {
    if (start < end) {
      const pivotIndex = partition(arr, start, end);
      quick_sort(arr, start, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, end);
    }
  }
  
  function partition(arr, start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;
  
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
  
    swap(arr, pivotIndex, end);
    return pivotIndex;
  }
  
  function add() {
    const inputElement = document.getElementById("valor");
    const listElement = document.getElementById("valores");
  
    if (inputElement.value.trim() === "") {
      alert("Por favor, insira um valor antes de adicionar à lista.");
      return;
    }
  
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(inputElement.value));
    listElement.appendChild(listItem);
    inputElement.value = "";
  }
  
  function ordenar() {
    const listElement = document.getElementById("valores");
    const selectElement = document.getElementById("algoritmo");
    const valuesArray = Array.from(listElement.children).map(item => parseInt(eval(item.innerHTML)));
    const selectedAlgorithm = selectElement.options[selectElement.selectedIndex].value;
  
    if (selectedAlgorithm === "bubbleSort") {
      bubble_sort(valuesArray);
    } else if (selectedAlgorithm === "selectionSort") {
      selection_sort(valuesArray);
    } else if (selectedAlgorithm === "quickSort") {
      quick_sort(valuesArray, 0, valuesArray.length - 1);
    }
  
    const sortedListItems = valuesArray.map(value => {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(value));
      return listItem;
    });
  
    listElement.innerHTML = "";
    sortedListItems.forEach(item => listElement.appendChild(item));
  }
  
  function misturar() {
    const listElement = document.getElementById("valores");
    const valuesArray = Array.from(listElement.children).map(item => parseInt(eval(item.innerHTML)));
    shuffle(valuesArray);
  
    const shuffledListItems = valuesArray.map(value => {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(value));
      return listItem;
    });
  
    listElement.innerHTML = "";
    shuffledListItems.forEach(item => listElement.appendChild(item));
  }
  