import './footer.scss'



function Footer() {
    return(
        <div className='footer'>
            <p className='footer__p'>Puedes ver nuestros proyectos en <a className= 'footer__a' href="https://github.com/Rubenprada">Rubén Prada</a> y <a className='footer__b' href="https://github.com/josegs72">Jose Luis Gonzalez</a></p>
        </div>
    )
}

export default Footer;


/*La primera línea importa un archivo llamado 'footer.scss'. Este es probablemente un archivo que contiene estilos para el componente de pie de página.
El siguiente bloque define un componente funcional llamado Pie de página, que devuelve un elemento div con una clase de 'pie de página'.
Dentro del elemento div, hay un elemento de párrafo con una clase de 'footer__p'. Este elemento contiene texto y dos elementos de anclaje con las clases 'footer__a' y 'footer__b' respectivamente.
Estos elementos ancla contienen enlaces a las páginas de Github de Rubén Prada y José Luis González.
Finalmente, el componente se exporta como exportación predeterminada, lo que permite importarlo y usarlo en otras partes de la aplicación.*/