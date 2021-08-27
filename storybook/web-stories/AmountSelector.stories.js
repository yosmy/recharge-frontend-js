import React from 'react';
import {EmptyLayout} from "@yosmy/ui";
import {ServiceProvider} from "@yosmy/service";

import AmountSelector from '../AmountSelector';

export default {
    title: 'AmountSelector',
    component: AmountSelector,
};

const common = {
    templates: {
        layout: ({input}) => {
            return <EmptyLayout>
                {input}
            </EmptyLayout>
        },
    },
    onSelect: (amount) => {
        console.log(amount)
    }
};

const Template = () => {
    return <ServiceProvider services={[
        {id: "api", value: {
            collectAmounts: async () => {
                return new Promise(function(resolve) {
                    setTimeout(() => {
                        resolve([
                            {
                                product: "GY_DC_TopUp",
                                send: 5,
                                receive: 1030,
                                currency: "GYD"
                            },
                            {
                                product: "GY_DC_TopUp",
                                send: 10,
                                receive: 2060,
                                currency: "GYD"
                            },
                        ]);
                    }, 1000);
                });
            }
        }},
    ]}>
        <AmountSelector
            {...common}
        />
    </ServiceProvider>
};

export const Default = Template.bind({});

