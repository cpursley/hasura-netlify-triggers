exports.handler = (lambdaEvent, context, callback) => {
  const hasuraTriggerPayload = JSON.parse(lambdaEvent.body);

  console.log(hasuraTriggerPayload);
  const newData = hasuraTriggerPayload.event.data.new;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({newData: newData})
  });
};
