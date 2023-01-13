function renderGameBoardShips(gameboard, BoardUINodeList)
{
    for(let i = 0; i < gameboard.length; i++)
    {
        for(let j = 0; j < gameboard[i].length; j++)
        {
            if(gameboard[i][j] != undefined)
            {
                // console.log(`${i}, ${j}`);
                BoardUINodeList[i][j].appendChild(document.createElement('div'));
            };
        };
    };
};

function getUIArray(boardElement)
{
    let array = [];
    for(let i = 0; i < 10; i++)
    {
        array[i]=[];
        for(let j = 0; j < 10; j++)
        {
            array[i][j] = boardElement.getElementsByClassName(`row ${i}`)[0].getElementsByClassName(`column ${j}`)[0];
        };
    };
    return array;
};

function displayShots(twoElementArray, destinationBoard, destinationBoardUI)
{
    let x = twoElementArray[0];
    let y = twoElementArray[1];
    if(destinationBoard[x][y] !== undefined)
    {
        destinationBoardUI[x][y].style.backgroundColor = 'red';
    }
    else{
        destinationBoardUI[x][y].style.backgroundColor = '#00FFFF';
    };
};

export { renderGameBoardShips, getUIArray, displayShots };