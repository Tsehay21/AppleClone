//
//
// When you make a request to the YouTube API (or any API that returns JSON), the response is not immediately usable as a JavaScript object. Instead, it comes as a ReadableStream (a raw response body)

//
// Why Convert to JSON?
// APIs often return data in JSON format (JavaScript Object Notation), which is a lightweight data format that is easy to read and parse. However, JavaScript does not automatically convert the response into an object.

//
// You cannot directly access data.items because the actual content is inside the body, which is a stream.
