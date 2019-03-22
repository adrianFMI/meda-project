"use strict"
console.log("cheking");
$(document).ready(function () {
    var close = $("#close");
    var imgs = ["thumbnail.jpg", "thumbnail1.jpg", "thumbnail2.jpg", "thumbnail3.jpg", "thumbnail4.jpg", "thumbnail5.jpg", "thumbnail6.jpg", "thumbnail7.jpg", "thumbnail8.jpg", "thumbnail9.jpg"];
    var bigImg = ["wall-animal-dog-pet.jpg","animal-corgi-dog.jpg","adorable-animal-baby.jpg","adorable-animal-beagle.jpg","adorable-animal-breed.jpg","adorable-animal-breed3.jpg","adorable-animal-breed4.jpg","adorable-animal-canine.jpg","adorable-animal-housky.jpg","animal-blur-canine.jpg"];
    var textImgs=["This is a dog watching something weird","A dog walking next to the water","A pug who join the dark side","A dog with big ears","A white dog","Two puppies","An orange dog watching someone","A dog with a lesh in the forest","A housky walking in the snow","This dog wants something and it is not money"];
    close.click(function () {
        lightbox.css("display", "none");
    });

    for (let i = 0; i < imgs.length; i++) {
        var imgId = "image" + i;
        //$("body").append("<img id='" + imgId + "' class='gallery' src='images/" + imgs[i] + "'>");
        
        $("#main").append(`<div class="col-sm-4 card"><img id='${imgId}' class='gallery' src='images/${imgs[i]}' alt='images'><p class='description'>${textImgs[i]}</p></div>`);
        
        
        $("#" + imgId).click(function () {
            $("#main").append("<div id='lightbox'></div>");
            var lightbox = $("#lightbox");
            lightbox.css("width", "100%");
            lightbox.css("height", "100%");
            lightbox.css("background-color", "rgba(0, 0 ,0 ,.75)");
            lightbox.css("display", "block");
            
            lightbox.append(`<img src='images/${bigImg[i]}' alt='images'>`);

            lightbox.click(function () {
                lightbox.remove();
            });
        });
    }
});
