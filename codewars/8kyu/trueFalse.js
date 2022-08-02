function boolToWord2( bool ){
    if (bool === true) {
        return 'Yes'
    } else {
        return 'No'
    }
  }

  boolToWord = bool => bool === true ? 'Yes' : 'No'
  console.log(boolToWord(true));