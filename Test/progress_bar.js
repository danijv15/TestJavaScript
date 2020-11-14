var x = 0;

function load() {
    if (x == 0) {
        x = 1;
        var quantity = document.getElementById("quantity").value;
        var goal = document.getElementById("goal").value;
        var loadPercentage = (quantity * 100) / goal;
        var element = document.getElementById("bar");
        var width = 0;
        var id = setInterval(progress, 10);

        function progress() {
            if (width >= loadPercentage) {
                clearInterval(id)
                x = 0; 
            } else {
                width++;
                element.style.width = width + "%";
                element.innerHTML = width + "%";
            }
        }
    }
}


function hide_show() {
    var x = document.getElementById("progress");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 