
        let scoreGame1 = 0;
        let guessNumberGame2 = Math.floor(Math.random() * 10) + 1;
        let symbolsGame3 = [];

        function scorePoints(game) {
            if (game === 'Game 1') {
                scoreGame1 += 10;
                document.getElementById('scoreGame1').innerText = scoreGame1;
            }
        }

        function checkGuess(game) {
            if (game === 'Game 2') {
                const userGuess = parseInt(document.getElementById('guessInput').value);
                const resultElement = document.getElementById('guessResult');

                if (userGuess === guessNumberGame2) {
                    resultElement.innerText = 'Congratulations! You guessed the correct number.';
                } else {
                    resultElement.innerText = 'Oops! Try again.';
                }
            }
        }

        function revealSymbol(game, symbol) {
            if (game === 'Game 3' && symbolsGame3.length < 2) {
                symbolsGame3.push(symbol);
                document.getElementById('symbolsGame3').innerText = symbolsGame3.join(', ');
            }
        }
