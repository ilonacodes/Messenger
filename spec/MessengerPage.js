function MessengerPage(id) {
    startApplication(id);
}

MessengerPage.prototype.enterText = function (query, text) {
    $(query).val(text);
};

MessengerPage.prototype.clickOn = function (query) {
    $(query).click();
};

MessengerPage.prototype.textOf = function (query) {
    return $(query).text();
};

MessengerPage.prototype.isHidden = function (query) {
    return $(query).hasClass("hidden");
};

MessengerPage.prototype.pressEnter = function (query) {
    var e = $.Event("keyup");
    e.which = 13;
    $(query).trigger(e);
};

MessengerPage.prototype.exists = function (query) {
    return $(query).length > 0;
};