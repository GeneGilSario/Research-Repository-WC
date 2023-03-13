# Chatbot

## Problem statement

To create a program that makes the user's morning choices easier to decide. This program will be using a decision tree to build the system.

The program will need to ask a question, in which the user will answer the question. The program will then ask the appropriate answer/question based on the user's answer.

## Inputs, processes and outputs

Input: userInput
Processes: Determine the appropriate answer/question based on the userInput and previuos inputs.
Output: Next question/answer to the question.

## Test scenarios

Start: "Good morning sleepy head.
Welcome to Sadot bot, here to make your morning choices easier for you.
Firstly, we would like to know your name."

Input: "userName"
Output: "Nice to meet you {name}. Your alarm just rang, would you rather sleep in?
Input: "yes"
Output: "Snoozing on? Great choice! {name}
(I mean what's the point of the alarm in the first place...)
Do you have important work to do today?"

Input: "userName"
Output: "Nice to meet you {name}. Your alarm just rang, would you rather sleep in?
Input: "no"
Output: "Righto {name}, would you like to have breakfast first thing in morning?"

Input: "yes"
Output: "Snoozing on? Great choice! {name}
(I mean what's the point of the alarm in the first place...)
Do you have important work to do today?"
Input: "yes"
Output: "Snoozing in might not be the best option to do {name}. You have some work to do."

Input: "yes"
Output: "Snoozing on? Great choice! {name}
(I mean what's the point of the alarm in the first place...)
Do you have important work to do today?"
Input: "no"
Output: "Ahh must be a good feeling... Have a good sleep {name} "

Input: "no"
Output: "Righto {name}, would you like to have breakfast first thing in morning?"
Input: "yes"
Output: "Great choice {name}, having a good breakfast is a good start to a morning."

Input: "no"
Output: "Righto {name}, would you like to have breakfast first thing in morning?"
Input: "no"
Output: "Alrighty {name}, let's get ready for the busy work ahead.
Are you going to skip gym today?"

Input: "no"
Output: "Righto {name}, would you like to have breakfast first thing in morning?"
Input: "no"
Output: "Alrighty {name}, let's get ready for the busy work ahead.
Are you going to skip gym today?"
Input: "yes"
Output: "Great choice {name}, finishing a gym session early in the day sets you up for a productive day. Have a good day!"

Input: "no"
Output: "Righto {name}, would you like to have breakfast first thing in morning?"
Input: "no"
Output: "Alrighty {name}, let's get ready for the busy work ahead.
Are you going to skip gym today?"
Input: "no"
Output: "Good choice {name}, it’s important to have rest days
(unless this the fifth time this week...)
Do you want to go back to bed?"

Input: "no"
Output: "Righto {name}, would you like to have breakfast first thing in morning?"
Input: "no"
Output: "Alrighty {name}, let's get ready for the busy work ahead.
Are you going to skip gym today?"
Input: "no"
Output: "Good choice {name}, it’s important to have rest days
(unless this the fifth time this week...)
Do you want to go back to bed?"
Input: "yes"
Output: "Sounds about right...
Good choice {name} nonetheless."

// The test below ensures that a message appears when you arrive at the end of the message tree //

Input: "userName"
Output: "Nice to meet you {name}. Your alarm just rang, would you rather sleep in?
Input: "yes"
Output: "Snoozing on? Great choice! {name}
(I mean what's the point of the alarm in the first place...)
Do you have important work to do today?"
Input: "yes"
Output: "Snoozing in might not be the best option to do {name}. You have some work to do."
Input; "yes"
Output; "You have reached the end of troubleshooting"

//

Input: "userName"
Output: "Nice to meet you {name}. Your alarm just rang, would you rather sleep in?
Input: "yes"
Output: "Snoozing on? Great choice! {name}
(I mean what's the point of the alarm in the first place...)
Do you have important work to do today?"
Input: "help"
Output: "You asked for help. Please answer the question with either yes or no "
