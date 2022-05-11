function showDefine(){
    var divDefinition =  document.getElementById('defininitiondiv');
    console.log(divDefinition)
    var pDefinition = document.getElementById('defineBlockchain')
    console.log(pDefinition)
    var open = false
    divDefinition.addEventListener('click', function(){
        if(open){
            divDefinition.className = 'testing';
            divDefinition.id = 'clicked';
            pDefinition.className = 'pdefinitionAnimation';
            $(".pdefinitionAnimation").show();
            
            
        }else{
            divDefinition.className = 'iconify blockchainicon2';
        }
    })
    open = !open;

}
// function hideDefine(){
//     $(".pdefinitionAnimation").hide();
//     $('.button-container-1').hide();
//     var clickedIcon = document.getElementById('clicked')
//     clickedIcon.className = 'defininitiondiv'


// }

function setup(){
    console.log("this went")
    $(".defineBlockchain").hide();
    // $('.button-container-1').hide();
    showDefine();
    // $('.button-container-1').click(hideDefine);
}
$(document).ready(setup)