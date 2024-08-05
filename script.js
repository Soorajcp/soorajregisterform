$("#register-form").validate({
    
    rules: {
        name: {
            required: true,
            maxlength:50,
            minlength:3
        },
        email: {
            required: true,
        },
        phone: {
            required: true,
            maxlength:14,
            minlength:10
        },
        age :{
            required: true, 
        },
        gender: {
            required: true,
            maxlength:15,
            minlength:4
        },
        adress :{
            required: false,
            maxlength:50
        }
    },
    messages: {
        name: {
            required: "this field is required",
            maxlength: "please enter no more thran 50 charactes",
            minlength: "please enter atleast 3 characters"
        },
        email: {
            required: "this is field is required"
        },
        phone: {
            required: "this field is required",
            maxlength: "please enter no more thran 14 charactes",
            minlength: "please enter atleast 10 characters"
        },
        
        gender: {
            required: "this field required",
            maxlength: "please enter no more thran 15 charactes",
            minlength: "please enter atleast 4 characters"
        },
        adress: {
            maxlength: "please enter no more thran 50 charactes"
        }
        
    },
    submitHandler: function(form) {
        alert("Your form submitted successfully!");
        form.submit();
    }
});
