$(document).ready(function () {
    var count = 0;
    var time = 31;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var question = ["What Is The Capital of Texas?", "What Is The Capital of Kansas?", "What Is The Capital of Maine?", "What Is The Capital of Wyoming?", "What Is The Capital of New Hampshire?",
        "What Is The Capital of North Dakota?", "What Is The Capital of Montana?", "What Is The Capital of Wisconsin?"];

    var answer = ["Austin", "Topeka", "Augusta", "Cheyenne", "Concord", "Bismarck", "Helena", "Madison"];

    var firstChoice = ["Austin", "Washington, D.C.", "Augusta", "Boston", "Augusta", "Bismarck", "Nashville", "Columbia",];
    var secondChoice = ["Washington, D.C.", "Phoenix", "Tallahassee", "Cheyenne", "Boise", "Honolulu", "Columbus", "Columbus"];
    var thirdChoice = ["Little Rock", "Denver", "Atlanta", "Austin", "Concord", "Topeka", "Helena", "Charleston"];
    var fourthChoice = ["Sacramento", "Topeka", "Denver", "Little Rock", "Lansing", "Austin", "Montpelier", "Madison"];

    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion() {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);

        $("#choice-holder-1").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-2").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-3").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-4").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
    }
    $("#choice-holder-1").on("click", checkAnswer)
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

    function checkAnswer() {

        hideHolders();

        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The Answer Is " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The Answer Is " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        }

        checkGameEnd();
    }

    function checkGameEnd() {
        if (count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time Remaining: " + time);

        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html(":( The answer is: " + answer[count]);
            displayImage();
            unanswered++;
            count++;
            checkGameEnd();
        }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    function displayImage() {
        if (count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets\images\Texas Austin.jpg">');
        }
        else if (count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/assets/images/Kansas Topeka.jpg">');
        }
        else if (count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/../assets/images/Maine Augusta.jpg">');
        }
        else if (count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="../images/Wyoming Cheyenne.jpg">');
        }
        else if (count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="../images/New Hampshire Concord.jpg">');
        }
        else if (count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="../images/North Dakota Bismarck.jpg">');
        }
        else if (count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="../images/Montana Helena.jpg">');
        }
        else if (count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="../images/Wisconsin Madison.jpg">');
        }
    }

    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

    $(".start").on("click", function () {
        startGame();
    });
});
