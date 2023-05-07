function BackIt(id){
    document.getElementById('CanWeDelete').style.display = 'block';
    document.getElementById('CanWeDelete').setAttribute('idToDelete', id);

}

function DeletePost(e){
    event.preventDefault(); 
    document.getElementById('CanWeDelete').style.display = 'none';
    var idToDelete = document.getElementById('CanWeDelete').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();
}

function NoDelete(){
    document.getElementById('CanWeDelete').style.display = 'none';
    event.preventDefault(); 
}