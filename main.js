
$('document').ready(function() {
 

//CAROUSEL INITIALIZES
$('.carousel').carousel({
    interval: 2000
});


//TESTIMONIAL SECTION

var textArray = ["If you could imagine a perfect person to work with, they couldn't compare with how great it is to work with Luke Engle. He is knowledgeable, fun to work with, and helpful. His passionate about web development and technology helps him write innovative code which he is  always willing to explain with ease. He is attentive, detail-oriented, and passionate about web development. His code is creative, communication unparalleled, and motivation inspiring. His dedication helps motivate the team and anyone who works with Luke is lucky. -Andrea", "testimonials, Luke is a friendly, talkative, and energetic. General Assembly is his second coding course. He took another month long challenging bootcamp learning how to code in Javascript and Mocha framework. -Yi", 'Luke provides amazing insight and tackles complex problems with a positive outlook. His constructive approach to problem solving results in not only effective solutions but also a strong foundation to build upon when confronted with more advanced technologies. It has been a pleasure to get to know him not only as a developer but also as a person. -Craig ']


var box = $('#textBox');
var i = 0;

function timedText(arr) {
    var iterator = function (index) {
        if (i >= arr.length) {
            i = 0;
        }
        box.text(arr[i]);
        setTimeout(function () {
            iterator(++i);
        }, 8000);
    };

    iterator(0);
};


		
timedText(textArray)
console.log(box)


//END OF TESTIMONIAL FUNCTION


   //INITIALIZES SMOOTH SCROLL
    $('body').scrollspy({target: ".navbar", offset: 50});   

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
     // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });

    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });


    


})


