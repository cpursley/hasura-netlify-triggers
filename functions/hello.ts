import { Handler, Context, Callback } from 'aws-lambda';

interface Response {
  statusCode: number;
  body: string;
}

const handler: Handler = (event: any, context: Context, callback: Callback) => {
  const hasuraTriggerPayload = JSON.parse(event.body);
  const newData = hasuraTriggerPayload.event.data.new;

  console.log(hasuraTriggerPayload);

  const response: Response = {
    statusCode: 200,
    body: JSON.stringify({newData: newData})
  };

  callback(undefined, response);
};

export { handler }