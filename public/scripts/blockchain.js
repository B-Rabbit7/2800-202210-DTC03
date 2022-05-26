function showDefine() {
    var divDefinition = document.getElementById('definitiondiv');
    console.log(divDefinition)
    var pDefinition = document.getElementById('defineBlockchain')
    console.log(pDefinition)
    var open = false
    divDefinition.addEventListener('click', function () {
        if (open) {
            divDefinition.className = 'testing';
            divDefinition.id = 'clicked';
            pDefinition.className = 'pdefinitionAnimation';
            $(".pdefinitionAnimation").show();
            $("#pointIcon").hide();


        } else {
            divDefinition.className = 'iconify blockchainicon2';
        }
    })
    open = !open;

}

function hideDefine() {
    console.log("this code ran")


}




function setup() {
    console.log("this went")
    $(".defineBlockchain").hide();
    // $('.button-container-1').hide();
    showDefine();
    $(".testing").click(hideDefine)
}
$(document).ready(setup)

// =========== intersection observer ==========//

// const table = document.querySelector('.table')
const bars = document.querySelectorAll('.bar')
const options = {
    root: null,
    threshhold: 0,
    // rootMargin: "-70px"

}
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry.isIntersecting)
        console.log(entry.target)
        if (entry.isIntersecting) {
            console.log("intersected")
            //================= Sent Bar Section =====================
            if (entry.target.classList.contains('sent1')) {
                console.log("sent1 just ran")
                entry.target.classList.add("inter1")
            }
            if (entry.target.classList.contains('sent2')) {
                console.log("sent2 just ran")
                entry.target.classList.add("inter1")

            }
            if (entry.target.classList.contains('sent3')) {
                console.log("sent3 just ran")
                entry.target.classList.add("inter1")

            }
            if (entry.target.classList.contains('sent4')) {
                console.log("sent4 just ran")
                entry.target.classList.add("inter1")
                observer.unobserve(entry.target)

            }
             //================= Paid Bar Section =====================
            if(entry.target.classList.contains('paid1')){
                console.log("paid1 ran")
                entry.target.classList.add('inter1')
                observer.unobserve(entry.target)
            }
            if(entry.target.classList.contains('paid2')){
                console.log("paid2 ran")
                entry.target.classList.add('inter1')
                observer.unobserve(entry.target)
            }
            if(entry.target.classList.contains('paid3')){
                console.log("paid3 ran")
                entry.target.classList.add('inter1')
                observer.unobserve(entry.target)
            }
            if (entry.target.classList.contains('paid4')) {
                console.log("sent4 just ran")
                entry.target.classList.add("inter1")
                observer.unobserve(entry.target)

            }


        }


    });
}, options);
bars.forEach(bar => {
    observer.observe(bar)
})

// =====================  Card Flip Animation Class toggle  ========================
const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const card1 = document.querySelector(".card1__inner");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card2__inner");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector(".card3__inner");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});