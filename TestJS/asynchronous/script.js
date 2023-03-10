// Get DOM elements
const generateButton = document.getElementById('generate-button');
const postTitle = document.getElementById('post-title');
const postId = document.getElementById('post-id');
const postContent = document.getElementById('post-content');

/**
 * Makes an AJAX request of type 'verb' to 'url' with optional 'data' object
 * Returns a Promise which resolves or rejects with server response
 */ 
function makeRequest(verb, url, data) {
  return new Promise((resolve, reject) => {
    if(verb === 'POST' && !data) { // verify if in case of a POST request, the data is not empty
      reject('Invalid Code');
    }
      
    // create and open AJAX request
    let request = new XMLHttpRequest();
    request.open(verb, url);
    
    request.onreadystatechange = () => {
      // only execute code if request is ready
      if (request.readyState === 4) {
        // request is successful for codes 200 or 201  
        if (request.status === 200 || request.status === 201) {
          resolve(JSON.parse(request.response));
        } else {
          reject(JSON.parse(request.response));
        }
      }
    };
    // for POST requests, set Content-Type header and send request with 'data` object
    // otherwise, simply send request
    if (verb === 'POST') {
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
    } else {
      request.send();
    }
  });
}

/**
 * Sends GET requests for uid, title and content in parallel
 * Sends resulting object as POST request
 * Handles response from POST request and prints result to DOM
 */ 
async function createPost() {
  
  // create three request Promises (starts sending requests)
  const uidPromise = makeRequest('GET', 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets/generate-uid');
  const titlePromise = makeRequest('GET', 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets/generate-title');
  const contentPromise = makeRequest('GET', 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets/generate-lorem');

try { // verify if there is an error when executing the 3 GET requests
  // await responses from three requests and assign to three constants
  const [uidResponse, titleResponse, contentResponse] = await Promise.all([uidPromise, titlePromise, contentPromise]);


  // concatenate data from GET requests and make POST request
  const postPromise = makeRequest(
    'POST',
    'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets/create-post-with-uid',
    {uid: uidResponse.uid, title: titleResponse.title, content: contentResponse.lorem}
  );
  
try { // verify if there is no error when executing the POST request
  // assign result to constant and print constant properties to DOM
  const post = await postPromise;
  postTitle.textContent = post.post.title;
  postId.textContent = post.post.id;
  postContent.textContent = post.post.content; 

} catch(error) {
  postTite.textContent = error.error;

}

} catch(error) {
 postTite.textContent = error.error;
}

}

// click listener for Generate Post! button
generateButton.addEventListener('click', () => {
  createPost();
});

