const baseUrl = 'https://jsonplaceholder.typicode.com/comments';


const getComments = fetch(`${baseUrl}`)
.then(res => res.json())
.then((comments) => {
  console.log('Comments', comments) // Comments (500) [{...}, {...}, ,{...}] .....
});


// CREATE

const createNew = function (url = '', request = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  }).then(res => res.json());
};

const createNewComment = function () {
  const commentData = {
    id: 501,
    postId: 100, 
    name: 'Ova e nov komentar',
    email: 'goki_bituse@hotmail.com',
    body: 'Body 501'
  };

  return createNew(`${baseUrl}`, commentData).then(data => {
    console.log(data);
  });
};

createNewComment();  // Kreira nov comment - {id: 501, userId: 100, name: "Ova e nov komentar", email: "goki_bituse@hotmail.com", body: "Body 501"}



// READ

const getCommentMethod = function (url = '', query = '') {
  return fetch(`${url}/${query}`).then(res => res.json());
} 

getACommentById = (id) => {
  return getCommentMethod(`${baseUrl}`, id)
    .then(comment => console.log('Get a comment by id', comment));
}

getACommentById(5); // Go cita komentarot so id: 5
                    // {postId: 1, id: 5, name: "vero eaque aliquid doloribus et culpa", email: "Hayden@althea.biz", body: "harum non quasi et ratione↵tempore iure ex volupta…ugit inventore cupiditate↵voluptates magni quo et"}



// UPDATE 

const updateCommentMethod = function (url = '', query = '', request = {}) {
  return fetch(`${url}/${query}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  }).then(res => res.json());
};

const updateACommentById = function (id) {
  const updatingComment = {
    postId: 100, 
    name: 'New comment',
    email: 'goki_skopje@hotmail.com',
    body: 'UPDATED comment Body'
  }
  return updateCommentMethod(baseUrl, id, updatingComment)
  .then(comment => console.log('Updated comment', comment))
};


updateACommentById(495) // Updated comment {postId: 100, name: "New comment", email: "goki_skopje@hotmail.com", body: "UPDATED comment Body", id: 495}

// DELETE

const deleteCommentMethod = function (url = '', query = '') {
  return fetch(`${url}/${query}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
};

const deleteACommentById = function (id) {
  return deleteCommentMethod(baseUrl, id).then(data => console.log(`Komentarot e izbrisan.`, data))
};

deleteACommentById(245);






