// __mocks__/chrome.js

const tabs = {
    query: jest.fn(),
    move: jest.fn(),
    update: jest.fn()
};

const commands = {
    onCommand: {
        addListener: jest.fn()
    }
};

module.exports = {
    tabs,
    commands
};
