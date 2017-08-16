function createTable(iSize, tMagic)
{
  var eTable, eTableRow, eTableCol;

  eTable = document.createElement('table');
  eTable.id = 'tMagic';

  for (var r = 0; r < iSize; r++)
  {
    eTableRow = document.createElement('tr');

    for (var c = 0; c < iSize; c++)
    {
      eTableCol = document.createElement('td');
      eTableCol.appendChild(document.createTextNode(tMagic[r][c]));
      eTableRow.appendChild(eTableCol);
    }
    eTable.appendChild(eTableRow);
  }

  document.getElementById('tMagicSq').appendChild(eTable);
}

function compute()
{
  var
  iSize = document.getElementById('sqSize').value,
  tMagicInfo = document.getElementById('sqInfo'),
  tMagic = [],
  iSum =  iSize * (iSize * iSize + 1) / 2;

  // initialize to 0
  for (var r = 0; r < iSize; r++)
  {
    var tRow = [];
    for (c = 0; c < iSize; c++)
    {
      tRow.push(0);
    }
    tMagic.push(tRow);
  }

  // odd size

  // add HTML elements
  tMagicInfo.innerHTML = "Magic square [size: " + iSize + ", sum: " + iSum + "]: <br />";

  createTable(iSize, tMagic);
}
