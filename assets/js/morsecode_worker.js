  function convert()
  {
    var converter = new Module.MorseCodeConverter;
    var inStr = document.getElementById('inbox').value.replace("\n", " \n ");
    converter.setInputString(inStr);
    converter.performConversion();
    var convString = converter.getConvertedString();
    document.getElementById('outbox').value = convString;
    converter.delete();
  }

  function clearBoxes()
  {
    var empStr = "";
    document.getElementById('inbox').value = empStr;
    document.getElementById('outbox').value = empStr;
  }
