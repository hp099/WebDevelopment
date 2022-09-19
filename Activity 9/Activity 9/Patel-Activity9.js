$(document).ready(function() {

    $("#image_list a").each(function () {

        // get the image URL and id for each image
        let URL = $(this).attr("href");
        let imgTxt = $(this).attr("id");

        // preload the image for each link
        let img = new Image();
        img.src = URL;

        // set up the event handlers for each link
        $(this).click(function(evt){
           $("#image").attr("src", URL);
           $("#title").text(imgTxt);

        // cancel the default action of each link
        evt.preventDefault();
        });
    });

    // move the focus to the second link
    $("li:eq(1)a").focus();

}); // end ready