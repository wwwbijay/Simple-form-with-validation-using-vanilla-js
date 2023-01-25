
(function(){

    const FullName = document.querySelector('#fullname');
    const UserName = document.querySelector('#username');
    const Mobilenum = document.querySelector('#mobileno');
    const salary = document.querySelector('#salary');
    const imagefile = document.querySelector('#file');
    const form = document.querySelector('#create');

    const letters = /^[a-zA-Z ]*$/;
    const uservalue = /^[A-Za-z0-9]*$/;
    const income = /^[0-9]+\.[0-9]+$/;



    const CheckFullName = () => {
        let valid = false;

        const name = FullName.value.trim();
        if (name == '') {
            showError(FullName, 'FullName cannot be blank.');

        } else if (!name.match(letters)) {
            showError(FullName, `FullName must be alphabet.`)
        } else {
            showSuccess(FullName);
            valid = true;
        }
        return valid;
    };
	
    const CheckUserName = () => {
        let valid = false;
        const user = UserName.value.trim();
        if (user == '') {
            showError(UserName, 'User Name cannot be blank.');
        } else if (!user.match(uservalue)) {
            showError(UserName, 'User Name should be alphnumeric.')
        } else {
            showSuccess(UserName);
            valid = true;
        }
        return valid;
    };
    const CheckMobileNumber = () => {
        let valid = false;
        const number = Mobilenum.value.trim();
        
        if (number == '') {
            showError(Mobilenum, 'Mobile Number cannot be blank.');
        } else {
            showSuccess(Mobilenum);
            valid = true;
        }
        return valid;
    };
    const CheckSalary = () => {
        let valid = false;
        const amount = salary.value.trim();
        if (amount == '') {
            showError(salary, 'Salary cannot be blank.');
        } else if (!amount.match(income)) {
            showError(salary, 'Salary must be digit with single dot.')
        } else {
            showSuccess(salary);
            valid = true;
        }
        return valid;
    };
    const CheckImage = () => {
        let valid = false;
        const image = imagefile.value.trim();
        if (image == '') {
            showError(imagefile, 'Image cannot be blank.');
        } else {
            showSuccess(imagefile);
            valid = true;
        }
        return valid;
    };
    const showError = (input, message) => {
        const formGroup = input.parentElement;
        formGroup.classList.remove('success');
        formGroup.classList.add('error');

        const error = formGroup.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the formGroup element
        const formGroup = input.parentElement;

        // remove the error class
        formGroup.classList.remove('error');
        formGroup.classList.add('success');

        // hide the error message
        const error = formGroup.querySelector('small');
        error.textContent = '';
    }
  

    const debounce = (fn, delay = 10) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };



    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isFullnameValid = CheckFullName(),
            isUserValid = CheckUserName(),
            isNumberValid = CheckMobileNumber(),
            isSalaryValid = CheckSalary(),
            isImageValid = CheckImage();

        let isFormValid = isFullnameValid &&
            isUserValid &&
            isNumberValid &&
            isSalaryValid &&
            isImageValid;

        if (isFormValid) {

        }
    });

    form.addEventListener( 'input', debounce(function (e) {
        switch (e.target.id) {
            case 'fullname':
                CheckFullName();
                break;
            case 'username':
                CheckUserName();
                break;
            case 'mobileno':
           
                CheckMobileNumber();
                break;
            case 'salary':
                CheckSalary();
                break;
            case 'file':
                CheckImage();
                break;
        }
    })
    );

    Mobilenum.addEventListener('keypress', function (e) {        
        
        const pattern = /^[0-9\.\-\+\(\)]{1,15}$/;
        let inputChar = String.fromCharCode(e.charCode);
        let canWrite  = pattern.test(e.target.value + inputChar);
 
        if(!e.target.value ){
            (!canWrite) ? e.preventDefault(): (e.target.value = '+977-') ;
        }else{
            (!canWrite) ? e.preventDefault():'';
        }
        //  let canWrite  = pattern.test(e.target.value + inputChar);
    });

})();