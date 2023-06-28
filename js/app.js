/*    ************************************************
 *    **    DECLARACIÓN DE CONSTANTES Y VARIABLES   **
 *    ************************************************
 */

//Obtiene todos los botones del menu normal
const btnSobreMi = document.getElementById("btnSobreMi");
const btnFormacionAcademica = document.getElementById("btnFormacionAcademica");
const btnHabilidades = document.getElementById("btnHabilidades");
const btnProyectos = document.getElementById("btnProyectos");
const btnContacto = document.getElementById("btnContacto");

//Obtiene todos los botones del menu responsive
const btnSobreMi2 = document.getElementById("btnSobreMi2");
const btnFormacionAcademica2 = document.getElementById("btnFormacionAcademica2");
const btnHabilidades2 = document.getElementById("btnHabilidades2");
const btnProyectos2 = document.getElementById("btnProyectos2");
const btnContacto2 = document.getElementById("btnContacto2");

//Obtiene el boton para hacer scroll hacia arriba
const btnScrollTop = document.getElementById("btnScrollTop");

//Obtiene los contenedores a donde va a hacer scroll
const contAbout = document.getElementById("about");
const contEducation = document.getElementById("education");
const contAbilities = document.getElementById("abilities");
const contProjects = document.getElementById("projects");
const contContact = document.getElementById("contact");

//Obtiene el menu desplegable (responsive)
const menuDesplegable = document.getElementById("navbar");

//Obtiene los botones para hacer funcionar el menu responsive
const btnAbrirMenu = document.getElementById("openMenuResponsive");
const btnCerrarMenu = document.getElementById("closeMenuResponsive");

//Obtiene los txt para animar el formulario
const inputs = document.querySelectorAll( '.form__field input' );

//Declaracion de la variable para obtener la posicion de contenedor
let containerPosition = 0;

/*    **********************************************************
 *    **    FIN DE LA DECLARACIÓN DE CONSTANTES Y VARIABLES   **
 *    **********************************************************
 */
/*    *********************************************************
 *    **    EVENTOS DE LOS BOTONES PARA EL MENU RESPONSIVE   **
 *    *********************************************************
 */

    btnAbrirMenu.addEventListener('click', ()=>{
        menuDesplegable.style.right = 0;
    });

    btnCerrarMenu.addEventListener('click', ()=>{
        menuDesplegable.style.right = "-100%";
    });

/*    ********************************************************************
 *    **    FIN DE LOS EVENTOS DE LOS BOTONES PARA EL MENU RESPONSIVE   **
 *    ********************************************************************
 */

function HacerScrollAlInicio(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function HacerScrollSobreMi(){
    containerPosition = contAbout.getBoundingClientRect().top + window.pageYOffset - 15;

    window.scrollTo({top: containerPosition, behavior: 'smooth'});
}

function HacerScrollFormacionAcademica(){
    containerPosition = contEducation.getBoundingClientRect().top + window.pageYOffset - 15;
    
    window.scrollTo({top: containerPosition, behavior: 'smooth'});
}

function HacerScrollHabilidades(){
    containerPosition = contAbilities.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({top: containerPosition, behavior: 'smooth'});
}

function HacerScrollProyectos(){
    containerPosition = contProjects.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({top: containerPosition, behavior: 'smooth'});
}

function HacerScrollContacto(){
    containerPosition = contContact.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({top: containerPosition, behavior: 'smooth'});
}

/*    *************************************************
 *    **    FIN DE LAS FUNCIONES PARA HACER SCROLL   **
 *    *************************************************
 */
/*    ***************************************************
 *    **    EVENTOS PARA LOS BOTONES DEL MENU NORMAL   **
 *    ***************************************************
 */

    btnSobreMi.addEventListener('click', ()=>{
        HacerScrollSobreMi();
    });

    btnFormacionAcademica.addEventListener('click', ()=>{
        HacerScrollFormacionAcademica();
    });

    btnHabilidades.addEventListener('click', ()=>{
        HacerScrollHabilidades();
    });

    btnProyectos.addEventListener('click', ()=>{
        HacerScrollProyectos();
    });

    btnContacto.addEventListener('click', ()=>{
        HacerScrollContacto();
    });

/*    **************************************************************
 *    **    FIN DE LOS EVENTOS PARA LOS BOTONES DEL MENU NORMAL   **
 *    **************************************************************
 */
/*    *******************************************************
 *    **    EVENTOS PARA LOS BOTONES DEL MENU RESPONSIVE   **
 *    *******************************************************
 */

btnSobreMi2.addEventListener('click', ()=>{
    menuDesplegable.style.right = "-100%";
    HacerScrollSobreMi();
});

btnFormacionAcademica2.addEventListener('click', ()=>{
    menuDesplegable.style.right = "-100%";
    HacerScrollFormacionAcademica();
});

btnHabilidades2.addEventListener('click', ()=>{
    menuDesplegable.style.right = "-100%";
    HacerScrollHabilidades();
});

btnProyectos2.addEventListener('click', ()=>{
    menuDesplegable.style.right = "-100%";
    HacerScrollProyectos();
});

btnContacto2.addEventListener('click', ()=>{
    menuDesplegable.style.right = "-100%";
    HacerScrollContacto();
});

/*   ******************************************************************
*    **    FIN DE LOS EVENTOS PARA LOS BOTONES DEL MENU RESPONSIVE   **
*    ******************************************************************
*/
/*    ****************************************************
 *    **    ANIMACION DE LOS TXT DEL FORM DE CONTACTO   **
 *    ****************************************************
 */

inputs.forEach( input => {
	//cuando entramos en el input 
	input.onfocus = ( ) => {
		//al elemento anterior (el span) le agregamos la clase que la reubica en top
		input.previousElementSibling.classList.add( 'reubicar' );
	}
	
	//cuando salimos del input
	input.onblur = ( ) => {
		//si no hay texto, le quitamos la clase reubicar, 
		//para que se superponga con el input
		if( input.value.trim( ).length == 0 )
		input.previousElementSibling.classList.remove( 'reubicar' );
	}
} );

/*    **************************************************************
 *    **    FIN DE LA ANIMACION DE LOS TXT DEL FORM DE CONTACTO   **
 *    **************************************************************
 */

btnScrollTop.addEventListener('click', ()=>{
    HacerScrollAlInicio();
});