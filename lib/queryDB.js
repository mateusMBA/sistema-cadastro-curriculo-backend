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

    let insertText = `INSERT INTO cadastro_jobsnet.cadastro ${queryColumn} VALUES ${queryValue}`

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

    let getText = `SELECT * FROM cadastro_jobsnet.cadastro WHERE cpf = ${dadosJson.cpf}`

    return getText

  }
}

module.exports = queryDB;

