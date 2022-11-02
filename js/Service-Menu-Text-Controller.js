
gcDescription = "<div class=\"service-description\">\n" +
    "                        <h2>\n" +
    "                            Whatever your need, we want to help!\n" +
    "                            We have experts in the trade ready to make your project happen!\n" +
    "                        </h2>\n" +
    "                        <h3 style='margin-bottom: 3vh;'>\n" +
    "                            We offer services such as:\n" +
    "                        </h3>\n" +
    "                        <ol style='padding-top: 20px;'>\n" +
    "                            <ul>Remodeling</ul>\n" +
    "                            <ul>Home Repair</ul>\n" +
    "                            <ul>New Additions</ul>\n" +
    "                            <ul>New Developments</ul>\n" +
    "                        </ol>\n" +
    "                    </div>";

electricalDescription = "<div class=\"service-description\">\n" +
    "                        <h2>\n" +
    "                            Your electrical needs are our priority!\n" +
    "                            We have trained and master electricians ready to serve you\n" +
    "                        </h2>\n" +
    "                        <h3 style='margin-bottom: 3vh;'>\n" +
    "                            Our electrical services:\n" +
    "                        </h3>\n" +
    "                        <ol style='padding-top: 20px;'>\n" +
    "                            <ul>Remodeling</ul>\n" +
    "                            <ul>Home Repair</ul>\n" +
    "                            <ul>New Additions</ul>\n" +
    "                            <ul>New Developments</ul>\n" +
    "                        </ol>\n" +
    "                    </div>";

plumbingDescription = "<div class=\"service-description\">\n" +
    "                        <h2>\n" +
    "                            Whatever your need, we want to help!\n" +
    "                            We have experts in the trade ready to make your project happen!\n" +
    "                        </h2>\n" +
    "                        <h3 style='margin-bottom: 3vh;'>\n" +
    "                            We offer services such as:\n" +
    "                        </h3>\n" +
    "                        <ol style='padding-top: 20px;'>\n" +
    "                            <ul>Remodeling</ul>\n" +
    "                            <ul>Home Repair</ul>\n" +
    "                            <ul>New Additions</ul>\n" +
    "                            <ul>New Developments</ul>\n" +
    "                        </ol>\n" +
    "                    </div>";

HVACDescription = "<div class=\"service-description\">\n" +
    "                        <h2>\n" +
    "                            Whatever your need, we want to help!\n" +
    "                            We have experts in the trade ready to make your project happen!\n" +
    "                        </h2>\n" +
    "                        <h3 style='margin-bottom: 3vh;'>\n" +
    "                            We offer services such as:\n" +
    "                        </h3>\n" +
    "                        <ol style='padding-top: 20px;'>\n" +
    "                            <ul>Remodeling</ul>\n" +
    "                            <ul>Home Repair</ul>\n" +
    "                            <ul>New Additions</ul>\n" +
    "                            <ul>New Developments</ul>\n" +
    "                        </ol>\n" +
    "                    </div>";

fiberCommunication = "<div class=\"service-description\">\n" +
    "                        <h2>\n" +
    "                            Whatever your need, we want to help!\n" +
    "                            We have experts in the trade ready to make your project happen!\n" +
    "                        </h2>\n" +
    "                        <h3 style='margin-bottom: 3vh;'>\n" +
    "                            We offer services such as:\n" +
    "                        </h3>\n" +
    "                        <ol style='padding-top: 20px;'>\n" +
    "                            <ul>Remodeling</ul>\n" +
    "                            <ul>Home Repair</ul>\n" +
    "                            <ul>New Additions</ul>\n" +
    "                            <ul>New Developments</ul>\n" +
    "                        </ol>\n" +
    "                    </div>";

paintingDescription = "<div class=\"service-description\">\n" +
    "                        <h2>\n" +
    "                            Whatever your need, we want to help!\n" +
    "                            We have experts in the trade ready to make your project happen!\n" +
    "                        </h2>\n" +
    "                        <h3 style='margin-bottom: 3vh;'>\n" +
    "                            We offer services such as:\n" +
    "                        </h3>\n" +
    "                        <ol style='padding-top: 20px;'>\n" +
    "                            <ul>Remodeling</ul>\n" +
    "                            <ul>Home Repair</ul>\n" +
    "                            <ul>New Additions</ul>\n" +
    "                            <ul>New Developments</ul>\n" +
    "                        </ol>\n" +
    "                    </div>";

$(function (){
// general contracting link

$("#gc-link").on("mouseenter",

    // when the element is hovered
    function (){
        $("#menu-content-container").html(gcDescription);
        $().animate({
           opacity: '0.2' 
        });
    });

$("#gc-link").on("mouseleave",
    // when the element is not hovered
    function (){
        $("#menu-content-container").empty();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    });


// electrical link

$("#electrical-link").on("mouseenter",

    // when the element is hovered
    function (){
        $("#menu-content-container").html(electricalDescription);
    });

$("#electrical-link").on("mouseleave",
    // when the element is not hovered
    function (){
        $("#menu-content-container").empty();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    });

// plumbing link

$("#plumbing-link").on("mouseenter",

    // when the element is hovered
    function (){
        $("#menu-content-container").html(plumbingDescription);
    });

$("#plumbing-link").on("mouseleave",
    // when the element is not hovered
    function (){
        $("#menu-content-container").empty();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    });

// Heating and Air Link

$("#HVAC-link").on("mouseenter",

    // when the element is hovered
    function (){
        $("#menu-content-container").html(HVACDescription);
    });

$("#HVAC-link").on("mouseleave",
    // when the element is not hovered
    function (){
        $("#menu-content-container").empty();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    });

// Fiber and Controls Link

$("#Fiber-link").on("mouseenter",

    // when the element is hovered
    function (){
        $("#menu-content-container").html(fiberCommunication);
    });

$("#Fiber-link").on("mouseleave",
    // when the element is not hovered
    function (){
        $("#menu-content-container").empty();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    });

// Painting Link

$("#Painting-link").on("mouseenter",

    // when the element is hovered
    function (){
        $("#menu-content-container").html(paintingDescription);
    });

$("#Painting-link").on("mouseleave",
    // when the element is not hovered
    function (){
        $("#menu-content-container").empty();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    });
});


