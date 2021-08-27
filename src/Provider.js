// @refresh reset

import React from "react";
import PropTypes from "prop-types";
import {Container, Image, LinePlaceholder, Text} from "@yosmy/ui";

const Provider = React.memo(({
    name, logo, ...props
}) => {
    return <Container
        flow="row"
        align={{
            main: "flex-start",
            cross: "center"
        }}
        {...props}
    >
        <Image
            width={logo.width}
            source={logo.data}
        />
        <Text
            margin={{
                left: 1
            }}
        >
            {name}
        </Text>
    </Container>
}, () => {
    return true;
});

Provider.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.shape({
        data: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }).isRequired,
};

const ProviderPlaceholder = React.memo(({
    ...props
}) => {
    return <Container
        flow="row"
        align={{
            main: "flex-start",
            cross: "center"
        }}
        {...props}
    >
        <LinePlaceholder
            width={10}
        />
        <LinePlaceholder
            width={50}
            margin={{
                left: 1
            }}
        />
    </Container>
}, () => {
    return true;
});

export default Provider;

export {
    ProviderPlaceholder
}