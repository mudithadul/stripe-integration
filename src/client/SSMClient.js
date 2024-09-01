import logger from '../utils/logger';
import { ENV, IS_LOCAL } from '../config/configs';
import { connectionConfig, redisConnectionConfig } from '../config/dbConfig';
import { DEFAULT_REGION } from '../constants/configConstants';


class SSMClient {
  constructor() {
    this.env = ENV;
  }

  async getDbCredentials(dbIdentifier) {
    return {
      ...connectionConfig,
      name: connectionConfig.database
    };
  }

  async getRedisCredentials(tenantIdentifier) {
    return {
      ...redisConnectionConfig
    };

  }
}
export default new SSMClient();