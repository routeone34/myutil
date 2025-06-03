import { Database } from '@sqlitecloud/drivers'
export const sqlcl = {
  getDataBase: async function() {
    const dbname = "sqlitecloud://" + 
      process.env.SQLCL_USER + ":" +
      process.env.SQLCL_PASSWORD +"@" +
      process.env.SQLCL_NODE + "/" +
      process.env.SQLCL_DBNAME;
    
    return new Database(dbname);
  }
}
export default sqlcl;
