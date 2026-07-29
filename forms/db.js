const oracledb = require('oracledb');

const dbConfig = {
    user: "SQL_2504P07WML4XGO9FW59LDKX6VW",
    password: "8VS908S6FIK61WO0R3GsH9YF7$SRS9",
    connectString: "tcps://db.freesql.com:2484/23ai_mb9q7"
};

async function getConnection() {
    return await oracledb.getConnection(dbConfig);
}

module.exports = getConnection;