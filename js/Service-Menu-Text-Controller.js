
gcDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2 id='service-menu-text-header'>General Contracting</h2>\n" +
    "    <p>We offer a wide variety of contracting services, from home remodels to small projects we have you covered.</p>\n" +
    "    <button class='redButton' style='margin: 1vw;' onclick=\"parent.location='https://clienthub.getjobber.com/client_hubs/3403509f-5b25-49d4-92f2-41ef1eeeba5d/public/work_request/new'\">Get a Quote</button>" +
    "    <button onclick=\"parent.location='./Contracting.html'\" class='redButton' style='margin: 1vw;'>Learn More</button> " +
    "</div>";

electricalDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2 id='service-menu-text-header'>Electrical</h2>\n" +
    "    <p>With professionals in the electrical industry, we guarantee the utmost quality of service." +
    "    Whether you have a small residential electrical project or a commercial project, we are here to get the job done.</p>\n" +
    "    <button class='redButton' style='margin: 1vw;' onclick=\"parent.location='https://clienthub.getjobber.com/client_hubs/3403509f-5b25-49d4-92f2-41ef1eeeba5d/public/work_request/new'\">Get a Quote</button>" +
    "    <button onclick=\"parent.location='./Electrical.html'\" class='redButton' style='margin: 1vw;'>Learn More</button> " +
    "</div>";

plumbingDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2 id='service-menu-text-header'>Plumbing</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "    <button class='redButton' style='margin: 1vw;' onclick=\"parent.location='https://clienthub.getjobber.com/client_hubs/3403509f-5b25-49d4-92f2-41ef1eeeba5d/public/work_request/new'\">Get a Quote</button>" +
    "    <button onclick=\"parent.location='./Plumbing.html'\" class='redButton' style='margin: 1vw;'>Learn More</button> " +
    "</div>";

HVACDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2 id='service-menu-text-header'>Heating & Air</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "    <button class='redButton' style='margin: 1vw;' onclick=\"parent.location='https://clienthub.getjobber.com/client_hubs/3403509f-5b25-49d4-92f2-41ef1eeeba5d/public/work_request/new'\">Get a Quote</button>" +
    "    <button onclick=\"parent.location='./HVAC.html'\" class='redButton' style='margin: 1vw;'>Learn More</button> " +
    "</div>";

fiberCommunication = "<div id='service-menu-text-content'>\n" +
    "    <h2 id='service-menu-text-header'>General Contracting</h2>\n" +
    "    <p>Whatever your project we would love to help! we offer a variety of services including:</p>\n" +
    "    <button class='redButton' style='margin: 1vw;' onclick=\"parent.location='https://clienthub.getjobber.com/client_hubs/3403509f-5b25-49d4-92f2-41ef1eeeba5d/public/work_request/new'\">Get a Quote</button>" +
    "    <button onclick=\"parent.location='./Fiber.html'\" class='redButton' style='margin: 1vw;'>Learn More</button> " +
    "</div>";

paintingDescription = "<div id='service-menu-text-content'>\n" +
    "    <h2 id='service-menu-text-header'>Painting</h2>\n" +
    "    <p>New renovation? Exterior paint job? Or maybe you want to change the colors in your house?" +
    "    We have painters ready to help make your space pop with color!</p>\n" +
    "    <button class='redButton' style='margin: 1vw;' onclick=\"parent.location='https://clienthub.getjobber.com/client_hubs/3403509f-5b25-49d4-92f2-41ef1eeeba5d/public/work_request/new'\">Get a Quote</button>" +
    "    <button onclick=\"parent.location='./Painting.html'\" class='redButton' style='margin: 1vw;'>Learn More</button> " +
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

    $("#service-menu-container").hover(
        // when the element is hovered
        function () {

        },

        // when the element is not hovered
        function (){
            $("#menu-content-container").find( "div" ).last().remove();
            $("#menu-content-container").html($("<div class=\"service-background-pattern\"></div>"));
        }
    );
}

