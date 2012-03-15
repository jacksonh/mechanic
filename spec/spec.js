describe('Mechanic Core', function() {
    it('returns a wrapped UIAElement when one is passed as an argument', function() {
        var window = new UIAWindow();
        
        var wrappedWindow = $(window);
        
        expect(wrappedWindow[0]).toBe(window);
        expect(wrappedWindow.length).toEqual(1);
    });
    it('returns a wrapped array of UIAElements when one is passed as an argument', function() {
        var window = new UIAWindow();
        var text = new UIAStaticText();
        
        var wrappedArray = $([window, text]);
        
        expect(wrappedArray).toContain(window);
        expect(wrappedArray).toContain(text);
        expect(wrappedArray.length).toEqual(2);
    });
	it('allows you to select elements with names/labels with special characters (closes GI-5)', function() {
		var window = new UIAWindow();
		var text = new UIAStaticText();
		text.name("100% Awesome");
		window.elements().push(text);
		
		var result = $("#100% Awesome", window);
		expect(result[0]).toBe(text);
	});
    it('returns the passed selector if a selector is passed as an argument', function() {
        var window = new UIAWindow();
        var wrappedWindow = $(window);
        
        var doubleWrappedWindow = $(wrappedWindow);
        
        expect(doubleWrappedWindow).toBe(wrappedWindow);
    });
    it('stores the selector passed to it', function() {
        var window = new UIAWindow();

        var wrappedWindow = $(window);
        var otherWrappedWindow = $("window");
        
        expect(wrappedWindow.selector).toBe(window);
        expect(otherWrappedWindow.selector).toBe("window");
    });
    it('uses the context passed to it to filter selection', function() {
        var window = new UIAWindow();
        var text1 = new UIAStaticText();
        var scrollView = new UIAScrollView();
        var text2 = new UIAStaticText();
        window.elements().push(text1);
        window.elements().push(scrollView);
        scrollView.elements().push(text2);
        
        console.log(text1.isType("UIAStaticText"));
        
        var filteredByContext = $("UIAStaticText", scrollView);
        
        // expect(filteredByContext).toContain(text2);
        // expect(filteredByContext).toNotContain(text1);
        
    });
});