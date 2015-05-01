// Run the application.
geotagx.task.run("animal2013", function(question, answer){
    switch (question){
		case 1: // Can you see animals in the photo?
		case 5: // Can you see an animal shelter?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
		case 3: // Is the animal alive?
			geotagx.task.showQuestion(answer === "Yes" ? 4 : 5);
			break;
        case 2: // What is the animal you are looking at?
        case 4: // Are they in or surrounded by water?
		case 6: // Is it flooded?
			geotagx.task.showNextQuestion();
		default:
			break;
	}
});
