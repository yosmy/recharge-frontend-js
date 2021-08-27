import React from 'react';
import {EmptyLayout} from "@yosmy/ui";
import {ServiceProvider} from "@yosmy/service";

import CountrySelector from '../CountrySelector';

export default {
    title: 'CountrySelector',
    component: CountrySelector,
};

const common = {
    templates: {
        layout: ({input}) => {
            return <EmptyLayout>
                {input}
            </EmptyLayout>
        },
    },
    favorites: ["CU", "US"],
    onSelect: (country) => {
        console.log(country)
    }
};

const Template = () => {
    return <ServiceProvider services={[
        {id: "api", value: {
            collectCountries: async () => {
                return new Promise(function(resolve) {
                    setTimeout(() => {
                        resolve([
                            "BR", "CO", "CU", "EC", "US"
                        ]);
                    }, 1000);
                });
            }
        }},
    ]}>
        <CountrySelector
            {...common}
        />
    </ServiceProvider>
};

export const Default = Template.bind({});

