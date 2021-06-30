let div = $('div');
console.log(div);
console.log(div[0]);

$('img.best-image').on('click',function(){
    let img =  `
    <a href="http://facebook.com">$(this)</a>
    `
    this = img;
    // window.open("http://facebook.com");
});

function Login() {
    let username = $('.username').val();
    let password = $('.password').val();
    console.log(username, password);
    let div = ``;
    if(username != '' && password != ''){
        div = `
        username: ${username}
        password: ${password}
        `
    } else{
        div = `
        Phải nhập username và password
        `
    }

    $(".test-print").html(div);


    $('.SuperButton').on('click', function(){
        $('body').css({'background': 'green'});
    });

}

function ChangeSize(){
    $('img.best-image').css({'width' : '100%'});
    // $('img.best-image').attr('style','width : 100%');
}

// function OpenFacebook(){
//     window.open("http://facebook.com");
// }