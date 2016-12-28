function logIn() {
    var userNickname = $(".input-nickname").val();
    $(".my-nickname").text(userNickname);

    $(".log-in-form").addClass("hidden");
    $(".start-conversation").removeClass("hidden");
}

function startApplication(id) {
    $(id).html("" +
        "<div class=\"log-in-form\">" +
        "   <input type=\"text\" class=\"input-nickname\"/>" +
        "   <button class=\"log-in\">Log in</button>" +
        "</div>" +
        "" +
        "<div class=\"my-nickname\"></div>" +
        "<div class=\"start-conversation hidden\"></div>");
    main();
}

function main() {
    $(".log-in").on("click", function () {
        logIn();
    });

    $(".input-nickname").on("keyup", function (event) {
        if (event.which === 13)
            logIn();
    });
}

