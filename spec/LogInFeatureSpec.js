describe("User identifies themselves in the system", function () {
    it("renders user's nickname after successful Log in", function () {
        var nickname = "Anna";
        var messenger = new MessengerPage("#messenger");

        messenger.enterText(".input-nickname", nickname);
        messenger.clickOn(".log-in");

        expect(messenger.textOf(".my-nickname")).toEqual(nickname);
    });

    it("renders other user's nickname after successful Log in", function () {
        var nickname = "Bob";
        var messenger = new MessengerPage("#messenger");

        messenger.enterText(".input-nickname", nickname);
        messenger.clickOn(".log-in");

        expect(messenger.textOf(".my-nickname")).toEqual(nickname);
    });

    it("does not show Log in form after successful Log in", function () {
        var nickname = "Emma";
        var messenger = new MessengerPage("#messenger");

        messenger.enterText(".input-nickname", nickname);
        messenger.clickOn(".log-in");

        expect(messenger.isHidden(".log-in-form")).toEqual(true);
    });

    it("allows to Log in using Enter key", function () {
        var nickname = "Alex";
        var messenger = new MessengerPage("#messenger");

        messenger.enterText(".input-nickname", nickname);
        messenger.pressEnter(".input-nickname");

        expect(messenger.textOf(".my-nickname")).toEqual(nickname);
    });
});