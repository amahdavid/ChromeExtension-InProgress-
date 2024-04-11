const { fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');

jest.mock('chrome', () => ({
    tabs: {
        query: jest.fn(),
        move: jest.fn(),
        update: jest.fn()
    },
    commands: {
        onCommand: {
            addListener: jest.fn()
        }
    }
}));

describe('Chrome Extension', () => {
    test('clicking "Arrange Tabs" button should call sortTabsAlphabetically with correct direction', () => {
        const sortSpy = jest.spyOn(window, 'sortTabsAlphabetically');
        const arrangeButton = document.getElementById('arrange-btn');
        const selectDirection = document.getElementById('sort-direction');

        // Simulate selecting ascending direction and clicking the button
        selectDirection.value = 'asc';
        fireEvent.click(arrangeButton);
        expect(sortSpy).toHaveBeenCalledWith('asc');

        // Simulate selecting descending direction and clicking the button
        selectDirection.value = 'desc';
        fireEvent.click(arrangeButton);
        expect(sortSpy).toHaveBeenCalledWith('desc');
    });

    // Add more test cases here for other functionalities
});