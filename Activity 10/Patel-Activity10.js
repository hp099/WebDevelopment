$(document).ready(function() {


    // preload the image for each link
    $("#image_list a").each(function (){
        let image = new Image();
        image.src = $(this).attr("href");
    });

    // set up the event handlers for each link
    $("#image_list a").click(function (evt){

        // get the image URL and caption for each image and animate the caption
        let url = $(this).attr("href");
        let caption = $(this).attr("title");

        $("#image").fadeOut(3000, function (){
            $("#image").attr("src", url).fadeIn(3000);
        });

        $("#caption").fadeOut(3000, function (){
            $("#caption").text(caption).fadeIn(3000);
            $(this).text(caption).animate({fontSize: "2.0em"},3000);
        });

        // cancel the default action of each link
        evt.preventDefault();
    });

    // move the focus to the first link
    $("li:first-child a").focus();

}); // end ready