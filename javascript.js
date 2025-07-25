console.log("hello");
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume1,pdf.pdf'; 
  link.download = 'Parth_Patel_Resume.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
var sidemenu= document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right="0";
}
function closenmenu(){
  sidemenu.style.right="-200px";
}
function openpage() {
  window.location.href = "913e9d17-ee26-43ac-9433-effe6e1e8d6a.jpeg";
}
