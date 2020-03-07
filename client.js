$(readyNow);

let totalMonthly = 0;

function readyNow(){
    $('#submitButton').on('click', submitEmployee);
    $('#employeeList').on('click', '#removeButton', removeEmployee);
    displayTotalMonthly();
}

function submitEmployee(event){
    event.preventDefault();
    let el = $('#employeeList');
    el.append(`<tr><td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td><td>${$('#id').val()}</td>
    <td>${$('#title').val()}</td><td>${$('#annualSalary').val()}</td>
    <td><button id="removeButton" class="btn btn-dark">Remove</button></td></tr>`);
    totalMonthly += Number($('#annualSalary').val())/12;
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    displayTotalMonthly();
}

function displayTotalMonthly(){
    let el = $('#total');
    el.empty();
    el.append(totalMonthly);
    if(totalMonthly > 20000){
        $('#total').addClass('red');
    }
    else{
        $('#total').removeClass('red');
    }
}

function removeEmployee(){
    $(this).parent().parent().remove();
}