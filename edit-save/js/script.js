
var employees = [{
    profile: 'advik.jpg',
    firstName: 'Advik',
    lastName: 'Yadav',
    email: 'advik@gmail.com',
    phone: '7698543211',
    dob: '2022-03-19',
    gender: 'Male',
    language: ['Hindi', 'Marathi'],
    address: 'India'
},
{
    profile: 'sansa.jpg',
    firstName: 'Sansa',
    lastName: 'Stark',
    email: 'sansa@gmail.com',
    phone: '9876518521',
    dob: '2022-03-19',
    gender: 'Female',
    language: ['Hindi', 'Gujarati'],
    address: 'England'
},
{
    profile: 'tom.jpg',
    firstName: 'Tom',
    lastName: 'Cruise',
    email: 'tom@gmail.com',
    phone: '9875642311',
    dob: '2022-03-19',
    gender: 'Male',
    language: ['English', 'Marathi'],
    address: 'Russia'
},
{
    profile: 'arya.jpg',
    firstName: 'Arya',
    lastName: 'Stark',
    email: 'arya@gmail.com',
    phone: '987564951',
    dob: '2022-03-19',
    gender: 'Female',
    language: ['Hindi', 'Marathi', 'Gujarati'],
    address: 'India'
}
]
var editIndex;
$(document).ready(function(){
    createEmployeeTable(employees);
    $(document).on('click', '.edit', function(){

        $('#form').removeClass('hide');
        $('.table-area').addClass('hide');

        var ind = $(this).attr('data-index');
        var data = employees[ind];
        editIndex = ind;
        // console.log(data);

        $('#fname').val(data.firstName);
        $('#lname').val(data.lastName);
        $('#email').val(data.email);
        $('#phone').val(data.phone);
        $('#dob').val(data.dob);
        $('#address').val(data.address);

        var gen = $('input[name="gender"]');
        for(var i = 0; i<gen.length; i++){
            if(gen[i].value == data.gender){
                $(gen[i]).prop('checked', 'checked');
            }
        }


        var img = ['advik.jpg', 'sansa.jpg', 'tom.jpg', 'arya.jpg'];
        for(var i = 0; i< img.length; i++){
            if(img[i] == data.profile){
                $('.form__group img:nth-child('+(i+1)+')').addClass('brd');
            } else {
                $('.form__group img:nth-child('+(i+1)+')').removeClass('brd');
            }
        }


        var lang = $('input[type="checkbox"]');
        for(var i =0; i< lang.length; i++){

            if(data.language.indexOf(lang[i].value) != -1) {
                $(lang[i]).prop('checked', 'checked');
            } else {
                $(lang[i]).prop('checked', false);
            }
        }

    });
   
    $('#save').click(function(e){
        e.preventDefault();

        var langList = [];
        var checkboxList = $('input[type="checkbox"]:checked');
        for(var i = 0; i<checkboxList.length; i++){
            langList.push(checkboxList[i].value);
        }

        if(!$('#fname').val()) {
            alert('Please Enter First Name');
        } else if(!$('#lname').val()) {
            alert('Please Enter Last Name');
        } else if(!validateEmail($('#email').val())) {
            alert('Please Enter Valid Email Id');
        } else if(!$('#phone').val()) {
            alert('Please Enter Phone Number');
        } else if($('#phone').val().length != 10) {
            alert('Please Enter Valid Phone Number');
        }else if(!$('#address').val()) {
            alert('Please Enter Address');
        } else if(!langList.length) {
            alert('Please Select Your Languages');
        }
         else {
            var user = {
                firstName: $('#fname').val(),
                lastName: $('#lname').val() ,
                email: $('#email').val() ,
                phone: $('#phone').val() ,
                dob: $('#dob').val(),
                address: $('#address').val(),
                gender: $('input[name="gender"]:checked').val(),
                language: langList
            }
            user.profile = $('.form__group .brd').attr('src').split('/')[1];
            employees[editIndex] = user;
            createEmployeeTable(employees);

            $('#form').addClass('hide');
            $('.table-area').removeClass('hide');

        }
        
    });

    $('.form__group img').on('click', function(){
        $('.form__group img').removeClass('brd');
        $(this).addClass('brd');
    });

    $('#cancel').click(function(){
        $('#form').addClass('hide');
        $('.table-area').removeClass('hide');
    });

});

function createEmployeeTable(arr) {
    var _html = '';
    for(var i = 0; i< arr.length; i++){
        _html += '<tr><td>'+(i+1) +'</td><td><img src="images/'+arr[i].profile+'" class="profile-img" /></td><td>'+arr[i].firstName+'</td><td>'+arr[i].lastName+'</td><td>'+arr[i].email+'</td><td>'+arr[i].phone+'</td><td>'+arr[i].dob+'</td><td>'+arr[i].gender+'</td><td>'+arr[i].language+'</td><td>'+arr[i].address+'</td><td><i class="fa fa-edit edit" data-index="'+(i)+'"></i></td></tr>';
    }

    $('#table tbody').html(_html);
}



function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };