import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Data from './data/conditions.json';

export const getConditions: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(Data, null, 2),
  };
}