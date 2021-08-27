// @refresh reset

import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Container, Icon} from "@yosmy/ui";
import {useService} from "@yosmy/service";
import Amount, {AmountPlaceholder} from "./Amount"

const AmountSelector = React.memo(({
    templates,
    provider,
    onSelect
}) => {
    const [items, setItems] = useState(null);
    const [selected, setSelected] = useState();

    const icons = useService("icons");
    const api = useService("api");

    useEffect(() => {
        (async () => {
            const items = await api.collectAmounts(provider)

            setItems(items)
        })()
    }, [])

    return <templates.layout
        input={items === null
            ? <Container
                flow="column"
            >
                <AmountPlaceholder />
                <AmountPlaceholder
                    margin={{
                        top: 1
                    }}
                />
            </Container>
            : items.map((item) => {
                const {send, receive, currency} = item;

                return <Container
                    key={send}
                    flow="row"
                    align={{
                        main: "flex-start",
                        cross: "center"
                    }}
                    margin={{
                        top: 1
                    }}
                    onClick={() => {
                        setSelected(send);

                        onSelect(item);
                    }}
                >
                    <Icon
                        data={send === selected
                            ? icons.status.selected
                            : icons.status.unselected
                        }
                    />
                    <Amount
                        send={send}
                        receive={receive}
                        currency={currency}
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

AmountSelector.propTypes = {
    templates: PropTypes.shape({
        layout: PropTypes.func.isRequired, // ({input}),
    }),
    provider: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired, // (amount)
};

export default AmountSelector;