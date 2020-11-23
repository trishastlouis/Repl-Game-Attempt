const TicTacToe = {

    setup: function() {

        this.player1 = {
            name: "Crosses",
            symbol: "X"
        };
        this.player2 = {
            name: "Naughts",
            symbol: "0"
        };

        this.restart();
    },

    restart: function() {
        this.board = [
            [ "", "", "" ],
            [ "", "", "" ],
            [ "", "", "" ]
        ];

        this.currentPlayer = Math.floor( Math.random() * 2 ) == 0 ? this.player1 : this.player2;
        this.playRound();
    },

    roundPlay: function() {
        console.log( this.currentPlayer.name + " start." );
        while ( !this.isWinningCombination( this.player1.symbol, this.board ) 
        && !this.isWinningCombination( this.player2.symbol, this.board ) &