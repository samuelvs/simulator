function getResult() {
    title = document.getElementById("title").value;
    finalResult = document.getElementById("nf").value;
    objetiveExam = (finalResult * 10 - title * 2) / 8;
    finalResult = parseInt(objetiveExam / 2);
    tag = '';

    if (finalResult < 1) return;

    data = Array.from(document.getElementsByClassName("value"));
    if (data.length > 0) {
        data = data.map(el => parseInt(el.textContent));
        if (data.find(el => el == finalResult) !== undefined) return;
        data = [ ...data, finalResult ].sort((a,b) => b - a);
        data.forEach(el => {
            tag += '<h1 class="w3-xlarge value">' + el + '</h1> <hr class="3-opacity"></hr>';
        });
    } else {
        tag = '<h1 class="w3-xlarge value">' + finalResult + '</h1> <hr class="3-opacity"></hr>';
    }

    document.getElementsByClassName("results")[0].innerHTML = tag;
}

function cleanHistory(){
    document.getElementsByClassName("results")[0].innerHTML = '';
}

