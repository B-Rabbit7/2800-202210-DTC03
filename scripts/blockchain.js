function showDefine(){
    var divDefinition =  document.getElementById('definitiondiv');
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
function hideDefine(){
        console.log("this code ran")
    

}
// }

function setup(){
    console.log("this went")
    $(".defineBlockchain").hide();
    // $('.button-container-1').hide();
    showDefine();
    $(".testing").click(hideDefine)
}
$(document).ready(setup)