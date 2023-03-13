/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
// let variables
let level = 0;
let userInput;
let path;
let userName;
let appropriateResponse;
let endOfConversation;

const getBotReply = (msg) => {
  userInput = msg;

  // When user input has a capitalised letter, program should work
  userInput = msg.toLowerCase();

  // Assigne messages to variables
  const botStarterMsg = `Good morning again sleepy head. Welcome to Sadot bot, here to make your morning choices easier for you. Firstly, we would like to know your name.`;
  const helpResponse = `You asked for help. Please answer the question with either yes or no. Press 'okay' to resume your session.`;

  if (userInput === "restart") {
    endOfConversation = false;
    level = 1;
    path = "";
    appropriateResponse = `You have restarted. ${botStarterMsg}`;
    return appropriateResponse;
  }

  if (userInput === "help") {
    return helpResponse;
  } 
  
  if (endOfConversation === true) {
    level = 1;
    path = '';
    return "Your session has ended. I can't stay with you all day, go be free!!!";
  }

  if (level === 0) {
    userName = msg;
    level = 1;
    appropriateResponse = `Good morning sleepy head. Welcome to Sadot bot, Here to make your
    morning choices easier for you. Firstly, I would like to know your
    name.`;
    return appropriateResponse;
  }

  // -------------------------------------------------------------- //

  if (level === 1) {
    userName = msg;
    level = 2;

    if (userInput === "okay") {
      level = 1;
      return appropriateResponse;
    }
    appropriateResponse = `Nice to meet you ${userName}. Your alarm just rang, would you rather sleep in?`;
    return appropriateResponse;
  }

  // -------------------------------------------------------------- //

  if (
    userInput !== "yes" &&
    userInput !== "no" &&
    userInput !== "restart" &&
    userInput !== "help" &&
    userInput !== "okay"
  ) {
    level--;
    return `I only understand english, try answering with 'yes' or 'no'. Type 'restart' if you want to restart or type 'help' if you need assistance.`;
  }

  // -------------------------------------------------------------- //

  if (level === 2) {
    level = 3;

    if (userInput === "okay") {
      level = 2;
      return appropriateResponse;
    }

    if (userInput === "yes") {
      path = "yes";
      appropriateResponse = `Snoozing in? Great choice ${userName}! (I mean what's the point of the alarm in the first place...) Do you have important work to do today?`;
      return appropriateResponse;
    }

    if (userInput === "no") {
      path = "no";
      appropriateResponse = `Righto ${userName}, would you like to have breakfast first thing in morning?`;
      return appropriateResponse;
    }
  }

  // -------------------------------------------------------------- //

  if (level === 3) {
    level = 4;
    if (path === "yes") {
      if (userInput === "okay") {
        level = 3;
        path = "yes";
        return appropriateResponse;
      }

      endOfConversation = true;

      if (userInput === "yes") {
        appropriateResponse = `Snoozing in might not be the best option to do ${userName}. You have some work to do.`;
        return appropriateResponse;
      }

      if (userInput === "no") {
        appropriateResponse = `Ahh must be a good feeling... Have a good sleep ${userName}`;
        return appropriateResponse;
      }
    }

    if (path === "no") {
      if (userInput === "okay") {
        level = 3;
        path = "no";
        return appropriateResponse;
      }

      if (userInput === "yes") {
        endOfConversation = true;

        appropriateResponse = `Great choice ${userName}, having a good breakfast is a good start to a morning.`;
        return appropriateResponse;
      }

      if (userInput === "no") {
        appropriateResponse = `Alrighty ${userName}, let's get ready for the busy work ahead. Are you going to the gym today?`;
        return appropriateResponse;
      }
    }
  }

  // -------------------------------------------------------------------------//

  if (level === 4) {
    level = 5;

    if (userInput === "okay") {
      level = 4;
      path = "no";
      return appropriateResponse;
    }

    if (userInput === "yes") {
      endOfConversation = true;

      appropriateResponse = `Great choice ${userName}, finishing a gym session early in the day sets you up for a productive day. Have a good day!`;
      return appropriateResponse;
    }

    if (userInput === "no") {
      appropriateResponse = `Good choice ${userName}, it’s important to have rest days (unless this the fifth time this week) Do you want to go back to bed ${userName}...`;
      return appropriateResponse;
    }
  }

  // -------------------------------------------------------------------------//

  if (level === 5) {
    if (userInput === "okay") {
      level = 5;
      path = "no";
      return appropriateResponse;
    }

    endOfConversation = true;

    if (userInput === "yes") {
      appropriateResponse = `Sounds about right...Good choice nonetheless. Rest well ${userName}`;
      return appropriateResponse;
    }

    if (userInput === "no") {
      appropriateResponse = `Have a productive day. You can do it!!!`;
      return appropriateResponse;
    }
  }
};

export { getBotReply };
