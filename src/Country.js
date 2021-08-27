// @refresh reset

import React from "react";
import PropTypes from "prop-types";
import {Container, Country as BaseCountry, LinePlaceholder} from "@yosmy/ui";
import {resolveName as resolveCountryName} from "@yosmy/country";

const Country = React.memo(({
    code, ...props
}) => {
    return <BaseCountry
        code={code}
        name={resolveCountryName(code)}
        {...props} // key
    />
}, () => {
    return true;
});

Country.propTypes = {
    code: PropTypes.string.isRequired,
};

const CountryPlaceholder = React.memo(({
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

export default Country;

export {
    CountryPlaceholder
}