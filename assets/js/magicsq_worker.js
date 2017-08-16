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

function initTable(n)
{
  // initialize to 0
  var t = [];
  for (var r = 0; r < n; r++)
  {
    var tRow = [];
    for (c = 0; c < n; c++)
    {
      tRow.push(0);
    }
    t.push(tRow);
  }
  return t;
}

function computeOddTable(n)
{
  var
  i = Math.floor(n / 2),
  j = n - 1,
  tOdd = initTable(n);

  for (var num = 1; num <= n * n;)
  {
    if (i == -1 && j == n)
    {
      i = 0; j = n - 2;
    }
    else
    {
      if (j == n) j = 0;
      if (i == -1) i = n - 1;
    }

    if (tOdd[i][j] > 0)
    {
      j -= 2; i++;
      continue;
    }
    else
    {
      tOdd[i][j] = num++;
    }

    j++; i--;
  }

  return tOdd;
}

function compute()
{
  var
  iSize = document.getElementById('sqSize').value,
  tMagicInfo = document.getElementById('sqInfo'),
  tMagic = [],
  iSum =  iSize * (iSize * iSize + 1) / 2;

  // different algorithms based on size
  if (iSize % 2 != 0) tMagic = computeOddTable(iSize);

  // add HTML elements
  tMagicInfo.innerHTML = "Magic square [magic constant: " + iSum + "]: <br />";
  createTable(iSize, tMagic);
}
