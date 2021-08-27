// @refresh reset

import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Container, Icon} from "@yosmy/ui";
import {useService} from "@yosmy/service";
import Provider, {ProviderPlaceholder} from "./Provider"

const ProviderSelector = React.memo(({
    templates,
    onSelect
}) => {
    const [items, setItems] = useState(null);
    const [selected, setSelected] = useState();

    const icons = useService("icons");
    const api = useService("api");

    useEffect(() => {
        (async () => {
            const items = await api.collectProviders()

            setItems(items)
        })()
    }, [])

    return <templates.layout
        input={items === null
            ? <Container
                flow="column"
            >
                <ProviderPlaceholder />
                <ProviderPlaceholder
                    margin={{
                        top: 1
                    }}
                />
            </Container>
            : items.map((item) => {
                const {code, name, logo} = item;

                return <Container
                    key={code}
                    flow="row"
                    align={{
                        main: "flex-start",
                        cross: "center"
                    }}
                    margin={{
                        top: 1
                    }}
                    onClick={() => {
                        setSelected(code);

                        onSelect(item);
                    }}
                >
                    <Icon
                        data={code === selected
                            ? icons.status.selected
                            : icons.status.unselected
                        }
                    />
                    <Provider
                        name={name}
                        logo={logo}
                        margin={{
                            left: 1
                        }}
                    />
                </Container>
            })}
    />;
}, () => {
    return true;
});

ProviderSelector.propTypes = {
    templates: PropTypes.shape({
        layout: PropTypes.func.isRequired, // ({input}),
    }),
    onSelect: PropTypes.func.isRequired, // (provider)
};

export default ProviderSelector;