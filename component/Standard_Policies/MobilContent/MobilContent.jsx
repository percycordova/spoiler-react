import style from "./MobilContent.module.scss"
import React from "react";

const MobilContent = () => {

    const openMobil = function (e){
      let targetElement = e.target;
      targetElement.classList.toggle("active");
      let panel = targetElement.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    };

    return(
        <>
            <div className={style['MobilConttent']}>
                <button className={style['accordion']} id = "sticky-qs" onClick={openMobil}>
                  Quiénes somos              
                </button>
                <div className={style['panel']}>
                  <h2>Quiénes somos</h2>

                  <h3>Grupo editorial La República</h3>

                  <p>El Grupo La República es una empresa periodística que edita diarios, sus respectivos portales web y redes sociales, televisión por internet y diversos productos editoriales y  de mercadeo.</p>

                  <h3>Visión</h3>
                  <p>Ser el grupo editorial de mayor influencia del país, transmitiendo nuestros valores, reafirmando nuestra vocación de servicio e incursionando en ámbitos empresariales innovadores.</p>

                  <h3>Misión</h3>
                  <p>Editar publicaciones con una línea veraz y comprometida, agregando valor a la comunidad y a nuestros trabajadores a través de un grupo institucionalizado.</p>

                  <div className={style['set-websites']}>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a  className={style['anchor-text']} href="https://larepublica.pe/">La República</a>
                      </div>
                      <div className={style['side-right']}>
                          <a href="https://www.facebook.com/larepublicape/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                          </a>
                          <a href="https://twitter.com/larepublica_pe" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/twitter.svg" alt="icon twitter"/>
                          </a>
                          <a href="https://www.instagram.com/larepublica_pe/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                          </a>
                          <a href="https://www.youtube.com/user/larepublicaweb2" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                          </a>
                          <a href="https://www.tiktok.com/@larepublica.pe?lang=es" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/tiktok.svg" alt="icon twitter"/>
                          </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} href="https://larepublica.pe/domingo/">Suplemento Domingo</a>
                      </div>
                      <div className={style['side-right']}>
                          <a href="https://www.facebook.com/Domingo.LR/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                          </a>
                          <a href="https://twitter.com/Domingo_LR" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/twitter.svg" alt="icon twitter"/>
                          </a>
                          <a href="https://www.instagram.com/larepublica_pe/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                          </a>
                          <a href="https://www.youtube.com/user/larepublicaweb2" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                          </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="noopener noreferrer" href="https://impreso.larepublica.pe/impresa">Ediciones e impreso | Lima</a>
                      </div>
                      <div className={style['side-right']} />
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="noopener noreferrer" href="https://impreso.larepublica.pe/impresa">Ediciones e impreso | Norte</a>
                      </div>
                      <div className={style['side-right']}>
                        <a href="https://www.facebook.com/larepublicanorte/" target="_blank" rel="nofollow noopener noreferrer">
                            <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                        </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="noopener noreferrer" href="https://impreso.larepublica.pe/impresa">Ediciones e impreso | Sur</a>
                      </div>
                      <div className={style['side-right']}>
                        <a href="https://web.facebook.com/LaRepublicaSur" target="_blank" rel="nofollow noopener noreferrer">
                            <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                        </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="noopener noreferrer" href="https://rtv.pe/">RTV</a>
                      </div>
                      <div className={style['side-right']}>
                          <a href="https://www.facebook.com/RTVPE/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                          </a>
                          <a href="https://www.instagram.com/rtvperu/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                          </a>
                          <a href="https://www.youtube.com/user/larepublicaweb2" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                          </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="nofollow noopener noreferrer" href="https://libero.pe/">Líbero</a>
                      </div>
                      <div className={style['side-right']}>
                          <a href="https://www.facebook.com/diariolibero/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                          </a>
                          <a href="https://twitter.com/liberoperu" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/twitter.svg" alt="icon twitter"/>
                          </a>
                          <a href="https://www.instagram.com/diario.libero/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                          </a>
                          <a href="https://www.youtube.com/channel/UCk2OZrA0E6q6xp4bBKtf9KA" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                          </a>
                          <a href="https://www.tiktok.com/@larepublica.pe?lang=es" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/tiktok.svg" alt="icon twitter"/>
                          </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="nofollow noopener noreferrer" href="https://elpopular.pe/">El Popular</a>
                      </div>
                      <div className={style['side-right']}>
                          <a href="https://www.facebook.com/elpopular.pe/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                          </a>
                          <a href="https://twitter.com/elpopular_pe" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/twitter.svg" alt="icon twitter"/>
                          </a>
                          <a href="https://www.instagram.com/elpopular_pe/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                          </a>
                          <a href="https://www.youtube.com/channel/UCC25ArAc6QI7yj1UQG8lqxA" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                          </a>
                          <a href="https://www.tiktok.com/@elpopular.pe?lang=es" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/tiktok.svg" alt="icon twitter"/>
                          </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="nofollow noopener noreferrer" href="https://wapa.pe/">Wapa</a>
                      </div>
                      <div className={style['side-right']}>
                          <a href="https://www.facebook.com/RevistaWapa" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                          </a>
                          <a href="https://twitter.com/RevistaWAPA" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/twitter.svg" alt="icon twitter"/>
                          </a>
                          <a href="https://www.instagram.com/revistawapa/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                          </a>
                          <a href="https://www.youtube.com/channel/UC6gN0vQ9HJjR9DYGTh8tMHQ" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                          </a>
                          <a href="https://www.tiktok.com/@revistawapa?lang=es" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/tiktok.svg" alt="icon twitter"/>
                          </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                      <div className={style['side-left']}>
                        <a className={style['anchor-text']} target="_blank" rel="nofollow noopener noreferrer" href="https://buenazo.pe/">Buenazo</a>
                      </div>
                      <div className={style['side-right']}>
                          <a href="https://www.facebook.com/larepublicabuenazo/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                          </a>
                          <a href="https://www.instagram.com/buenazo/" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                          </a>
                          <a href="https://www.youtube.com/channel/UCVjcKcSVeW5dbn6Y_hdFY-w" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                          </a>
                          <a href="https://www.tiktok.com/@buenazo.peru?lang=es" target="_blank" rel="nofollow noopener noreferrer">
                              <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/tiktok.svg" alt="icon twitter"/>
                          </a>
                      </div>
                    </div>
                    <div className={style['set-cell-2']} style={{backgroundColor:"#f8f8f8"}}>
                    <div className={style['side-left']}>
                      <a className={style['anchor-text']} target="_blank" rel="nofollow noopener noreferrer" href="https://aweita.larepublica.pe/">Aweita</a>
                    </div>
                    <div className={style['side-right']}>
                        <a href="https://www.facebook.com/aweita/" target="_blank" rel="nofollow noopener noreferrer">
                            <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/facebook.svg" alt="icon facebook"/>
                        </a>
                        <a href="https://www.instagram.com/aweita_tv/" target="_blank" rel="nofollow noopener noreferrer">
                            <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/instagram.svg" alt="icon instagram"/>
                        </a>
                        <a href="https://www.youtube.com/user/aweita" target="_blank" rel="nofollow noopener noreferrer">
                            <img loading="lazy" src="https://cdn.larepublica.pe/images/content/default/svg/icon/youtube.svg" alt="icon youtube"/>
                        </a>
                    </div>
                  </div>
                  </div>
                </div>
                <button className={style['accordion']} id = "sticky-pe" onClick={openMobil}>Principios éticos 
                </button>
                <div className={style['panel']}>
                  <h2>Principios éticos</h2>
                  <p>
                    Nuestros valores nos ayudan a identificar lo que queremos ser
                    y hacer, son la base de nuestra credibilidad y dirigen nuestra
                    conducta en nuestro centro de labores con nuestros compañeros
                    de trabajo, así como la manera en que nos reconozca la
                    audiencia como parte de la familia de La República.
                  </p>
                  <ul>
                    <li>
                      Integridad: actuar con respeto, honestidad y compromiso.
                    </li>
                    <li>
                      Respeto: reconocer, apreciar y valorar mi persona, así como
                      la de los demás y a mi entorno.
                    </li>
                    <li>
                      Veracidad: capacidad de decir siempre la verdad y ser
                      sincero, franco y actúa de buena fe. No sólo en lo cotidiano
                      sino también en la relación con los demás.
                    </li>
                  </ul>
                  <p>
                    Por otro lado, se debe fijar parámetros en cuanto al
                    comportamiento de los integrantes de La República frente a las
                    audiencias y anunciantes. Se entiende como audiencias al
                    conjunto de personas que reciben las noticias a través de
                    cualquiera de nuestros medios de comunicación (impreso,
                    digital, TV). En otras palabras, nuestro público.
                  </p>
                  <p>
                    Por otro lado, el anunciante es toda persona o empresa que
                    realiza una publicación de anuncia en cualquiera de nuestros
                    medios.
                  </p>
                  <ul>
                    <li>
                      La principal función del personal de La República, en
                      especial del área periodística, es la de informar a sus
                      audiencias. Para ello, debe recopilar los hechos de la
                      noticia de acuerdo a cómo sucedieron. Sólo en el caso de las
                      líneas de opinión los autores podrán brindar sus
                      colaboraciones y/o columnas con sus puntos de vista
                      personales.
                    </li>
                    <li>
                      Las noticias y opiniones brindadas por nuestros periodistas
                      y colaboradores / columnistas deben estar comprobadas
                      apropiadamente. La finalidad es evitar denuncias de las
                      personas mencionadas en dichas notas u opiniones, evitando
                      que afecten la credibilidad del medio de comunicación y la
                      empresa GLRP.
                    </li>
                    <li>
                      El personal de periodística no debe realizar menciones o
                      publicidad no autorizada o coordinada con el área de
                      Comercial bajo el formato de nota periodística.
                    </li>
                  </ul>
                  <p>
                  A fin de mantener la neutralidad en el manejo de la información, el medio garantiza mantener una línea independiente, sin apego a partidos políticos. Además, asegura el compromiso de sus periodistas en la gestión responsable de la información que trabajen, sin sesgos ni preferencias de ningún tipo.
                  </p>
                  <p>
                  La base para un trabajo no partidista es aplicar el mismo criterio en cada artículo, aplicando la misma metodología. Es decir, se somete cualquier información, provenga de donde provenga, al mismo escrutinio, a fin de obtener conclusiones válidas.
                  </p>
                  <p>
                  Este parámetro se aplica también a la hora de buscar fuentes, especialmente entrevistados, a fin de que comprobar, antes de ser consultados, si estos pertenecen a algún partido político, evitando así que puedan emitir una declaración sesgada.
                  </p>
                  <p>
                  Una vez redactado el texto, se somete a una serie de filtros (coordinador, mesa de edición y corrección de estilo) que tienen, como parte de su función, la obligación de revisar si la información está inclinada indebidamente.
                  </p>
                  <p>
                  Finalmente, toda nota publicada es libre de ser reclamada por cualquier lector que considere se está vulnerando el principio de neutralidad antes mencionado. A partir del reclamo se somete a un proceso de revisión y, de ser el caso, se corrige informando debidamente los cambios que se realicen en el texto.
                  </p> 
                </div>

                <button className={style['accordion']} id = "sticky-eeyf" onClick={openMobil}>Estructura empresarial y fundación 
                </button>
                <div className={style['panel']}>
                    <h2>Estructura empresarial y fundación</h2>
                    <p>
                    El diario La República fue fundado el 16 de noviembre de 1981
                    por el ingeniero Gustavo Mohme Llona. El medio pertenece al
                    Grupo La República Publicaciones S.A., empresa familiar cuyo
                    accionista mayoritario es Gustavo Mohme Seminario.
                    </p>
                    <p>
                    <span>Presidente de directorio:</span> Gustavo Mohme Castro
                    </p>
                    <p>
                    <span>Gerente general:</span> Rubén Ahomed Chávez
                    </p>
                    <p>
                    <span>Director periodístico:</span> Gustavo Mohme Seminario
                    </p>
                    <p>
                    <span>Subdirector periodístico:</span> Carlos Castro Cruzado
                    </p>
                    <p>
                    <span>Editor general web:</span> Rider Bendezú Huapaya
                    </p>
                    <p>Historia del diario La República.</p>
                    <ul>
                      <li><a href="https://larepublica.pe/domingo/2019/11/17/la-republica-origen-y-madurez-de-un-diario/">La República: Origen y madurez de un diario</a></li>
                      <li><a href="https://larepublica.pe/sociedad/1473231-25-anos-historia/">25 años de historia</a></li>
                      <li><a href="https://larepublica.pe/sociedad/674192-la-republica-un-diario-que-apuesta-por-la-lectura/">La República, un diario que apuesta por la lectura</a></li>
                    </ul>
                </div>

                <button className={style['accordion']} id="sticky-ed" onClick={openMobil}>Equipo Editorial 
                </button>
                <div className={style['panel']}>
                  <h2>Equipo Editorial</h2>
                  
                  <h3>La República, El Popular y Líbero</h3>
                  <p>El grupo editorial La República Publicaciones publica tres periódicos de circulación diaria. La República da amplia cobertura a la política, la economía, la sociedad, la cultura y el análisis de columnistas acerca de todo lo que acontece en el país y el mundo. Líbero con sus contenidos deportivos y El Popular de espectáculos, policiales y entretenimiento, sobre todo.</p>
                  <p>Los contactos de las sedes regionales son los encargados de los tres medios.</p> 
                  <p>
                    <span>Director periodístico:</span> Gustavo Mohme Seminario <strong><a href="mailto:director@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">director@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Subdirector periodístico:</span> Carlos Castro Cruzado <strong><a href="mailto:subdirector@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">subdirector@glr.pe</a></strong>
                  </p>
                  <h3 style={{color: "#ff0102", margin: "40px 0 10px", fontSize: "24px"}}>Diario La República</h3>
                  <h4>Sede central-Lima</h4>
                  <p>Jr. Camaná 320 en el centro histórico de Lima.</p>
                  <p>
                    <span>Política:</span> Juan Álvarez <strong><a href="mailto:politica@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">politica@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Opinión:</span> Roberto Ochoa <strong><a href="mailto:cartas@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">cartas@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Economía:</span> Rumi Cevallos <strong><a href="mailto:economia@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">economia@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Sociedad:</span> Luis Velásquez <strong><a href="mailto:sociedad@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">sociedad@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Unidad de Investigación:</span> Ángel Páez <strong><a href="mailto:investigaciones@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">investigaciones@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Deportes:</span> Milagros Crisanto <strong><a href="mailto:deportes@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">deportes@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Espectáculos:</span> Jannina Eyzaguirre <strong><a href="mailto:espectaculos@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">espectaculos@glr.pe</a></strong>
                  </p>
                  <h4>Sede regional del norte del Perú-Chiclayo</h4>
                  <p>Av. Salaverry #600, Chiclayo.</p>
                  <p>
                    <span>Teléfono:</span> 074-481030, anexo 2116
                  </p>
                  <p>
                    <span>Editor regional:</span> Erick Bazán <strong><a href="mailto:erick.bazan@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">erick.bazan@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Jefe de informaciones:</span> Erick Bazán <strong><a href="mailto:yoyse.machuca@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">yoyse.machuca@glr.pe</a></strong>
                  </p>

                  <h4>Sede regional del sur del Perú-Arequipa</h4>
                  <p>
                    <span>Editor regional:</span> Juan Carlos Soto <strong><a href="mailto:juan.soto@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">juan.soto@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Jefe de informaciones:</span> Carlos Herrera <strong><a href="mailto:carlos.herrera@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">carlos.herrera@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Edición digital:</span> Claudia Beltrán <strong><a href="mailto:claudia.beltran@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">claudia.beltran@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Deportes:</span> Jorge Jiménez <strong><a href="mailto:jorge.jimenez@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">jorge.jimenez@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Policiales:</span> Abad Ventura <strong><a href="mailto:abad.ventura@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">abad.ventura@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Encargado redacción Puno:</span> Kleber Sánchez <strong><a href="mailto:kleber.sanchez@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">kleber.sanchez@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Encargada redacción Cusco:</span> Zaida Tecsi <strong><a href="mailto:jony.tecsi@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">jony.tecsi@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Encargada redacción Tacna:</span> Liz Ferrer <strong><a href="mailto:liz.ferrer@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">liz.ferrer@glr.pe</a></strong>
                  </p>

                  <h4>Sede regional del oriente del Perú-Iquitos</h4>
                  <p>
                    <span>Editora regional:</span> Gisela Vásquez Isuiza <strong><a href="mailto:gisela.vasquez@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">gisela.vasquez@glr.pe</a></strong>
                  </p>

                  <h3 style={{color: "#ff0102", margin: "40px 0 10px", fontSize: "24px"}}>Diario El Popular</h3>
                  <p>El Popular de política, farándula, policiales y entretenimiento.</p>
                  <p>
                    <span>Director:</span> Alan Morales <strong><a href="mailto:alan.morales@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">alan.morales@glr.pe</a></strong> y <strong><a href="mailto:elpopular@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">elpopular@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Editor general:</span> Omar Farfán <strong><a href="mailto:omar.farfan@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">omar.farfan@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Edición digital y redes:</span> Giancarlo Ramírez <strong><a href="mailto:giancarlo.ramirez@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">giancarlo.ramirez@glr.pe</a></strong> 
                  </p>
                  <p>
                    <span>Editor gráfico:</span> Arturo Pérez <strong><a href="mailto:arturo.perez@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">arturo.perez@glr.pe</a></strong>
                  </p>

                  <h3 style={{color: "#ff0102", margin: "40px 0 10px", fontSize: "24px"}}>Diario Líbero</h3>
                  <p>Diario deportivo y entretenimiento.</p>
                  <p>
                    <span>Director:</span> Carlos Salinas <strong><a href="mailto:carlos.salinas@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">carlos.salinas@glr.pe</a></strong> y <strong><a href="mailto:libero@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">libero@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Editora:</span> Paula Díaz <strong><a href="mailto:paula.diaz@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">paula.diaz@glr.pe</a></strong>
                  </p>

                  <h3 style={{color: "#ff0102", margin: "40px 0 10px", fontSize: "24px"}}>RTV</h3>
                  <p>Publicación de información audivisual (análisis políticos, noticiero, medicina y salud, ciencia y tecnología) vía streaming mediante las redes sociales.</p>
                  <p>
                    <span>Director:</span> Augusto Álvarez Rodrich <strong><a href="mailto:alvarezrodrich@gmail.com?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">alvarezrodrich@gmail.com</a></strong> 
                  </p>
                  <p>
                    <span>Productora general:</span> Ruby Bautista Juarez <strong><a href="mailto:ruby.bautista@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">ruby.bautista@glr.pe</a></strong> y <strong><a href="mailto:produccion.rtv@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">produccion.rtv@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Productora de programas:</span> Edith Lázaro <strong><a href="mailto:edith.lazaro@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">edith.lazaro@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Productora de programas:</span> Inés Llinás <strong><a href="mailto:inesrepublica@gmail.com@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">inesrepublica@gmail.com@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Jefe de nuevas tecnologías / investigación y desarrollo:</span> Alfieri Nocce <strong><a href="mailto:edith.lazaro@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">edith.lazaro@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Director de cámaras / Jefe del switcher:</span> Rodolfo Seminario <strong><a href="mailto:edith.lazaro@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">edith.lazaro@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Encargada de distribución y redes sociales:</span> Esther Torres <strong><a href="mailto:delia.torres@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">delia.torres@glr.pe</a></strong>
                  </p>
                  <p>
                    <span>Coordinadora de editores posproducción:</span> Laly Chávarry <strong><a href="mailto:adelaida.chavarry@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">adelaida.chavarry@glr.pe</a></strong>
                  </p>

                  <h3 style={{color: "#ff0102", margin: "40px 0 10px", fontSize: "24px"}}>Wapa</h3>
                  <p>Revista de moda, belleza, espectáculos, el bienestar y la salud familiar.</p>
                  <p>
                    <span>Coordinadora Web:</span> Yuriko Mitsuko Cabeza Aquino <strong><a href="mailto:yuriko.cabeza@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">yuriko.cabeza@glr.pe</a></strong>
                  </p>
                </div>
                
                <button className={style['accordion']} id = "sticky-delr" onClick={openMobil}>Diversidad en la redacción 
                </button>
                <div className={style['panel']}>
                    <h2>Diversidad en la redacción</h2>
                    <p>
                    A la par de la implementación del enfoque de género en los
                    contenidos periodísticos, se fortaleció la diversidad dentro
                    de la estructura jerárquica de la web, aunque ya se contaba
                    con el aporte de mujeres en la toma de decisiones a lo largo
                    de la existencia de la misma.
                    </p>
                    <p>
                    Además de la inclusión de una Editora de Género, con el paso
                    del tiempo hemos trabajado por mantener la diversidad y
                    equidad de género tanto en la mesa de edición web (6 de sus 11
                    miembros son mujeres) como en la de coordinadores de sección
                    (7 de 13 coordinadores son mujeres), siendo todos y cada uno
                    de estos integrantes vitales en la toma de decisiones del
                    medio.
                    </p>
                    <p>
                    Asimismo, en la redacción web está conformada por 60 mujeres y
                    66 hombres.
                    </p>
                </div>

                <button className={style['accordion']} id="sticky-rdv" onClick={openMobil}>Revisión de datos y verificación </button>
                <div className={style['panel']}>
                  <h2>Revisión de datos y verificación</h2>
                  <p>Todo periodista de La República está obligado a verificar la información que recibe. Recabar los datos, indagar por información complementaria, recoger todas las versiones y narrar los hechos de forma fáctica es el proceso que debe formar parte de la rutina diaria de cada redactor, a fin de entregar un material de calidad y correctamente contextualizada a sus lectores.</p>
                  <p>No está permitida la interpretación en las notas informativas. En la redacción de La República tenemos claro que incluir una opinión puede derivar en una distorsión del hecho que se está narrando.</p>
                  <p>Para evitar que un periodista se salte alguno de estos requisitos, todos nuestros contenidos pasan por hasta tres filtros (correctores, coordinadores y mesa de edición) en los que nos aseguramos de que lo publicado cumpla con los estándares informativos arriba señalados, exigencia acorde a un medio de nuestra envergadura.</p>
                  <p>En caso de no poder cumplir con alguno de los pasos que forman parte de la verificación del contenido, se opta por no publicar la nota hasta que exista la plena seguridad de que los datos consignados en el texto estén completamente corroborados.</p>
                  <p>A la vez, nuestras publicaciones cumplen con los estándares de <strong><a href="https://larepublica.pe/verificador/">Verificador</a></strong>, una iniciativa del grupo La República para combatir la desinformación en internet y miembro certificado de la International Fact-Checking Network (IFCN). Como medio comprometido con la lucha contra este flagelo, es obligación estar a la altura de los parámetros.</p>
                </div>

                <button className={style['accordion']} id="sticky-fsi" onClick={openMobil}>Fuentes sin identificación 
                  
                </button>
                <div className={style['panel']}>
                  <h2>Fuentes sin identificación</h2>
                  <p>Toda nota debe estar sustentada con fuentes confiables. No obstante, se respetará la decisión de quienes de buena fe brindan una información a nuestros periodistas y, encontrándose en situación de vulnerabilidad, optan por mantenerse en el anonimato para evitar reacciones o represalias.</p>
                  <p>Ante una situación de esta naturaleza, el periodista puede manejar algunas opciones: busca otras fuentes que refuercen la información que se está trabajando y que sí puedan ser identificadas; o negociar con la fuente original a fin de que se pueda darle un alcance más exacto al lector (mencionando la dependencia o círculo al que pertenece, por ejemplo), aunque sea parcialmente, para reforzar la confiabilidad.</p>
                </div>

                <button className={style['accordion']} id="sticky-pdc" onClick={openMobil}>Política de correcciones </button>
                <div className={style['panel']}>
                  <h2>Política de correcciones</h2>
                  <ol>
                    <li>
                      <h6 className={style['politics__list--title']}>Rectificación de información</h6>
                      <p>
                      Cualquier usuario puede solicitar a La República la rectificación de una información que considere está afectando su honor y reputación, debiendo ser esta petición debidamente sustentada y documentada. La misma se puede hacer en cualquier momento.
                      </p>
                      <p>
                      Para este fin, el usuario debe escribir al correo electrónico <strong><a href="mailto:mesadigital@glr.pe?subject=Solicitud de corrección&body=Buen día:" rel="noopener noreferrer" target="_blank">mesadigital@glr.pe</a></strong>
                      </p>
                      <p>
                      Las correcciones de fondo serán explicadas en letra cursiva al final del artículo.
                      </p>
                    </li>
                    <li>
                      <h6 className={style['politics__list--title']}>Remoción de información</h6>
                      <p>En caso de que el artículo deba ser removido de nuestro sitio, se dejará una explicación en este apartado (es decir, en el lugar en donde estaba la nota) junto al titular con el que fue compartido en redes sociales.</p>
                      <p>
                      Al igual que la rectificación de una información, el usuario que solicite la remoción total de un artículo publicado en nuestro sitio, también deberá escribir al correo electrónico  <strong><a href="mailto:mesadigital@glr.pe?subject=Solicitud de corrección&body=Buen día:" rel="noopener noreferrer" target="_blank">mesadigital@glr.pe</a></strong>
                      </p>
                    </li>
                  </ol>
                </div>

                <button className={style['accordion']} id="sticky-cd" onClick={openMobil}>Información del usuario</button>
                <div className={style['panel']}>
                  <h2>Información del usuario</h2> 
                  <ol>
                    <li>
                      <h6 className={style['politics__list--title']}>Almacenamiento de información del usuario</h6>
                      <p>
                      En nuestro sitio contamos con un único formulario para la suscripción de usuarios a nuestros diversos boletines digitales <a href="https://larepublica.pe/newsletter/" rel="noopener noreferrer" target="_blank">(https://larepublica.pe/newsletter/)</a> Para tal fin, el usuario interesado deberá brindar la siguiente información: nombres, apellidos, DNI, correo electrónico, celular y sexo.
                      </p>
                    </li>
                    <li>
                      <h6 className={style['politics__list--title']}>Fines de almacenamiento de información del usuario</h6>
                      <p>La finalidad de esta información requerida es para 1) la identificación del usuario, 2) utilizar los canales de comunicación por el que el usuario recibirá la información de su interés y 3) brindar otro tipo de información complementaria a su suscripción que podría ser de su interés.</p>
                    </li>
                    <li>
                      <h6 className={style['politics__list--title']}>Confidencialidad de información del usuario</h6>
                      <p>La información personal del usuario suscrito a nuestro sitio será protegida con altos estándares de seguridad cumpliendo las exigencias legales vigentes en el Perú para evitar su alteración, pérdida y uso no autorizado.</p>
                      <p>La República no transmite, divulga o proporciona la información personal registrada en nuestra base de datos a terceros, salvo una autorización expresa del usuario.</p>
                    </li>
                    <li>
                      <h6 className={style['politics__list--title']}>Actualización y/o eliminación de información del usuario</h6>
                      <p>El usuario que desee actualizar parte de su información personal registrada o la eliminación total de esta de nuestra base de datos, deberá escribir al correo electrónico mesadigital@glr.pe especificando qué acción desee que se realice.</p>
                    </li>
                  </ol>
                  <h6>Nota:</h6>
                  <p>Es importante recalcar que nuestro sitio no cuenta con ningún otro formulario que solicite información personal del usuario. Nuestros artículos se pueden compartir directamente a través de Facebook, Twitter, WhatsApp sin que el usuario tenga que registrarse o brindar algún tipo de información. </p>
                </div>

                <button className={style['accordion']} id="sticky-rv" onClick={openMobil}>Retroalimentación viable </button>
                <div className={style['panel']}>
                  <h2>Retroalimentación viable</h2>
                  <p>La República es un medio abierto a recibir comentarios y críticas constructivas en pro de la constante mejora de la difusión de información. Tanto en la versión impresa como en la digital se da opción a nuestros lectores para que puedan opinar sobre el contenido publicado y/o la coyuntura nacional e internacional.</p>
                  <p>Los feedback se reciben de forma libre tanto a través del correo electrónico <strong><a href="mailto:cartas@glr.pe?subject=Feedback&body=Buen día:" rel="noopener noreferrer" target="_blank">cartas@glr.pe</a></strong> como en nuestras redes sociales: <strong><a href="https://www.facebook.com/larepublicape/" target="_blank" rel="nofollow noopener noreferrer">Facebook</a></strong>, <strong><a href="https://twitter.com/larepublica_pe" target="_blank" rel="nofollow noopener noreferrer">Twitter</a></strong>, <strong><a href="https://www.youtube.com/user/larepublicaweb2" target="_blank" rel="nofollow noopener noreferrer">YouTube</a></strong>, <strong><a href="https://www.instagram.com/larepublica_pe/" target="_blank" rel="nofollow noopener noreferrer">Instagram</a></strong> y <strong><a href="https://api.whatsapp.com/send?phone=+51924817399&amp;text=Buen día," target="_blank" rel="nofollow noopener noreferrer">WhatsApp</a></strong>.</p>
                  <p>Hay que decir que, si bien existe apertura para la retroalimentación, esta debe ser respetuosa de las formas y el fondo, no permitiéndose insultos, calumnias o difamaciones ni contra la plana periodística ni contra ninguna otra persona.</p>
                </div>
                
                <button className={style['accordion']} id="sticky-epbc" onClick={openMobil}>Ecommerce: Perú Bazar | Cuponidad </button>

                <div className={style['panel']}>
                  <h2>Ecommerce: Perú Bazar | Cuponidad</h2> 
                  <h3 style={{color: "#ff0102", margin: "40px 0 10px", fontSize: "24px"}}>Perú Bazar</h3>
                  <h3>Propósito:</h3> 
                  <p>Perú Bazar es un e-Commerce (comercio electrónico mediante internet) dedicado a la venta de productos para el hogar. </p>
                  <h4>Servicio</h4>
                  <p>Ofrecemos artículos en las categorías de cocina, libros, accesorios domésticos, salud de las personas y también contamos con secciones en las que hay utensilios de las marcas de nuestros proveedores como Record, Facusa y Donna. Parte de nuestro servicio es realizar entregas a domicilio en Lima Metropolitana y el Callao. También realizamos envíos a provincias. </p>
                  <h4>Catálogo web:</h4>
                  <p><a href="https://perubazar.pe/" target="_blank" rel="nofollow noopener noreferrer">https://perubazar.pe/</a></p>
                  <h4>Facebook:</h4>
                  <p><a href="https://www.facebook.com/PeruBazarGLR" target="_blank" rel="nofollow noopener noreferrer">https://www.facebook.com/PeruBazarGLR</a></p>
                  <h4>Instagram:</h4>
                  <p><a href="https://www.instagram.com/perubazar.pe/" target="_blank" rel="nofollow noopener noreferrer">https://www.instagram.com/perubazar.pe/</a></p>
                  <p>Los horarios de atención mediante la vía telefónica, WhatsApp y correo electrónico son:</p>
                  <p>Lunes a viernes: 9 hrs. a 18:45 hrs.</p>
                  <p>Sábado: de 9 hrs. a 13:00 hrs. </p>
                  <h4>Contacto:</h4>
                  <p>WhatsApp para clientes: <strong><a href="https://api.whatsapp.com/send?phone=+51993587571&amp;text=Buen día," rel="noopener noreferrer" target="_blank">993 587 571</a></strong></p>
                  <p>Correo electrónico: <strong><a href="mailto:perubazar@glr.pe?subject=Comentarios o denuncias&body=Buen día:" rel="noopener noreferrer" target="_blank">perubazar@glr.pe</a></strong></p>    
                  <p>Personas que atienden los pedidos de nuestros clientes:</p>
                  <p>Jovana Castañeda</p>
                  <p>Kharimy Segura</p>

                  <h3 style={{color: "#ff0102", margin: "40px 0 10px", fontSize: "24px"}}>Cuponidad</h3>
                  <h3>Propósito:</h3> 
                  <p>Cuponidad es un e-Commerce (comercio electrónico mediante internet) del Grupo La República Publicaciones S.A. que ofrece a precios extraordinarios a todas las regiones del Perú, productos y servicios, en diferentes categorías: entretenimiento, restaurantes, servicios, viajes, belleza, productos, etc. </p>
                  <h4>Servicio</h4>
                  <p>Tenemos las mejores ofertas para todos los clientes del Grupo La República Publicaciones. Los clientes pueden acceder inmediatamente al producto o servicio de cuponidad.pe una vez cancelado mediante cualquier medio de pago. Contamos con todas las medidas de seguridad para las transacciones.</p>
                  <h4>Catálogo web:</h4>
                  <p><a href="https://cuponidad.pe/" target="_blank" rel="nofollow noopener noreferrer">https://cuponidad.pe/</a></p>
                  <h4>Facebook</h4>
                  <p><a href="https://www.facebook.com/CuponidadPeru" target="_blank" rel="nofollow noopener noreferrer">https://www.facebook.com/CuponidadPeru</a></p>
                  <h4>Instagram</h4>
                  <p><a href="https://www.instagram.com/cuponidad.pe/" target="_blank" rel="nofollow noopener noreferrer">https://www.instagram.com/cuponidad.pe/</a></p>
                  <p>Los horarios de atención mediante la línea telefónica, WhatsApp y el correo electrónico son:</p>
                  <p>Lunes a sábado de 9am a 7pm</p>
                  <p>Domingos de 9am a 5pm.</p>
                  <p>WhatsApp para clientes: <strong><a href="https://api.whatsapp.com/send?phone=+51997580793&amp;text=Buen día," rel="noopener noreferrer" target="_blank">997 580 793</a></strong></p>
                  <p>Correo electrónico: <strong><a href="mailto:soporte@cuponidad.pe?subject=Comentarios o denuncias&body=Buen día:" rel="noopener noreferrer" target="_blank">soporte@cuponidad.pe</a></strong></p>    
                  <p>Personas que atienden los pedidos de nuestros clientes:</p>
                  <p>Steffi Centeno</p>
                  <p>Karol Naula</p>           
                  <p><span style={{fontSize: "19px", color: "#ff0102"}}>Importante: </span>* Hay descuentos especiales por las promociones que aparecen en los diarios La República, El Popular y Líbero. Escriba, haciendo referencia a estas ofertas al Whatsapp <strong><a href="https://api.whatsapp.com/send?phone=+51970302093&amp;text=Buen día," rel="noopener noreferrer" target="_blank">970 302 093</a></strong></p>
                </div>
            
                <button className={style['accordion']} id="sticky-cp" onClick={openMobil}>Comercial y publicidad </button>

                <div className={style['panel']}>
                  <h2>Comercial y publicidad</h2> 
                  <h3>Propósito</h3>
                  <p>Contactar a algún representante del grupo editorial La República Publicaciones, en las regiones del país, para la publicación de contenidos comerciales o publicitarios en cualquiera de sus plataformas.</p>    
                  <h3>Contactos</h3>
                  <h4>Lima, Centro y Oriente</h4>
                  <p>
                    <span>Agustín Asenjo</span> 
                    <br/><a href="https://api.whatsapp.com/send?phone=+51986923755&amp;text=Buen día," rel="noopener noreferrer" target="_blank">986 923 755</a>
                    <br/><a href="mailto:agustin.asenjo@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">agustin.asenjo@glr.pe</a>
                  </p>
                  <h4>Norte</h4>
                  <p>
                    <span>Juan Vallejos</span> 
                    <br/><a href="https://api.whatsapp.com/send?phone=+51979724456&amp;text=Buen día," rel="noopener noreferrer" target="_blank">979 724 456</a> 
                    <br/><a href="mailto:juan.vallejos@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">juan.vallejos@glr.pe</a>
                  </p>
                  <h4>Sur</h4>
                  <p>
                    <span>Julissa Lojas</span> 
                    <br/><a href="https://api.whatsapp.com/send?phone=+51979724698&amp;text=Buen día," rel="noopener noreferrer" target="_blank">979 724 698</a>
                    <br/><a href="mailto:julissa.lojas@glr.pe?subject=Consulta - Grupo editorial&body=Buen día:" rel="noopener noreferrer" target="_blank">julissa.lojas@glr.pe</a>
                  </p>
                </div>

                <button className={style['accordion']} id="sticky-cd" onClick={openMobil}>Contacto y denuncias</button>
                <div className={style['panel']}>
                  <h2>Contacto y denuncias</h2> 
                  <p>El lector puede enviar sus comentarios o denuncias desde cualquier lugar del país o del mundo. Además del texto puede adjuntar fotografías, videos u otro tipo de evidencia a la siguiente dirección electrónica: <strong><a href="mailto:cartas@glr.pe?subject=Comentarios o denuncias&body=Buen día:" rel="noopener noreferrer" target="_blank">cartas@glr.pe</a></strong>. El remitente debe incluir su nombre y apellidos completos y el número de DNI.</p>    
                  <p>Nuestros periodistas realizarán las verificaciones correspondientes.</p>
                  <p>Chatea en WhatsApp con <strong><a href="https://api.whatsapp.com/send?phone=+51924817399&amp;text=Buen día," rel="noopener noreferrer" target="_blank">+51 924 817 399</a></strong></p>
                </div>
            </div>
        </>
    );
};

export {MobilContent};
