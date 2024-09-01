import multiPoolManager from './multiPoolManager';
import { getDbIdentifier } from '../utils/contextUtils';
import { POOL_TYPE } from '../constants/dbConstants';
// master connection
const MASTER_DB_IDENTIFIER = `master_db_1`;
export const getDbConnection = () => {
  return multiPoolManager.getConnectionPool(MASTER_DB_IDENTIFIER);
};

