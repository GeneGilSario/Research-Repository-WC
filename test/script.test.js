// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  // Below are the tests for different paths

  it("After starting stage, prompt greeting and asking for name", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);
  });

  it("Path (starter, name , yes) - When user inputs yes, should pop up appropriate answer/quesion", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Snoozing in? Great choice name! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?";

    expect(botReply3).toEqual(expectedReply3);
  });

  it("Path (starter, name , no) - When user inputs no, should pop up appropriate answer/quesion", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "Righto name, would you like to have breakfast first thing in morning?";

    expect(botReply3).toEqual(expectedReply3);
  });

  it("Path (starter, name, yes , yes) last question should respond with 'Snoozing in might not be the best option to do <username>. You have some work to do.' ", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Snoozing in? Great choice name! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "Snoozing in might not be the best option to do name. You have some work to do. You can do this!!!";

    expect(botReply4).toEqual(expectedReply4);
  });

  it("Path (starter, name, yes , no) last question should respond with 'Snoozing in might not be the best option to do <username>. You have some work to do.' ", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Snoozing in? Great choice name! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Ahh must be a good feeling... Enjoy your sleep name";

    expect(botReply4).toEqual(expectedReply4);
  });

  it("Path (starter, name , no , yes) - last response should be 'Great choice <username>, having a good breakfast is a good start to a morning.' ", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "Righto name, would you like to have breakfast first thing in morning?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "Great choice name, having a good breakfast is a good start to a morning. Enjoy your day name";

    expect(botReply4).toEqual(expectedReply4);
  });

  it("Path (starter, name , no , no) - last response should be 'Alrighty <username>,  let’s get ready for the busy work ahead. Are you going to skip gym today?' ", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "Righto name, would you like to have breakfast first thing in morning?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Alrighty name, let's get ready for the busy work ahead. Are you going to the gym today?";

    expect(botReply4).toEqual(expectedReply4);
  });

  it("Path (starter, name , no , no , yes) - last response should be 'Great choice <username>, finishing a gym session early in the day sets you up for a productive day. Have a good day!' ", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "Righto name, would you like to have breakfast first thing in morning?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Alrighty name, let's get ready for the busy work ahead. Are you going to the gym today?";

    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("yes");
    const expectedReply5 =
      "Great choice name, finishing a gym session early in the day sets you up for a productive day. Have a good day!";

    expect(botReply5).toEqual(expectedReply5);
  });

  it("Path (starter , name , no , no , no) - last response should be 'Good choice {name}, it’s important to have rest days (unless this the fifth time this week...) Do you want to go back to bed... ", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "Righto name, would you like to have breakfast first thing in morning?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Alrighty name, let's get ready for the busy work ahead. Are you going to the gym today?";

    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "Good choice name, it’s important to have rest days (unless this the fifth time this week) Do you want to go back to bed name...";

    expect(botReply5).toEqual(expectedReply5);
  });

  it("Path (name , no , no , no , yes) - last response should be 'Sounds about right...Good choice nonetheless. Take it easy name", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "Righto name, would you like to have breakfast first thing in morning?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Alrighty name, let's get ready for the busy work ahead. Are you going to the gym today?";

    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "Good choice name, it’s important to have rest days (unless this the fifth time this week) Do you want to go back to bed name...";

    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("yes");
    const expectedReply6 =
      "Sounds about right...Good choice nonetheless. Take it easy name";

    expect(botReply6).toEqual(expectedReply6);
  });

  // The test below ensures that a message appears when you arrive at the end of the message tree
  it("End of message tree - should reply with 'Your session has ended. I can't stay with you all day, go be free!!!' ", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Snoozing in? Great choice name! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "Snoozing in might not be the best option to do name. You have some work to do. You can do this!!!";

    expect(botReply4).toEqual(expectedReply4);

    // Input; "yes"
    // Output; "I can't stay with you all day, go be free!!!"
    const botReply5 = getBotReply("yes");
    const expectedReply5 =
      "Your session has ended. I can't stay with you all day, go be free!!! (Type restart if you want to go back to the start)";

    expect(botReply5).toEqual(expectedReply5);
  });

  // test below makes sure the prgram supports the reset option
  it("Supports reset option", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Snoozing in? Great choice name! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("restart");
    const expectedReply4 = `You have restarted. Good morning again sleepy head. Welcome to Sadot bot, here to make your morning choices easier for you. Firstly, we would like to know your name.`;

    expect(botReply4).toEqual(expectedReply4);
  });

  // test below makes sure the prgram supports the help option
  it("Supports help option", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Snoozing in? Great choice name! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("help");
    const expectedReply4 = `You asked for help. Please answer the question with either yes or no. Press 'okay' to resume your session.`;

    expect(botReply4).toEqual(expectedReply4);
  });

  // test below makes sure capitalisation does not matter
  it("Capitalisation does not matter", () => {
    const botReply1 = getBotReply("asdf");
    const expectedReply1 = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("name");
    const expectedReply2 =
      "Nice to meet you name. Your alarm just rang, would you rather sleep in?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Yes");
    const expectedReply3 =
      "Snoozing in? Great choice name! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?";

    expect(botReply3).toEqual(expectedReply3);
  });
});
