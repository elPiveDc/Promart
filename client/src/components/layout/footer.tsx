export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top-orange">
            <div className="container">
                <div className="row">

                    <div className="col-md-3 mb-3">
                        <h6 className="fw-bold">Contáctanos</h6>
                        <ul className="list-unstyled small footer-links">
                            <li>Chatea con nosotros</li>
                            <li>Ir a Whatsapp</li>
                            <li>
                                Escríbenos:{" "}
                                <span style={{ textDecoration: "underline" }}>
                                    servicioalcliente@promart.pe
                                </span>
                            </li>
                            <li>Llámanos: 999 999 999</li>
                            <li>Centro de Servicio al Cliente (01) 619-4810</li>
                            <li>De lunes a domingo</li>
                            <li>
                                <i className="bi bi-facebook me-2"></i>
                                <i className="bi bi-instagram me-2"></i>
                                <i className="bi bi-youtube"></i>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-3">
                        <h6 className="fw-bold">Secciones destacadas</h6>
                        <ul className="list-unstyled small footer-links">
                            <li>Venta empresa</li>
                            <li>Club Pro</li>
                            <li>Nuestro blog</li>
                            <li>Cyber Wow</li>
                            <li>Días Promart</li>
                            <li>Black Friday</li>
                            <li>Cyber Monday</li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-3">
                        <h6 className="fw-bold">Sobre Promart</h6>
                        <ul className="list-unstyled small footer-links">
                            <li>Nosotros</li>
                            <li>Preguntas frecuentes</li>
                            <li>Contáctanos</li>
                            <li>Nuestras tiendas</li>
                            <li>Nuestros servicios</li>
                            <li>Trabaja con nosotros</li>
                            <li>Vende con nosotros</li>
                            <li>Canal de ética</li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-3">
                        <h6 className="fw-bold">Legales</h6>
                        <ul className="list-unstyled small footer-links">
                            <li>Términos y condiciones</li>
                            <li>Política de cambios y devoluciones</li>
                            <li>Derechos ARCO</li>
                            <li>Política de cookies</li>
                            <li>Política de privacidad</li>
                            <li>Comprobantes electrónicos</li>
                            <li>Libro de reclamaciones</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
