/* Handle Hasura event trigger
 * This is what the structure of the event payload looks like
 *
 * {
 *   "event": {
 *       "op": "<op-name>",
 *       "data": {
 *         "old": <old-object>,
 *         "new": <new-object>
 *       }
 *   },
 *   "created_at": "<timestamp>",
 *   "id": "<uuid>",
 *   "trigger": {
 *       "name": "<name-of-trigger>",
 *       "id": "<event-uuid>"
 *   },
 *   "table":  {
 *       "schema": "<schema-name>",
 *       "name": "<table-name>"
 *   }
 * }
 *
 */

exports.handler = (lambdaEvent, context, callback) => {
  // Get the email of the user
  const hasuraTriggerPayload = JSON.parse(lambdaEvent.body);

  console.log(hasuraTriggerPayload);
  const newData = hasuraTriggerPayload.event.data.new;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({newData: newData})
  });
};
