var x = 1;
var y = 1;

let app = new Vue({
    el:'#app',
    data:{
        //signUp user data
        username: undefined,
        susername: localStorage.getItem('user'),
        password: undefined,
        cpassword: '',

        //signIn user data
        logUser: undefined,
        logPass: undefined,

        //cards
        titleCard: undefined,
        textCard: undefined,

        titleCard2: undefined,
        textCard2: undefined,

        titleCard3: undefined,
        textCard3: undefined,

        titleCard4: undefined,
        textCard4: undefined
    },
    methods: {
        //form 

        showForm:()=> {
            let login = document.querySelector('#login');
            let register = document.querySelector('.cadastro');

            login.classList.toggle('none');
            register.classList.toggle('none');
        },

        //create user

        newUser:()=> {
            localStorage.setItem('user', app.username);
            localStorage.setItem('pass', app.password);

            let firstLayout = document.querySelector('.indexArea');
            let annArea = document.querySelector('#annotations');
            let login = document.querySelector('#login');
            let register = document.querySelector('.cadastro');
            let user = [app.username, app.password, app.cpassword];

            if(user[1] != user[2]) {
                alert('The password and password confirmation must be the same.');
                return false;
            }

            firstLayout.classList.toggle('none');
            annArea.classList.toggle('none');

            login.classList.toggle('none');
            register.classList.toggle('none');
        },

        //login user

        login:()=> {

            if(app.logUser != localStorage.getItem('user') || app.logPass != localStorage.getItem('pass')) {
                alert('User not registered');
                return false;
            }

            let firstLayout = document.querySelector('.indexArea');
            let annArea = document.querySelector('#annotations');

            firstLayout.classList.toggle('none');
            annArea.classList.toggle('none');
        },

        logout:()=> {
            let firstLayout = document.querySelector('.indexArea');
            let annArea = document.querySelector('#annotations');

            firstLayout.classList.toggle('none');
            annArea.classList.toggle('none');
        },


        //cards

        showCard:()=> {
            y++

            let formCard = document.querySelectorAll('.formCard');
            formCard[y-2].classList.remove('none');
        },
        
        showAnn:()=> {

            x++

            if(app.textCard == undefined) {
                let textArea = document.querySelector('textarea');
                textArea.classList.add('bRed');
                return false;
            }
            else if(app.titleCard == undefined) {
                app.titleCard = 'Sem titulo';
            }

            let card = document.querySelectorAll('.card');
            let formCard = document.querySelectorAll('.formCard');
            let ann = document.querySelectorAll('.saved');
            formCard[x-2].classList.add('none');
            ann[x-2].classList.remove('none');

            if(x > 4) {
                return false;
            }
            card[x-1].classList.remove('none');
        },

        //menu mobile

        showMenu:()=> {
            let btn = document.querySelector('#menumobile');
            let profile = document.querySelector('.profile');

            profile.classList.toggle('show');
        }
    }
});

