export default function OfferBanner() {
    return (
        <section className="bg-danger text-white py-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-5 text-start">
                        <h3 className="fw-bold mb-3">¡Gran Oferta Limitada!</h3>
                        <p className="mb-4">
                            Aprovecha descuentos especiales antes que termine el tiempo
                        </p>
                        <div className="fw-bold fs-5">⏰ 02:15:37</div>
                    </div>

                    <div className="col-md-7">
                        <div className="d-flex justify-content-center gap-4 flex-wrap">
                            <div className="bg-white rounded shadow-sm p-3 text-dark offer-card">
                                <img
                                    src="https://promart.vteximg.com.br/arquivos/ids/9687438-380-380/imageUrl_2.webp?v=638990427041030000"
                                    alt="Celular Samsung Galaxy A26 5G"
                                    className="offer-img mb-3"
                                />
                                <h6 className="fw-bold mb-1">Celular Samsung Galaxy A26 5G</h6>
                                <p className="small mb-1">Negro 128GB 6GB RAM</p>
                                <p className="text-muted mb-1">
                                    <s>S/. 1099.00</s>
                                </p>
                                <p className="fw-bold" style={{ color: "#ff6600" }}>
                                    S/. 749.00
                                </p>
                            </div>

                            <div className="bg-white rounded shadow-sm p-3 text-dark offer-card">
                                <img
                                    src="https://promart.vteximg.com.br/arquivos/ids/7893305-380-380/135590_10.webp?v=638461357219600000"
                                    alt="Sombrilla terraza central"
                                    className="offer-img mb-3"
                                />
                                <h6 className="fw-bold mb-1">Sombrilla terraza central</h6>
                                <p className="small mb-1">Rectangular 200x300cm</p>
                                <p className="text-muted mb-1">
                                    <s>S/. 249.00</s>
                                </p>
                                <p className="fw-bold" style={{ color: "#ff6600" }}>
                                    S/. 149.00
                                </p>
                            </div>

                            <div className="bg-white rounded shadow-sm p-3 text-dark offer-card">
                                <img
                                    src="https://promart.vteximg.com.br/arquivos/ids/9124714-380-380/145183.webp?v=638884738504630000"
                                    alt="Ropero Lua 7 Puertas 2 Cajones"
                                    className="offer-img mb-3"
                                />
                                <h6 className="fw-bold mb-1">Ropero Lua 7 Puertas 2 Cajones</h6>
                                <p className="small mb-1">MDP Blanco Orange</p>
                                <p className="text-muted mb-1">
                                    <s>S/. 839.00</s>
                                </p>
                                <p className="fw-bold" style={{ color: "#ff6600" }}>
                                    S/. 799.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
