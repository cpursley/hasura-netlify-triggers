import { APIGatewayEvent, Context } from 'aws-lambda'

interface Response {
  statusCode: number;
  body: string;
}

export async function handler (event: APIGatewayEvent, context: Context) {
  try {
    const hasuraTriggerPayload = JSON.parse(event.body);
    const newData = hasuraTriggerPayload.event.data.new;

    console.log(hasuraTriggerPayload);

    const response: Response = {
      statusCode: 200,
      body: JSON.stringify({newData: newData})
    };

    return response;

  } catch (e) {
    const response: Response = {
      statusCode: 500,
      body: `Issue parsing hasura event: ${JSON.stringify(e)}`
    };

    return response;
  }
};