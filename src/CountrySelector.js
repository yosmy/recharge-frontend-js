// @refresh reset

import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {CountryPicker} from "@yosmy/ui";
import {useService} from "@yosmy/service";
import {CountryPlaceholder} from "./Country";

const CountrySelector = React.memo(({
    templates,
    favorites,
    onSelect
}) => {
    const [items, setItems] = useState(null);
    const [selected, setSelected] = useState();

    const api = useService("api");

    useEffect(() => {
        (async () => {
            const items = await api.collectCountries()

            setItems(items)
        })()
    }, [])

    return <templates.layout
        input={items === null
            ? <CountryPlaceholder />
            : <CountryPicker
                messages={{
                    select: "País"
                }}
                country={selected}
                items={{
                    initial: favorites,
                    all: items
                }}
                onSelect={(country) => {
                    setSelected(country);

                    onSelect(country)
                }}
            />}
    />;
}, () => {
    return true;
});

CountrySelector.propTypes = {
    templates: PropTypes.shape({
        layout: PropTypes.func.isRequired, // ({input}),
    }).isRequired,
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired, // (country)
};

export default CountrySelector;