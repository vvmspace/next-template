import React from "react";

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });


export default props => {
    const { event } = props;
    const jevent = {
        "@context": "https://www.schema.org",
        "@type": "Event",
        name: event.name,
        startDate: event.date,
        endDate: new Date(event.end_date).toISOString().split('T')[0],
        location: {
            "@type": "Place",
            name: event.venue.name,
            sameAs: `https://concert.moscow/${event.venue.alias}`,
            address: {
                streetAddress: event.venue.address,
                addressLocality: 'Moscow',
                addressRegion: 'Moscow region'
            },
        },
        offers: {
            "@type": "Offer",
            description: "без наценки и сервисного сбора",
            url: `https://concert.moscow/concert/${event.alias || event.uuid}`,
            price: event.min_price,
            priceCurrency : "RUB",
            availability: event.has_eticket && (new Date() < new Date(event.date)),
            validFrom: new Date(event.updatedAt).toISOString(),
        },
        url: `https://concert.moscow/concert/${event.alias || event.uuid}`,
        description: `Билеты без наценки и сервисного сбора от ${event.min_price} ₽`
    }

    if (event.image) {
        jevent.image = event.image;
    }

    return (renderHTML(`<script type='application/ld+json'>${JSON.stringify(jevent)}</script>`));
}
