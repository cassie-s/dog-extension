var button = document.getElementById("randomDog");

button.addEventListener("click", function(){
    chrome.tabs.create({"url": "https://cassie-s.github.io/random-dog"})
})