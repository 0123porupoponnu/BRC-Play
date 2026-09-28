
const drawer=document.getElementById('drawer');
function toggleMenu(){drawer.classList.toggle('open')}
function show(id){
 document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 drawer.classList.remove('open');
}
