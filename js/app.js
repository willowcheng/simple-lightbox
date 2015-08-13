/**
 * Created by willowcheng on 15-08-13.
 */
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
//Add overlay
$("body").append($overlay);
    //An image
    //A caption

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var href = $(this).attr("href");
    $overlay.show();
    //Show the overlay.
    //Update overlay with the image linked in the link
    //Get child's alt attribute and set caption
});


//When overlay is clicked
    //Hide the overlay