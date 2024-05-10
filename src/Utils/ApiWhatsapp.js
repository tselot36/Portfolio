import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function ApiWhatsapp() {
    return (
        <>
            <ReactWhatsappButton
                countryCode="251"
                phoneNumber="936679199"
                animated
                callback={function noRefCheck() { }}
                style={{
                    marginBottom: "70px",
                    size: "500px"
                }}
            />
        </>
    )
}

export default ApiWhatsapp;