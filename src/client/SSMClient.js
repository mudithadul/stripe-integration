import { GetParameterCommand, GetParametersByPathCommand, SSMClient } from '@aws-sdk/client-ssm';
import logger from '../utils/logger';
import { ENV, IS_LOCAL } from '../config/configs';
import { connectionConfig, redisConnectionConfig } from '../config/dbConfig';
import { DEFAULT_REGION } from '../constants/configConstants';


class VelarisSSMClient {
  constructor() {
    this.env = ENV;
    this.ssmClient = new SSMClient({ region: DEFAULT_REGION });
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