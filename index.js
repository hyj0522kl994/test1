
document.addEventListener("DOMContentLoaded", () => {
  // submit 때의 동작 정의하기
  document.getElementById("comment-form").onsubmit = () => {
    // 코멘트 입력(input 요소) 추출하기
    const commentInput = document.getElementById("comment-input");

    if (commentInput.value === "") {
      // 코멘트가 입력되지 않았다면 아무 것도 하지 않기
      return false;
    }

    // 입력한 코멘트를 기반으로 li 요소 만들기
    const newComment = document.createElement("li");

    // 생성한 li 요소를 DOM에 넣기
    newComment.innerText = commentInput.value;

    document.getElementById("comments").appendChild(newComment);

    // 코멘트를 입력한 input의 내용 지우기
    commentInput.value = "";
    return false;
  };
});

/*document.addEventListener("DOMContentLoaded", () => {

    const txtemail = document.getElementById('textemail');
    const txtpassword = document.getElementById('textpassword');
    const btnlogin = document.getElementById('btnlogin');
    const signIn = document.getElementById('signIn');
    const signOut = document.getElementById('singOut');

    btnlogin.addEventListener('click', e =>{
      const email = txtemail.value;
      const pass = txtpassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email,pass).catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
      });

    });

    signIn.addEventListener('click', e =>{
      const email = txtemail.value;
      const pass = txtpassword.value;
      const auth = firebase.auth();

      const promise = auth.createUserWithEmailAndPassword(email,pass).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        });
      });



    firebase.auth().onAuthStateChanged(function(user) {
      if (user){
         var displayName = user.displayName;
         var email = user.email;
         var emailVerified = user.emailVerified;
         var photoURL = user.photoURL;
         var isAnonymous = user.isAnonymous;
         var uid = user.uid;
         var providerData = user.providerData;
        console.log(firebaseUser);
      //  singOut.classList.remove('hide');
      } else {
        console.log('not logged in');
      //  singOut.classList.add('hide');
      }
    });

  });*/
