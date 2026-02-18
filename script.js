const toggleTrigger = document.getElementById("toggle-trigger");
const html = document.querySelector("html");

toggleTrigger.addEventListener("change", function () {
    if(toggleTrigger.checked){
        html.classList.add("dark");
    }else{
        html.classList.remove("dark");
    }
});

if (html.classList.contains('dark')) {
    toggleTrigger.checked = true;
} else {
    toggleTrigger.checked = false;
}