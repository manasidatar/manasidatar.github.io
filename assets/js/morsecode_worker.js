  function convert()
  {
    var converter = new Module.MorseCodeConverter;
    converter.setInputString(document.getElementById('inbox').value);
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
