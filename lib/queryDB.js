class queryDB{

  static insertQuery(dadosJson){

    let queryColumn = '(';
    let queryValue = '(';
    for(let [key,value] of Object.entries(dadosJson)){
      queryColumn += key + ', ';
      if (typeof value === 'string'){
        queryValue += '"' + value + '", ';
      }
      else{
        queryValue += value.toString() + ', ';
      }
    }

    queryColumn = queryColumn.substring(0, queryColumn.length - 2) + ')';
    queryValue = queryValue.substring(0, queryValue.length - 2) + ')';

    let insertText = `INSERT INTO heroku_7bc61ed80b65b15.cadastro ${queryColumn} VALUES ${queryValue}`

    return insertText

  }

  static selectQuery(dadosJson){

    let queryColumn = '(';
    let queryValue = '(';
    for(let [key,value] of Object.entries(dadosJson)){
      queryColumn += key + ', ';
      if (typeof value === 'string'){
        queryValue += '"' + value + '", ';
      }
      else{
        queryValue += value.toString() + ', ';
      }
    }

    queryColumn = queryColumn.substring(0, queryColumn.length - 2) + ')';
    queryValue = queryValue.substring(0, queryValue.length - 2) + ')';

    let getText = `SELECT * FROM heroku_7bc61ed80b65b15.cadastro WHERE cpf = ${dadosJson.cpf}`

    return getText

  }
}

module.exports = queryDB;

