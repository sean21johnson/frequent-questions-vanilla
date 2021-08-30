// Target body element
const pageBody = document.querySelector("body");

const questionsAndAnswers = [
	{
		question: `Why shouldn't we trust atoms`,
		answer: `They make up everything.`,
	},
	{
		question: `What do you call someone with no body and no nose?`,
		answer: `Nobody knows`,
	},
	{
		question: `What's the object-oriented way to become wealthy?`,
		answer: `Inheritence`,
	},
	{
		question: `How many tickles does it take to tickle an octopus?`,
		answer: "Ten-ticles!",
	},
	{
		question: `What is: 1 + 1?`,
		answer: "Depends on who you are asking.",
	},
];

// Create an unordered list
const questionList = document.createElement("ul");
questionList.classList.add("question_list");

// Function to set the header on the page
function setHeaderAndQuestionList() {
	const pageHeader = document.createElement("h1");
	pageHeader.innerText = "Frequently Asked Questions";

	pageBody.appendChild(pageHeader);
	pageBody.appendChild(questionList);

	questionsAndAnswers.forEach((question) => {
		displayData(question);
	});
}

// Function to display the list of questions and answers
function displayData(questionObj) {
	/*
        -Create a new li element for each questionObj passed to the function
        -Within the li element will need a div that breaks it down into two sections
            -First section contains the question and the down arrow
            -The down arrow will need an 'click' event listener
                -When clicked, will need to change the classes so that it shows an 'X'
                -When clicked, will ned to change the classes so that it shows the answer

        -Append the new element to the questionList at the end
    */

	const questionItem = document.createElement("li");

	const fullContainer = document.createElement("div");
	fullContainer.classList.add("full_container");

	const topContainer = document.createElement("div");
	topContainer.classList.add("top_container");

	// Set the content of the bottom container
	const bottomContainer = document.createElement("div");
	bottomContainer.classList.add("bottom_container");

	const currentAnswer = document.createElement("p");
	currentAnswer.classList.add("answer_text");

	currentAnswer.innerText = questionObj.answer;

	bottomContainer.appendChild(currentAnswer);

	// Set the content of the top container
	const currentQuestion = document.createElement("p");
	currentQuestion.classList.add("question_text");
	currentQuestion.innerText = questionObj.question;

	const downArrow = document.createElement("i");
	downArrow.classList.add("down_arrow");
	downArrow.classList.add("fas");
	downArrow.classList.add("fa-caret-down");

	const clearOut = document.createElement("i");

	topContainer.appendChild(currentQuestion);
	topContainer.appendChild(downArrow);

	questionList.appendChild(questionItem);
	questionItem.appendChild(fullContainer);
	fullContainer.appendChild(topContainer);
	fullContainer.appendChild(bottomContainer);

	console.log(pageBody);
}

setHeaderAndQuestionList();
