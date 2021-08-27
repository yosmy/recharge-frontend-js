import React from 'react';

import Country from '../Country';

export default {
    title: 'Country',
    component: Country,
};

const common = {
    code: "CU",
    name: "Cuba"
};

const Template = () => {
    return <Country
        {...common}
    />
};

export const Default = Template.bind({});

