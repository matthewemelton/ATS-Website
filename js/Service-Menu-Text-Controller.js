
gcDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2>General Contracting</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "        <ul>New Home Construction</ul>\n" +
    "        <ul>Remodels</ul>\n" +
    "        <ul>Construction Planning</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "</div>";

electricalDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2>Electrical</h2>\n" +
    "    <p>We offer both residential and commercial electrical services. " +
    "       We have master electricians who have been in the trade for over 20 years!" +
    "       Our services include:" +
    "    </p>\n" +
    "        <ul>New Home Construction</ul>\n" +
    "        <ul>Deck Construction</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "</div>";

plumbingDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2>Plumbing</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "        <ul>New Home Construction</ul>\n" +
    "        <ul>Deck Construction</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "</div>";

HVACDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2>Heating & Air Conditioning</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "        <ul>New Home Construction</ul>\n" +
    "        <ul>Deck Construction</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "</div>";

fiberCommunication = "<div id='service-menu-text-content'>\n" +
    "    <h2>Fiber & Communications</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "        <ul>New Home Construction</ul>\n" +
    "        <ul>Deck Construction</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "</div>";

paintingDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2>Painting</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "        <ul>New Home Construction</ul>\n" +
    "        <ul>Deck Construction</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "        <ul>Another Service Here</ul>\n" +
    "</div>";

if(screen.width > 800) {
    $("#gc-link").hover(
        // when the element is hovered
        function () {
            $("#menu-content-container").html(gcDescription);
        },

        // // when the element is not hovered
        // function (){
        //     $("#menu-content-container").find( "div" ).last().remove();
        //     $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
        // }
    );

    $("#electrical-link").hover(
        // when the element is hovered
        function () {
            $("#menu-content-container").html(electricalDescription);
        },

        // // when the element is not hovered
        // function (){
        //     $("#menu-content-container").find( "div" ).last().remove();
        //     $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
        // }
    );

    $("#plumbing-link").hover(
        // when the element is hovered
        function () {
            $("#menu-content-container").html(plumbingDescription);
        },

        // // when the element is not hovered
        // function (){
        //     $("#menu-content-container").find( "div" ).last().remove();
        //     $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
        // }
    );

    $("#HVAC-link").hover(
        // when the element is hovered
        function () {
            $("#menu-content-container").html(HVACDescription);
        },

        // // when the element is not hovered
        // function (){
        //     $("#menu-content-container").find( "div" ).last().remove();
        //     $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
        // }
    );

    $("#Fiber-link").hover(
        // when the element is hovered
        function () {
            $("#menu-content-container").html(fiberCommunication);
        },

        // // when the element is not hovered
        // function (){
        //     $("#menu-content-container").find( "div" ).last().remove();
        //     $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
        // }
    );

    $("#Painting-link").hover(
        // when the element is hovered
        function () {
            $("#menu-content-container").html(paintingDescription);
        },

        // when the element is not hovered
        // function (){
        //     $("#menu-content-container").find( "div" ).last().remove();
        //     $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
        // }
    );
}

