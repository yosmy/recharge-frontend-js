// @refresh reset

import React from "react";
import PropTypes from "prop-types";
import {Container, LinePlaceholder, Text} from "@yosmy/ui";

const Amount = React.memo(({
    send, receive, currency, ...props
}) => {
    return <Container
        {...props}
    >
        <Text>
            Envía {send} USD
        </Text>
        <Text type="secondary">
            Recibe {receive} {currency}
        </Text>
    </Container>
}, () => {
    return true;
});

Amount.propTypes = {
    send: PropTypes.number.isRequired,
    receive: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

const AmountPlaceholder = React.memo(({
    ...props
}) => {
    return <Container
        flow="column"
        {...props}
    >
        <LinePlaceholder
            width={50}
        />
        <LinePlaceholder
            width={70}
            margin={{
                top: 0.5
            }}
        />
    </Container>
}, () => {
    return true;
});

export default Amount;

export {
    AmountPlaceholder
}