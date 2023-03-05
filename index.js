const hamburger = $('.hamburg');
const dropdown = $('.dropdown-btn');



dropdown.click((event)=>{
    $('.dropdown-menu').slideToggle();
});

hamburger.click((event)=>{
    $('.social-icons').slideToggle();
    $('.navmenu').slideToggle();
});

let timeoutid = null;

$('.blr-btn').on('mouseenter', function() {
    $('.background-img').addClass('blur');
    
    if(activeIndex === 0){
        function changeText(){
            $('.blr-btn').html(
                '<a href="">PEOPLE</a> <p>click to view more</p>'
                );
          }
    }else if(activeIndex === 1){
        function changeText(){
            $('.blr-btn').html('<a href="">US & CANADA TRAVEL</a> <p>click to view more</p>');
          }
    }else if(activeIndex === 2){
        function changeText(){
            $('.blr-btn').html('<a href="">JAPAN TRAVEL</a> <p>click to view more</p>');
          }
    }else if(activeIndex === 3){
        function changeText(){
            $('.blr-btn').html('<a href="">VIDEOS</a> <p>click to view more</p>');
          }
    }
      timeoutid = setTimeout(changeText, 300);
  });
  
$('.blr-btn').on('mouseleave', function() {
    $('.background-img').removeClass('blur');
    $('.blr-btn').empty('');
      
    if(timeoutid){
        clearTimeout(timeoutid);
    }
});
      
let activeIndex = 0;

$('.btn-next').click((event)=>{
    const nextIndex = activeIndex + 1 <= 3? activeIndex + 1 : 0;
    const currentSlide = $('[data-index='+ activeIndex + ']');
    const nextSlide = $('[data-index='+ nextIndex + "]");

    currentSlide.data('status', "inactive");
    nextSlide.data('status', "active");

    currentSlide.css('display', 'none');
    nextSlide.css('display', 'flex');
    nextSlide.css('flex-direction', 'column');
    activeIndex = nextIndex;
});

$('.btn-prev').click((event)=>{
    const nextIndex = activeIndex - 1 >= 0? activeIndex - 1 : 3;
    const currentSlide = $('[data-index='+ activeIndex + ']');
    const nextSlide = $('[data-index='+ nextIndex + "]");

    currentSlide.data('status', "inactive");
    nextSlide.data('status', "active");

    currentSlide.css('display', 'none');
    nextSlide.css('display', 'flex');
    nextSlide.css('flex-direction', 'column');
    activeIndex = nextIndex;
});