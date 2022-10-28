
gcDescription = "<div>\n" +
    "    <h2>General Contracting</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "    <li>\n" +
    "        <ul>New Home Construction</ul>\n" +
    "        <ul>Deck Construction</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "    </li>\n" +
    "</div>";

electricalDescription = "electrical";

plumbingDescription = "Plumbing";

HVACDescription = "Heating & Air";

fiberCommunication = "fiber";

paintingDescription = "painting";

$("#gc-link").hover(

    // when the element is hovered
    function (){
        $("#menu-content-container").html(gcDescription);
    },

    // when the element is not hovered
    function (){
        $("#menu-content-container").find( "div" ).last().remove();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    }
);

$("#electrical-link").hover(

    // when the element is hovered
    function (){
        $("#menu-content-container").text(electricalDescription);
    },

    // when the element is not hovered
    function (){
        $("#menu-content-container").find( "div" ).last().remove();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    }
);

$("#plumbing-link").hover(

    // when the element is hovered
    function (){
        $("#menu-content-container").text(plumbingDescription);
    },

    // when the element is not hovered
    function (){
        $("#menu-content-container").find( "div" ).last().remove();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    }
);

$("#HVAC-link").hover(

    // when the element is hovered
    function (){
        $("#menu-content-container").text(HVACDescription);
    },

    // when the element is not hovered
    function (){
        $("#menu-content-container").find( "div" ).last().remove();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    }
);

$("#Fiber-link").hover(

    // when the element is hovered
    function (){
        $("#menu-content-container").text(fiberCommunication);
    },

    // when the element is not hovered
    function (){
        $("#menu-content-container").find( "div" ).last().remove();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    }
);

$("#Painting-link").hover(

    // when the element is hovered
    function (){
        $("#menu-content-container").text(paintingDescription);
    },

    // when the element is not hovered
    function (){
        $("#menu-content-container").find( "div" ).last().remove();
        $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
    }
);

