/* Write a function that will generate a grid depending on the number that is provided in the function */

/* i.e., chessboard(8);
    Should return:
        "#   #   #   #
          #   #   #   #
        #   #   #   #
          #   #   #   #
        #   #   #   #
          #   #   #   #
        #   #   #   #
          #   #   #   #"
*/

const chessboard = AMT => {
    let board = "";
    let rowCount = 0;

    while (rowCount < AMT) {
        let row = "";

        if (rowCount % 2 === 0) {
            for (let i = 0; i < AMT / 2; i++) {
                row += "# ";
            }

            rowCount++;
            board += row += "\n";
        } else if (rowCount % 2 === 1) {
            for (let i = 0; i < AMT / 2; i++) {
                row += " #";
            }

            rowCount++;
            board += row += "\n";
        }
    }

    console.log(board);
};

console.time(chessboard(8));
console.timeEnd(chessboard(8));
