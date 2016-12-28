describe("User without conversation sees call to action to start a conversation", function () {
    it("renders call to action to start a conversation", function () {
        var messenger = new MessengerPage("#messenger");

        expect(messenger.isHidden(".start-conversation")).toEqual(true);

        messenger.enterText(".input-nickname", "Anna");
        messenger.clickOn(".log-in");

        expect(messenger.exists(".start-conversation")).toEqual(true);
        expect(messenger.isHidden(".start-conversation")).toEqual(false);
    });
});