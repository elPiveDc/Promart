export default function PromoCarousel() {
    return (
        <div className="container my-4">
            <div
                id="promoCarousel"
                className="carousel slide shadow-sm"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://www.hilti.com.pe/content/hilti/W2/PE/es/business/news/offers/_jcr_content/cta/image.coreimg.png/1746729087962/oferta-image.png"
                            className="d-block w-100 carousel-img"
                            alt="Promo 1"
                        />
                    </div>
                </div>

                <button
                    className="carousel-control-prev custom-vertical-control"
                    type="button"
                    data-bs-target="#promoCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" />
                </button>

                <button
                    className="carousel-control-next custom-vertical-control"
                    type="button"
                    data-bs-target="#promoCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" />
                </button>
            </div>
        </div>
    );
}
